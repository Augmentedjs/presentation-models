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

    /**
     * Cross Origin property
     * @property {boolean} crossOrigin Cross Origin property
     */
    this.crossOrigin = false;
    /**
     * @property {string} uri The uri for the datasource (if applicable)
     */
    this._uri = null;

    if (options && options.uri) {
      this._uri = options.uri;
    }
  };

  get uri() {
    return this._uri;
  };

  set uri(uri) {
    this._uri = uri;
  };

  /**
   * sync - Sync model data to bound REST call
   */
  async sync(method = "READ", model, options = {}) {
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

    return await sync(method, model, options);
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
