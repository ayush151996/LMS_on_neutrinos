/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { setToStringTag } from '../misc/setToStringTag.function';
/**
 * \@internal
 * @template T
 */
export class CachedItemImpl {
    /**
     * @param {?} data
     * @param {?} expiryTime
     */
    constructor(data, expiryTime) {
        this.data = data;
        this.expires = new Date(typeof (/** @type {?} */ (expiryTime)) === 'number' ? expiryTime : 0);
    }
    /**
     * @return {?}
     */
    get expired() {
        /** @type {?} */
        const value = this.expiresIn === 0;
        if (value) {
            Object.defineProperty(this, 'expired', { value });
        }
        return value;
    }
    /**
     * @return {?}
     */
    get expiresIn() {
        /** @type {?} */
        const value = Math.max(0, this.expires.getTime() - Date.now());
        if (!value) {
            Object.defineProperty(this, 'expiresIn', { value });
        }
        return value;
    }
    /**
     * @return {?}
     */
    get hasData() {
        /** @type {?} */
        const value = this.data != null;
        Object.defineProperty(this, 'hasData', { value });
        return value;
    }
    /**
     * @return {?}
     */
    toJSON() {
        return {
            data: this.data,
            expired: this.expired,
            expires: this.expires,
            expiresIn: this.expiresIn,
            hasData: this.hasData
        };
    }
    /**
     * @return {?}
     */
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
if (false) {
    /** @type {?} */
    CachedItemImpl.prototype.expires;
    /** @type {?} */
    CachedItemImpl.prototype.data;
}
setToStringTag(CachedItemImpl, 'CachedItem');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGVkLWl0ZW0taW1wbC5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nZm9yYWdlLyIsInNvdXJjZXMiOlsibGliL2NhY2hlL2NhY2hlZC1pdGVtLWltcGwuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7QUFJL0QsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBSXpCLFlBQW1DLElBQU8sRUFBRSxVQUFrQjtRQUEzQixTQUFJLEdBQUosSUFBSSxDQUFHO1FBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxtQkFBSyxVQUFVLEVBQUEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQzs7OztJQUVELElBQVcsT0FBTzs7Y0FDVixLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDO1FBQ2xDLElBQUksS0FBSyxFQUFFO1lBQ1QsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztTQUNqRDtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELElBQVcsU0FBUzs7Y0FDWixLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDOUQsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7U0FDbkQ7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7SUFFRCxJQUFXLE9BQU87O2NBQ1YsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSTtRQUMvQixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBRWhELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVNLE1BQU07UUFDWCxPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUM7SUFDSixDQUFDOzs7O0lBRU0sUUFBUTtRQUNiLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0Y7OztJQTVDQyxpQ0FBOEI7O0lBRVgsOEJBQXVCOztBQTRDNUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0VG9TdHJpbmdUYWd9IGZyb20gJy4uL21pc2Mvc2V0VG9TdHJpbmdUYWcuZnVuY3Rpb24nO1xuaW1wb3J0IHtDYWNoZWRJdGVtfSBmcm9tICcuL2NhY2hlZC1pdGVtJztcblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNsYXNzIENhY2hlZEl0ZW1JbXBsPFQ+IGltcGxlbWVudHMgQ2FjaGVkSXRlbTxUPiB7XG5cbiAgcHVibGljIHJlYWRvbmx5IGV4cGlyZXM6IERhdGU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBkYXRhOiBULCBleHBpcnlUaW1lOiBudW1iZXIpIHtcbiAgICB0aGlzLmV4cGlyZXMgPSBuZXcgRGF0ZSh0eXBlb2YgPGFueT5leHBpcnlUaW1lID09PSAnbnVtYmVyJyA/IGV4cGlyeVRpbWUgOiAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZXhwaXJlZCgpOiBib29sZWFuIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZXhwaXJlc0luID09PSAwO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdleHBpcmVkJywge3ZhbHVlfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBleHBpcmVzSW4oKTogbnVtYmVyIHtcbiAgICBjb25zdCB2YWx1ZSA9IE1hdGgubWF4KDAsIHRoaXMuZXhwaXJlcy5nZXRUaW1lKCkgLSBEYXRlLm5vdygpKTtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2V4cGlyZXNJbicsIHt2YWx1ZX0pO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaGFzRGF0YSgpOiBib29sZWFuIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YSAhPSBudWxsOyAvL3RzbGludDpkaXNhYmxlLWxpbmU6dHJpcGxlLWVxdWFsc1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnaGFzRGF0YScsIHt2YWx1ZX0pO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcHVibGljIHRvSlNPTigpOiBDYWNoZWRJdGVtPFQ+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogdGhpcy5kYXRhLFxuICAgICAgZXhwaXJlZDogdGhpcy5leHBpcmVkLFxuICAgICAgZXhwaXJlczogdGhpcy5leHBpcmVzLFxuICAgICAgZXhwaXJlc0luOiB0aGlzLmV4cGlyZXNJbixcbiAgICAgIGhhc0RhdGE6IHRoaXMuaGFzRGF0YVxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy50b0pTT04oKSk7XG4gIH1cbn1cblxuc2V0VG9TdHJpbmdUYWcoQ2FjaGVkSXRlbUltcGwsICdDYWNoZWRJdGVtJyk7XG4iXX0=