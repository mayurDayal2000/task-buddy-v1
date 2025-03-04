/**
 * Authentication Context Module
 *
 * This module defines the authentication context and types used throughout the application.
 * It provides the user object and authentication methods to components via React Context.
 */
import { createContext } from "react";
import { User } from "firebase/auth";

/**
 * Authentication context interface defining the shape of auth state and methods
 */
export interface AuthContextType {
  /**
   * Current authenticated user, or null if not authenticated
   */
  user: User | null;

  /**
   * Authentication loading state to track auth operations
   */
  isLoading: boolean;

  /**
   * Initiates the Google Sign-In authentication flow
   * @returns Promise that resolves when authentication completes
   */
  login: () => Promise<void>;

  /**
   * Signs out the current user
   * @returns Promise that resolves when sign-out completes
   */
  logout: () => Promise<void>;
}

// Create the context with a meaningful default value of null
// The actual provider will supply the implementation
export const AuthContext = createContext<AuthContextType | null>(null);
