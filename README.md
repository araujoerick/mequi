# FSW Donalds
**`Next.js`**
**`TypeScript`**
**`Prisma`**
**`Tailwind CSS`**
**`PostgreSQL`**

## 📋 Sobre o Projeto

O **FSW Donalds** é um simulador de cardápio digital inspirado em restaurantes de fast-food. Durante a **Full Stack Week**, desenvolvi esse projeto para explorar a criação de um sistema interativo que permite aos usuários navegar por categorias de produtos, visualizar detalhes dos itens e gerenciar pedidos vinculados ao CPF. Além disso, utilizei **Next.js** para lidar com rotas dinâmicas e melhorar a performance da aplicação.

---

## 🚀 Funcionalidades

- **Navegação por Categorias**: Permite filtrar os produtos disponíveis por tipo.  
- **Exibição Detalhada dos Itens**: Mostra informações completas sobre cada produto do menu.  
- **Diferentes Métodos de Consumo**: Simula a experiência real de um pedido.  
- **Histórico de Pedidos Vinculados ao CPF**: Permite visualizar os pedidos já realizados.  
- **Rotas Dinâmicas**: Implementação no **Next.js** para geração dinâmica de páginas de produtos.

---

## 🛠️ Tecnologias Utilizadas

- **Next.js**: Framework React para otimização de performance e renderização eficiente.
- **TypeScript**: Para um código mais seguro e escalável.
- **Prisma**: ORM para manipulação de dados de forma simples e eficiente.
- **Neon DB & PostgreSQL**: Banco de dados escalável e otimizado para armazenar os pedidos e produtos.
- **DAL (Data Access Layer)**: Separação da camada de acesso aos dados para melhor organização do código.
- **Route Handlers**: Gerenciamento otimizado de requisições no Next.js.
- **Tailwind CSS & ShadCN**: Para estilização responsiva e moderna da interface.
- **Context API & Hooks Customizados**: Para um gerenciamento eficiente de estados globais.
- **React Hook Form & Zod**: Para validação e gerenciamento de formulários.

---

## 📦 Como Executar o Projeto

1. Clone o repositório:
```bash
git clone https://github.com/araujoerick/fsw-donalds.git
```

2. Acesse o diretório do projeto:
```bash
cd fsw-donalds
```

3. Instale as dependências:
```bash
npm install
```

4. Configure as variáveis de ambiente no arquivo `.env`:
```env
DATABASE_URL=your_postgres_database_url
```

5. Execute as migrations do banco de dados:
```bash
npx prisma migrate dev
```

6. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

7. Acesse no navegador:
```
http://localhost:3000
```

---

## ✨ Demonstração

Acesse a aplicação em produção: [FSW Donalds](https://araujo-mequi.vercel.app/fsw-donalds)

---
### 📸 Capturas do Projeto:

<div align="center">
  <img src="https://github.com/user-attachments/assets/757aa57f-92fd-4a49-856b-cf377ef4ffe4" alt="Tela inicial do FSW Donalds">
  <img src="https://github.com/user-attachments/assets/bcfffef1-124c-4196-90fc-25886506218f" alt="Página de detalhes do produto">
</div>

## 📄 Licença

Este projeto é licenciado sob a [MIT License](LICENSE).
