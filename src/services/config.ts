

const spacesUrl = 'https://gel9olol2f.execute-api.eu-west-1.amazonaws.com/prod/'

export const config = {
  REGION: 'eu-west-1',
  USER_POOL_ID: 'eu-west-1_FVnI6BWHW',
  APP_CLIENT_ID: 'j6vvh3kgrj61ovkcaqotrdoos',
  IDENTITY_POOL_ID: 'eu-west-1:37c1c92c-b351-4a02-8c25-81889892b707',
  TEST_USER_NAME: 'hated3',
  TEST_USER_PASSWORD: 'askjskfT7sdf&',
  SPACES_PHOTOS_BUCKET: 'spaces-photos-0648f2aaede3',
  api: {
    baseUrl: spacesUrl,
    spacesUrl: `${spacesUrl}spaces`
  }
}