import { Transition } from '@headlessui/react';
import { conditions, pilots, upgrades } from 'lbn-core/src/assets/xwa';
import { keyFromFaction } from 'lbn-core/src/helpers/convert';
import { factions, slotKeys } from 'lbn-core/src/helpers/enums';
import { loadShip2, type TShip } from 'lbn-core/src/helpers/loading';
import type { ShipType, UpgradeBase } from 'lbn-core/src/types';
import { type FC, useEffect, useState } from 'react';
import { Modal } from '../modal';
import PilotComponent from '../pilot';
import { ShipTypeComponent } from '../ship-type';
import { SlimPilot } from '../slim/pilot';
import { SlimShip } from '../slim/ship';
import { SlimUpgrade } from '../slim/upgrade';
import UpgradeComponent from '../upgrade';

type Props = {
  needle?: string;
};

enum TabOption {
  All = 'All',
  Ships = 'Ships',
  Pilots = 'Pilots',
  Upgrades = 'Upgrades',
}

const options = [
  TabOption.All,
  TabOption.Ships,
  TabOption.Pilots,
  TabOption.Upgrades,
];

export const SearchComponent: FC<Props> = ({ needle }) => {
  const [tab, setTab] = useState<TabOption>(TabOption.All);
  const [filteredShips, setFilteredShips] = useState<ShipType[]>([]);
  const [filteredPilots, setFilteredPilots] = useState<TShip[]>([]);
  const [filteredUpgrades, setFilteredUpgrades] = useState<UpgradeBase[]>([]);

  const [showShip, setShowShip] = useState<ShipType>();
  const [showPilot, setShowPilot] = useState<TShip>();
  const [showUpgrade, setShowUpgrade] = useState<UpgradeBase>();
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const refreshData = () => {
    const fShips: ShipType[] = [];
    const fPilots: TShip[] = [];
    const fUpgrades: UpgradeBase[] = [];

    if (!needle || needle.length < 3) {
      setFilteredShips([]);
      setFilteredPilots([]);
      setFilteredUpgrades([]);
      return null;
    }

    const lc = needle.toLowerCase();

    factions.forEach((faction) => {
      Object.keys(pilots[faction]).forEach((key) => {
        const ship: ShipType = pilots[faction][key];
        if (ship.name.toLowerCase().includes(lc)) {
          fShips.push(ship);
        }

        const filtered = ship.pilots.filter(
          (p) =>
            p.name.toLowerCase().includes(lc) ||
            p.ability?.toLowerCase().includes(lc) ||
            ship.ability?.name.toLowerCase().includes(lc) ||
            ship.ability?.text.toLowerCase().includes(lc)
        );
        if (filtered.length > 0) {
          fPilots.push(
            ...filtered.map((pilot) =>
              Object.assign(
                {},
                loadShip2(
                  {
                    id: pilot.xws,
                    ship: ship.xws,
                    points: pilot.cost,
                    upgrades: {},
                  },
                  {
                    faction: keyFromFaction(faction),
                    format: 'Extended',
                    ruleset: 'amg',
                  }
                )
              )
            )
          );
        }
      });
    });

    slotKeys.forEach((slot) => {
      upgrades[slot].forEach((upgrade) => {
        if (upgrade.sides[0].title.toLowerCase().indexOf(lc) >= 0) {
          fUpgrades.push(upgrade);
        } else if (upgrade.sides[0].conditions) {
          upgrade.sides[0].conditions.forEach((x) => {
            const condition = conditions.find((c) => c.xws === x);
            if (condition && condition.name.toLowerCase().indexOf(lc) >= 0) {
              fUpgrades.push(upgrade);
            }
          });
        }
      });
    });

    setFilteredShips(fShips);
    setFilteredPilots(fPilots);
    setFilteredUpgrades(fUpgrades);
  };

  useEffect(() => {
    refreshData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [needle]);

  if (!needle || needle.length < 3) {
    return null;
  }

  const selectedTab = 'border-lbnred text-lbnred';
  const notSelectedTab =
    'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300';

  const getCount = (o: TabOption) => {
    switch (o) {
      case TabOption.All:
        return (
          filteredShips.length + filteredPilots.length + filteredUpgrades.length
        );
      case TabOption.Ships:
        return filteredShips.length;
      case TabOption.Pilots:
        return filteredPilots.length;
      case TabOption.Upgrades:
        return filteredUpgrades.length;
    }
  };

  return (
    <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full focus:ring-lbnred focus:border-lbnred border-gray-300 rounded-md"
          value={tab}
          onChange={(e) => setTab(options[e.target.selectedIndex])}
        >
          {options.map((o) => (
            <option key={`${o}_mobile`}>{o}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex" aria-label="Tabs">
            {options.map((o) => (
              <button
                key={`${o}_desktop`}
                onClick={() => setTab(o)}
                className={`${tab === o ? selectedTab : notSelectedTab
                  } w-1/4 py-3 text-center border-b-2 font-medium text-xs`}
              >
                {o}
                <span className="font-normal">{` (${getCount(o)})`}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
      <ul className="max-h-96 overflow-auto py-3">
        {(tab === TabOption.All || tab === TabOption.Ships) &&
          filteredShips.map((s) => (
            <div
              onClick={(e) => {
                if (process.browser && window.innerWidth < 640) {
                  const rect = (
                    e.target as HTMLButtonElement
                  ).getBoundingClientRect();
                  setPos({ x: rect.x, y: rect.y });
                  setShowShip(s);
                }
              }}
              key={`${s.faction}_${s.xws}`}
              className="py-1 px-3 hover:bg-gray-100"
              onMouseEnter={(e) => {
                if (!process.browser || window.innerWidth < 640) {
                  return;
                }
                const rect = (
                  e.target as HTMLButtonElement
                ).getBoundingClientRect();
                setPos({ x: rect.x, y: rect.y });
                setShowShip(s);
              }}
              onMouseLeave={() => {
                if (!process.browser || window.innerWidth < 640) {
                  return;
                }
                setShowShip(undefined);
              }}
            >
              <SlimShip shipType={s} showFaction />
            </div>
          ))}
        {(tab === TabOption.All || tab === TabOption.Pilots) &&
          filteredPilots.map((s) => (
            <div
              onClick={(e) => {
                if (process.browser && window.innerWidth < 640) {
                  const rect = (
                    e.target as HTMLButtonElement
                  ).getBoundingClientRect();
                  setPos({ x: rect.x, y: rect.y });
                  setShowPilot(s);
                }
              }}
              key={`${s.faction}_${s.xws}_${s.pilot?.xws}`}
              className="py-1 px-3 hover:bg-gray-100"
              onMouseEnter={(e) => {
                if (!process.browser || window.innerWidth < 640) {
                  return;
                }
                const rect = (
                  e.target as HTMLButtonElement
                ).getBoundingClientRect();
                setPos({ x: rect.x, y: rect.y });
                setShowPilot(s);
              }}
              onMouseLeave={() => {
                if (!process.browser || window.innerWidth < 640) {
                  return;
                }
                setShowPilot(undefined);
              }}
            >
              <SlimPilot pilot={s.pilot} ship={s} hideStats showFaction />
            </div>
          ))}
        {(tab === TabOption.All || tab === TabOption.Upgrades) &&
          filteredUpgrades.map((s) => (
            <div
              onClick={(e) => {
                if (process.browser && window.innerWidth < 640) {
                  const rect = (
                    e.target as HTMLButtonElement
                  ).getBoundingClientRect();
                  setPos({ x: rect.x, y: rect.y });
                  setShowUpgrade(s);
                }
              }}
              key={s.xws}
              className="py-1 px-3 hover:bg-gray-100"
              onMouseEnter={(e) => {
                if (!process.browser || window.innerWidth < 640) {
                  return;
                }
                const rect = (
                  e.target as HTMLButtonElement
                ).getBoundingClientRect();
                setPos({ x: rect.x, y: rect.y });
                setShowUpgrade(s);
              }}
              onMouseLeave={() => {
                if (!process.browser || window.innerWidth < 640) {
                  return;
                }
                setShowUpgrade(undefined);
              }}
            >
              <SlimUpgrade
                key={s.xws}
                slot={s.sides[0].slots[0]}
                upgrade={{ ...s, finalCost: -1, available: 0 }}
                showFactions
              />
            </div>
          ))}
      </ul>

      <Transition
        show={
          (Boolean(showShip) || Boolean(showPilot) || Boolean(showUpgrade)) &&
          process.browser &&
          window.innerWidth >= 640
        }
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10 p-1 right-full mr-0.5"
        style={{ top: pos.y - 65 }}
      >
        {showShip && <ShipTypeComponent shipType={showShip} showFaction />}
        {showPilot && showPilot.pilot && (
          <PilotComponent
            pilot={showPilot.pilot}
            ship={showPilot}
            showFaction
          />
        )}
        {showUpgrade && (
          <UpgradeComponent
            upgrade={{ ...showUpgrade, finalCost: -1, available: 0 }}
          />
        )}
      </Transition>

      <Modal
        show={
          (Boolean(showShip) || Boolean(showPilot) || Boolean(showUpgrade)) &&
          process.browser &&
          window.innerWidth < 640
        }
        onDismiss={() => {
          setShowShip(undefined);
          setShowPilot(undefined);
          setShowUpgrade(undefined);
        }}
      >
        {showShip && <ShipTypeComponent shipType={showShip} showFaction />}
        {showPilot && showPilot.pilot && (
          <PilotComponent
            pilot={showPilot.pilot}
            ship={showPilot}
            showFaction
          />
        )}
        {showUpgrade && (
          <UpgradeComponent
            upgrade={{ ...showUpgrade, finalCost: -1, available: 0 }}
          />
        )}
      </Modal>
    </div>
  );
};
