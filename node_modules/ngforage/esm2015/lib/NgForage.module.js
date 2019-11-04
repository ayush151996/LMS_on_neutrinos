/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { DEFAULT_CONFIG } from './misc/injection-tokens';
/**
 * NgForage core module
 */
export class NgForageModule {
    // istanbul ignore next
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: NgForageModule,
            providers: [
                {
                    provide: DEFAULT_CONFIG,
                    useValue: config ? Object.assign({}, config) : {}
                }
            ]
        };
    }
}
NgForageModule.decorators = [
    { type: NgModule, args: [{},] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmdGb3JhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdmb3JhZ2UvIiwic291cmNlcyI6WyJsaWIvTmdGb3JhZ2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFNdkQsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQUdsQixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQWlDO1FBQ3JELE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2lCQUNsRDthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWRGLFFBQVEsU0FBQyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nRm9yYWdlT3B0aW9uc30gZnJvbSAnLi9jb25maWcvbmctZm9yYWdlLW9wdGlvbnMnO1xuaW1wb3J0IHtERUZBVUxUX0NPTkZJR30gZnJvbSAnLi9taXNjL2luamVjdGlvbi10b2tlbnMnO1xuXG4vKipcbiAqIE5nRm9yYWdlIGNvcmUgbW9kdWxlXG4gKi9cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBOZ0ZvcmFnZU1vZHVsZSB7XG5cbiAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IFBhcnRpYWw8TmdGb3JhZ2VPcHRpb25zPik6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmdGb3JhZ2VNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERFRkFVTFRfQ09ORklHLFxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWcgPyBPYmplY3QuYXNzaWduKHt9LCBjb25maWcpIDoge31cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==