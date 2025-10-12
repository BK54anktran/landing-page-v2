import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://saigon2.thinkmay.net:445';
const SUPABASE_ANON_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlzcyI6InN1cGFiYXNlIiwiaWF0IjoxNzU0OTMxNjAwLCJleHAiOjE5MTI2OTgwMDB9.m7qcf4j3u1oPoqIsCqU3JHqYEO0DV2PmoPXGcdUAdR8';

/**
 * Create and return a Supabase client instance
 * This utility function provides a centralized way to create Supabase clients
 * with consistent configuration across the application.
 */
export const createSupabaseClient = () => {
    return createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
};

/**
 * Singleton instance of Supabase client
 * Use this for most cases where you need a Supabase client
 */
export const supabase = createSupabaseClient();
