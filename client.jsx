import { createClient } from '@supabase/supabase-js'

const URL = 'https://qmjizjhizamkgkeskscu.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtaml6amhpemFta2drZXNrc2N1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4ODEzNjksImV4cCI6MjAyODQ1NzM2OX0.YIl0GV7_aYa9yKx8mR6QrAhekqjckfLxozxJ3T7CyJc';

export const supabase = createClient(URL, API_KEY);
