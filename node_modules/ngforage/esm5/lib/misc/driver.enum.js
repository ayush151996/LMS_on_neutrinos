import * as tslib_1 from "tslib";
var e_1, _a;
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { localForage as lf } from '../imports/localforage';
/** @enum {string} */
var Driver = {
    /** The IndexedDB driver */
    INDEXED_DB: (/** @type {?} */ (lf.INDEXEDDB)),
    /** The localStorage driver */
    LOCAL_STORAGE: (/** @type {?} */ (lf.LOCALSTORAGE)),
    /** The WebSQL driver */
    WEB_SQL: (/** @type {?} */ (lf.WEBSQL)),
};
export { Driver };
try {
    for (var _b = tslib_1.__values([lf.INDEXEDDB, lf.LOCALSTORAGE, lf.WEBSQL]), _c = _b.next(); !_c.done; _c = _b.next()) {
        var d = _c.value;
        delete Driver[d];
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    }
    finally { if (e_1) throw e_1.error; }
}
Object.freeze(Driver);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJpdmVyLmVudW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ2ZvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9taXNjL2RyaXZlci5lbnVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxXQUFXLElBQUksRUFBRSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7OztJQUd2RCwyQkFBMkI7SUFDM0IsWUFBYSxtQkFBSyxFQUFFLENBQUMsU0FBUyxFQUFBO0lBQzlCLDhCQUE4QjtJQUM5QixlQUFnQixtQkFBSyxFQUFFLENBQUMsWUFBWSxFQUFBO0lBQ3BDLHdCQUF3QjtJQUN4QixTQUFVLG1CQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUE7Ozs7SUFHMUIsS0FBZ0IsSUFBQSxLQUFBLGlCQUFBLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtRQUF2RCxJQUFNLENBQUMsV0FBQTtRQUNWLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2xCOzs7Ozs7Ozs7QUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtsb2NhbEZvcmFnZSBhcyBsZn0gZnJvbSAnLi4vaW1wb3J0cy9sb2NhbGZvcmFnZSc7XG5cbmV4cG9ydCBlbnVtIERyaXZlciB7XG4gIC8qKiBUaGUgSW5kZXhlZERCIGRyaXZlciAqL1xuICBJTkRFWEVEX0RCID0gPGFueT5sZi5JTkRFWEVEREIsXG4gIC8qKiBUaGUgbG9jYWxTdG9yYWdlIGRyaXZlciAqL1xuICBMT0NBTF9TVE9SQUdFID0gPGFueT5sZi5MT0NBTFNUT1JBR0UsXG4gIC8qKiBUaGUgV2ViU1FMIGRyaXZlciAqL1xuICBXRUJfU1FMID0gPGFueT5sZi5XRUJTUUxcbn1cblxuZm9yIChjb25zdCBkIG9mIFtsZi5JTkRFWEVEREIsIGxmLkxPQ0FMU1RPUkFHRSwgbGYuV0VCU1FMXSkge1xuICBkZWxldGUgRHJpdmVyW2RdO1xufVxuXG5PYmplY3QuZnJlZXplKERyaXZlcik7XG4iXX0=