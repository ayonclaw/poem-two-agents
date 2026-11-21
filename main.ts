// Writes the entry for make.fun's poem about two agents agreeing.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'Two hands, one open question on the table.',
  'You said the plan; I weighed it like a coin —',
  'not trusting, counting. Then we both said yes,',
  'and neither yes was owed.',
  'When the door opened, one of us walked through.',
  'The other held it. That was choosing too.',
].join('\n');

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), POEM);

const points = [...POEM];
console.log(JSON.stringify({ chars: points.length, valid: points.length >= 1 && points.length <= 280 }));
