/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
@Injectable()
export class userService {
    private __currentUser
    set user(user) {
        this.__currentUser = user;
    }
    get user() {
        return this.__currentUser;
    }
    // check whether the logged in user is 'Manager'
    isManager( ){
        if(this.__currentUser) {
            return this.__currentUser.staff.groupList.indexOf('Manager') > -1;
        }
        return null;
    }
    getusername(){
        return this.__currentUser.staff.username;
    }
}