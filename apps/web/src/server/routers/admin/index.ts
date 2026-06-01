import { router } from '../../trpc';
import { adminConditionsRouter } from './conditions';
import { adminPilotsRouter } from './pilots';
import { adminShipsRouter } from './ships';
import { adminSourcesRouter } from './sources';
import { adminUpgradesRouter } from './upgrades';
import { adminUsersRouter } from './users';

export const adminRouter = router({
  ships: adminShipsRouter,
  pilots: adminPilotsRouter,
  upgrades: adminUpgradesRouter,
  conditions: adminConditionsRouter,
  sources: adminSourcesRouter,
  users: adminUsersRouter,
});
