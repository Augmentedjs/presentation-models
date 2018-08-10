import Augmented from "augmentedjs-next";
import { sync } from "presentation-request";

/**
 * Model <br/>
 * Supports: <ul>
 * <li>REST</li>
 * <li>Validation and Schemas</li>
 * <li>Security</li>
 * </ul>
 * @extends Augmented.AbstractModel
 */
class Model extends Augmented.AbstractModel {
  constructor(attributes, options, ...args) {
    super(attributes, options, args);
    this.mock = false;
    this.crossOrigin = false;

    if (options && options.url) {
      this._url = options.url;
    } else {
      this._url = null;
    };
  };

  /**
   * @property {string} url The url for the datasource (if applicable)
   */

  /**
   * @returns {string|function} url The URL or a function to retun a URL object
   */
  get url() {
    return this._url;
  };
  /**
   * @param {string|function} url The URL or a function to retun a URL object
   */
  set url(url) {
    this._url = url;
  };

  /**
   * mock property
   * @property {boolean} mock Sets mock mode in the model
   */

  /**
   * Cross Origin property
   * @property {boolean} crossOrigin Cross Origin property
   */

  /**
   * sync - Sync model data to bound REST call
   * @method sync
   */
  async sync(method, model, options) {
    if (!options) {
      options = {};
    }
    if (this._url) {
      options.url = this._url;
    } else {
      console.warn("no url?! :/");
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
    return fetchAsyncA;
  };

  /**
   * Fetch the model
   * @param {object} options Any options to pass
   */
  fetch(options) {
    return this.sync("read", this, options);
  };
  /**
   * Save the model
   * @param {object} options Any options to pass
   */
  save(options) {
    return this.sync("create", this, options);
  };
  /**
   * Update the model
   * @param {object} options Any options to pass
   */
  update(options) {
    return this.sync("update", this, options);
  };
  /**
   * Destroy the model
   * @param {object} options Any options to pass
   */
  destroy(options) {
    return this.sync("delete", this, options);
  };
};

export default Model;
