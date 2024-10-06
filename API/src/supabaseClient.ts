import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_KEY || "";

const supabaseClient = createClient(
  `https://uehvfplrgwisycorbazh.supabase.co`,
  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlaHZmcGxyZ3dpc3ljb3JiYXpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgxNTcwMjIsImV4cCI6MjA0MzczMzAyMn0.ieJkCCU5PYkcY5AoOdI6OQJsj1NK9KF-yH4GDyPmnnI`
);

export default supabaseClient;
