import { Client } from 'pg';
import dotenv from 'dotenv';

// dotenv.config();

export default async function globalSetup() {
  

  // const client = new Client({

  //   connectionString: process.env.DATABASE_URL

  // });

  // console.log(process.env.DATABASE_URL);
  // console.log(process.env.DB_URL);
  // console.log(process.env.DB_USER);
  // console.log(process.env.DB_PORT);
  // console.log(process.env.DB_HOST);
  // console.log(process.env.DB_NAME);
  // console.log(process.env.DB_PASSWORD);
  // await client.connect();
  // console.log("DB connected!");
  //// run migrations, seeds, truncate tables, etc.
  ////  await client.end();
  ////  module.exports = client;

}

//     export default globalSetup;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// import { Client } from 'pg';

// import dbConfig from './config/index.ts';

//     let dbClient: Client;

//     async function globalSetup() {

//       dbClient = new Client(dbConfig);

//       await dbClient.connect();

//       console.log('Database connected');

//       // Store the client in a global variable or context for access in tests
//       // For instance, you could attach it to the process object or a global context

//       (global as any).dbClient = dbClient;
//     }

//     export default globalSetup;