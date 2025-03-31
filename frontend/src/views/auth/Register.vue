<template>
  <div>
    <form class="space-y-6" @submit.prevent="handleSubmit">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <div class="mt-1">
          <input
            id="name"
            name="name"
            type="text"
            v-model="name"
            required
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <div class="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            v-model="email"
            required
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div class="mt-1">
          <input
            id="password"
            name="password"
            type="password"
            v-model="password"
            required
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          :disabled="loading"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {{ loading ? 'Creating account...' : 'Create account' }}
        </button>
      </div>

      <div class="text-sm text-center">
        <router-link
          :to="{ name: 'login' }"
          class="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Already have an account? Sign in
        </router-link>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const authStore = useAuthStore();

const name = ref('');
const email = ref('');
const password = ref('');
const loading = ref(false);

const handleSubmit = async () => {
  try {
    loading.value = true;
    // TODO: Implement registration logic
    router.push({ name: 'dashboard' });
  } catch (error) {
    console.error('Registration failed:', error);
    // Handle error (show notification, etc.)
  } finally {
    loading.value = false;
  }
};
</script>