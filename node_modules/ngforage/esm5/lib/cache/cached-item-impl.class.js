/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { setToStringTag } from '../misc/setToStringTag.function';
/**
 * \@internal
 * @template T
 */
var /**
 * \@internal
 * @template T
 */
CachedItemImpl = /** @class */ (function () {
    function CachedItemImpl(data, expiryTime) {
        this.data = data;
        this.expires = new Date(typeof (/** @type {?} */ (expiryTime)) === 'number' ? expiryTime : 0);
    }
    Object.defineProperty(CachedItemImpl.prototype, "expired", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var value = this.expiresIn === 0;
            if (value) {
                Object.defineProperty(this, 'expired', { value: value });
            }
            return value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CachedItemImpl.prototype, "expiresIn", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var value = Math.max(0, this.expires.getTime() - Date.now());
            if (!value) {
                Object.defineProperty(this, 'expiresIn', { value: value });
            }
            return value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CachedItemImpl.prototype, "hasData", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var value = this.data != null;
            Object.defineProperty(this, 'hasData', { value: value });
            return value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CachedItemImpl.prototype.toJSON = /**
     * @return {?}
     */
    function () {
        return {
            data: this.data,
            expired: this.expired,
            expires: this.expires,
            expiresIn: this.expiresIn,
            hasData: this.hasData
        };
    };
    /**
     * @return {?}
     */
    CachedItemImpl.prototype.toString = /**
     * @return {?}
     */
    function () {
        return JSON.stringify(this.toJSON());
    };
    return CachedItemImpl;
}());
/**
 * \@internal
 * @template T
 */
export { CachedItemImpl };
if (false) {
    /** @type {?} */
    CachedItemImpl.prototype.expires;
    /** @type {?} */
    CachedItemImpl.prototype.data;
}
setToStringTag(CachedItemImpl, 'CachedItem');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGVkLWl0ZW0taW1wbC5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nZm9yYWdlLyIsInNvdXJjZXMiOlsibGliL2NhY2hlL2NhY2hlZC1pdGVtLWltcGwuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7QUFJL0Q7Ozs7O0lBSUUsd0JBQW1DLElBQU8sRUFBRSxVQUFrQjtRQUEzQixTQUFJLEdBQUosSUFBSSxDQUFHO1FBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxtQkFBSyxVQUFVLEVBQUEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVELHNCQUFXLG1DQUFPOzs7O1FBQWxCOztnQkFDUSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDO1lBQ2xDLElBQUksS0FBSyxFQUFFO2dCQUNULE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFDLEtBQUssT0FBQSxFQUFDLENBQUMsQ0FBQzthQUNqRDtZQUVELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxxQ0FBUzs7OztRQUFwQjs7Z0JBQ1EsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzlELElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUMsS0FBSyxPQUFBLEVBQUMsQ0FBQyxDQUFDO2FBQ25EO1lBRUQsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLG1DQUFPOzs7O1FBQWxCOztnQkFDUSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJO1lBQy9CLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFDLEtBQUssT0FBQSxFQUFDLENBQUMsQ0FBQztZQUVoRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7OztPQUFBOzs7O0lBRU0sK0JBQU07OztJQUFiO1FBQ0UsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDO0lBQ0osQ0FBQzs7OztJQUVNLGlDQUFROzs7SUFBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBOUNELElBOENDOzs7Ozs7OztJQTVDQyxpQ0FBOEI7O0lBRVgsOEJBQXVCOztBQTRDNUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0VG9TdHJpbmdUYWd9IGZyb20gJy4uL21pc2Mvc2V0VG9TdHJpbmdUYWcuZnVuY3Rpb24nO1xuaW1wb3J0IHtDYWNoZWRJdGVtfSBmcm9tICcuL2NhY2hlZC1pdGVtJztcblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNsYXNzIENhY2hlZEl0ZW1JbXBsPFQ+IGltcGxlbWVudHMgQ2FjaGVkSXRlbTxUPiB7XG5cbiAgcHVibGljIHJlYWRvbmx5IGV4cGlyZXM6IERhdGU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBkYXRhOiBULCBleHBpcnlUaW1lOiBudW1iZXIpIHtcbiAgICB0aGlzLmV4cGlyZXMgPSBuZXcgRGF0ZSh0eXBlb2YgPGFueT5leHBpcnlUaW1lID09PSAnbnVtYmVyJyA/IGV4cGlyeVRpbWUgOiAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZXhwaXJlZCgpOiBib29sZWFuIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZXhwaXJlc0luID09PSAwO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdleHBpcmVkJywge3ZhbHVlfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBleHBpcmVzSW4oKTogbnVtYmVyIHtcbiAgICBjb25zdCB2YWx1ZSA9IE1hdGgubWF4KDAsIHRoaXMuZXhwaXJlcy5nZXRUaW1lKCkgLSBEYXRlLm5vdygpKTtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2V4cGlyZXNJbicsIHt2YWx1ZX0pO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaGFzRGF0YSgpOiBib29sZWFuIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YSAhPSBudWxsOyAvL3RzbGludDpkaXNhYmxlLWxpbmU6dHJpcGxlLWVxdWFsc1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnaGFzRGF0YScsIHt2YWx1ZX0pO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcHVibGljIHRvSlNPTigpOiBDYWNoZWRJdGVtPFQ+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogdGhpcy5kYXRhLFxuICAgICAgZXhwaXJlZDogdGhpcy5leHBpcmVkLFxuICAgICAgZXhwaXJlczogdGhpcy5leHBpcmVzLFxuICAgICAgZXhwaXJlc0luOiB0aGlzLmV4cGlyZXNJbixcbiAgICAgIGhhc0RhdGE6IHRoaXMuaGFzRGF0YVxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy50b0pTT04oKSk7XG4gIH1cbn1cblxuc2V0VG9TdHJpbmdUYWcoQ2FjaGVkSXRlbUltcGwsICdDYWNoZWRJdGVtJyk7XG4iXX0=