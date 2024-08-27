
import { deserialize, exportAsXws } from 'lbn-core/src/helpers/serializer';
import { NextRequest, NextResponse } from 'next/server';

const getXws = async (req: NextRequest, res: NextResponse) => {
  const lbx = req.nextUrl.searchParams.get('lbx');

  if (lbx) {
    const squadronXws = deserialize(lbx as string);

    if (squadronXws) {
      const xws = exportAsXws(squadronXws);
      return NextResponse.json(xws);
    }
  }

  return Response.json({ message: 'Invalid request' }, { status: 400 });
};

export { getXws as GET };
