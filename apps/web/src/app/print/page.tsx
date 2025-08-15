'use client';

import { exportAsXws } from 'lbn-core/src/helpers/import+export';
import { loadShip2, type TShip } from 'lbn-core/src/helpers/loading';
import { deserialize, } from 'lbn-core/src/helpers/serializer';
import { type SlotKey } from 'lbn-core/src/types';
import { type NextPage } from 'next';
import { useSearchParams } from 'next/navigation';
import QRCode from 'qrcode.react';
import Logo from '../../components/logo';

type Props = {};

const PrintPage: NextPage<Props> = ({ }) => {
  const queryLbx = useSearchParams()?.get('lbx');

  const xws = queryLbx ? deserialize(queryLbx) : undefined;

  if (!xws) {
    return <div />;
  }

  const ships = xws?.pilots.map((p) => loadShip2(p, { faction: xws.faction, format: xws.format, ruleset: xws.ruleset || 'amg' }));

  const threshold = (ship: TShip) => {
    const shields = ship.stats.filter((s) => s.type === 'shields')[0]
      ? ship.stats.filter((s) => s.type === 'shields')[0].value
      : 0;

    const hull = ship.stats.filter((s) => s.type === 'hull')[0]
      ? ship.stats.filter((s) => s.type === 'hull')[0].value
      : 0;

    return Math.ceil((shields + hull) * 0.5);
  };

  const lbx = exportAsXws(xws);

  return (
    <>
      <div className="bg-white">
        <div className="flex flex-1 justify-between items-center m-3">
          <Logo />
          <div className="flex flex-col items-center font-medium text-md">
            <div>
              {xws.name} [{xws.format}]
            </div>
            <div>{xws.points} points</div>
          </div>
          <QRCode
            value={`https://launchbaynext.app/?lbx=${lbx}`}
            renderAs="svg"
            size={92}
          />
        </div>
        {ships.map((s, i) => (
          <div
            className="block"
            style={{
              pageBreakAfter: 'auto',
              pageBreakBefore: 'auto',
              pageBreakInside: 'avoid',
            }}
            key={`${s.xws}_${s.pilot?.xws}_${i}`}
          >
            <div className="flex flex-1 items-center justify-between bg-gray-200 mx-3 p-1 text-xs font-medium">
              <span>{s.pilot?.name}</span>
              <span>
                <span className="mr-2">
                  Half points: {Math.floor((s.pilot?.cost || 0) / 2)}
                </span>
                <span className="mr-2">Threshold: {threshold(s)}</span>
                <span>Total: {s.pilot?.cost}</span>
              </span>
            </div>
            <div className="grid grid-cols-4 gap-3 m-2">
              {s.upgrades &&
                Object.keys(s.upgrades).map((key) => {
                  const upgrades = s.upgrades?.[key as SlotKey];
                  if (!upgrades) {
                    return;
                  }

                  return upgrades.map((u) => (
                    <div
                      key={u.xws}
                      className="col-span-1 m-1 text-xs font-400"
                    >
                      {u.sides[0].title}
                    </div>
                  ));
                })}

              {s.pilot?.upgrades?.map((u) => (
                <div key={u.xws} className="col-span-1 m-1 text-xs font-400">
                  {u.sides[0].title}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style jsx global>{`
        body {
          background-color: #ffffff;
          -webkit-print-color-adjust: exact;
        }
      `}</style>
    </>
  );
};

PrintPage.getInitialProps = (ctx: any) => {
  const { lbx } = ctx.query;
  if (lbx) {
    const xws = deserialize(lbx);
    return { xws };
  }

  return {};
};

export default PrintPage;
