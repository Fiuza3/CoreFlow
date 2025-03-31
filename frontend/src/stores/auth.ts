import { defineStore } from 'pinia';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

interface User {
  id: number;
  email: string;
  name: string;
  role: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null,
    refreshToken: null
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
    currentUser: (state) => state.user
  },

  actions: {
    async login(email: string, password: string) {
      try {
        const response = await axios.post('/api/auth/login', { email, password });
        this.setAuthData(response.data);
        return true;
      } catch (error) {
        console.error('Login failed:', error);
        throw error;
      }
    },

    async logout() {
      try {
        await axios.post('/api/auth/logout');
      } finally {
        this.clearAuth();
      }
    },

    setAuthData(data: { token: string; refreshToken: string }) {
      this.token = data.token;
      this.refreshToken = data.refreshToken;
      this.user = jwtDecode(data.token);
      
      localStorage.setItem('token', data.token);
      localStorage.setItem('refreshToken', data.refreshToken);
    },

    clearAuth() {
      this.user = null;
      this.token = null;
      this.refreshToken = null;
      
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
    }
  }
});