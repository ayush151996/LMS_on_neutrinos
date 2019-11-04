import { NgForageCache } from '../cache/ng-forage-cache.service';
import { NgForageConfig } from '../config/ng-forage-config.service';
import { NgForageOptions } from '../config/ng-forage-options';
import { InstanceFactory } from '../instance-factory/instance-factory.service';
import { NgForage } from '../main/ng-forage.service';
export declare class DedicatedInstanceFactory {
    constructor(conf: NgForageConfig, instFact: InstanceFactory);
    createCache(config?: NgForageOptions): NgForageCache;
    createNgForage(config?: NgForageOptions): NgForage;
}
