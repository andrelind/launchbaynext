import { promises as fs } from 'fs';
import prettier from 'prettier';
import { pilots as pilotData, upgrades as upgradeData } from '../../src/assets/xwa';
import { factionFromKey } from '../../src/helpers/convert';
import { FactionKey, Restrictions, Slot } from '../../src/types';
import { getName } from '../xwing-data/utils';

type XWAPilot = {
    name: string
    subtitle: string
    limited: number
    cost: number
    loadout: number
    slots: Slot[]
    keywords: string[]
    standard: string
    extended: string
    epic: string
}

type XWAShip = {
    [key: string]: XWAPilot;
}

type XWAFaction = {
    [key: string]: XWAShip;
};

const runner = async () => {

    for await (const faction of ['firstorder', 'galacticempire', 'galacticrepublic', 'rebelalliance', 'resistance', 'scumandvillainy', 'separatistalliance']) {
        const data = await fs.readFile(`./${faction}.json`, 'utf-8')
        const ships = JSON.parse(data) as XWAFaction
        console.log(faction, Object.keys(ships).length);

        Object.keys(ships).forEach((shipName) => {
            Object.keys(pilotData[factionFromKey(faction as FactionKey)]).forEach(async (shipKey) => {
                if (pilotData[factionFromKey(faction as FactionKey)][shipKey].name !== shipName) {
                    return
                }

                const shipData = pilotData[factionFromKey(faction as FactionKey)][shipKey];

                Object.keys(ships[shipName]).forEach((pilotXws) => {
                    const pilotData = shipData.pilots.find((pilot) => pilot.xws === pilotXws)
                    if (!pilotData) {
                        console.log('Missing pilot', shipName, pilotXws);
                        return
                    }

                    const pilot = ships[shipName][pilotXws];

                    pilotData.name = pilot.name
                    pilotData.caption = pilot.subtitle
                    pilotData.cost = pilot.cost
                    pilotData.limited = pilot.limited
                    pilotData.loadout = pilot.loadout
                    // @ts-ignore
                    pilotData.slots = pilot.slots?.map((slot) => slot === 'Payload' ? 'Device' : slot) || []
                    pilotData.keywords = pilot.keywords
                    pilotData.standard = pilot.standard === 'Yes' ? true : false
                    pilotData.extended = pilot.extended === 'Yes' ? true : false
                    pilotData.epic = pilot.epic === 'Yes' ? true : false
                })

                const header =
                    'import { ShipType } from "../../../../types";\n\nconst t: ShipType = ';
                const formatted = await prettier.format(
                    `${header}${JSON.stringify(shipData)};\n\nexport default t;`,
                    {
                        trailingComma: 'all',
                        singleQuote: true,
                        parser: 'typescript',
                    }
                );

                await fs.writeFile(
                    `../../src/assets/xwa/pilots/${getName(factionFromKey(faction as FactionKey))}/${getName(shipData.name)}.ts`,
                    formatted,
                    'utf8'
                );
            })
        })
    }

    const upgradeFile = await fs.readFile(`./upgrades.json`, 'utf-8')
    const upgrades = JSON.parse(upgradeFile) as { [key: string]: { name: string, cost: number, limited: number, standard: boolean, extended: boolean, epic: boolean, slots: Slot[], restrictions: Restrictions[] } }

    Object.keys(upgrades).forEach(async (upgradeXws) => {
        const upgrade = upgrades[upgradeXws]

        // Find the upgrade in the data
        Object.keys(upgradeData).forEach((slotKey) => {
            const slotUpgrades = upgradeData[slotKey as keyof typeof upgradeData]
            const up = slotUpgrades.find((upgrade) => upgrade.xws === upgradeXws)
            if (!up) {
                return
            }

            // up.name = upgrade.name
            up.cost = { value: upgrade.cost }
            up.limited = upgrade.limited
            up.standard = upgrade.standard
            up.extended = upgrade.extended
            up.epic = upgrade.epic
            // @ts-ignore
            up.sides[0].slots = upgrade.slots.map((slot) => slot === 'Payload' ? 'Device' : slot)
            // @ts-ignore
            if (upgrade.restrictions.find((restriction) => restriction.standardized)) {
                up.standarized = true
            }
            if (upgrade.restrictions.length > 0) {
                up.restrictions = upgrade.restrictions
                    // @ts-ignore
                    .filter(r => !r.standardized && !r.shipStat)
                    .map((restriction) => {
                        if (restriction.factions) {
                            return { factions: restriction.factions.map((faction) => factionFromKey(faction as FactionKey)) }
                            // @ts-expect-error
                        } else if (restriction.sizes) {
                            // @ts-expect-error
                            return { baseSizes: restriction.sizes }
                            // @ts-expect-error
                        } else if (restriction.ships) {
                            // @ts-expect-error
                            return { chassis: restriction.ships }
                        }
                        // else if (restriction.shipStat) {
                        //     console.log(restriction.shipStat);

                        //     // @ts-expect-error
                        //     const type: StatType = (restriction.shipStat as string).split(' ')[0].toLowerCase()
                        //     // @ts-expect-error
                        //     const value = parseInt((restriction.shipStat as string).split(' ')[1])
                        //     return { stat: { type, value } }
                        // }

                        return restriction
                    })
            }
        })
    })

    for await (const slotKey of Object.keys(upgradeData)) {
        const upgrade = upgradeData[slotKey as keyof typeof upgradeData]

        const header =
            'import { UpgradeBase } from "../../../types";\n\nconst t: UpgradeBase[] = ';
        const formatted = await prettier.format(
            `${header}${JSON.stringify(upgrade)};\n\nexport default t;`,
            {
                trailingComma: 'all',
                singleQuote: true,
                parser: 'typescript',
            }
        );

        await fs.writeFile(
            `../../src/assets/xwa/upgrades/${slotKey}.ts`,
            formatted,
            'utf8'
        );
    }
}

runner()