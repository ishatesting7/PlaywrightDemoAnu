import {test, expect} from "@playwright/test"


import postAPIRequest from '../../test-data/api_request_body/POST_API_request.json';


test('Create POST API Request using static file in playwright & typescript', async ({ request }) => {

    // Create POST API Request
    const postAPIResponse = await request.post('https://restful-booker.herokuapp.com/booking', 
    { data: postAPIRequest,
    headers:{
        'Content-Type': 'application/json'
      } });

    console.log(postAPIResponse.text)
    // Print JSON API response
    const jsonPOSTAPIResponse = await postAPIResponse.json();
    console.log('POST API Response : ' + JSON.stringify(jsonPOSTAPIResponse, null, 2));

    // Validating api response
    expect(postAPIResponse.status()).toBe(200);
    expect(postAPIResponse.statusText()).toBe('OK');
    expect(postAPIResponse.headers()['content-type']).toContain('application/json');

    // Validate propert/key names
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('firstname');
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('lastname');

    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkin');
    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkout');

    // Validate API response body
    expect(jsonPOSTAPIResponse.bookingid).toBeGreaterThan(0);
    expect(jsonPOSTAPIResponse.booking.firstname).toBe('playwright typescript by testers talk');
    expect(jsonPOSTAPIResponse.booking.lastname).toBe('playwright javascript by testers talk');

    expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2025-01-15');
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2025-01-17');
});

