import Model from "./model/model.js";
import Collection from  "./collection/collection.js";
import LocalStorageCollection from "./collection/localStorageCollection.js";
import PaginatedCollection from "./collection/paginated.js";
import PaginationFactory from "./pagination/factory.js";
import PAGINATION_API_TYPE from "./pagination/api.js";

module.exports.Model = Model;
module.exports.Collection = Collection;
module.exports.LocalStorageCollection = LocalStorageCollection;
module.exports.PaginatedCollection = PaginatedCollection;
module.exports.PaginationFactory = PaginationFactory;
module.exports.PAGINATION_API_TYPE = PAGINATION_API_TYPE;
