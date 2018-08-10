import PAGINATION_API_TYPE from "./api.js";
import PaginatedCollection from "../collection/paginated.js";

/**
 * Pagination factory for returning pagination collections of an API type
 * @memberof Pagination
 */
class PaginationFactory {
  constructor() {
    this.type = PAGINATION_API_TYPE;
  };

  /**
   * Get a pagination collection of type
   * @method getPaginatedCollection

   * @param {Pagination.PAGINATION_API_TYPE} apiType The API type to return an instance of
   * @param {object} data Collection models
   * @param {object} options Collection options
   * @static
   */
  static getPaginatedCollection(apiType, data, options) {
    const models = (data) ? data : {};
    let collection = null;

    if (!apiType) {
      apiType = PAGINATION_API_TYPE.GITHUB;
    }
    if (apiType === PAGINATION_API_TYPE.GITHUB) {
      collection = new PaginatedCollection(models, options);
      collection.setPaginationConfiguration({
        currentPageParam: "page",
        pageSizeParam: "per_page"
      });
    } else if (apiType === PAGINATION_API_TYPE.SOLR) {
      collection = new PaginatedCollection(models, options);
      collection.setPaginationConfiguration({
        currentPageParam: "start",
        pageSizeParam: "rows"
      });
    } else if (apiType === PAGINATION_API_TYPE.DATABASE) {
      collection = new PaginatedCollection(models, options);
      collection.setPaginationConfiguration({
        currentPageParam: "offset",
        pageSizeParam: "limit"
      });
    }
    return collection;
  }
};

export default PaginationFactory;
