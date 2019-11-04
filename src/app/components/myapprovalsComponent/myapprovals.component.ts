/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NSnackbarService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { userService } from '../../services/user/user.service';
/**
 * Service import Example :
 * import { HeroService } from '../../services/hero/hero.service';
 */
@Component({
    selector: 'bh-myapprovals',
    templateUrl: './myapprovals.template.html'
})
export class myapprovalsComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    leaveRequests = [];
    constructor(
        private bdms: NDataModelService,
        private uService: userService,
        private alertService: NSnackbarService,
        ) {
        super();
        this.mm = new ModelMethods(bdms);
    }
    ngOnInit() {
         this.get('leaverequest', { "managerName": this.uService.user.staff.displayName }, {}, { _id: -1 });
    }
    reject(leave) {
        leave.leaveStatus = 'reject';
        this.updateById('leaverequest', leave._id, leave);
    }
    accept(leave) {
        leave.leaveStatus = 'accept';
        // updating leave requests
        this.updateById('leaverequest', leave._id, leave);
        // update for employee
        let leaveKey = 'leaves.' + leave.leaveType;
        let update = {
            '$inc': {}
        }
        update['$inc'][leaveKey] = -leave.duration;
        update['$inc']['leaves.approvedLeaves'] = leave.duration;
        this.update('employee', update, { 'staff.username': leave.username }, {});
    }
    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
                this.leaveRequests = result;
                console.log()
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
                this.alertService.openSnackBar('Leave status updated');
            }, error => {
                // Handle errors here
                this.alertService.openSnackBar(error);
            })
    }
}