import type { FactionKey, Format } from "lbn-core/src/types";

export type FilterType = FactionKey | Format;
export type SortingType =
    | 'Alphabetically'
    | 'Faction'
    | 'Points'
    | 'Wins'
    | 'Created Date'
    | 'Format'
    | 'Custom';
export type SortDirectionType = 'Ascending' | 'Descending';

export type CollectionState = {
    expansions: { [s: string]: number };
    setExpansions: (e: { [s: string]: number }) => void;

    pilots: { [s: string]: number };
    setPilots: (e: { [s: string]: number }) => void;

    ships: { [s: string]: number };
    setShips: (e: { [s: string]: number }) => void;

    upgrades: { [s: string]: number };
    setUpgrades: (e: { [s: string]: number }) => void;
};
