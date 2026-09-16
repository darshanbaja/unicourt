/**
 * Provides build-time data-access helpers for publisher records.
 *
 * The database is injected into each helper so callers can use the shared
 * client in Astro pages or an in-memory client in tests.
 */
import { asc } from 'drizzle-orm';
import type { Database } from './db';
import { publishers } from '../../db/schema';
import type { Publisher } from '../types/game';

/**
 * Retrieves all publishers ordered alphabetically by name.
 *
 * @param db - The Drizzle database client used to query publisher records.
 * @returns A promise resolving to all publishers in name order.
 */
export async function getAllPublishers(db: Database): Promise<Publisher[]> {
    return db
        .select({ id: publishers.id, name: publishers.name })
        .from(publishers)
        .orderBy(asc(publishers.name));
}
