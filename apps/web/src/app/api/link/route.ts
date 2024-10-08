
import { xwsFromString } from 'lbn-core/src/helpers/import+export';
import { serialize } from 'lbn-core/src/helpers/serializer';
import { NextRequest, NextResponse } from 'next/server';

const getLink = async (req: NextRequest) => {
  if (req.body) {
    const xws = await xwsFromString(JSON.stringify(req.body));

    if (xws) {
      const link = serialize(xws);

      return NextResponse.json(`https://launchbaynext.app/?lbx=${link}`);
    }
  }

  return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
};

export { getLink as POST };
