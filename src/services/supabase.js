import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wxbwxygdxhheawskcaej.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4Ynd4eWdkeGhoZWF3c2tjYWVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxODM4NDQsImV4cCI6MjA0ODc1OTg0NH0.g4Hhvues-nkJ52j-CB2-D831PyttVMFUCDaPU4X6A2A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
