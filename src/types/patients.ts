/**
 * Types TypeScript pour le domaine Patients
 */

export interface PatientsFilters {
  status?: 'actif' | 'inactif' | 'suivi'
  ageMin?: number
  ageMax?: number
  lastVisitFrom?: string // ISO date string
  lastVisitTo?: string   // ISO date string
}

