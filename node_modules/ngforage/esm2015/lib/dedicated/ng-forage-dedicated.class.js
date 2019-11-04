/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgForage } from '../main/ng-forage.service';
import { setToStringTag } from '../misc/setToStringTag.function';
/**
 * \@internal
 */
export class NgForageDedicated extends NgForage {
    /**
     * @param {?=} config
     * @return {?}
     */
    clone(config) {
        /** @type {?} */
        const inst = new NgForageDedicated(this.baseConfig, this.fact);
        inst.configure(Object.assign(this.finalConfig, config || {}));
        return inst;
    }
}
setToStringTag(NgForageDedicated, 'NgForage (dedicated)');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZm9yYWdlLWRlZGljYXRlZC5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nZm9yYWdlLyIsInNvdXJjZXMiOlsibGliL2RlZGljYXRlZC9uZy1mb3JhZ2UtZGVkaWNhdGVkLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGlDQUFpQyxDQUFDOzs7O0FBRy9ELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxRQUFROzs7OztJQUV0QyxLQUFLLENBQUMsTUFBd0I7O2NBQzdCLElBQUksR0FBRyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM5RCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU5RCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRjtBQUVELGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ0ZvcmFnZU9wdGlvbnN9IGZyb20gJy4uL2NvbmZpZy9uZy1mb3JhZ2Utb3B0aW9ucyc7XG5pbXBvcnQge05nRm9yYWdlfSBmcm9tICcuLi9tYWluL25nLWZvcmFnZS5zZXJ2aWNlJztcbmltcG9ydCB7c2V0VG9TdHJpbmdUYWd9IGZyb20gJy4uL21pc2Mvc2V0VG9TdHJpbmdUYWcuZnVuY3Rpb24nO1xuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgY2xhc3MgTmdGb3JhZ2VEZWRpY2F0ZWQgZXh0ZW5kcyBOZ0ZvcmFnZSB7XG5cbiAgcHVibGljIGNsb25lKGNvbmZpZz86IE5nRm9yYWdlT3B0aW9ucyk6IE5nRm9yYWdlIHtcbiAgICBjb25zdCBpbnN0ID0gbmV3IE5nRm9yYWdlRGVkaWNhdGVkKHRoaXMuYmFzZUNvbmZpZywgdGhpcy5mYWN0KTtcbiAgICBpbnN0LmNvbmZpZ3VyZShPYmplY3QuYXNzaWduKHRoaXMuZmluYWxDb25maWcsIGNvbmZpZyB8fCB7fSkpO1xuXG4gICAgcmV0dXJuIGluc3Q7XG4gIH1cbn1cblxuc2V0VG9TdHJpbmdUYWcoTmdGb3JhZ2VEZWRpY2F0ZWQsICdOZ0ZvcmFnZSAoZGVkaWNhdGVkKScpO1xuIl19