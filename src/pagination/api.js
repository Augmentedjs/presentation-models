/**
* Types of pagination API
* @enum
* @name PAGINATION_API_TYPE
* @memberof Pagination
* @property {Symbol} GITHUB GitHub API
* @property {Symbol} SOLR SOLR API
* @property {Symbol} DATABASE Database-like API
*/
const PAGINATION_API_TYPE = {};
PAGINATION_API_TYPE.GITHUB = Symbol("github");
PAGINATION_API_TYPE.SOLR = Symbol("solr");
PAGINATION_API_TYPE.DATABASE = Symbol("database");

export default PAGINATION_API_TYPE;
