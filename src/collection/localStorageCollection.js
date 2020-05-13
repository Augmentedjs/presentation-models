import { AbstractCollection } from "next-core-model";
import { LocalStorageFactory } from "presentation-storage";

const DEFAULT_NAMESPACE = "augmented.localstorage.collection";
const DEFAULT_KEY = `${DEFAULT_NAMESPACE}.key`;

/**
 * A local storage-based Collection
 * @extends AbstractCollection
 */
class LocalStorageCollection extends AbstractCollection {
  constructor(models, options) {
    if (!options) {
      options = {};
    }

    super(models, options);

    if (options.persist) {
      this._persist = options.persist;
    } else {
      this._persist = false;
    }

    if (options.key) {
      this._key = options.key;
    } else {
      this._key = DEFAULT_KEY;
    }

    if (options.namespace) {
      this._namespace = options.namespace;
    } else {
      this._namespace = DEFAULT_NAMESPACE;
    }

    this._storage = LocalStorageFactory.getStorage(this._persist, this._namespace);
  };

  /**
   * Base key name for the collection (simular to url for rest-based)
   * @property {string} key The key
   */
   get key() {
     return this._key;
   };

  /**
   * is Persistant or not
   * @property {boolean} persist Persistant property
   */
   get persist() {
     return this._persist;
   };

   /**
    * The namespace
    * @property {boolean} namespace
    */
   get namespace() {
     return this._namespace;
   };

  /**
   * Storage for the collection
   * @property {string} storage The storage used for the collection
   * @private
   */

  /**
   * Initialize the model with needed wireing
   * @param {object} options Any options to pass
   */
  initialize(options) {};
  /**
   * Custom init method for the model (called at inititlize)
   * @param {object} options Any options to pass
   */
  init(options) {};
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

  /**
   * Sync method for Collection
   */
  sync(method, model, options = {}) {
    let j = {};
    try {
      if (method === "create" || method === "update") {
        j = this.toJSON();
        this._storage.setItem(this._key, j);
      } else if (method === "delete") {
        this._storage.removeItem(this._key);
      } else {
        // read
        j = this._storage.getItem(this._key);
        this.reset(j);
      }
    } catch (e) {
      console.error(e);
      throw e;
    }
    return j;
  };
};

export default LocalStorageCollection;
