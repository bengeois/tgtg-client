export const requestBodies = {
  authByEmail: { device_type: 'IOS', email: 'john@doe.com' },
  authenticate: {
    device_type: 'IOS',
    email: 'john@doe.com',
    request_polling_id: 'ff9c113b-1eb4-4f19-b472-46ba31ad7830',
  },
  favorites: {
    user_id: '0000001',
    origin: { latitude: 0, longitude: 0 },
    radius: 20,
    page_size: 10,
    page: 0,
    discover: false,
    favorites_only: true,
    item_categories: [],
    diet_categories: [],
    search_phrase: '',
    with_stock_only: false,
    hidden_only: false,
    we_care_only: false,
  },
};
