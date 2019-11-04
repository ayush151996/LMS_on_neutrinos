/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { ModelMethods } from '../../lib/model.methods';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { NDataModelService, NLogoutService, NSessionStorageService } from 'neutrinos-seed-services';
import { userService } from '../../services/user/user.service';
@Component({
    selector: 'bh-home',
    templateUrl: './home.template.html'
})
export class homeComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    currentUserData
    constructor(
        private bdms: NDataModelService,
        private logoutService: NLogoutService, 
        private router: Router,
        private ss: NSessionStorageService,
        private uService: userService
        ) {
        super();
        this.mm = new ModelMethods(bdms);
    }
    ngOnInit() {
        this.currentUserData = this.ss.getValue('userObj');
        this.get('employee', { "staff.username": this.currentUserData.username }, {}, {}, 1, 1);
    }
    logoutUser() {
      this.logoutService.logout();
      this.router.navigate(['/login']);
    }
    get(dataModelName, filter ?, keys ?, sort ?, pagenumber ?, pagesize ?) {
        this.mm.get(dataModelName, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
                if (dataModelName == 'employee' && result.length == 0) {
                    // routing the employee form
                    this.router.navigate(['home/userregistration']);
                } else {
                    // setting the current logged user data in the User service
                    this.uService.user = result[0];
                    // showing emloyee information here
                    this.router.navigate(['/home/userdetail']);
                }
            },
            error => {
                // Handle errors here
            });
    }
    getById(dataModelName, dataModelId) {
        this.mm.getById(dataModelName, dataModelId,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            })
    }
    put(dataModelName, dataModelObject) {
        this.mm.put(dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }
    validatePut(formObj, dataModelName, dataModelObject) {
        this.mm.validatePut(formObj, dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }
    update(dataModelName, update, filter, options) {
        const updateObject = {
            update: update,
            filter: filter,
            options: options
        };
        this.mm.update(dataModelName, updateObject,
            result => {
                //  On Success code here
            }, error => {
                // Handle errors here
            })
    }
    delete (dataModelName, filter) {
        this.mm.delete(dataModelName, filter,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }
    deleteById(dataModelName, dataModelId) {
        this.mm.deleteById(dataModelName, dataModelId,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }
    updateById(dataModelName, dataModelId, dataModelObj) {
        this.mm.updateById(dataModelName, dataModelId, dataModelObj,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }
}