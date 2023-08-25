/**
 * Options when requesting items.
 *
 * @interface TgtgClientItemsFilters
 */
export interface TgtgClientItemsFilters {
  /**
   * Fetch only favorite businesses.
   *
   * @default false
   * @example true
   */
  favorites_only?: boolean;

  /**
   * Origin coordinates for filtering items by proximity.
   *
   * @default { latitude: 0, longitude: 0 }
   * @example { latitude: 40.7128, longitude: -74.0060 }
   */
  origin?: { latitude: number; longitude: number };

  /**
   * Radius (in kilometers) to filter items by proximity.
   *
   * @default 20
   * @example 10
   */
  radius?: number;

  /**
   * Number of items to retrieve per page.
   *
   * @default 20
   * @example 20
   */
  page_size?: number;

  /**
   * Page number for pagination.
   *
   * @default 1
   * @example 1
   */
  page?: number;

  /**
   * Discover mode for getting items.
   *
   * @default false
   * @example true
   */
  discover?: boolean;

  /**
   * Categories of items to include.
   *
   * @default []
   * @example ['food', 'groceries']
   */
  item_categories?: string[];

  /**
   * Diet categories to filter items.
   *
   * @default []
   * @example ['vegetarian', 'vegan']
   */
  diet_categories?: string[];

  /**
   * Search phrase to filter items by name or description.
   *
   * @default ''
   * @example 'pizza'
   */
  search_phrase?: string;

  /**
   * Fetch items with stock available only.
   *
   * @default false
   * @example true
   */
  with_stock_only?: boolean;

  /**
   * Fetch hidden items only.
   *
   * @default false
   * @example true
   */
  hidden_only?: boolean;

  /**
   * Fetch items from stores that care only.
   *
   * @default false
   * @example true
   */
  we_care_only?: boolean;
}
