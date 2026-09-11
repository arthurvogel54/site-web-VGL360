// Types manuels reflétant supabase/migrations/0001_crm_schema.sql.
// À remplacer par `supabase gen types typescript` une fois le projet connecté.

export type CompanySlug = 'quentin' | 'arthur'
export type ProfileRole = 'owner' | 'alternant'
export type LeadStatus = 'open' | 'won' | 'lost'
export type RdvType = 'pris' | 'effectue' | 'signe'
export type DayType = 'travail' | 'weekend' | 'ferie' | 'formation'
export type ObjectivePeriod = 'cumulative' | '3_months'
export type TrophyCategory = 'secteur' | 'palier' | 'etape'

export interface Database {
  public: {
    Tables: {
      companies: {
        Row: {
          id: string
          slug: CompanySlug
          name: string
          theme_color: string
          created_at: string
        }
        Insert: Partial<Database['public']['Tables']['companies']['Row']> & {
          slug: CompanySlug
          name: string
        }
        Update: Partial<Database['public']['Tables']['companies']['Row']>
        Relationships: []
      }
      profiles: {
        Row: {
          id: string
          full_name: string
          email: string
          role: ProfileRole
          avatar_color: string
          created_at: string
        }
        Insert: Partial<Database['public']['Tables']['profiles']['Row']> & {
          id: string
          full_name: string
          email: string
          role: ProfileRole
        }
        Update: Partial<Database['public']['Tables']['profiles']['Row']>
        Relationships: []
      }
      user_companies: {
        Row: {
          id: string
          user_id: string
          company_id: string
          is_default: boolean
        }
        Insert: Partial<Database['public']['Tables']['user_companies']['Row']> & {
          user_id: string
          company_id: string
        }
        Update: Partial<Database['public']['Tables']['user_companies']['Row']>
        Relationships: [
          {
            foreignKeyName: 'user_companies_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'companies'
            referencedColumns: ['id']
          },
        ]
      }
      pipeline_stages: {
        Row: {
          id: string
          company_id: string
          name: string
          position: number
          color: string
          is_won: boolean
          is_lost: boolean
        }
        Insert: Partial<Database['public']['Tables']['pipeline_stages']['Row']> & {
          company_id: string
          name: string
        }
        Update: Partial<Database['public']['Tables']['pipeline_stages']['Row']>
        Relationships: []
      }
      leads: {
        Row: {
          id: string
          company_id: string
          stage_id: string
          assigned_to: string | null
          created_by: string
          prospect_name: string
          value: number
          city: string | null
          referent_name: string | null
          sector: string | null
          contact_date: string | null
          notes: string | null
          status: LeadStatus
          position: number
          created_at: string
          updated_at: string
        }
        Insert: Partial<Database['public']['Tables']['leads']['Row']> & {
          company_id: string
          stage_id: string
          created_by: string
          prospect_name: string
        }
        Update: Partial<Database['public']['Tables']['leads']['Row']>
        Relationships: []
      }
      rdv_log: {
        Row: {
          id: string
          user_id: string
          company_id: string
          lead_id: string | null
          rdv_date: string
          rdv_type: RdvType
          sector: string | null
          created_at: string
        }
        Insert: Partial<Database['public']['Tables']['rdv_log']['Row']> & {
          user_id: string
          company_id: string
          rdv_type: RdvType
        }
        Update: Partial<Database['public']['Tables']['rdv_log']['Row']>
        Relationships: []
      }
      objective_tiers: {
        Row: {
          id: string
          label: string
          threshold_rdv: number
          reward_label: string
          period: ObjectivePeriod
          position: number
          is_special: boolean
        }
        Insert: Partial<Database['public']['Tables']['objective_tiers']['Row']>
        Update: Partial<Database['public']['Tables']['objective_tiers']['Row']>
        Relationships: []
      }
      streaks: {
        Row: {
          user_id: string
          current_streak: number
          longest_streak: number
          last_valid_date: string | null
          updated_at: string
        }
        Insert: Partial<Database['public']['Tables']['streaks']['Row']> & { user_id: string }
        Update: Partial<Database['public']['Tables']['streaks']['Row']>
        Relationships: []
      }
      trophies: {
        Row: {
          id: string
          key: string
          label: string
          description: string
          icon: string
          category: TrophyCategory
          criteria: Record<string, unknown>
          position: number
        }
        Insert: Partial<Database['public']['Tables']['trophies']['Row']>
        Update: Partial<Database['public']['Tables']['trophies']['Row']>
        Relationships: []
      }
      user_trophies: {
        Row: {
          id: string
          user_id: string
          trophy_id: string
          earned_at: string
        }
        Insert: Partial<Database['public']['Tables']['user_trophies']['Row']> & {
          user_id: string
          trophy_id: string
        }
        Update: Partial<Database['public']['Tables']['user_trophies']['Row']>
        Relationships: [
          {
            foreignKeyName: 'user_trophies_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      planning_entries: {
        Row: {
          id: string
          user_id: string
          entry_date: string
          day_type: DayType
          company_id: string | null
          note: string | null
        }
        Insert: Partial<Database['public']['Tables']['planning_entries']['Row']> & {
          user_id: string
          entry_date: string
          day_type: DayType
        }
        Update: Partial<Database['public']['Tables']['planning_entries']['Row']>
        Relationships: []
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
    CompositeTypes: Record<string, never>
  }
}

export type Company = Database['public']['Tables']['companies']['Row']
export type Profile = Database['public']['Tables']['profiles']['Row']
export type UserCompany = Database['public']['Tables']['user_companies']['Row']
export type PipelineStage = Database['public']['Tables']['pipeline_stages']['Row']
export type Lead = Database['public']['Tables']['leads']['Row']
export type RdvLog = Database['public']['Tables']['rdv_log']['Row']
export type ObjectiveTier = Database['public']['Tables']['objective_tiers']['Row']
export type Streak = Database['public']['Tables']['streaks']['Row']
export type Trophy = Database['public']['Tables']['trophies']['Row']
export type UserTrophy = Database['public']['Tables']['user_trophies']['Row']
export type PlanningEntry = Database['public']['Tables']['planning_entries']['Row']
