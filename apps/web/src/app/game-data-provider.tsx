'use client';

import type { GameData } from 'lbn-core/src/types';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { trpc } from './_trpc/client';

type GameDataContextType = {
    gameData: GameData | null;
    loading: boolean;
};

const GameDataContext = createContext<GameDataContextType>({
    gameData: null,
    loading: true,
});

export const useGameData = () => useContext(GameDataContext);

export function GameDataProvider({ children }: { children: ReactNode }) {
    const [gameData, setGameData] = useState<GameData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await trpc.gameData.all.query({ ruleset: 'xwa' });
                setGameData(data);
            } catch (err) {
                console.error('Failed to fetch game data:', err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <GameDataContext.Provider value={{ gameData, loading }}>
            {children}
        </GameDataContext.Provider>
    );
}
