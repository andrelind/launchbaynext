import conditionData from 'lbn-core/src/assets/xwa/conditions';
import type { TShip } from 'lbn-core/src/helpers/loading';
import type { Pilot, ShipType } from 'lbn-core/src/types';
import { type FC } from 'react';
import AbilityComponent from './ability';
import ActionsComponent from './actions';
import { DialComponent } from './dial';
import FormattedText from './formatted-text';
import StatsComponent from './ship-stats';
import { SlimPilot } from './slim/pilot';

type Props = {
  pilot: Pilot;
  ship?: TShip | ShipType;
  count?: number;
  limitWarning?: boolean;
  showFaction?: boolean;
  showBaseCost?: boolean;
};

const PilotComponent: FC<Props> = ({
  pilot,
  ship,
  showFaction,
  showBaseCost,
}) => {
  return (
    <div className="flex flex-1 flex-col m-2">
      <SlimPilot
        pilot={pilot}
        ship={ship}
        hideStats
        showFaction={showFaction}
        showBaseCost={showBaseCost}
        hideAbilities
      />
      <div>
        <div className="flex flex-1 flex-row justify-between">
          <StatsComponent
            stats={ship?.stats}
            force={pilot.force}
            charges={pilot.charges}
            vertical
          />
          {ship && <DialComponent dial={ship?.dial} />}
          {ship && <ActionsComponent actions={ship?.actions} vertical />}
        </div>
        {pilot.ability && <FormattedText text={pilot.ability} />}
        {pilot.text && <FormattedText text={pilot.text} fontStyle="italic" />}
        {pilot?.shipAbility && (
          <AbilityComponent ability={pilot?.shipAbility} />
        )}
        {ship?.ability && !pilot?.shipAbility && (
          <AbilityComponent ability={ship.ability} />
        )}

        {pilot.conditions &&
          pilot.conditions.map((c) => {
            const condition = conditionData.filter((cc) => cc.xws === c)[0];
            return (
              <FormattedText
                key={c}
                text={`<strong>${condition.name}:</strong> ${condition.ability}`}
              />
            );
          })}
      </div>
    </div>
  );
};

export default PilotComponent;
