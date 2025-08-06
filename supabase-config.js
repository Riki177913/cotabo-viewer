// supabase-config.js
const { createClient } = supabase;

const SUPABASE_URL = 'https://ahozwqzirgbbbjugeptv.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFob3p3cXppcmdiYmJqdWdlcHR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyMzUyMzEsImV4cCI6MjA2NzgxMTIzMX0.ghwvpNZYKCTMSvTXwtn6M5tgg-QKeCwGEvL7moptk9U';

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);