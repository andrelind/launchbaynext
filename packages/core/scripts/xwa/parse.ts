import { promises as fs } from 'fs';
import prettier from 'prettier';
import { pilots as pilotData, } from '../../src/assets/xwa';
import { factionFromKey } from '../../src/helpers/convert';
import { FactionKey, Slot } from '../../src/types';
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
}

runner()