export const responseBodies = {
  authByEmail: {
    state: 'WAIT',
    polling_id: 'ff9c113b-1eb4-4f19-b472-46ba31ad7830',
  },
  authenticate: {
    access_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    access_token_ttl_seconds: 172800,
    refresh_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.ElsKKULlzGtesThefMuj2_a6KIY9L5i2zDrBLHV-e0M',
    startup_data: {
      user: {
        user_id: '0000001',
        name: 'John',
        country_id: 'FR',
        email: 'john@doe.fr',
        phone_country_code: '',
        phone_number: '',
        is_partner: false,
        newsletter_opt_in: false,
        push_notifications_opt_in: true,
        data_sharing_opt_out: false,
        user_addresses: [],
      },
    },
  },
  favorites: {
    items: [
      {
        item: {
          item_id: '999991',
          sales_taxes: [
            {
              tax_description: 'VAT',
              tax_percentage: 5.5,
            },
          ],
          tax_amount: {
            code: 'EUR',
            minor_units: 26,
            decimals: 2,
          },
          price_excluding_taxes: {
            code: 'EUR',
            minor_units: 499,
            decimals: 2,
          },
          price_including_taxes: {
            code: 'EUR',
            minor_units: 499,
            decimals: 2,
          },
          value_excluding_taxes: {
            code: 'EUR',
            minor_units: 1500,
            decimals: 2,
          },
          value_including_taxes: {
            code: 'EUR',
            minor_units: 1500,
            decimals: 2,
          },
          taxation_policy: 'PRICE_INCLUDES_TAXES',
          show_sales_taxes: false,
          item_price: {
            code: 'EUR',
            minor_units: 499,
            decimals: 2,
          },
          item_value: {
            code: 'EUR',
            minor_units: 1500,
            decimals: 2,
          },
          cover_picture: {
            picture_id: '307285',
            current_url: 'https://picsum.photos/200',
            is_automatically_created: false,
          },
          logo_picture: {
            picture_id: '307284',
            current_url: 'https://picsum.photos/200',
            is_automatically_created: false,
          },
          name: 'Lorem Ipsum',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          food_handling_instructions: '',
          can_user_supply_packaging: false,
          packaging_option: 'ADDITIONAL_CHARGES_MAY_APPLY',
          collection_info: '',
          diet_categories: [],
          item_category: 'BAKED_GOODS',
          buffet: false,
          badges: [
            {
              badge_type: 'OVERALL_RATING_TRUST_SCORE',
              rating_group: 'LIKED',
              percentage: 93,
              user_count: 273,
              month_count: 6,
            },
            {
              badge_type: 'SERVICE_RATING_SCORE',
              rating_group: 'LOVED',
              percentage: 88,
              user_count: 273,
              month_count: 6,
            },
          ],
          positive_rating_reasons: [
            'POSITIVE_FEEDBACK_DELICIOUS_FOOD',
            'POSITIVE_FEEDBACK_FRIENDLY_STAFF',
            'POSITIVE_FEEDBACK_QUICK_COLLECTION',
            'POSITIVE_FEEDBACK_GREAT_QUANTITY',
            'POSITIVE_FEEDBACK_GREAT_VALUE',
            'POSITIVE_FEEDBACK_GREAT_VARIETY',
          ],
          average_overall_rating: {
            average_overall_rating: 4.400778210116732,
            rating_count: 257,
            month_count: 6,
          },
          favorite_count: 0,
        },
        store: {
          store_id: '888881',
          store_name: 'Lorem Ipsum Store',
          branch: '',
          description: '',
          tax_identifier: '0123456789012',
          website: '',
          store_location: {
            address: {
              country: {
                iso_code: 'FR',
                name: 'France',
              },
              address_line: '24 In pellentesque massa France',
              city: '',
              postal_code: '',
            },
            location: {
              longitude: 1,
              latitude: 1,
            },
          },
          logo_picture: {
            picture_id: '777771',
            current_url: 'https://picsum.photos/200',
            is_automatically_created: false,
          },
          store_time_zone: 'Europe/Paris',
          hidden: false,
          favorite_count: 0,
          we_care: false,
          distance: 5252.2081208588,
          cover_picture: {
            picture_id: '777771',
            current_url: 'https://picsum.photos/200',
            is_automatically_created: false,
          },
          is_manufacturer: false,
        },
        display_name: 'Lorem Ipsum Store',
        pickup_interval: {
          start: '2023-08-25T17:45:00Z',
          end: '2023-08-25T18:00:00Z',
        },
        pickup_location: {
          address: {
            country: {
              iso_code: 'FR',
              name: 'France',
            },
            address_line: '24 In pellentesque massa France',
            city: '',
            postal_code: '',
          },
          location: {
            longitude: 1,
            latitude: 1,
          },
        },
        purchase_end: '2023-08-25T18:00:00Z',
        items_available: 4,
        distance: 5252.2081208588,
        favorite: true,
        in_sales_window: true,
        new_item: false,
        item_type: 'MAGIC_BAG',
        matches_filters: true,
      },
    ],
    items_expanded_radius: [],
  },
  items: {
    items: [
      {
        item: {
          item_id: '999991',
          sales_taxes: [
            {
              tax_description: 'VAT',
              tax_percentage: 5.5,
            },
          ],
          tax_amount: {
            code: 'EUR',
            minor_units: 26,
            decimals: 2,
          },
          price_excluding_taxes: {
            code: 'EUR',
            minor_units: 499,
            decimals: 2,
          },
          price_including_taxes: {
            code: 'EUR',
            minor_units: 499,
            decimals: 2,
          },
          value_excluding_taxes: {
            code: 'EUR',
            minor_units: 1500,
            decimals: 2,
          },
          value_including_taxes: {
            code: 'EUR',
            minor_units: 1500,
            decimals: 2,
          },
          taxation_policy: 'PRICE_INCLUDES_TAXES',
          show_sales_taxes: false,
          item_price: {
            code: 'EUR',
            minor_units: 499,
            decimals: 2,
          },
          item_value: {
            code: 'EUR',
            minor_units: 1500,
            decimals: 2,
          },
          cover_picture: {
            picture_id: '307285',
            current_url: 'https://picsum.photos/200',
            is_automatically_created: false,
          },
          logo_picture: {
            picture_id: '307284',
            current_url: 'https://picsum.photos/200',
            is_automatically_created: false,
          },
          name: 'Lorem Ipsum',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          food_handling_instructions: '',
          can_user_supply_packaging: false,
          packaging_option: 'ADDITIONAL_CHARGES_MAY_APPLY',
          collection_info: '',
          diet_categories: [],
          item_category: 'BAKED_GOODS',
          buffet: false,
          badges: [
            {
              badge_type: 'OVERALL_RATING_TRUST_SCORE',
              rating_group: 'LIKED',
              percentage: 93,
              user_count: 273,
              month_count: 6,
            },
            {
              badge_type: 'SERVICE_RATING_SCORE',
              rating_group: 'LOVED',
              percentage: 88,
              user_count: 273,
              month_count: 6,
            },
          ],
          positive_rating_reasons: [
            'POSITIVE_FEEDBACK_DELICIOUS_FOOD',
            'POSITIVE_FEEDBACK_FRIENDLY_STAFF',
            'POSITIVE_FEEDBACK_QUICK_COLLECTION',
            'POSITIVE_FEEDBACK_GREAT_QUANTITY',
            'POSITIVE_FEEDBACK_GREAT_VALUE',
            'POSITIVE_FEEDBACK_GREAT_VARIETY',
          ],
          average_overall_rating: {
            average_overall_rating: 4.400778210116732,
            rating_count: 257,
            month_count: 6,
          },
          favorite_count: 0,
        },
        store: {
          store_id: '888881',
          store_name: 'Lorem Ipsum Store',
          branch: '',
          description: '',
          tax_identifier: '0123456789012',
          website: '',
          store_location: {
            address: {
              country: {
                iso_code: 'FR',
                name: 'France',
              },
              address_line: '24 In pellentesque massa France',
              city: '',
              postal_code: '',
            },
            location: {
              longitude: 1,
              latitude: 1,
            },
          },
          logo_picture: {
            picture_id: '777771',
            current_url: 'https://picsum.photos/200',
            is_automatically_created: false,
          },
          store_time_zone: 'Europe/Paris',
          hidden: false,
          favorite_count: 0,
          we_care: false,
          distance: 5252.2081208588,
          cover_picture: {
            picture_id: '777771',
            current_url: 'https://picsum.photos/200',
            is_automatically_created: false,
          },
          is_manufacturer: false,
        },
        display_name: 'Lorem Ipsum Store',
        pickup_interval: {
          start: '2023-08-25T17:45:00Z',
          end: '2023-08-25T18:00:00Z',
        },
        pickup_location: {
          address: {
            country: {
              iso_code: 'FR',
              name: 'France',
            },
            address_line: '24 In pellentesque massa France',
            city: '',
            postal_code: '',
          },
          location: {
            longitude: 1,
            latitude: 1,
          },
        },
        purchase_end: '2023-08-25T18:00:00Z',
        items_available: 4,
        distance: 5252.2081208588,
        favorite: true,
        in_sales_window: true,
        new_item: false,
        item_type: 'MAGIC_BAG',
        matches_filters: true,
      },
    ],
    items_expanded_radius: [],
  },
};
