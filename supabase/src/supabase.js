import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://ithhcayafesjeblmuhca.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0aGhjYXlhZmVzamVibG11aGNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2NDE0OTQsImV4cCI6MTk5OTIxNzQ5NH0.FJ0WnpdkkUu4sAqkxfYjmbbhCqoG8Wwk6gU02gwmikI"
);

export default function useSupabase() {
  return { supabase };
}
