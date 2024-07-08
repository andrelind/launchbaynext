import { Pilot, ShipType } from 'lbn-core/src/types';
import Image from 'next/image';
import { FC } from 'react';
import { colorForFaction } from '../../helpers/colors';
import { TShip } from '../../helpers/loading';
import AbilityComponent from '../ability';
import ShipFont from '../fonts/ships';
import XwingFont from '../fonts/xwing';
import FormattedText from '../formatted-text';
import { StatsComponent } from '../ship-stats';

type Props = {
  pilot?: Pilot;
  ship?: TShip | ShipType;
  hideStats?: boolean;
  showFaction?: boolean;
  showBaseCost?: boolean;
  hideAbilities?: boolean;
  showImage?: boolean;
};

export const SlimPilot: FC<Props> = ({
  pilot,
  ship,
  hideStats,
  showFaction,
  hideAbilities,
  showImage,
}) => {
  return (
    <li className="flex flex-col justify-between text-xs sm:text-sm">
      {showImage && pilot?.artwork && (
        <Image
          className="rounded-md mr-2"
          width={500}
          height={0}
          layout="responsive"
          objectFit="cover"
          src={pilot.artwork}
          alt={`${pilot.name} artwork`}
        />
      )}
      <div className="flex flex-1 flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          {ship && showFaction && (
            <XwingFont
              icon={ship.faction}
              className="mr-1"
              color={colorForFaction(ship.faction)}
            />
          )}
          <span />
          <div className="flex flex-col">
            <span className="font-medium text-yellow-400 mr-1">
              {pilot?.initiative}
            </span>
            {ship && <ShipFont icon={ship?.xws} />}
          </div>

          <div className="flex flex-col">
            <span className="font-medium mr-1">
              {pilot?.limited !== undefined &&
                pilot?.limited > 0 &&
                `${'•'.repeat(pilot?.limited)} `}
              {pilot?.name}
            </span>
            <span className="pl-1 italic text-gray-400 sm:block text-xs">
              {pilot?.caption}
            </span>
          </div>

          {!pilot && (
            <span className="truncate text-gray-500">Select pilot</span>
          )}
        </div>
        {ship && !hideStats && (
          <StatsComponent
            stats={ship?.stats}
            force={pilot?.force}
            charges={pilot?.charges}
          />
        )}

        {Boolean(pilot) && (
          <div className="flex flex-col items-center">
            <span className="font-medium">{pilot?.cost}</span>
            {ship && pilot?.loadout && (
              <span className="font-normal text-xs">
                {`${
                  // @ts-ignore
                  (ship?.pointsWithUpgrades || pilot?.cost || 0) -
                  (pilot?.cost || 0)
                  }/${pilot?.loadout}`}
              </span>
            )}
            {!ship && (
              <span className="font-normal text-xs">{pilot?.loadout}</span>
            )}
          </div>
        )}
      </div>

      {!hideAbilities && pilot?.ability && (
        <FormattedText text={pilot?.ability} />
      )}
      {!hideAbilities && pilot?.shipAbility && (
        <AbilityComponent ability={pilot?.shipAbility} />
      )}
      {!hideAbilities && pilot?.text && (
        <FormattedText text={pilot?.text} fontStyle="italic" />
      )}
      {!hideAbilities && ship?.ability && !pilot?.shipAbility && (
        <AbilityComponent ability={ship?.ability} />
      )}
    </li>
  );
};
