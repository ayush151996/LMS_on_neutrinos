import 'localforage';
import { NgForageOptions } from '../config/ng-forage-options';
/**
 * Creates localForage instances
 */
export declare class InstanceFactory {
    getInstance(cfg: NgForageOptions): LocalForage;
}
