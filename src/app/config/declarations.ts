import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NMapComponent } from '../n-components/nMapComponent/n-map.component';
import { NAuthGuardService } from 'neutrinos-seed-services';
window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-userService
import { userService } from '../services/user/user.service';
//CORE_REFERENCE_IMPORT-homeresolverService
import { homeresolverService } from '../services/homeresolver/homeresolver.service';
//CORE_REFERENCE_IMPORT-applyleaveComponent
import { applyleaveComponent } from '../components/applyleaveComponent/applyleave.component';
//CORE_REFERENCE_IMPORT-myleavesComponent
import { myleavesComponent } from '../components/myleavesComponent/myleaves.component';
//CORE_REFERENCE_IMPORT-myprofileComponent
import { myprofileComponent } from '../components/myprofileComponent/myprofile.component';
//CORE_REFERENCE_IMPORT-userdetailComponent
import { userdetailComponent } from '../components/userdetailComponent/userdetail.component';
//CORE_REFERENCE_IMPORT-userregistrationComponent
import { userregistrationComponent } from '../components/userregistrationComponent/userregistration.component';
//CORE_REFERENCE_IMPORT-myapprovalsComponent
import { myapprovalsComponent } from '../components/myapprovalsComponent/myapprovals.component';
//CORE_REFERENCE_IMPORT-ArtImgSrcDirective
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
//CORE_REFERENCE_IMPORT-loaderComponent
import { loaderComponent } from '../components/loaderComponent/loader.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/homeComponent/home.component';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/loginComponent/login.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*Entry Components for @NgModule
*/

export const appEntryComponents: any = [
  loaderComponent
  //CORE_REFERENCE_PUSH_TO_ENTRY_ARRAY
];

/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  NMapComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-applyleaveComponent
applyleaveComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-myleavesComponent
myleavesComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-myprofileComponent
myprofileComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-userdetailComponent
userdetailComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-userregistrationComponent
userregistrationComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-myapprovalsComponent
myapprovalsComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ArtImgSrcDirective
ArtImgSrcDirective,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loaderComponent
loaderComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
homeComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
loginComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-userService
userService,
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-homeresolverService
homeresolverService,

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'home', component: homeComponent, canActivate: [NAuthGuardService],
children: [{path: 'userregistration', component: userregistrationComponent},{path: 'applyleaves', component: applyleaveComponent}]},{path: 'login', component: loginComponent},{path: 'unauthorized', redirectTo: '/login', pathMatch: 'full'},{path: 'userregistration', component: userregistrationComponent},{path: '', redirectTo: '/home', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
