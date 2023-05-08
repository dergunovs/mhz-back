import fp from 'fastify-plugin';
import staticF from '@fastify/static';
import { join } from 'path';

export default fp(async function (fastify, opts) {
  fastify.register(staticF, { root: join(__dirname, '../public') });
});
