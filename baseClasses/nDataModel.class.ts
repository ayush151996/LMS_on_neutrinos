import { user } from '../src/app/models/user.model';
import { Staff } from '../src/app/models/Staff.model';
import { Leaves } from '../src/app/models/Leaves.model';
import { LeaveRequest } from '../src/app/models/LeaveRequest.model';
import { Employee } from '../src/app/models/Employee.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
user: user;
staff: Staff;
leaves: Leaves;
leaverequest: LeaveRequest;
employee: Employee;
//DECLARE NEW VARIABLE

constructor() {
this.user = new user();
this.staff = new Staff();
this.leaves = new Leaves();
this.leaverequest = new LeaveRequest();
this.employee = new Employee();
//CREATE NEW DM INSTANCE
    }
}