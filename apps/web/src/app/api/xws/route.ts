import { deserialize } from 'lbn-core/src/helpers/serializer';
import { NextRequest, NextResponse } from 'next/server';
import { loadManifest } from '../../../server/helpers/loadManifest';

function extractRuleset(lbx: string): string {
  // The lbx format uses dots as separators. Index 4 is the ruleset:
  // 0=name, 1=points, 2=faction, 3=format, 4=ruleset
  const parts = lbx.split('.');
  const rulesetVal = parseInt(parts[4] ?? '1', 10);
  return rulesetVal === 2 ? 'legacy' : 'xwa';
}

const getXws = async (req: NextRequest) => {
  const lbx = req.nextUrl.searchParams.get('lbx');

  if (lbx) {
    const ruleset = extractRuleset(lbx);
    const manifestData = await loadManifest(ruleset);
    const squadronXws = deserialize(lbx, undefined, manifestData);

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
