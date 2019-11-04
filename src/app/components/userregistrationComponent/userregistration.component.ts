/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NSessionStorageService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router } from '@angular/router';
import { userService } from '../../services/user/user.service';
/**
 * Service import Example :
 * import { HeroService } from '../../services/hero/hero.service';
 */
@Component({
    selector: 'bh-userregistration',
    templateUrl: './userregistration.template.html'
})
export class userregistrationComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    isManager = true;
    userObj;
    leaves = {
        "annualLeaves": 15,
        "sickLeaves": 15,
        "approvedLeaves": 0
    }
    managers = [
    ];
    departments = [
        'HR',
        'Production'
    ];
    constructor(
        private bdms: NDataModelService, 
        private sessionStorage: NSessionStorageService,
        private router: Router, 
        private uService: userService
        ) {
        super();
        this.mm = new ModelMethods(bdms);
    }
    ngOnInit() {
          this.userObj = this.sessionStorage.getValue('userObj');
        this.dm.employee.staff.username = this.userObj.username;
        this.dm.employee.staff.firstName = this.userObj.firstName;
        this.dm.employee.staff.lastName = this.userObj.lastName;
        this.dm.employee.staff.groupList = this.userObj.groupList;
        this.dm.employee.staff.displayName = this.userObj.displayName;
        this.dm.employee.leaves = this.leaves
        this.isManager = (this.userObj.groupList.indexOf('Manager') > -1);
    }
    showManager() {
        this.get(
            'employee',
            {  'staff.department': this.dm.employee.staff.department, 'staff.groupList': 'Manager' },
            { 'staff.displayName': 1, 'staff.groupList': 1 })
    }
    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
                if (result && result.length > 0 && result[0].staff.groupList.indexOf("Manager") > -1) {
                    this.managers.push(result[0].staff.displayName);
                } else {
                    this.managers = [];
                    this.dm.employee.staff.managername = '';
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
                this.uService.user = dataModelObject;
                this.router.navigate(['/home/userdetail']);
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