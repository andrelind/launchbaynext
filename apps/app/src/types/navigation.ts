import { NavigatorScreenParams } from '@react-navigation/native';
import { SourceKey } from 'lbn-core/src/sources';
import { FactionKey, Slot } from 'lbn-core/src/types';

export type ModalStackParams = {
  Tab: {};
};

export type OverviewStackParams = {
  Overview: undefined;
  Login: undefined;
  Account: undefined;
};

export type SelectStackParams = {
  SelectShip: { uid: string; shipXws?: string; pilotIndex?: number };
  SelectPilot: { uid: string; shipXws: string; pilotIndex?: number };
  SelectUpgrade: {
    uid: string;
    index: number;
    faction: FactionKey;
    slot: Slot;
    slotIndex: number;
  };
  SquadronSettings: { uid: string };
  Image: { url?: { uri?: string } };
};

export type ListStackParams = {
  Squadrons: undefined;
  Squadron: { uid: string };
  Pilot: { uid: string; pilotIndex: number; factionKey: FactionKey };
  MissingItems: { uid: string };
  SelectLoadout: {
    uid: string;
    index: number;
    faction: FactionKey;
    shipXws: string;
    pilotXws?: string;
  };

  SelectModal: NavigatorScreenParams<SelectStackParams>;
  Image: { url?: { uri?: string } };
};

export type DatabaseStackParams = {
  Database: undefined;
};

export type CounterStackParams = {
  Counter: undefined;
};

export type CollectionStackParams = {
  Collection: undefined;
  CollectionDetail: { sourceKey: SourceKey };
};
