/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A configurable object
 * @record
 */
export function BaseConfigurable() { }
if (false) {
    /**
     * A description of the database, essentially for developer usage.
     * \@default ""
     * @type {?}
     */
    BaseConfigurable.prototype.description;
    /**
     * The preferred driver(s) to use.
     * \@default IndexedDB, WebSQL & localStorage
     * @type {?}
     */
    BaseConfigurable.prototype.driver;
    /**
     * The name of the database. May appear during storage limit prompts. Useful to use the name of your app here.
     * In localStorage, this is used as a key prefix for all keys stored in localStorage.
     * \@default ngForage
     * @type {?}
     */
    BaseConfigurable.prototype.name;
    /**
     * The size of the database in bytes. Used only in WebSQL for now.
     * \@default 4980736
     * @type {?}
     */
    BaseConfigurable.prototype.size;
    /**
     * The name of the datastore.
     * In IndexedDB this is the dataStore,
     * in WebSQL this is the name of the key/value table in the database.
     * Must be alphanumeric, with underscores.
     * Any non-alphanumeric characters will be converted to underscores.
     * \@default ng_forage
     * @type {?}
     */
    BaseConfigurable.prototype.storeName;
    /**
     * The version of your database. May be used for upgrades in the future; currently unused.
     * \@default 1.0
     * @type {?}
     */
    BaseConfigurable.prototype.version;
    /**
     * Bulk-set configuration options
     * @template THIS
     * @this {THIS}
     * @param {?} opts The configuration
     * @return {THIS}
     */
    BaseConfigurable.prototype.configure = function (opts) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jb25maWd1cmFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ2ZvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9jb25maWcvYmFzZS1jb25maWd1cmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFNQSxzQ0FnREM7Ozs7Ozs7SUExQ0MsdUNBQW9COzs7Ozs7SUFNcEIsa0NBQWtDOzs7Ozs7O0lBT2xDLGdDQUFhOzs7Ozs7SUFNYixnQ0FBYTs7Ozs7Ozs7OztJQVViLHFDQUFrQjs7Ozs7O0lBTWxCLG1DQUFnQjs7Ozs7Ozs7SUFNaEIsMkRBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEcml2ZXJUeXBlfSBmcm9tICcuLi9taXNjL2RyaXZlci10eXBlLnR5cGUnO1xuaW1wb3J0IHtOZ0ZvcmFnZU9wdGlvbnN9IGZyb20gJy4vbmctZm9yYWdlLW9wdGlvbnMnO1xuXG4vKipcbiAqIEEgY29uZmlndXJhYmxlIG9iamVjdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VDb25maWd1cmFibGUge1xuXG4gIC8qKlxuICAgKiBBIGRlc2NyaXB0aW9uIG9mIHRoZSBkYXRhYmFzZSwgZXNzZW50aWFsbHkgZm9yIGRldmVsb3BlciB1c2FnZS5cbiAgICogQGRlZmF1bHQgXCJcIlxuICAgKi9cbiAgZGVzY3JpcHRpb246IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHByZWZlcnJlZCBkcml2ZXIocykgdG8gdXNlLlxuICAgKiBAZGVmYXVsdCBJbmRleGVkREIsIFdlYlNRTCAmIGxvY2FsU3RvcmFnZVxuICAgKi9cbiAgZHJpdmVyOiBEcml2ZXJUeXBlIHwgRHJpdmVyVHlwZVtdO1xuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgZGF0YWJhc2UuIE1heSBhcHBlYXIgZHVyaW5nIHN0b3JhZ2UgbGltaXQgcHJvbXB0cy4gVXNlZnVsIHRvIHVzZSB0aGUgbmFtZSBvZiB5b3VyIGFwcCBoZXJlLlxuICAgKiBJbiBsb2NhbFN0b3JhZ2UsIHRoaXMgaXMgdXNlZCBhcyBhIGtleSBwcmVmaXggZm9yIGFsbCBrZXlzIHN0b3JlZCBpbiBsb2NhbFN0b3JhZ2UuXG4gICAqIEBkZWZhdWx0IG5nRm9yYWdlXG4gICAqL1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBkYXRhYmFzZSBpbiBieXRlcy4gVXNlZCBvbmx5IGluIFdlYlNRTCBmb3Igbm93LlxuICAgKiBAZGVmYXVsdCA0OTgwNzM2XG4gICAqL1xuICBzaXplOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBkYXRhc3RvcmUuXG4gICAqIEluIEluZGV4ZWREQiB0aGlzIGlzIHRoZSBkYXRhU3RvcmUsXG4gICAqIGluIFdlYlNRTCB0aGlzIGlzIHRoZSBuYW1lIG9mIHRoZSBrZXkvdmFsdWUgdGFibGUgaW4gdGhlIGRhdGFiYXNlLlxuICAgKiBNdXN0IGJlIGFscGhhbnVtZXJpYywgd2l0aCB1bmRlcnNjb3Jlcy5cbiAgICogQW55IG5vbi1hbHBoYW51bWVyaWMgY2hhcmFjdGVycyB3aWxsIGJlIGNvbnZlcnRlZCB0byB1bmRlcnNjb3Jlcy5cbiAgICogQGRlZmF1bHQgbmdfZm9yYWdlXG4gICAqL1xuICBzdG9yZU5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHZlcnNpb24gb2YgeW91ciBkYXRhYmFzZS4gTWF5IGJlIHVzZWQgZm9yIHVwZ3JhZGVzIGluIHRoZSBmdXR1cmU7IGN1cnJlbnRseSB1bnVzZWQuXG4gICAqIEBkZWZhdWx0IDEuMFxuICAgKi9cbiAgdmVyc2lvbjogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBCdWxrLXNldCBjb25maWd1cmF0aW9uIG9wdGlvbnNcbiAgICogQHBhcmFtIG9wdHMgVGhlIGNvbmZpZ3VyYXRpb25cbiAgICovXG4gIGNvbmZpZ3VyZShvcHRzOiBOZ0ZvcmFnZU9wdGlvbnMpOiB0aGlzO1xufVxuIl19