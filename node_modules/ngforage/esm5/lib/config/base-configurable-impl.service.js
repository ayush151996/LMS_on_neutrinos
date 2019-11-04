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
var store$ = Symbol('Store');
/**
 * Abstract service-level configuration layer for NgForage
 * @abstract
 */
var BaseConfigurableImpl = /** @class */ (function () {
    /** @internal */
    function BaseConfigurableImpl(config, instanceFactory) {
        /**
         * \@internal
         */
        this.config = {};
        this.baseConfig = config;
        this.fact = instanceFactory;
    }
    Object.defineProperty(BaseConfigurableImpl.prototype, "description", {
        /**
         * A description of the database, essentially for developer usage.
         * @default ""
         */
        get: /**
         * A description of the database, essentially for developer usage.
         * \@default ""
         * @return {?}
         */
        function () {
            return this.config.description || this.baseConfig.description;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.config.description = v;
            this.storeNeedsRecalc = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseConfigurableImpl.prototype, "driver", {
        /**
         * The preferred driver(s) to use.
         * @default IndexedDB, WebSQL and localStorage
         */
        get: /**
         * The preferred driver(s) to use.
         * \@default IndexedDB, WebSQL and localStorage
         * @return {?}
         */
        function () {
            return this.config.driver || this.baseConfig.driver;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.config.driver = v;
            this.storeNeedsRecalc = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseConfigurableImpl.prototype, "name", {
        /**
         * The name of the database. May appear during storage limit prompts. Useful to use the name of your app here.
         * In localStorage, this is used as a key prefix for all keys stored in localStorage.
         * @default ngForage
         */
        get: /**
         * The name of the database. May appear during storage limit prompts. Useful to use the name of your app here.
         * In localStorage, this is used as a key prefix for all keys stored in localStorage.
         * \@default ngForage
         * @return {?}
         */
        function () {
            return this.config.name || this.baseConfig.name;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.config.name = v;
            this.storeNeedsRecalc = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseConfigurableImpl.prototype, "size", {
        /**
         * The size of the database in bytes. Used only in WebSQL for now.
         * @default 4980736
         */
        get: /**
         * The size of the database in bytes. Used only in WebSQL for now.
         * \@default 4980736
         * @return {?}
         */
        function () {
            return this.config.size || this.baseConfig.size;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.config.size = v;
            this.storeNeedsRecalc = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseConfigurableImpl.prototype, "storeName", {
        /**
         * The name of the datastore.
         * In IndexedDB this is the dataStore,
         * in WebSQL this is the name of the key/value table in the database.
         * Must be alphanumeric, with underscores.
         * Any non-alphanumeric characters will be converted to underscores.
         * @default ng_forage
         */
        get: /**
         * The name of the datastore.
         * In IndexedDB this is the dataStore,
         * in WebSQL this is the name of the key/value table in the database.
         * Must be alphanumeric, with underscores.
         * Any non-alphanumeric characters will be converted to underscores.
         * \@default ng_forage
         * @return {?}
         */
        function () {
            return this.config.storeName || this.baseConfig.storeName;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.config.storeName = v;
            this.storeNeedsRecalc = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseConfigurableImpl.prototype, "version", {
        /**
         * The version of your database. May be used for upgrades in the future; currently unused.
         * @default 1.0
         */
        get: /**
         * The version of your database. May be used for upgrades in the future; currently unused.
         * \@default 1.0
         * @return {?}
         */
        function () {
            return 'version' in this.config ? (/** @type {?} */ (this.config.version)) : this.baseConfig.version;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.config.version = v;
            this.storeNeedsRecalc = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseConfigurableImpl.prototype, "finalConfig", {
        /** @internal */
        get: /**
         * \@internal
         * @protected
         * @return {?}
         */
        function () {
            return Object.assign({}, this.baseConfig.config, this.config);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseConfigurableImpl.prototype, "store", {
        /** @internal */
        get: /**
         * \@internal
         * @protected
         * @return {?}
         */
        function () {
            if (this.storeNeedsRecalc || !this[store$]) {
                this[store$] = this.fact.getInstance(this.finalConfig);
                this.storeNeedsRecalc = false;
            }
            return this[store$];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Bulk-set configuration options
     * @param opts The configuration
     */
    /**
     * Bulk-set configuration options
     * @template THIS
     * @this {THIS}
     * @param {?} opts The configuration
     * @return {THIS}
     */
    BaseConfigurableImpl.prototype.configure = /**
     * Bulk-set configuration options
     * @template THIS
     * @this {THIS}
     * @param {?} opts The configuration
     * @return {THIS}
     */
    function (opts) {
        opts = opts || {};
        if (Array.isArray(opts.driver)) {
            opts.driver = opts.driver.slice();
        }
        Object.assign((/** @type {?} */ (this)).config, opts);
        (/** @type {?} */ (this)).storeNeedsRecalc = true;
        return (/** @type {?} */ (this));
    };
    /**
     * @return {?}
     */
    BaseConfigurableImpl.prototype.toJSON = /**
     * @return {?}
     */
    function () {
        return {
            description: this.description,
            driver: this.driver,
            name: this.name,
            size: this.size,
            storeName: this.storeName,
            version: this.version
        };
    };
    /**
     * @return {?}
     */
    BaseConfigurableImpl.prototype.toString = /**
     * @return {?}
     */
    function () {
        return JSON.stringify(this.toJSON());
    };
    /** @nocollapse */
    BaseConfigurableImpl.ctorParameters = function () { return [
        { type: NgForageConfig, decorators: [{ type: Inject, args: [NgForageConfig,] }] },
        { type: InstanceFactory, decorators: [{ type: Inject, args: [InstanceFactory,] }] }
    ]; };
    return BaseConfigurableImpl;
}());
export { BaseConfigurableImpl };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jb25maWd1cmFibGUtaW1wbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdmb3JhZ2UvIiwic291cmNlcyI6WyJsaWIvY29uZmlnL2Jhc2UtY29uZmlndXJhYmxlLWltcGwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyQyxPQUFPLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sOENBQThDLENBQUM7QUFFN0UsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBRS9ELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7SUFJcEQsTUFBTSxHQUFrQixNQUFNLENBQUMsT0FBTyxDQUFDOzs7OztBQUs3QztJQWNFLGdCQUFnQjtJQUNoQiw4QkFBMkMsTUFBc0IsRUFDckIsZUFBZ0M7Ozs7UUFWekQsV0FBTSxHQUFvQixFQUFFLENBQUM7UUFXOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQU1ELHNCQUFXLDZDQUFXO1FBSnRCOzs7V0FHRzs7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQ2hFLENBQUM7Ozs7O1FBRUQsVUFBdUIsQ0FBUztZQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUMvQixDQUFDOzs7T0FMQTtJQVdELHNCQUFXLHdDQUFNO1FBSmpCOzs7V0FHRzs7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FB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STtJQUNYLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICdsb2NhbGZvcmFnZSc7XG5pbXBvcnQge0luc3RhbmNlRmFjdG9yeX0gZnJvbSAnLi4vaW5zdGFuY2UtZmFjdG9yeS9pbnN0YW5jZS1mYWN0b3J5LnNlcnZpY2UnO1xuaW1wb3J0IHtEcml2ZXJUeXBlfSBmcm9tICcuLi9taXNjL2RyaXZlci10eXBlLnR5cGUnO1xuaW1wb3J0IHtzZXRUb1N0cmluZ1RhZ30gZnJvbSAnLi4vbWlzYy9zZXRUb1N0cmluZ1RhZy5mdW5jdGlvbic7XG5pbXBvcnQge0Jhc2VDb25maWd1cmFibGV9IGZyb20gJy4vYmFzZS1jb25maWd1cmFibGUnO1xuaW1wb3J0IHtOZ0ZvcmFnZUNvbmZpZ30gZnJvbSAnLi9uZy1mb3JhZ2UtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHtOZ0ZvcmFnZU9wdGlvbnN9IGZyb20gJy4vbmctZm9yYWdlLW9wdGlvbnMnO1xuXG4vKiogQGludGVybmFsICovXG5jb25zdCBzdG9yZSQ6IHVuaXF1ZSBzeW1ib2wgPSBTeW1ib2woJ1N0b3JlJyk7XG5cbi8qKlxuICogQWJzdHJhY3Qgc2VydmljZS1sZXZlbCBjb25maWd1cmF0aW9uIGxheWVyIGZvciBOZ0ZvcmFnZVxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUNvbmZpZ3VyYWJsZUltcGwgaW1wbGVtZW50cyBCYXNlQ29uZmlndXJhYmxlIHtcblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCByZWFkb25seSBiYXNlQ29uZmlnOiBOZ0ZvcmFnZUNvbmZpZztcblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCByZWFkb25seSBjb25maWc6IE5nRm9yYWdlT3B0aW9ucyA9IHt9O1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGZhY3Q6IEluc3RhbmNlRmFjdG9yeTtcblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBzdG9yZU5lZWRzUmVjYWxjOiBib29sZWFuO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKEBJbmplY3QoTmdGb3JhZ2VDb25maWcpIGNvbmZpZzogTmdGb3JhZ2VDb25maWcsXG4gICAgICAgICAgICAgICAgICAgICBASW5qZWN0KEluc3RhbmNlRmFjdG9yeSkgaW5zdGFuY2VGYWN0b3J5OiBJbnN0YW5jZUZhY3RvcnkpIHtcbiAgICB0aGlzLmJhc2VDb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5mYWN0ID0gaW5zdGFuY2VGYWN0b3J5O1xuICB9XG5cbiAgLyoqXG4gICAqIEEgZGVzY3JpcHRpb24gb2YgdGhlIGRhdGFiYXNlLCBlc3NlbnRpYWxseSBmb3IgZGV2ZWxvcGVyIHVzYWdlLlxuICAgKiBAZGVmYXVsdCBcIlwiXG4gICAqL1xuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmRlc2NyaXB0aW9uIHx8IHRoaXMuYmFzZUNvbmZpZy5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgZGVzY3JpcHRpb24odjogc3RyaW5nKSB7XG4gICAgdGhpcy5jb25maWcuZGVzY3JpcHRpb24gPSB2O1xuICAgIHRoaXMuc3RvcmVOZWVkc1JlY2FsYyA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHByZWZlcnJlZCBkcml2ZXIocykgdG8gdXNlLlxuICAgKiBAZGVmYXVsdCBJbmRleGVkREIsIFdlYlNRTCBhbmQgbG9jYWxTdG9yYWdlXG4gICAqL1xuICBwdWJsaWMgZ2V0IGRyaXZlcigpOiBEcml2ZXJUeXBlIHwgRHJpdmVyVHlwZVtdIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZHJpdmVyIHx8IHRoaXMuYmFzZUNvbmZpZy5kcml2ZXI7XG4gIH1cblxuICBwdWJsaWMgc2V0IGRyaXZlcih2OiBEcml2ZXJUeXBlIHwgRHJpdmVyVHlwZVtdKSB7XG4gICAgdGhpcy5jb25maWcuZHJpdmVyID0gdjtcbiAgICB0aGlzLnN0b3JlTmVlZHNSZWNhbGMgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBkYXRhYmFzZS4gTWF5IGFwcGVhciBkdXJpbmcgc3RvcmFnZSBsaW1pdCBwcm9tcHRzLiBVc2VmdWwgdG8gdXNlIHRoZSBuYW1lIG9mIHlvdXIgYXBwIGhlcmUuXG4gICAqIEluIGxvY2FsU3RvcmFnZSwgdGhpcyBpcyB1c2VkIGFzIGEga2V5IHByZWZpeCBmb3IgYWxsIGtleXMgc3RvcmVkIGluIGxvY2FsU3RvcmFnZS5cbiAgICogQGRlZmF1bHQgbmdGb3JhZ2VcbiAgICovXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5uYW1lIHx8IHRoaXMuYmFzZUNvbmZpZy5uYW1lO1xuICB9XG5cbiAgcHVibGljIHNldCBuYW1lKHY6IHN0cmluZykge1xuICAgIHRoaXMuY29uZmlnLm5hbWUgPSB2O1xuICAgIHRoaXMuc3RvcmVOZWVkc1JlY2FsYyA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIGRhdGFiYXNlIGluIGJ5dGVzLiBVc2VkIG9ubHkgaW4gV2ViU1FMIGZvciBub3cuXG4gICAqIEBkZWZhdWx0IDQ5ODA3MzZcbiAgICovXG4gIHB1YmxpYyBnZXQgc2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5zaXplIHx8IHRoaXMuYmFzZUNvbmZpZy5zaXplO1xuICB9XG5cbiAgcHVibGljIHNldCBzaXplKHY6IG51bWJlcikge1xuICAgIHRoaXMuY29uZmlnLnNpemUgPSB2O1xuICAgIHRoaXMuc3RvcmVOZWVkc1JlY2FsYyA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIGRhdGFzdG9yZS5cbiAgICogSW4gSW5kZXhlZERCIHRoaXMgaXMgdGhlIGRhdGFTdG9yZSxcbiAgICogaW4gV2ViU1FMIHRoaXMgaXMgdGhlIG5hbWUgb2YgdGhlIGtleS92YWx1ZSB0YWJsZSBpbiB0aGUgZGF0YWJhc2UuXG4gICAqIE11c3QgYmUgYWxwaGFudW1lcmljLCB3aXRoIHVuZGVyc2NvcmVzLlxuICAgKiBBbnkgbm9uLWFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzIHdpbGwgYmUgY29udmVydGVkIHRvIHVuZGVyc2NvcmVzLlxuICAgKiBAZGVmYXVsdCBuZ19mb3JhZ2VcbiAgICovXG4gIHB1YmxpYyBnZXQgc3RvcmVOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnN0b3JlTmFtZSB8fCB0aGlzLmJhc2VDb25maWcuc3RvcmVOYW1lO1xuICB9XG5cbiAgcHVibGljIHNldCBzdG9yZU5hbWUodjogc3RyaW5nKSB7XG4gICAgdGhpcy5jb25maWcuc3RvcmVOYW1lID0gdjtcbiAgICB0aGlzLnN0b3JlTmVlZHNSZWNhbGMgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB2ZXJzaW9uIG9mIHlvdXIgZGF0YWJhc2UuIE1heSBiZSB1c2VkIGZvciB1cGdyYWRlcyBpbiB0aGUgZnV0dXJlOyBjdXJyZW50bHkgdW51c2VkLlxuICAgKiBAZGVmYXVsdCAxLjBcbiAgICovXG4gIHB1YmxpYyBnZXQgdmVyc2lvbigpOiBudW1iZXIge1xuICAgIHJldHVybiAndmVyc2lvbicgaW4gdGhpcy5jb25maWcgPyA8bnVtYmVyPnRoaXMuY29uZmlnLnZlcnNpb24gOiB0aGlzLmJhc2VDb25maWcudmVyc2lvbjtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgdmVyc2lvbih2OiBudW1iZXIpIHtcbiAgICB0aGlzLmNvbmZpZy52ZXJzaW9uID0gdjtcbiAgICB0aGlzLnN0b3JlTmVlZHNSZWNhbGMgPSB0cnVlO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgZ2V0IGZpbmFsQ29uZmlnKCk6IE5nRm9yYWdlT3B0aW9ucyB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIHRoaXMuYmFzZUNvbmZpZy5jb25maWcsXG4gICAgICB0aGlzLmNvbmZpZ1xuICAgICk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBnZXQgc3RvcmUoKTogTG9jYWxGb3JhZ2Uge1xuICAgIGlmICh0aGlzLnN0b3JlTmVlZHNSZWNhbGMgfHwgIXRoaXNbc3RvcmUkXSkge1xuICAgICAgdGhpc1tzdG9yZSRdID0gdGhpcy5mYWN0LmdldEluc3RhbmNlKHRoaXMuZmluYWxDb25maWcpO1xuICAgICAgdGhpcy5zdG9yZU5lZWRzUmVjYWxjID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNbc3RvcmUkXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWxrLXNldCBjb25maWd1cmF0aW9uIG9wdGlvbnNcbiAgICogQHBhcmFtIG9wdHMgVGhlIGNvbmZpZ3VyYXRpb25cbiAgICovXG4gIHB1YmxpYyBjb25maWd1cmUob3B0czogTmdGb3JhZ2VPcHRpb25zKTogdGhpcyB7XG4gICAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRzLmRyaXZlcikpIHtcbiAgICAgIG9wdHMuZHJpdmVyID0gb3B0cy5kcml2ZXIuc2xpY2UoKTtcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLCBvcHRzKTtcbiAgICB0aGlzLnN0b3JlTmVlZHNSZWNhbGMgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgdG9KU09OKCk6IFBhcnRpYWw8TmdGb3JhZ2VPcHRpb25zPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgZHJpdmVyOiB0aGlzLmRyaXZlcixcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSxcbiAgICAgIHN0b3JlTmFtZTogdGhpcy5zdG9yZU5hbWUsXG4gICAgICB2ZXJzaW9uOiB0aGlzLnZlcnNpb25cbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMudG9KU09OKCkpO1xuICB9XG59XG5cbnNldFRvU3RyaW5nVGFnKEJhc2VDb25maWd1cmFibGVJbXBsLCAnQmFzZUNvbmZpZ3VyYWJsZScpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KDxhbnk+QmFzZUNvbmZpZ3VyYWJsZUltcGwsICdzdG9yZU5lZWRzUmVjYWxjJywge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGVudW1lcmFibGU6IHRydWUsXG4gIHZhbHVlOiB0cnVlLFxuICB3cml0YWJsZTogdHJ1ZVxufSk7XG4iXX0=