const axios = require('axios')

describe('graphqL', () => {
  it('should call graphql correctly', async () => {
    const query = `
      mutation VerifyOTP($phoneNumber: String!, $code: String!, $locale: String!, $appPlatform: String!, $appVersion: String!) {
        verifyOTP(phoneNumber: $phoneNumber, appPlatform: $appPlatform, appVersion: $appVersion, locale: $locale, code: $code) {
          responseCode
              responseMessage
              data {
                  userToken
                  termsAndConditions {
                      terms
                      lastModifiedTimestamp
                  }
              }
        }
      }
    `

    const variables = {
      phoneNumber: '+668670911111',
      appPlatform: 'xxxx',
      appVersion: 'xxxx',
      locale: 'en',
      code: '',
    }

    const response = await axios({
      url: 'sit.api.muvmi.co/graphql',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      data: {
        query,
        variables,
      }
    })

    console.log('response', response)

    expect(response).toEqual(1)
  });
});
