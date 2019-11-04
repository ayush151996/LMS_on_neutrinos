/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgForageCache } from '../cache/ng-forage-cache.service';
import { setToStringTag } from '../misc/setToStringTag.function';
/**
 * \@internal
 */
var /**
 * \@internal
 */
NgForageCacheDedicated = /** @class */ (function (_super) {
    tslib_1.__extends(NgForageCacheDedicated, _super);
    function NgForageCacheDedicated() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgForageCacheDedicated.prototype.clone = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var inst = new NgForageCacheDedicated(this.baseConfig, this.fact);
        inst.configure(Object.assign(this.finalConfig, config || {}));
        return inst;
    };
    return NgForageCacheDedicated;
}(NgForageCache));
/**
 * \@internal
 */
export { NgForageCacheDedicated };
setToStringTag(NgForageCacheDedicated, 'NgForageCache (dedicated)');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZm9yYWdlLWNhY2hlLWRlZGljYXRlZC5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nZm9yYWdlLyIsInNvdXJjZXMiOlsibGliL2RlZGljYXRlZC9uZy1mb3JhZ2UtY2FjaGUtZGVkaWNhdGVkLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBRS9ELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQzs7OztBQUcvRDs7OztJQUE0QyxrREFBYTtJQUF6RDs7SUFRQSxDQUFDOzs7OztJQU5RLHNDQUFLOzs7O0lBQVosVUFBYSxNQUF3Qjs7WUFDN0IsSUFBSSxHQUFHLElBQUksc0JBQXNCLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25FLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTlELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQVJELENBQTRDLGFBQWEsR0FReEQ7Ozs7O0FBRUQsY0FBYyxDQUFDLHNCQUFzQixFQUFFLDJCQUEyQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nRm9yYWdlQ2FjaGV9IGZyb20gJy4uL2NhY2hlL25nLWZvcmFnZS1jYWNoZS5zZXJ2aWNlJztcbmltcG9ydCB7TmdGb3JhZ2VPcHRpb25zfSBmcm9tICcuLi9jb25maWcvbmctZm9yYWdlLW9wdGlvbnMnO1xuaW1wb3J0IHtzZXRUb1N0cmluZ1RhZ30gZnJvbSAnLi4vbWlzYy9zZXRUb1N0cmluZ1RhZy5mdW5jdGlvbic7XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjbGFzcyBOZ0ZvcmFnZUNhY2hlRGVkaWNhdGVkIGV4dGVuZHMgTmdGb3JhZ2VDYWNoZSB7XG5cbiAgcHVibGljIGNsb25lKGNvbmZpZz86IE5nRm9yYWdlT3B0aW9ucyk6IE5nRm9yYWdlQ2FjaGUge1xuICAgIGNvbnN0IGluc3QgPSBuZXcgTmdGb3JhZ2VDYWNoZURlZGljYXRlZCh0aGlzLmJhc2VDb25maWcsIHRoaXMuZmFjdCk7XG4gICAgaW5zdC5jb25maWd1cmUoT2JqZWN0LmFzc2lnbih0aGlzLmZpbmFsQ29uZmlnLCBjb25maWcgfHwge30pKTtcblxuICAgIHJldHVybiBpbnN0O1xuICB9XG59XG5cbnNldFRvU3RyaW5nVGFnKE5nRm9yYWdlQ2FjaGVEZWRpY2F0ZWQsICdOZ0ZvcmFnZUNhY2hlIChkZWRpY2F0ZWQpJyk7XG4iXX0=