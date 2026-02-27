import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_ANON_KEY || '';

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey);

export interface User {
  email: string;
  name: string;
  created_at?: string;
}

export interface Progress {
  id?: number;
  email: string;
  exercise_id: string;
  score: number;
  attempts: number;
  final_code: string;
  completed_at?: string;
}

export const dbApi = {
  getUser: async (email: string): Promise<User | undefined> => {
    if (!supabaseUrl || !supabaseKey) return undefined;
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();
    if (error) return undefined;
    return data as User;
  },
  createUser: async (email: string, name: string) => {
    if (!supabaseUrl || !supabaseKey) return;
    const { error } = await supabase
      .from('users')
      .insert([{ email, name }]);
    if (error) console.error('Error creating user:', error);
  },
  getProgress: async (email: string): Promise<Progress[]> => {
    if (!supabaseUrl || !supabaseKey) return [];
    const { data, error } = await supabase
      .from('progress')
      .select('*')
      .eq('email', email);
    if (error) return [];
    return data as Progress[];
  },
  getExerciseProgress: async (email: string, exerciseId: string): Promise<Progress | undefined> => {
    if (!supabaseUrl || !supabaseKey) return undefined;
    const { data, error } = await supabase
      .from('progress')
      .select('*')
      .eq('email', email)
      .eq('exercise_id', exerciseId)
      .single();
    if (error) return undefined;
    return data as Progress;
  },
  saveProgress: async (email: string, exerciseId: string, score: number, attempts: number, finalCode: string) => {
    if (!supabaseUrl || !supabaseKey) return;
    // Check if exists
    const { data: existing } = await supabase
      .from('progress')
      .select('*')
      .eq('email', email)
      .eq('exercise_id', exerciseId)
      .single();
      
    if (!existing) {
      const { error } = await supabase
        .from('progress')
        .insert([{ 
          email, 
          exercise_id: exerciseId, 
          score, 
          attempts, 
          final_code: finalCode 
        }]);
      if (error) console.error('Error saving progress:', error);
    }
  },
  getTotalScore: async (email: string): Promise<number> => {
    if (!supabaseUrl || !supabaseKey) return 0;
    const { data, error } = await supabase
      .from('progress')
      .select('score')
      .eq('email', email);
      
    if (error || !data) return 0;
    return data.reduce((sum, row) => sum + (row.score || 0), 0);
  }
};
