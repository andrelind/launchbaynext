import { deserialize } from 'lbn-core/src/helpers/serializer';
import { NextRequest, NextResponse } from 'next/server';

const getXws = async (req: NextRequest, res: NextResponse) => {
  const lbx = req.nextUrl.searchParams.get('lbx');

  if (lbx) {
    const squadronXws = deserialize(lbx as string);

    if (squadronXws) {
      (squadronXws as any).vendor = {
        lbn: {
          builder: 'Launch Bay Next',
          builder_url: 'https://launchbaynext.app',
          link: `https://launchbaynext.app/print?lbx=${lbx}`,
        },
      };

      return NextResponse.json(squadronXws);
    }
  }

  return Response.json({ message: 'Invalid request' }, { status: 400 });
};

export { getXws as GET };
