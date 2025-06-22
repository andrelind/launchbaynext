'use client';

import { DocumentDuplicateIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { keyFromSlot } from 'lbn-core/src/helpers/convert';
import { exportAsTTS, exportAsText } from 'lbn-core/src/helpers/import+export';
import { loadShip2, loadUpgrades2, pointsForSquadron2 } from 'lbn-core/src/helpers/loading';
import { deserialize, exportAsXws, serialize } from 'lbn-core/src/helpers/serializer';
import { bumpPatch } from 'lbn-core/src/helpers/versioning';
import type { FactionKey, Ship, ShipType, Slot, Upgrade, XWS } from 'lbn-core/src/types';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Layout } from '../components/layout';
import { Notification } from '../components/notification';
import { PilotPopover } from '../components/popover/pilot';
import { ShipPopover } from '../components/popover/ship';
import { UpgradePopover } from '../components/popover/upgrade';
import { TagComponent } from '../components/tag';
import { copyToClipboard } from '../helpers/clipboard';
import {
  addShip2,
  changePilot2,
  copyShip2,
  removeShip2,
  setTags,
  setUpgrade2,
  toggleFormat,
} from '../helpers/edit';
import { shipTypes, upgradesForSlot2, usedXWS } from '../helpers/select';
export type DataItem = {
  type: 'Ship' | 'Upgrade' | 'Empty' | 'SlotOptions';
  key: string;
  slot: Slot;
  index: number;
  slotIndex?: number;
  ship?: Ship;
  upgrade?: Upgrade;
  title?: string;
  slotOptions?: Slot[];
};

const MainPage = () => {
  const queryLbx = useSearchParams()?.get('lbx');
  const queryFaction = useSearchParams()?.get('faction');

  // Either we get a squad from url or we create one
  const initialXws: XWS = queryLbx
    ? deserialize(queryLbx)
    : {
      name: 'New Squadron',
      description: '',
      faction: (queryFaction as FactionKey) || 'rebelalliance',
      format: 'Standard',
      ruleset: 'xwa',
      pilots: [],
      points: 0,
      version: '2.0.0',
      vendor: {
        lbn: {
          uid: uuid(),
          wins: 0,
          ties: 0,
          losses: 0,
          tags: [],
          created: new Date(),
        },
      },
    };

  const [xws, setXws] = useState<XWS>(initialXws);
  const ships = xws?.pilots.map((p) => loadShip2(p, { faction: xws.faction, format: xws.format, ruleset: xws.ruleset || 'amg' }));

  const [shipBase, setShipBase] = useState<ShipType>();

  const [notificationTitle, setNotificationTitle] = useState<string>();
  const [notificationMessage, setNotificationMessage] = useState<string>();

  const usedXws = usedXWS(ships);

  useEffect(() => {
    if (queryLbx) {
      setXws(deserialize(queryLbx as string));
    }
  }, [queryLbx]);

  if (!xws) {
    return null;
  }

  const actions: {
    title: string;
    className?: string;
    onClick: () => void;
  }[] = [
      {
        title: 'Link',
        onClick: () => {
          const lbx = serialize(xws);
          const url = `https://launchbaynext.app/?lbx=${lbx}`;
          copyToClipboard(url);
          setNotificationTitle('Link copied to clipboard');
        },
      },
      {
        title: 'XWS',
        onClick: () => {
          copyToClipboard(exportAsXws(xws));
          setNotificationTitle('XWS data copied to clipboard');
        },
      },
      {
        title: 'TTS',
        onClick: () => {
          copyToClipboard(exportAsTTS(xws));
          setNotificationTitle('TTS data copied to clipboard');
        },
      },
      {
        title: 'As text',
        onClick: () => {
          copyToClipboard(exportAsText(xws));
          setNotificationTitle('Plaint text copied to clipboard');
        },
      },
    ];

  return (
    <Layout
      xws={xws}
      setTags={(t) => setXws(setTags(xws, t))}
      onChangeName={(n) => {
        xws.name = n;
        setXws({ ...xws });
      }}
      onChangeFormat={() => setXws(toggleFormat(xws))}
      onChangeRuleset={() => {
        const squad: XWS = JSON.parse(JSON.stringify(xws));

        squad.ruleset = xws.ruleset === 'xwa' ? 'amg' : xws.ruleset === 'legacy' ? 'xwa' : 'legacy';
        squad.pilots.forEach((p) => {
          const ship = loadShip2(p, { faction: xws.faction, format: xws.format, ruleset: squad.ruleset });
          p.points = ship.pointsWithUpgrades;
        });
        squad.points = pointsForSquadron2(squad);
        squad.version = bumpPatch(squad.version || '2.0.0');

        console.log('Set xws');
        setXws({ ...squad });
      }}
      onPrint={() =>
        xws && window.open(`/print?lbx=${serialize(xws)}`, '_blank')
      }
      actions={actions}
    >
      <div className="mb-2 text-gray-400 flex flew-wrap items-center">
        {xws.vendor.lbn.tags?.map((tag) => (
          <TagComponent key={tag} label={tag} />
        ))}
      </div>

      <div
        className={`flex-1 flex-col grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-3`}
      >
        {ships?.map((s, pilotIndex) => {
          const showHardpointPicker =
            s.ability?.slotOptions &&
            !s.ability?.slotOptions.find((sl) => s.upgrades?.[keyFromSlot(sl)]);

          const hardpointOptions = () => [
            ...upgradesForSlot2(s, 'Cannon', xws.format, [], true),
            ...upgradesForSlot2(s, 'Missile', xws.format, [], true),
            ...upgradesForSlot2(s, 'Torpedo', xws.format, [], true),
          ];

          const upgrades = loadUpgrades2(s, xws.format);

          return (
            <div
              key={`${s.xws}_${pilotIndex}`}
              className="bg-white rounded-lg shadow  relative"
            >
              {s.pilot?.artwork && (
                <Image
                  className="rounded-t-md mr-2 w-full h-40 object-cover"
                  width={600}
                  height={200}
                  src={s.pilot.artwork}
                  alt={`${s.pilot.name} artwork`}
                />
              )}

              <div className="px-2 md:px-1 md:py-1">
                <div className="divide-y divide-gray-200">
                  <PilotPopover
                    halfWidth
                    value={s.pilot}
                    faction={xws.faction}
                    format={xws.format}
                    usedXws={usedXws}
                    ship={s}
                    onChange={(p) =>
                      setXws(changePilot2(xws, pilotIndex, p?.xws || ''))
                    }
                  />

                  <div className="mt-1"></div>
                </div>

                <div
                  className={`mt-1 grid grid-cols-2 gap-1 lg:grid-cols-2 mb-0`}
                >
                  {s.pilot?.standardLoadout &&
                    s.pilot.upgrades?.map((u) => (
                      <div key={uuid()}>
                        <UpgradePopover
                          side={0}
                          slot={u.sides[0].slots[0]}
                          value={{ ...u, finalCost: 0, available: 0 }}
                          format={xws.format}
                          usedXws={usedXws}
                          options={[]}
                          onChange={() => { }}
                        />
                      </div>
                    ))}
                  {upgrades.map((upgrade, upgradeIndex) => (
                    <div key={uuid()}>
                      <UpgradePopover
                        side={0}
                        slot={upgrade.slot}
                        value={upgrade.upgrade}
                        format={xws.format}
                        usedXws={usedXws}
                        options={upgradesForSlot2(
                          s,
                          upgrade.slot,
                          xws.format,
                          ships,
                          true,
                        )}
                        onChange={(newValue) => {
                          const getSlotIndex = () => {
                            let slotIndex = 0;
                            for (
                              let i = 0;
                              i < (s.pilot?.slots?.length || 0);
                              i++
                            ) {
                              if (s.pilot?.slots?.[i] === upgrade.slot) {
                                if (i === upgradeIndex) {
                                  return slotIndex;
                                }
                                slotIndex += 1;
                              }
                            }
                            return 0;
                          };

                          setXws(
                            setUpgrade2(
                              xws,
                              pilotIndex,
                              keyFromSlot(upgrade.slot),
                              getSlotIndex(),
                              newValue,
                            ),
                          );
                        }}
                      />
                    </div>
                  ))}
                  {showHardpointPicker && (
                    <UpgradePopover
                      side={0}
                      slot={'Hardpoint'}
                      format={xws.format}
                      options={hardpointOptions()}
                      onChange={(newValue) => {
                        const slot = newValue?.sides[0].slots[0] || 'Hardpoint';
                        let slotIndex = 0;
                        for (let i = 0; i < (s.pilot?.slots?.length || 0); i++) {
                          if (s.pilot?.slots?.[i] === slot) {
                            if (i === 0) {
                              return slotIndex;
                            }
                            slotIndex += 1;
                          }
                        }
                        setXws(
                          setUpgrade2(
                            xws,
                            pilotIndex,
                            keyFromSlot(slot),
                            slotIndex,
                            newValue,
                          ),
                        );
                      }}
                    />
                  )}
                </div>

                <button
                  className="pointer absolute top-2 right-2 text-red-400 hover:text-red-500"
                  onClick={() => setXws(removeShip2(xws, pilotIndex))}
                >
                  <XMarkIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <button
                  className="posinter absolute top-32 right-2 text-gray-400 hover:text-gray-500"
                  onClick={() => setXws(copyShip2(xws, pilotIndex))}
                >
                  <DocumentDuplicateIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mx-3 sm:mx-0 mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1">
        <div className="shadow rounded-md">
          <ShipPopover
            value={shipBase}
            options={shipTypes(xws)}
            onChange={setShipBase}
          />
        </div>

        {shipBase && (
          <div className="shadow rounded-md">
            <PilotPopover
              ship={shipBase}
              faction={xws.faction}
              format={xws.format}
              onChange={(v) => {
                if (v && shipBase) {
                  setXws(addShip2(xws, shipBase.xws, v.xws));
                  setShipBase(undefined);
                }
              }}
            />
          </div>
        )}
      </div>

      <Notification
        title={notificationTitle}
        message={notificationMessage}
        onClear={() => {
          setNotificationTitle(undefined);
          setNotificationMessage(undefined);
        }}
      />

      <Link
        href={'/privacy'}
        className="hidden md:block absolute left-1 bottom-1 text-xs font-normal text-gray-500"
      >
        Privacy policy
      </Link>
    </Layout>
  );
};

export default MainPage;
