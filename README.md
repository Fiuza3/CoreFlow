# Sistema ERP Vue.js

Sistema de Gestão Empresarial (ERP) desenvolvido com Vue 3, TypeScript e Vite.

## Sobre o Projeto

Este é um sistema ERP completo que inclui:
- Gestão de Clientes
- Controle de Estoque
- Gestão de Vendas
- Gestão Financeira
- Painel Administrativo

## Tecnologias Utilizadas

- Frontend:
  - Vue.js 3
  - TypeScript
  - Tailwind CSS
  - Pinia (Gerenciamento de Estado)
  - Vue Router
  - Vite

- Backend:
  - Node.js
  - Supabase

## Como Instalar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm run dev
```

## Estrutura do Projeto

```
├── frontend/           # Aplicação Vue.js
│   ├── src/
│   │   ├── assets/    # Recursos estáticos
│   │   ├── components/# Componentes Vue
│   │   ├── layouts/   # Layouts da aplicação
│   │   ├── views/     # Páginas
│   │   ├── stores/    # Stores Pinia
│   │   └── router/    # Configuração de rotas
│   └── ...
│
└── backend/           # API e serviços
    ├── src/
    │   ├── controllers/
    │   ├── models/
    │   ├── routes/
    │   └── services/
    └── ...
```

## Desenvolvedor

Desenvolvido por **Marcus Fiuza**

## Licença

Este projeto está sob a licença MIT.