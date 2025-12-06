// global.teardown.ts

import { Client } from 'pg';
    

    let dbClient: Client;

    async function globalTeardown() {
      const dbClient: Client = (global as any).dbClient;
      if (dbClient) {
        await dbClient.end();
        console.log('Database connection closed');
      }
    }

    export default globalTeardown;