<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <img class="h-8 w-auto" src="@/assets/logo.svg" alt="Logo" />
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.to"
                class="inline-flex items-center px-1 pt-1 border-b-2"
                :class="[
                  $route.name === item.to.name
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                ]"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>
          <div class="flex items-center">
            <div class="ml-3 relative">
              <button
                @click="userMenuOpen = !userMenuOpen"
                class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span class="sr-only">Abrir menu do usuário</span>
                <img
                  class="h-8 w-8 rounded-full"
                  :src="userAvatar"
                  alt=""
                />
              </button>
              <div
                v-if="userMenuOpen"
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                role="menu"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  @click="logout"
                >
                  Sair
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const userMenuOpen = ref(false);
const authStore = useAuthStore();
const router = useRouter();

const navigation = [
  { name: 'Painel', to: { name: 'painel' } },
  { name: 'Clientes', to: { name: 'clientes' } },
  { name: 'Estoque', to: { name: 'estoque' } },
  { name: 'Vendas', to: { name: 'vendas' } },
  { name: 'Financeiro', to: { name: 'financeiro' } }
];

const userAvatar = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';

const logout = async () => {
  await authStore.logout();
  router.push({ name: 'login' });
};
</script>