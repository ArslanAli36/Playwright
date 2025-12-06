// 3. API Task – REST APIs
// API Endpoint: https://reqres.in/
// Within your Playwright project, implement CRUD operations using REST APIs.
// Structure the code in a clean and maintainable manner.
// Ensure that your implementation is easy for other team members to follow.


// npx playwright test api_tasks.spec.ts --headed

// npx playwright test --ui



// console.log('api_tasks file is loading');

import { test, expect } from '@playwright/test';


test('POST API Request', async ({ request }) => {

  const response = await request.post('https://reqres.in/api/users/', {

  
   headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'reqres_a5482e781c8441858b9b470b169b598c'
  },
    data: {

      name: "Henry",
      job: "Principal SQA Engineer"
    }

  });

  expect(response.status()).toBe(201);
  console.log(await response.text());
//  const body = await response.json();
//  console.log(body);
//  expect(body.name).toBe('Arslan');
 

});



test.skip('GET API Request', async ({ request }) => {


  const response = await request.get('https://reqres.in/api/users/2', {


    headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'reqres_a5482e781c8441858b9b470b169b598c'
  },


  });

  expect(response.status()).toBe(200);

  console.log(await response.text());


});



test.skip('API PUT Request', async ({ request }) => {

  const response = await request.put('https://reqres.in/api/users/2', {

    
     headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'reqres_a5482e781c8441858b9b470b169b598c'
  },

    data: {

      "name": "Peter",
      "job": "SQA Engineer"
    }

  });

  expect(response.status()).toBe(200);
  console.log(await response.text());

});



test.skip('API PATCH Request', async ({ request }) => {

  const response = await request.put('https://reqres.in/api/users/2', {

    
     headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'reqres_a5482e781c8441858b9b470b169b598c'
  },

    data: {

      "name": "Harry Potter",
      "job": "Senior SQA Engineer"
    }

  });

  expect(response.status()).toBe(200);
 console.log(await response.text());


});



test.skip('API Delete Request', async ({ request }) => {

  const response = await request.delete('https://reqres.in/api/users/1', {

    headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'reqres_a5482e781c8441858b9b470b169b598c'
  },

  })

  expect(response.status()).toBe(204);
  console.log(await response.text());

});