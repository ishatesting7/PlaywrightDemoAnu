import { test, expect } from '@playwright/test';


import apiRequestBody from '../../test-data/api_request_body/POST_API_request.json'
test('Create a new booking and validate response', async ({ request }) => {
  // Define request payload
  const bookingPayload = {
    firstname: "John",
    lastname: "Doe",
    totalprice: 150,
    depositpaid: true,
    bookingdates: {
      checkin: "2025-06-01",
      checkout: "2025-06-10"
    },
    additionalneeds: "Breakfast"
  };

  // Send POST request
  const response = await request.post('https://restful-booker.herokuapp.com/booking', {
    data: apiRequestBody,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // Validate response status
  expect(response.status()).toBe(200);

  // Validate response content-type
  expect(response.headers()['content-type']).toContain('application/json');

  // Parse JSON response
  const responseBody = await response.json();

  console.log('POST API Response : ' + JSON.stringify(responseBody, null, 2));
  // Validate response structure
  expect(responseBody).toHaveProperty('bookingid');
  expect(typeof responseBody.bookingid).toBe('number');

  expect(responseBody).toHaveProperty('booking');
  expect(responseBody.booking).toMatchObject(bookingPayload);
});
