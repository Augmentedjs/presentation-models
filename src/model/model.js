import { AbstractModel } from "next-core-model";
import { sync } from "presentation-request";

/**
 * Model <br/>
 * Supports: <ul>
 * <li>REST</li>
 * <li>Validation and Schemas</li>
 * <li>Security</li>
 * </ul>
 * @extends AbstractModel
 */
class Model extends AbstractModel {
  constructor(attributes, options, ...args) {
    super(attributes, options, args);
    this.mock = false;
    this.crossOrigin = false;
    this._uri = null;

    if (options && options.uri) {
      this._uri = options.uri;
    }
  };

  /**
    * @property {string} uri The uri for the datasource (if applicable)
    */

  get uri() {
    return this._uri;
  };

  set uri(uri) {
    this._uri = uri;
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
    if (this._uri) {
      options.uri = this._uri;
    }

    if (this.crossOrigin === true) {
      options.crossDomain = true;
    }
    if (!options.xhrFields) {
      options.xhrFields = {
        withCredentials: true
      };
    }

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
