import { canImportXws } from 'lbn-core/src/helpers/import+export';
import { squadronFormatWarning } from 'lbn-core/src/helpers/unique';
import { loadSquadron } from 'lbn-core/src/helpers/unit';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

const hyperspaceLegal = async (req: NextRequest) => {
  if (req.body) {
    try {
      const xws = canImportXws(JSON.stringify(req.body));
      const squadron = loadSquadron(xws);
      if (squadron) {
        squadron.format = 'Standard';
        if (squadronFormatWarning(squadron)) {
          return NextResponse.json(
            { message: 'Invalid request' },
            { status: 400 }
          );
        }
        return NextResponse.json({ message: 'Ok' }, { status: 200 });
        return;
      } else {
        return NextResponse.json(
          { message: 'Internal server error' },
          { status: 500 }
        );
      }
    } catch (error: any) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
  return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
};

export { hyperspaceLegal as POST };
