import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://srbxijvrxjmujzggntcz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyYnhpanZyeGptdWp6Z2dudGN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1NjA3NTAsImV4cCI6MjA1MzEzNjc1MH0.PzL1fCsIrB7MAzxM2bl8-bQ5kKuCHXgCOgLLHp4E-C4';
const supabase = createClient(supabaseUrl, supabaseKey);