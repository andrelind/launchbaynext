'use client';

import type { RuleSet } from 'lbn-core/src';
import type { GameData, ManifestData } from 'lbn-core/src/types';
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { trpc } from './_trpc/client';

type RulesetData = {
    gameData: GameData | null;
    manifestData: ManifestData | null;
    loading: boolean;
};

const emptyData: RulesetData = { gameData: null, manifestData: null, loading: true };

type GameDataContextType = {
    data: Record<RuleSet, RulesetData>;
    load: (ruleset: RuleSet) => void;
};

const GameDataContext = createContext<GameDataContextType>({
    data: { xwa: emptyData, legacy: emptyData },
    load: () => { },
});

/** Game data for a ruleset, which is fetched the first time it's asked for. */
export const useGameData = (ruleset: RuleSet = 'xwa') => {
    const { data, load } = useContext(GameDataContext);
    const key = ruleset === 'legacy' ? 'legacy' : 'xwa';

    useEffect(() => {
        load(key);
    }, [key, load]);

    return data[key];
};

export function GameDataProvider({ children }: { children: ReactNode }) {
    const [data, setData] = useState<Record<RuleSet, RulesetData>>({ xwa: emptyData, legacy: emptyData });
    const requested = useRef(new Set<RuleSet>());

    const load = useCallback(async (ruleset: RuleSet) => {
        if (requested.current.has(ruleset)) {
            return;
        }
        requested.current.add(ruleset);

        let loaded: Pick<RulesetData, 'gameData' | 'manifestData'> = { gameData: null, manifestData: null };
        try {
            const [gameData, manifestData] = await Promise.all([
                trpc.gameData.all.query({ ruleset }),
                trpc.gameData.manifest.query({ ruleset }),
            ]);
            loaded = { gameData, manifestData };
        } catch (err) {
            console.error(`Failed to fetch ${ruleset} game data:`, err);
        }
        setData(current => ({ ...current, [ruleset]: { ...loaded, loading: false } }));
    }, []);

    return (
        <GameDataContext.Provider value={{ data, load }}>
            {children}
        </GameDataContext.Provider>
    );
}
