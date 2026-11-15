
const SUPABASE_URL = "https://azniiyapncwczwfxajnl.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_6fpF0QSkJZYSzHRQyZzrew_Y20HWpg7";

window.supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
