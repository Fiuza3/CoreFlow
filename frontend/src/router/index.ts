import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: 'painel',
          component: () => import('@/views/dashboard/Painel.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'clientes',
          name: 'clientes',
          component: () => import('@/views/clientes/Clientes.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'estoque',
          name: 'estoque',
          component: () => import('@/views/estoque/Estoque.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'vendas',
          name: 'vendas',
          component: () => import('@/views/vendas/Vendas.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'financeiro',
          name: 'financeiro',
          component: () => import('@/views/financeiro/Financeiro.vue'),
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/auth',
      component: () => import('@/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/auth/Login.vue')
        },
        {
          path: 'cadastro',
          name: 'cadastro',
          component: () => import('@/views/auth/Cadastro.vue')
        }
      ]
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;