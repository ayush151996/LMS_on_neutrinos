import { CacheConfigurable } from '../config/cache-configurable';
import { NgForageOptions } from '../config/ng-forage-options';
import { NgForage } from '../main/ng-forage.service';
import { CachedItem } from './cached-item';
/**
 * An extension of {@link NgForage} which adds expiration support
 */
export declare class NgForageCache extends NgForage implements CacheConfigurable {
    /**
     * Cache time in milliseconds
     * @default 300000
     */
    cacheTime: number;
    /** @inheritDoc */
    clone(config?: NgForageOptions): NgForageCache;
    /**
     * Retrieve data
     * @param key Data key
     */
    getCached<T>(key: string): Promise<CachedItem<T>>;
    /**
     * Remove data
     * @param key Data key
     */
    removeCached(key: string): Promise<void>;
    /**
     * Set data
     * @param key Data key
     * @param data Data to set
     * @param [cacheTime] Override cache set in {@link CacheConfigurable#cacheTime global or instance config}.
     */
    setCached<T>(key: string, data: T, cacheTime?: number): Promise<T>;
}
