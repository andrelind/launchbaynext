'use client';

import type { GameData, ManifestData } from 'lbn-core/src/types';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { trpc } from './_trpc/client';

type GameDataContextType = {
    gameData: GameData | null;
    manifestData: ManifestData | null;
    loading: boolean;
};

const GameDataContext = createContext<GameDataContextType>({
    gameData: null,
    manifestData: null,
    loading: true,
});

export const useGameData = () => useContext(GameDataContext);

export function GameDataProvider({ children }: { children: ReactNode }) {
    const [gameData, setGameData] = useState<GameData | null>(null);
    const [manifestData, setManifestData] = useState<ManifestData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const [data, manifest] = await Promise.all([
                    trpc.gameData.all.query({ ruleset: 'xwa' }),
                    trpc.gameData.manifest.query({ ruleset: 'xwa' }),
                ]);
                setGameData(data);
                setManifestData(manifest);
            } catch (err) {
                console.error('Failed to fetch game data:', err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <GameDataContext.Provider value={{ gameData, manifestData, loading }}>
            {children}
        </GameDataContext.Provider>
    );
}
