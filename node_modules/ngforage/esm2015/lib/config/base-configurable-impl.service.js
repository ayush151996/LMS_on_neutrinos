/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject } from '@angular/core';
import 'localforage';
import { InstanceFactory } from '../instance-factory/instance-factory.service';
import { setToStringTag } from '../misc/setToStringTag.function';
import { NgForageConfig } from './ng-forage-config.service';
/**
 * \@internal
 * @type {?}
 */
const store$ = Symbol('Store');
/**
 * Abstract service-level configuration layer for NgForage
 * @abstract
 */
export class BaseConfigurableImpl {
    /**
     * \@internal
     * @param {?} config
     * @param {?} instanceFactory
     */
    constructor(config, instanceFactory) {
        /**
         * \@internal
         */
        this.config = {};
        this.baseConfig = config;
        this.fact = instanceFactory;
    }
    /**
     * A description of the database, essentially for developer usage.
     * \@default ""
     * @return {?}
     */
    get description() {
        return this.config.description || this.baseConfig.description;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set description(v) {
        this.config.description = v;
        this.storeNeedsRecalc = true;
    }
    /**
     * The preferred driver(s) to use.
     * \@default IndexedDB, WebSQL and localStorage
     * @return {?}
     */
    get driver() {
        return this.config.driver || this.baseConfig.driver;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set driver(v) {
        this.config.driver = v;
        this.storeNeedsRecalc = true;
    }
    /**
     * The name of the database. May appear during storage limit prompts. Useful to use the name of your app here.
     * In localStorage, this is used as a key prefix for all keys stored in localStorage.
     * \@default ngForage
     * @return {?}
     */
    get name() {
        return this.config.name || this.baseConfig.name;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set name(v) {
        this.config.name = v;
        this.storeNeedsRecalc = true;
    }
    /**
     * The size of the database in bytes. Used only in WebSQL for now.
     * \@default 4980736
     * @return {?}
     */
    get size() {
        return this.config.size || this.baseConfig.size;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set size(v) {
        this.config.size = v;
        this.storeNeedsRecalc = true;
    }
    /**
     * The name of the datastore.
     * In IndexedDB this is the dataStore,
     * in WebSQL this is the name of the key/value table in the database.
     * Must be alphanumeric, with underscores.
     * Any non-alphanumeric characters will be converted to underscores.
     * \@default ng_forage
     * @return {?}
     */
    get storeName() {
        return this.config.storeName || this.baseConfig.storeName;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set storeName(v) {
        this.config.storeName = v;
        this.storeNeedsRecalc = true;
    }
    /**
     * The version of your database. May be used for upgrades in the future; currently unused.
     * \@default 1.0
     * @return {?}
     */
    get version() {
        return 'version' in this.config ? (/** @type {?} */ (this.config.version)) : this.baseConfig.version;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set version(v) {
        this.config.version = v;
        this.storeNeedsRecalc = true;
    }
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    get finalConfig() {
        return Object.assign({}, this.baseConfig.config, this.config);
    }
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    get store() {
        if (this.storeNeedsRecalc || !this[store$]) {
            this[store$] = this.fact.getInstance(this.finalConfig);
            this.storeNeedsRecalc = false;
        }
        return this[store$];
    }
    /**
     * Bulk-set configuration options
     * @template THIS
     * @this {THIS}
     * @param {?} opts The configuration
     * @return {THIS}
     */
    configure(opts) {
        opts = opts || {};
        if (Array.isArray(opts.driver)) {
            opts.driver = opts.driver.slice();
        }
        Object.assign((/** @type {?} */ (this)).config, opts);
        (/** @type {?} */ (this)).storeNeedsRecalc = true;
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    toJSON() {
        return {
            description: this.description,
            driver: this.driver,
            name: this.name,
            size: this.size,
            storeName: this.storeName,
            version: this.version
        };
    }
    /**
     * @return {?}
     */
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
/** @nocollapse */
BaseConfigurableImpl.ctorParameters = () => [
    { type: NgForageConfig, decorators: [{ type: Inject, args: [NgForageConfig,] }] },
    { type: InstanceFactory, decorators: [{ type: Inject, args: [InstanceFactory,] }] }
];
if (false) {
    /**
     * \@internal
     * @type {?}
     * @protected
     */
    BaseConfigurableImpl.prototype.baseConfig;
    /**
     * \@internal
     * @type {?}
     * @protected
     */
    BaseConfigurableImpl.prototype.config;
    /**
     * \@internal
     * @type {?}
     * @protected
     */
    BaseConfigurableImpl.prototype.fact;
    /**
     * \@internal
     * @type {?}
     * @protected
     */
    BaseConfigurableImpl.prototype.storeNeedsRecalc;
}
setToStringTag(BaseConfigurableImpl, 'BaseConfigurable');
Object.defineProperty((/** @type {?} */ (BaseConfigurableImpl)), 'storeNeedsRecalc', {
    configurable: true,
    enumerable: true,
    value: true,
    writable: true
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jb25maWd1cmFibGUtaW1wbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdmb3JhZ2UvIiwic291cmNlcyI6WyJsaWIvY29uZmlnL2Jhc2UtY29uZmlndXJhYmxlLWltcGwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyQyxPQUFPLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sOENBQThDLENBQUM7QUFFN0UsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBRS9ELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7TUFJcEQsTUFBTSxHQUFrQixNQUFNLENBQUMsT0FBTyxDQUFDOzs7OztBQUs3QyxNQUFNLE9BQWdCLG9CQUFvQjs7Ozs7O0lBZXhDLFlBQTJDLE1BQXNCLEVBQ3JCLGVBQWdDOzs7O1FBVnpELFdBQU0sR0FBb0IsRUFBRSxDQUFDO1FBVzlDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQU1ELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO0lBQ2hFLENBQUM7Ozs7O0lBRUQsSUFBVyxXQUFXLENBQUMsQ0FBUztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFNRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO0lBQ3RE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QUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVNLE1BQU07UUFDWCxPQUFPO1lBQ0wsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUM7SUFDSixDQUFDOzs7O0lBRU0sUUFBUTtRQUNiLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O1lBbEtLLGNBQWMsdUJBd0JBLE1BQU0sU0FBQyxjQUFjO1lBNUJuQyxlQUFlLHVCQTZCRCxNQUFNLFNBQUMsZUFBZTs7Ozs7Ozs7SUFiMUMsMENBQThDOzs7Ozs7SUFHOUMsc0NBQWdEOzs7Ozs7SUFHaEQsb0NBQXlDOzs7Ozs7SUFHekMsZ0RBQW9DOztBQWdKdEMsY0FBYyxDQUFDLG9CQUFvQixFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFDekQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxtQkFBSyxvQkFBb0IsRUFBQSxFQUFFLGtCQUFrQixFQUFFO0lBQ25FLFlBQVksRUFBRSxJQUFJO0lBQ2xCLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLEtBQUssRUFBRSxJQUFJO0lBQ1gsUUFBUSxFQUFFLElBQUk7Q0FDZixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgJ2xvY2FsZm9yYWdlJztcbmltcG9ydCB7SW5zdGFuY2VGYWN0b3J5fSBmcm9tICcuLi9pbnN0YW5jZS1mYWN0b3J5L2luc3RhbmNlLWZhY3Rvcnkuc2VydmljZSc7XG5pbXBvcnQge0RyaXZlclR5cGV9IGZyb20gJy4uL21pc2MvZHJpdmVyLXR5cGUudHlwZSc7XG5pbXBvcnQge3NldFRvU3RyaW5nVGFnfSBmcm9tICcuLi9taXNjL3NldFRvU3RyaW5nVGFnLmZ1bmN0aW9uJztcbmltcG9ydCB7QmFzZUNvbmZpZ3VyYWJsZX0gZnJvbSAnLi9iYXNlLWNvbmZpZ3VyYWJsZSc7XG5pbXBvcnQge05nRm9yYWdlQ29uZmlnfSBmcm9tICcuL25nLWZvcmFnZS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQge05nRm9yYWdlT3B0aW9uc30gZnJvbSAnLi9uZy1mb3JhZ2Utb3B0aW9ucyc7XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmNvbnN0IHN0b3JlJDogdW5pcXVlIHN5bWJvbCA9IFN5bWJvbCgnU3RvcmUnKTtcblxuLyoqXG4gKiBBYnN0cmFjdCBzZXJ2aWNlLWxldmVsIGNvbmZpZ3VyYXRpb24gbGF5ZXIgZm9yIE5nRm9yYWdlXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQ29uZmlndXJhYmxlSW1wbCBpbXBsZW1lbnRzIEJhc2VDb25maWd1cmFibGUge1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGJhc2VDb25maWc6IE5nRm9yYWdlQ29uZmlnO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvbmZpZzogTmdGb3JhZ2VPcHRpb25zID0ge307XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgZmFjdDogSW5zdGFuY2VGYWN0b3J5O1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIHN0b3JlTmVlZHNSZWNhbGM6IGJvb2xlYW47XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoQEluamVjdChOZ0ZvcmFnZUNvbmZpZykgY29uZmlnOiBOZ0ZvcmFnZUNvbmZpZyxcbiAgICAgICAgICAgICAgICAgICAgIEBJbmplY3QoSW5zdGFuY2VGYWN0b3J5KSBpbnN0YW5jZUZhY3Rvcnk6IEluc3RhbmNlRmFjdG9yeSkge1xuICAgIHRoaXMuYmFzZUNvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLmZhY3QgPSBpbnN0YW5jZUZhY3Rvcnk7XG4gIH1cblxuICAvKipcbiAgICogQSBkZXNjcmlwdGlvbiBvZiB0aGUgZGF0YWJhc2UsIGVzc2VudGlhbGx5IGZvciBkZXZlbG9wZXIgdXNhZ2UuXG4gICAqIEBkZWZhdWx0IFwiXCJcbiAgICovXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZGVzY3JpcHRpb24gfHwgdGhpcy5iYXNlQ29uZmlnLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgcHVibGljIHNldCBkZXNjcmlwdGlvbih2OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbmZpZy5kZXNjcmlwdGlvbiA9IHY7XG4gICAgdGhpcy5zdG9yZU5lZWRzUmVjYWxjID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcHJlZmVycmVkIGRyaXZlcihzKSB0byB1c2UuXG4gICAqIEBkZWZhdWx0IEluZGV4ZWREQiwgV2ViU1FMIGFuZCBsb2NhbFN0b3JhZ2VcbiAgICovXG4gIHB1YmxpYyBnZXQgZHJpdmVyKCk6IERyaXZlclR5cGUgfCBEcml2ZXJUeXBlW10ge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5kcml2ZXIgfHwgdGhpcy5iYXNlQ29uZmlnLmRyaXZlcjtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgZHJpdmVyKHY6IERyaXZlclR5cGUgfCBEcml2ZXJUeXBlW10pIHtcbiAgICB0aGlzLmNvbmZpZy5kcml2ZXIgPSB2O1xuICAgIHRoaXMuc3RvcmVOZWVkc1JlY2FsYyA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIGRhdGFiYXNlLiBNYXkgYXBwZWFyIGR1cmluZyBzdG9yYWdlIGxpbWl0IHByb21wdHMuIFVzZWZ1bCB0byB1c2UgdGhlIG5hbWUgb2YgeW91ciBhcHAgaGVyZS5cbiAgICogSW4gbG9jYWxTdG9yYWdlLCB0aGlzIGlzIHVzZWQgYXMgYSBrZXkgcHJlZml4IGZvciBhbGwga2V5cyBzdG9yZWQgaW4gbG9jYWxTdG9yYWdlLlxuICAgKiBAZGVmYXVsdCBuZ0ZvcmFnZVxuICAgKi9cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLm5hbWUgfHwgdGhpcy5iYXNlQ29uZmlnLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgc2V0IG5hbWUodjogc3RyaW5nKSB7XG4gICAgdGhpcy5jb25maWcubmFtZSA9IHY7XG4gICAgdGhpcy5zdG9yZU5lZWRzUmVjYWxjID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgZGF0YWJhc2UgaW4gYnl0ZXMuIFVzZWQgb25seSBpbiBXZWJTUUwgZm9yIG5vdy5cbiAgICogQGRlZmF1bHQgNDk4MDczNlxuICAgKi9cbiAgcHVibGljIGdldCBzaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnNpemUgfHwgdGhpcy5iYXNlQ29uZmlnLnNpemU7XG4gIH1cblxuICBwdWJsaWMgc2V0IHNpemUodjogbnVtYmVyKSB7XG4gICAgdGhpcy5jb25maWcuc2l6ZSA9IHY7XG4gICAgdGhpcy5zdG9yZU5lZWRzUmVjYWxjID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgZGF0YXN0b3JlLlxuICAgKiBJbiBJbmRleGVkREIgdGhpcyBpcyB0aGUgZGF0YVN0b3JlLFxuICAgKiBpbiBXZWJTUUwgdGhpcyBpcyB0aGUgbmFtZSBvZiB0aGUga2V5L3ZhbHVlIHRhYmxlIGluIHRoZSBkYXRhYmFzZS5cbiAgICogTXVzdCBiZSBhbHBoYW51bWVyaWMsIHdpdGggdW5kZXJzY29yZXMuXG4gICAqIEFueSBub24tYWxwaGFudW1lcmljIGNoYXJhY3RlcnMgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gdW5kZXJzY29yZXMuXG4gICAqIEBkZWZhdWx0IG5nX2ZvcmFnZVxuICAgKi9cbiAgcHVibGljIGdldCBzdG9yZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuc3RvcmVOYW1lIHx8IHRoaXMuYmFzZUNvbmZpZy5zdG9yZU5hbWU7XG4gIH1cblxuICBwdWJsaWMgc2V0IHN0b3JlTmFtZSh2OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbmZpZy5zdG9yZU5hbWUgPSB2O1xuICAgIHRoaXMuc3RvcmVOZWVkc1JlY2FsYyA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHZlcnNpb24gb2YgeW91ciBkYXRhYmFzZS4gTWF5IGJlIHVzZWQgZm9yIHVwZ3JhZGVzIGluIHRoZSBmdXR1cmU7IGN1cnJlbnRseSB1bnVzZWQuXG4gICAqIEBkZWZhdWx0IDEuMFxuICAgKi9cbiAgcHVibGljIGdldCB2ZXJzaW9uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuICd2ZXJzaW9uJyBpbiB0aGlzLmNvbmZpZyA/IDxudW1iZXI+dGhpcy5jb25maWcudmVyc2lvbiA6IHRoaXMuYmFzZUNvbmZpZy52ZXJzaW9uO1xuICB9XG5cbiAgcHVibGljIHNldCB2ZXJzaW9uKHY6IG51bWJlcikge1xuICAgIHRoaXMuY29uZmlnLnZlcnNpb24gPSB2O1xuICAgIHRoaXMuc3RvcmVOZWVkc1JlY2FsYyA9IHRydWU7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBnZXQgZmluYWxDb25maWcoKTogTmdGb3JhZ2VPcHRpb25zIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgdGhpcy5iYXNlQ29uZmlnLmNvbmZpZyxcbiAgICAgIHRoaXMuY29uZmlnXG4gICAgKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIGdldCBzdG9yZSgpOiBMb2NhbEZvcmFnZSB7XG4gICAgaWYgKHRoaXMuc3RvcmVOZWVkc1JlY2FsYyB8fCAhdGhpc1tzdG9yZSRdKSB7XG4gICAgICB0aGlzW3N0b3JlJF0gPSB0aGlzLmZhY3QuZ2V0SW5zdGFuY2UodGhpcy5maW5hbENvbmZpZyk7XG4gICAgICB0aGlzLnN0b3JlTmVlZHNSZWNhbGMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1tzdG9yZSRdO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1bGstc2V0IGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xuICAgKiBAcGFyYW0gb3B0cyBUaGUgY29uZmlndXJhdGlvblxuICAgKi9cbiAgcHVibGljIGNvbmZpZ3VyZShvcHRzOiBOZ0ZvcmFnZU9wdGlvbnMpOiB0aGlzIHtcbiAgICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KG9wdHMuZHJpdmVyKSkge1xuICAgICAgb3B0cy5kcml2ZXIgPSBvcHRzLmRyaXZlci5zbGljZSgpO1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24odGhpcy5jb25maWcsIG9wdHMpO1xuICAgIHRoaXMuc3RvcmVOZWVkc1JlY2FsYyA9IHRydWU7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyB0b0pTT04oKTogUGFydGlhbDxOZ0ZvcmFnZU9wdGlvbnM+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBkcml2ZXI6IHRoaXMuZHJpdmVyLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgICAgc3RvcmVOYW1lOiB0aGlzLnN0b3JlTmFtZSxcbiAgICAgIHZlcnNpb246IHRoaXMudmVyc2lvblxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy50b0pTT04oKSk7XG4gIH1cbn1cblxuc2V0VG9TdHJpbmdUYWcoQmFzZUNvbmZpZ3VyYWJsZUltcGwsICdCYXNlQ29uZmlndXJhYmxlJyk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoPGFueT5CYXNlQ29uZmlndXJhYmxlSW1wbCwgJ3N0b3JlTmVlZHNSZWNhbGMnLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgdmFsdWU6IHRydWUsXG4gIHdyaXRhYmxlOiB0cnVlXG59KTtcbiJdfQ==