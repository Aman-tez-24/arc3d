import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ecbyhulzjbuyoxyhigrw.supabase.co";

const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjYnlodWx6amJ1eW94eWhpZ3J3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk2MzU4OTEsImV4cCI6MjA5NTIxMTg5MX0.qKuzlsk9Cza8zgbxFH9Q4EPplk27aqok3w9mr9U03Mk";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
);