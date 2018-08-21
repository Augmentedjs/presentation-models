import { AbstractCollection } from "next-core-model";
import { sync } from "presentation-request";

/**
 * Collection Class
 * @extends Augmented.AbstractCollection
 */
class Collection extends AbstractCollection {
  constructor(models, options) {
    super(models, options);

    this._uri = null;

    if (options && options.url) {
      console.warn("passing url is deprecated, use uri.");
      this._uri = options.url;
    }

    if (options && options.uri) {
      this._uri = options.uri;
    }
  };

  /**
   * @property {string} url The url for the datasource (if applicable)
   * @deprecated
   */

  /**
    * @property {string} uri The uri for the datasource (if applicable)
    */

  get url() {
    console.warn("using url is deprecated, use uri.");
    return this._uri;
  };

  set url(uri) {
    console.warn("using url is deprecated, use uri.");
    this._uri = uri;
  };

  get uri() {
    return this._uri;
  };

  set uri(uri) {
    this._uri = uri;
  };

  /**
   * Sync collection data to bound REST call
   * @param {string} method The method to Unsuccessfull
   * @param {Model} model The model to Sync
   * @param {object} options The options to pass
   * @returns {function} Returns a request function
   */
  async sync(method, model, options) {
    if (!options) {
      options = {};
    }
    if (this._uri) {
      options.uri = this._uri;
    } else {
      console.warn("no uri?! :/");
    }

    // TODO: pass this to the fetch
    if (this.crossOrigin === true) {
      options.crossDomain = true;
    }
    if (!options.xhrFields) {
      options.xhrFields = {
        withCredentials: true
      };
    }

    // TODO: Do I need this?
    if (this.mock) {
      options.mock = this.mock;
    }

    const fetchAsyncA = await sync(method, model, options);
    //console.debug("in collection " + fetchAsyncA);
    return fetchAsyncA;
  };

  /**
   * Fetch the collection
   * @param {object} options Any options to pass
   */
  fetch(options) {
    return this.sync("read", this, options);
  };
  /**
   * Save the collection
   * @param {object} options Any options to pass
   */
  save(options) {
    return this.sync("create", this, options);
  };
  /**
   * Update the collection
   * @param {object} options Any options to pass
   */
  update(options) {
    return this.sync("update", this, options);
  };
  /**
   * Destroy the collection
   * @param {object} options Any options to pass
   */
  destroy(options) {
    return this.sync("delete", this, options);
  };
};

export default Collection;
