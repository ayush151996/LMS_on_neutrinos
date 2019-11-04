/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NDataModelService, NSessionStorageService, NLoginService } from 'neutrinos-seed-services';
import { Observable } from 'rxjs';
import { userService } from '../user/user.service';
import { Router } from '@angular/router';

@Injectable()
export class homeresolverService implements Resolve<any> {
    constructor(private dms: NDataModelService,
        private ss: NSessionStorageService,
        private uService: userService,
        private loginService: NLoginService,
        private router: Router
    ) {
        if (this.loginService.isLoggedIn()) {
            this.router.navigate(['home']);
        }
    }

    resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<any> | Promise<any> | any 
    {
        return new Promise((resolve, reject) => {
            const username = this.ss.getValue('userObj')['username']
            this.dms.get('employee', {
                'staff.username': username
            }).subscribe(result => {
                this.uService.user = result[0];
                return resolve();
            }, error => {
                return reject(error);
            })
        })
    }

}