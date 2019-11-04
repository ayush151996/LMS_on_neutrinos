/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgForageCache } from '../cache/ng-forage-cache.service';
import { setToStringTag } from '../misc/setToStringTag.function';
/**
 * \@internal
 */
export class NgForageCacheDedicated extends NgForageCache {
    /**
     * @param {?=} config
     * @return {?}
     */
    clone(config) {
        /** @type {?} */
        const inst = new NgForageCacheDedicated(this.baseConfig, this.fact);
        inst.configure(Object.assign(this.finalConfig, config || {}));
        return inst;
    }
}
setToStringTag(NgForageCacheDedicated, 'NgForageCache (dedicated)');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZm9yYWdlLWNhY2hlLWRlZGljYXRlZC5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nZm9yYWdlLyIsInNvdXJjZXMiOlsibGliL2RlZGljYXRlZC9uZy1mb3JhZ2UtY2FjaGUtZGVkaWNhdGVkLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFFL0QsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGlDQUFpQyxDQUFDOzs7O0FBRy9ELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxhQUFhOzs7OztJQUVoRCxLQUFLLENBQUMsTUFBd0I7O2NBQzdCLElBQUksR0FBRyxJQUFJLHNCQUFzQixDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU5RCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRjtBQUVELGNBQWMsQ0FBQyxzQkFBc0IsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ0ZvcmFnZUNhY2hlfSBmcm9tICcuLi9jYWNoZS9uZy1mb3JhZ2UtY2FjaGUuc2VydmljZSc7XG5pbXBvcnQge05nRm9yYWdlT3B0aW9uc30gZnJvbSAnLi4vY29uZmlnL25nLWZvcmFnZS1vcHRpb25zJztcbmltcG9ydCB7c2V0VG9TdHJpbmdUYWd9IGZyb20gJy4uL21pc2Mvc2V0VG9TdHJpbmdUYWcuZnVuY3Rpb24nO1xuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgY2xhc3MgTmdGb3JhZ2VDYWNoZURlZGljYXRlZCBleHRlbmRzIE5nRm9yYWdlQ2FjaGUge1xuXG4gIHB1YmxpYyBjbG9uZShjb25maWc/OiBOZ0ZvcmFnZU9wdGlvbnMpOiBOZ0ZvcmFnZUNhY2hlIHtcbiAgICBjb25zdCBpbnN0ID0gbmV3IE5nRm9yYWdlQ2FjaGVEZWRpY2F0ZWQodGhpcy5iYXNlQ29uZmlnLCB0aGlzLmZhY3QpO1xuICAgIGluc3QuY29uZmlndXJlKE9iamVjdC5hc3NpZ24odGhpcy5maW5hbENvbmZpZywgY29uZmlnIHx8IHt9KSk7XG5cbiAgICByZXR1cm4gaW5zdDtcbiAgfVxufVxuXG5zZXRUb1N0cmluZ1RhZyhOZ0ZvcmFnZUNhY2hlRGVkaWNhdGVkLCAnTmdGb3JhZ2VDYWNoZSAoZGVkaWNhdGVkKScpO1xuIl19