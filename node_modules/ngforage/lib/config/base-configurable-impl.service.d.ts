import 'localforage';
import { DriverType } from '../misc/driver-type.type';
import { BaseConfigurable } from './base-configurable';
import { NgForageOptions } from './ng-forage-options';
/**
 * Abstract service-level configuration layer for NgForage
 */
export declare abstract class BaseConfigurableImpl implements BaseConfigurable {
    /**
     * A description of the database, essentially for developer usage.
     * @default ""
     */
    description: string;
    /**
     * The preferred driver(s) to use.
     * @default IndexedDB, WebSQL and localStorage
     */
    driver: DriverType | DriverType[];
    /**
     * The name of the database. May appear during storage limit prompts. Useful to use the name of your app here.
     * In localStorage, this is used as a key prefix for all keys stored in localStorage.
     * @default ngForage
     */
    name: string;
    /**
     * The size of the database in bytes. Used only in WebSQL for now.
     * @default 4980736
     */
    size: number;
    /**
     * The name of the datastore.
     * In IndexedDB this is the dataStore,
     * in WebSQL this is the name of the key/value table in the database.
     * Must be alphanumeric, with underscores.
     * Any non-alphanumeric characters will be converted to underscores.
     * @default ng_forage
     */
    storeName: string;
    /**
     * The version of your database. May be used for upgrades in the future; currently unused.
     * @default 1.0
     */
    version: number;
    /**
     * Bulk-set configuration options
     * @param opts The configuration
     */
    configure(opts: NgForageOptions): this;
    toJSON(): Partial<NgForageOptions>;
    toString(): string;
}
