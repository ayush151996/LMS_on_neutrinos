/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService , NSnackbarService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { userService } from '../../services/user/user.service';
import { Router } from '@angular/router';
/**
 * Service import Example :
 * import { HeroService } from '../../services/hero/hero.service';
 */
@Component({
    selector: 'bh-applyleave',
    templateUrl: './applyleave.template.html'
})
export class applyleaveComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    leaveRequest;
    minDate = new Date();
    leaves = [
        { leave: "annualLeaves", value: "Annual Leave" },
        { leave: "sickLeaves", value: "Sick Leave" }
    ]
    constructor(
        private bdms: NDataModelService,
        private router: Router,
        private snackbar: NSnackbarService,
        private uService: userService
    ) {
        super();
        this.mm = new ModelMethods(bdms);
    }
    ngOnInit() {
        this.dm.leaverequest.fullName = this.uService.user.staff.displayName;
        this.dm.leaverequest.userName = this.uService.user.staff.username;
        this.dm.leaverequest.managername = this.uService.user.staff.managername;
        this.dm.leaverequest.leaveStatus = "pending";
    }
    getsTime() {    
        this.dm.leaverequest.duration = (((this.dm.leaverequest.toDate.getTime() - this.dm.leaverequest.fromDate.getTime()) / (24 * 60 * 60 * 1000)) + 1)
    }
    /**
     * apply leave with validations
     */
    applyLeave(form) {
        // check if invalid duration
        if (this.dm.leaverequest.duration < 1) {
            this.snackbar.openSnackBar('Invalid duration');
        } else {
            if (this.dm.leaverequest.leaveType == "annualLeaves") {
                // check if duration exceeds the available annualLeaves
                if (this.uService.user.leaves.annualLeaves >= this.dm.leaverequest.duration) {
                    this.leaveRequest = this.dm.leaverequest
                    this.validatePut(form, 'leaverequest', this.dm.leaverequest);
                } else {
                    this.snackbar.openSnackBar('Requested number of leaves exceeds available leaves');
                }
            } else {
                // check if duration exceeds the available sickLeaves
                if (this.uService.user.leaves.sickLeaves >= this.dm.leaverequest.duration) {
                    this.leaveRequest = this.dm.leaverequest
                    this.validatePut(form, 'leaverequest', this.dm.leaverequest);
                } else {
                    this.snackbar.openSnackBar('Requested number of leaves exceeds available leaves');
                }
            }
        }
    }
    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
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
                this.router.navigate(['home/userdetail']);
            }, error => {
                // Handle errors here
                console.log(error);
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