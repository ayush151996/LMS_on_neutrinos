/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgForage } from '../main/ng-forage.service';
import { setToStringTag } from '../misc/setToStringTag.function';
/**
 * \@internal
 */
var /**
 * \@internal
 */
NgForageDedicated = /** @class */ (function (_super) {
    tslib_1.__extends(NgForageDedicated, _super);
    function NgForageDedicated() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgForageDedicated.prototype.clone = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var inst = new NgForageDedicated(this.baseConfig, this.fact);
        inst.configure(Object.assign(this.finalConfig, config || {}));
        return inst;
    };
    return NgForageDedicated;
}(NgForage));
/**
 * \@internal
 */
export { NgForageDedicated };
setToStringTag(NgForageDedicated, 'NgForage (dedicated)');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZm9yYWdlLWRlZGljYXRlZC5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nZm9yYWdlLyIsInNvdXJjZXMiOlsibGliL2RlZGljYXRlZC9uZy1mb3JhZ2UtZGVkaWNhdGVkLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQzs7OztBQUcvRDs7OztJQUF1Qyw2Q0FBUTtJQUEvQzs7SUFRQSxDQUFDOzs7OztJQU5RLGlDQUFLOzs7O0lBQVosVUFBYSxNQUF3Qjs7WUFDN0IsSUFBSSxHQUFHLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzlELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTlELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQVJELENBQXVDLFFBQVEsR0FROUM7Ozs7O0FBRUQsY0FBYyxDQUFDLGlCQUFpQixFQUFFLHNCQUFzQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nRm9yYWdlT3B0aW9uc30gZnJvbSAnLi4vY29uZmlnL25nLWZvcmFnZS1vcHRpb25zJztcbmltcG9ydCB7TmdGb3JhZ2V9IGZyb20gJy4uL21haW4vbmctZm9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtzZXRUb1N0cmluZ1RhZ30gZnJvbSAnLi4vbWlzYy9zZXRUb1N0cmluZ1RhZy5mdW5jdGlvbic7XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjbGFzcyBOZ0ZvcmFnZURlZGljYXRlZCBleHRlbmRzIE5nRm9yYWdlIHtcblxuICBwdWJsaWMgY2xvbmUoY29uZmlnPzogTmdGb3JhZ2VPcHRpb25zKTogTmdGb3JhZ2Uge1xuICAgIGNvbnN0IGluc3QgPSBuZXcgTmdGb3JhZ2VEZWRpY2F0ZWQodGhpcy5iYXNlQ29uZmlnLCB0aGlzLmZhY3QpO1xuICAgIGluc3QuY29uZmlndXJlKE9iamVjdC5hc3NpZ24odGhpcy5maW5hbENvbmZpZywgY29uZmlnIHx8IHt9KSk7XG5cbiAgICByZXR1cm4gaW5zdDtcbiAgfVxufVxuXG5zZXRUb1N0cmluZ1RhZyhOZ0ZvcmFnZURlZGljYXRlZCwgJ05nRm9yYWdlIChkZWRpY2F0ZWQpJyk7XG4iXX0=