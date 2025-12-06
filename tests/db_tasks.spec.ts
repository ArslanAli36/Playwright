// 2. Database Task – PostgreSQL
// Website: https://pgexercises.com/
// Under your account, create a PostgreSQL connection string in the following format:
// postgresql://postgres:mypassword@localhost:5432/mydatabase
// Inside your Playwright project, implement CRUD operations (Create, Read, Update, Delete) using this database connection.
// Make sure your implementation is clear, structured, and easy to understand for other team members.

// npx playwright test db_tasks.spec.ts --headed


import { test, expect } from '@playwright/test';
import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();


test('Create a new table in Exercises DB', async ({ page }) => {

  const client = new Client({

    connectionString: process.env.DATABASE_URL

  });

  await client.connect();

  console.log("DB connected!");

  //  console.log(client);

  const res = await client.query("Create Table Players (id int, player_name varchar(255), contact_no varchar(255), email varchar(255), "
    
    +"address varchar(255), sport varchar(255), height varchar(255), weight varchar(255), age varchar(255));");

  const res_1 = await client.query("Insert into Players (id, player_name, contact_no, email, address, sport, height, weight, age)"
    
    +" Values (1, 'John', '03334341835', 'john@gmail.com' , 'Tech Society', 'Tennis', '5 foot 2 inch', '60 kg', '34' );");

     const res_2 = await client.query("Insert into Players (id, player_name, contact_no, email, address, sport, height, weight, age)"
    
    +" Values (2, 'Peter', '03281427144', 'peter@hotmail.com' , 'Johar Town', 'Football', '4 foot 7 inch', '50 kg', '28' );");

     const res_3 = await client.query("Insert into Players (id, player_name, contact_no, email, address, sport, height, weight, age)"
    
    +" Values (3, 'William', '03219112923', 'william@aol.com' , 'Muslim Town', 'Cricket', '4 foot 2 inch', '42 kg', '44' );");

     const res_4 = await client.query("Insert into Players (id, player_name, contact_no, email, address, sport, height, weight, age)"
    
    +" Values (4, 'Harry', '03001234567', 'harry@outlook.com' , 'Bahria Town', 'Hockey', '6 foot 2 inch', '76 kg', '53' );");

  //  console.log(res);
  //  console.log(res_1);
});



test.skip('Read a row value from Table', async ({ page }) => {

  const client = new Client({

    connectionString: process.env.DATABASE_URL

  });

  await client.connect();

  console.log("DB connected!");

//  console.log(client);

  const res = await client.query("Select contact_no from Players where email = 'john@gmail.com'");

  //  expect(res.rows.length).toBe();

  console.log(res);

});



test.skip('Update a row value from Table', async ({ page }) => {

  const client = new Client({

    connectionString: process.env.DATABASE_URL

  });

  await client.connect();

  console.log("DB connected!");

 // console.log(client);

  const res = await client.query("Update Players Set address = '76-Crown Street' where player_name = 'John'");

  const res_1 = await client.query("Select address from Players where player_name = 'John'");

  //  expect(res.rows.length).toBe();

  console.log(res_1);

});


test.skip('Delete a row from table', async ({ page }) => {

  const client = new Client({

    connectionString: process.env.DATABASE_URL

  });

  await client.connect();

  console.log("DB connected!");

//  console.log(client);

  const res = await client.query("Delete from Players where sport = 'Tennis'");

  console.log(res);

});


test.skip('Drop the table Players', async ({ page }) => {

  const client = new Client({

    connectionString: process.env.DATABASE_URL

  });

  await client.connect();

  console.log("DB connected!");

//  console.log(client);

  const res = await client.query("Drop Table Players");

  console.log(res);

});



test.skip('View all the rows in Members table of Exercises DB', async ({ page }) => {

  const client = new Client({

    connectionString: process.env.DATABASE_URL

  });

  await client.connect();

  console.log("DB connected!");

  console.log(client);

  const res = await client.query('SELECT * FROM members');

  expect(res.rows.length).toBe(10);

  console.log(res);

});