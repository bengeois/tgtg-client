/**
 * Represents the result of a TooGoodToGo research.
 */
export interface TgtgClientItemResult {
  /**
   * The item associated with the result.
   * @example { item_id: '123', ... }
   */
  item: Item;

  /**
   * The store associated with the item.
   * @example { store_id: '456', ... }
   */
  store: Store;

  /**
   * The display name of the store.
   * @example 'Bakes & Cakes'
   */
  display_name: string;

  /**
   * The interval during which the item can be picked up.
   * @example { start: '2023-08-25', end: '2023-08-26' }
   */
  pickup_interval: PickupInterval;

  /**
   * The pickup location information.
   * @example { address: {...}, location: {...} }
   */
  pickup_location: PickupLocation;

  /**
   * The end time of the purchase window.
   * @example '2023-08-25 15:00:00'
   */
  purchase_end: string;

  /**
   * The number of items available.
   * @example 5
   */
  items_available: number;

  /**
   * The distance to the pickup location.
   * @example 2.5
   */
  distance: number;

  /**
   * Whether the item is marked as a favorite.
   * @example true
   */
  favorite: boolean;

  /**
   * Whether the item is within the sales window.
   * @example false
   */
  in_sales_window: boolean;

  /**
   * Whether the item is new.
   * @example true
   */
  new_item: boolean;

  /**
   * The type of the item.
   * @example 'Food'
   */
  item_type: string;

  /**
   * Whether the item matches filters.
   * @example true
   */
  matches_filters: boolean;
}

/**
 * Represents an item available for purchase.
 */
export interface Item {
  /**
   * The unique identifier of the item.
   * @example '12345'
   */
  item_id: string;

  /**
   * List of sales taxes applicable to the item.
   * @example [{ tax_description: 'VAT', tax_percentage: 10 }]
   */
  sales_taxes: SalesTax[];

  /**
   * Tax amount details.
   * @example { code: 'USD', minor_units: 1500, decimals: 2 }
   */
  tax_amount: TaxAmount;

  /**
   * Price excluding taxes details.
   * @example { code: 'USD', minor_units: 800, decimals: 2 }
   */
  price_excluding_taxes: PriceExcludingTaxes;

  /**
   * Price including taxes details.
   * @example { code: 'USD', minor_units: 880, decimals: 2 }
   */
  price_including_taxes: PriceIncludingTaxes;

  /**
   * Value excluding taxes details.
   * @example { code: 'USD', minor_units: 750, decimals: 2 }
   */
  value_excluding_taxes: ValueExcludingTaxes;

  /**
   * Value including taxes details.
   * @example { code: 'USD', minor_units: 825, decimals: 2 }
   */
  value_including_taxes: ValueIncludingTaxes;

  /**
   * The policy regarding taxation.
   * @example 'Standard Taxation Policy'
   */
  taxation_policy: string;

  /**
   * Whether to show sales taxes.
   * @example true
   */
  show_sales_taxes: boolean;

  /**
   * Whether the item is marked as a favorite.
   * @example true
   */
  favorite: boolean;

  /**
   * The price of the item.
   * @example { code: 'USD', minor_units: 800, decimals: 2 }
   */
  item_price: ItemPrice;

  /**
   * The value of the item.
   * @example { code: 'USD', minor_units: 750, decimals: 2 }
   */
  item_value: ItemValue;

  /**
   * The cover picture of the item.
   * @example { picture_id: 'pic123', current_url: 'https://example.com/pic123.jpg', is_automatically_created: false }
   */
  cover_picture: CoverPicture;

  /**
   * The logo picture of the item.
   * @example { picture_id: 'logo456', current_url: 'https://example.com/logo456.jpg', is_automatically_created: false }
   */
  logo_picture: LogoPicture;

  /**
   * The name of the item.
   * @example 'Deluxe Pizza'
   */
  name: string;

  /**
   * The description of the item.
   * @example 'A mouthwatering pizza with assorted toppings.'
   */
  description: string;

  /**
   * Handling instructions for food items.
   * @example 'Reheat in the oven at 350°F for 10 minutes.'
   */
  food_handling_instructions: string;

  /**
   * Whether the user can supply packaging.
   * @example true
   */
  can_user_supply_packaging: boolean;

  /**
   * Packaging option for the item.
   * @example 'Eco-Friendly Box'
   */
  packaging_option: string;

  /**
   * Collection information for the item.
   * @example 'Pick up at our downtown location'
   */
  collection_info: string;

  /**
   * Categories related to dietary preferences.
   * @example ['Vegetarian', 'Gluten-Free']
   */
  diet_categories: string[];

  /**
   * The category of the item.
   * @example 'Food'
   */
  item_category: string;

  /**
   * Whether the item is available in a buffet.
   * @example false
   */
  buffet: boolean;

  /**
   * Badges associated with the item.
   * @example [{ badge_type: 'Top Rated', rating_group: 'Food', percentage: 95, user_count: 50, month_count: 3 }]
   */
  badges: Badge[];

  /**
   * Reasons for positive ratings.
   * @example ['Delicious taste', 'Quick delivery']
   */
  positive_rating_reasons: string[];

  /**
   * Average overall rating details.
   * @example { average_overall_rating: 4.5, rating_count: 100, month_count: 6 }
   */
  average_overall_rating: AverageOverallRating;

  /**
   * The count of favorites for the item.
   * @example 250
   */
  favorite_count: number;
}

export interface SalesTax {
  tax_description: string;
  tax_percentage: number;
}

export interface TaxAmount {
  code: string;
  minor_units: number;
  decimals: number;
}

export interface PriceExcludingTaxes {
  code: string;
  minor_units: number;
  decimals: number;
}

export interface PriceIncludingTaxes {
  code: string;
  minor_units: number;
  decimals: number;
}

export interface ValueExcludingTaxes {
  code: string;
  minor_units: number;
  decimals: number;
}

export interface ValueIncludingTaxes {
  code: string;
  minor_units: number;
  decimals: number;
}

export interface ItemPrice {
  code: string;
  minor_units: number;
  decimals: number;
}

export interface ItemValue {
  code: string;
  minor_units: number;
  decimals: number;
}

export interface CoverPicture {
  picture_id: string;
  current_url: string;
  is_automatically_created: boolean;
}

export interface LogoPicture {
  picture_id: string;
  current_url: string;
  is_automatically_created: boolean;
}

export interface Badge {
  badge_type: string;
  rating_group: string;
  percentage: number;
  user_count: number;
  month_count: number;
}

export interface AverageOverallRating {
  average_overall_rating: number;
  rating_count: number;
  month_count: number;
}

export interface Store {
  store_id: string;
  store_name: string;
  branch: string;
  description: string;
  tax_identifier: string;
  website: string;
  store_location: StoreLocation;
  logo_picture: LogoPicture;
  store_time_zone: string;
  hidden: boolean;
  favorite_count: number;
  we_care: boolean;
  distance: number;
  cover_picture: CoverPicture;
  is_manufacturer: boolean;
}

export interface StoreLocation {
  address: Address;
  location: Location;
}

export interface Address {
  country: Country;
  address_line: string;
  city: string;
  postal_code: string;
}

export interface Country {
  iso_code: string;
  name: string;
}

export interface Location {
  longitude: number;
  latitude: number;
}

export interface PickupInterval {
  start: string;
  end: string;
}

export interface PickupLocation {
  address: Address;
  location: Location;
}

/**
 * Represents sales tax information.
 */
export interface SalesTax {
  /**
   * Description of the sales tax.
   * @example 'Value Added Tax'
   */
  tax_description: string;

  /**
   * Percentage value of the sales tax.
   * @example 10
   */
  tax_percentage: number;
}

/**
 * Represents tax amount details.
 */
export interface TaxAmount {
  /**
   * The currency code.
   * @example 'USD'
   */
  code: string;

  /**
   * The amount in minor units.
   * @example 1500
   */
  minor_units: number;

  /**
   * The number of decimal places.
   * @example 2
   */
  decimals: number;
}

/**
 * Represents price excluding taxes details.
 */
export interface PriceExcludingTaxes {
  /**
   * The currency code.
   * @example 'USD'
   */
  code: string;

  /**
   * The amount in minor units.
   * @example 800
   */
  minor_units: number;

  /**
   * The number of decimal places.
   * @example 2
   */
  decimals: number;
}

/**
 * Represents price including taxes details.
 */
export interface PriceIncludingTaxes {
  /**
   * The currency code.
   * @example 'USD'
   */
  code: string;

  /**
   * The amount in minor units.
   * @example 880
   */
  minor_units: number;

  /**
   * The number of decimal places.
   * @example 2
   */
  decimals: number;
}

/**
 * Represents value excluding taxes details.
 */
export interface ValueExcludingTaxes {
  /**
   * The currency code.
   * @example 'USD'
   */
  code: string;

  /**
   * The amount in minor units.
   * @example 750
   */
  minor_units: number;

  /**
   * The number of decimal places.
   * @example 2
   */
  decimals: number;
}

/**
 * Represents value including taxes details.
 */
export interface ValueIncludingTaxes {
  /**
   * The currency code.
   * @example 'USD'
   */
  code: string;

  /**
   * The amount in minor units.
   * @example 825
   */
  minor_units: number;

  /**
   * The number of decimal places.
   * @example 2
   */
  decimals: number;
}

/**
 * Represents the price of an item.
 */
export interface ItemPrice {
  /**
   * The currency code.
   * @example 'USD'
   */
  code: string;

  /**
   * The amount in minor units.
   * @example 800
   */
  minor_units: number;

  /**
   * The number of decimal places.
   * @example 2
   */
  decimals: number;
}

/**
 * Represents the value of an item.
 */
export interface ItemValue {
  /**
   * The currency code.
   * @example 'USD'
   */
  code: string;

  /**
   * The amount in minor units.
   * @example 750
   */
  minor_units: number;

  /**
   * The number of decimal places.
   * @example 2
   */
  decimals: number;
}

/**
 * Represents the cover picture of an item.
 */
export interface CoverPicture {
  /**
   * The picture's unique identifier.
   * @example 'pic123'
   */
  picture_id: string;

  /**
   * The current URL of the picture.
   * @example 'https://example.com/pic123.jpg'
   */
  current_url: string;

  /**
   * Whether the picture was automatically created.
   * @example false
   */
  is_automatically_created: boolean;
}

/**
 * Represents the logo picture of an item.
 */
export interface LogoPicture {
  /**
   * The picture's unique identifier.
   * @example 'logo456'
   */
  picture_id: string;

  /**
   * The current URL of the picture.
   * @example 'https://example.com/logo456.jpg'
   */
  current_url: string;

  /**
   * Whether the picture was automatically created.
   * @example false
   */
  is_automatically_created: boolean;
}

/**
 * Represents a badge associated with an item.
 */
export interface Badge {
  /**
   * The type of the badge.
   * @example 'Top Rated'
   */
  badge_type: string;

  /**
   * The rating group for the badge.
   * @example 'Food'
   */
  rating_group: string;

  /**
   * The percentage value of the badge.
   * @example 95
   */
  percentage: number;

  /**
   * The count of users who received the badge.
   * @example 50
   */
  user_count: number;

  /**
   * The count of users who received the badge in the current month.
   * @example 3
   */
  month_count: number;
}

/**
 * Represents the average overall rating of an item.
 */
export interface AverageOverallRating {
  /**
   * The average overall rating value.
   * @example 4.5
   */
  average_overall_rating: number;

  /**
   * The total count of ratings.
   * @example 100
   */
  rating_count: number;

  /**
   * The count of ratings in the current month.
   * @example 6
   */
  month_count: number;
}

/**
 * Represents a store.
 */
export interface Store {
  /**
   * The unique identifier of the store.
   * @example '789'
   */
  store_id: string;

  /**
   * The name of the store.
   * @example 'BestMart'
   */
  store_name: string;

  /**
   * The branch of the store.
   * @example 'Downtown Branch'
   */
  branch: string;

  /**
   * Description of the store.
   * @example 'A premium retail store offering a variety of products.'
   */
  description: string;

  /**
   * Tax identifier for the store.
   * @example '123456'
   */
  tax_identifier: string;

  /**
   * The website of the store.
   * @example 'https://bestmart.com'
   */
  website: string;

  /**
   * Location details of the store.
   * @example { address: {...}, location: {...} }
   */
  store_location: StoreLocation;

  /**
   * Logo picture of the store.
   * @example { picture_id: 'storeLogo123', current_url: 'https://bestmart.com/logo.jpg', is_automatically_created: false }
   */
  logo_picture: LogoPicture;

  /**
   * Time zone of the store.
   * @example 'America/New_York'
   */
  store_time_zone: string;

  /**
   * Whether the store is hidden.
   * @example false
   */
  hidden: boolean;

  /**
   * The count of favorites for the store.
   * @example 500
   */
  favorite_count: number;

  /**
   * Whether the store cares about customers.
   * @example true
   */
  we_care: boolean;

  /**
   * The distance to the store.
   * @example 1.5
   */
  distance: number;

  /**
   * Cover picture of the store.
   * @example { picture_id: 'storeCover456', current_url: 'https://example.com/cover.jpg', is_automatically_created: false }
   */
  cover_picture: CoverPicture;

  /**
   * Whether the store is a manufacturer.
   * @example false
   */
  is_manufacturer: boolean;
}

/**
 * Represents the location of a store.
 */
export interface StoreLocation {
  /**
   * The address of the store location.
   * @example { country: { iso_code: 'US', name: 'United States' }, address_line: '123 Main St', city: 'City', postal_code: '12345' }
   */
  address: Address;

  /**
   * The geographical location of the store.
   * @example { longitude: -122.12345, latitude: 47.6789 }
   */
  location: Location;
}

/**
 * Represents an address.
 */
export interface Address {
  /**
   * The country details of the address.
   * @example { iso_code: 'US', name: 'United States' }
   */
  country: Country;

  /**
   * The address line.
   * @example '123 Main St'
   */
  address_line: string;

  /**
   * The city.
   * @example 'City'
   */
  city: string;

  /**
   * The postal code.
   * @example '12345'
   */
  postal_code: string;
}

/**
 * Represents a country.
 */
export interface Country {
  /**
   * The ISO code of the country.
   * @example 'US'
   */
  iso_code: string;

  /**
   * The name of the country.
   * @example 'United States'
   */
  name: string;
}

/**
 * Represents a geographical location.
 */
export interface Location {
  /**
   * The longitude of the location.
   * @example -122.12345
   */
  longitude: number;

  /**
   * The latitude of the location.
   * @example 47.6789
   */
  latitude: number;
}

/**
 * Represents a pickup interval.
 */
export interface PickupInterval {
  /**
   * The start time of the pickup interval.
   * @example '2023-08-25 10:00:00'
   */
  start: string;

  /**
   * The end time of the pickup interval.
   * @example '2023-08-25 12:00:00'
   */
  end: string;
}

/**
 * Represents a pickup location.
 */
export interface PickupLocation {
  /**
   * The address of the pickup location.
   * @example { country: { iso_code: 'US', name: 'United States' }, address_line: '456 Park Ave', city: 'City', postal_code: '54321' }
   */
  address: Address;

  /**
   * The geographical location of the pickup location.
   * @example { longitude: -122.98765, latitude: 48.7654 }
   */
  location: Location;
}
