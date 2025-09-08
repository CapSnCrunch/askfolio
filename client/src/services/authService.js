import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged
} from 'firebase/auth';
import { auth } from '../../firebase.js';

class AuthService {
  constructor() {
    this.currentUser = null;
    this.token = null;
    this.router = null; // Will be set when router is available
    this.googleProvider = new GoogleAuthProvider();
    
    // Listen for auth state changes
    onAuthStateChanged(auth, (user) => {
      this.currentUser = user;
      if (user) {
        this.getToken();
      } else {
        this.token = null;
      }
    });
  }

  // Set router instance for navigation
  setRouter(router) {
    this.router = router;
  }

  // Get current user's token
  async getToken() {
    if (this.currentUser) {
      try {
        this.token = await this.currentUser.getIdToken();
        return this.token;
      } catch (error) {
        console.error('Error getting token:', error);
        return null;
      }
    }
    return null;
  }

  // Sign in with Google
  async signInWithGoogle() {
    try {
      const result = await signInWithPopup(auth, this.googleProvider);
      const user = result.user;
      const token = await user.getIdToken();
      this.token = token;

      // TODO: Set the token for future API requests when API service is available
      // api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // TODO: Create account in backend when API is available
      // await api.post('/account', {
      //   email: user.email,
      //   name: user.displayName || user.email.split('@')[0]
      // });

      // TODO: Setup RevenueCat user when needed
      // await this.setupRevenueCatUser();

      const authResult = {
        user: {
          uuid: user.uid,
          email: user.email || '',
          displayName: user.displayName || '',
          photoURL: user.photoURL || '',
        },
        token
      };

      // Navigate to dashboard after successful Google sign-in
      if (this.router) {
        this.router.push('/dashboard');
      }

      return authResult;
    } catch (error) {
      // Handle specific Google auth errors
      if (error.code === 'auth/popup-closed-by-user') {
        throw new Error('Sign-in was cancelled');
      } else if (error.code === 'auth/popup-blocked') {
        throw new Error('Pop-up was blocked by browser. Please allow pop-ups and try again.');
      } else if (error.code === 'auth/account-exists-with-different-credential') {
        throw new Error('An account already exists with the same email address but different sign-in credentials.');
      }
      throw new Error(error.message || 'Google sign-in failed');
    }
  }

  // Register a new user with email and password
  async register(credentials) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );

      const token = await userCredential.user.getIdToken();
      this.token = token;
      
      // TODO: Set the token for future API requests when API service is available
      // api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      // TODO: Create account in backend when API is available
      // await api.post('/account', {
      //   email: credentials.email,
      //   name: credentials.email.split('@')[0]
      // });

      // TODO: Setup RevenueCat user when needed
      // await this.setupRevenueCatUser();
      
      const result = {
        user: {
          uuid: userCredential.user.uid,
          email: userCredential.user.email || '',
        },
        token
      };

      // Navigate to dashboard after successful registration
      if (this.router) {
        this.router.push('/dashboard');
      }

      return result;
    } catch (error) {
      throw new Error(error.message || 'Registration failed');
    }
  }

  // Login a user with email and password
  async login(credentials) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );

      const token = await userCredential.user.getIdToken();
      this.token = token;
      
      // TODO: Set the token for future API requests when API service is available
      // api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // TODO: Setup RevenueCat user when needed
      // await this.setupRevenueCatUser();
      
      const result = {
        user: {
          uuid: userCredential.user.uid,
          email: userCredential.user.email || '',
        },
        token
      };

      // Navigate to dashboard after successful login
      if (this.router) {
        this.router.push('/dashboard');
      }

      return result;
    } catch (error) {
      throw new Error(error.message || 'Login failed');
    }
  }

  // Sign out a user
  async logout() {
    try {
      await signOut(auth);
      this.token = null;
      this.currentUser = null;
    } catch (error) {
      throw new Error(error.message || 'Logout failed');
    }
  }

  // Send password reset email
  async forgotPassword(email) {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      throw new Error(error.message || 'Failed to send reset email');
    }
  }

  // Get current user
  getCurrentUser() {
    return this.currentUser;
  }

  // Check if user is authenticated
  isAuthenticated() {
    return !!this.currentUser;
  }

  // Get current token
  getCurrentToken() {
    return this.token;
  }
}

// Export a singleton instance
const authService = new AuthService();
export default authService;
