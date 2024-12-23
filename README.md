# Brain Bucket

**Desenvolvedores: victorguimaraesdev, Zelchi e CardosooDev**

Brain Bucket é um aplicativo simples e eficiente para gerenciamento de tarefas (*to-do list*), projetado para ajudar você a organizar seu dia a dia. Com ele, você pode adicionar, editar, marcar como concluído e excluir tarefas facilmente.

## 🔥 Funcionalidades

- 📋 Adicionar tarefas.
- ✏️ Editar tarefas existentes.
- ✅ Marcar tarefas como concluídas.
- ❌ Excluir tarefas.
- 🌐 Interface amigável e responsiva (em desenvolvimento).

## 🛠️ Tecnologias Utilizadas

- **Back-end**: Node.js com TypeScript e Express: [API - Brain Bucket](https://github.com/Zelchi/BrainBucket-API)
- **Banco de Dados**: SQLite.
- **Front-end**: HTML, CSS, Javascript e Axios: [Front - Brain Bucket](https://github.com/victorguimaraesdev/BrainBucket-FrontEnd)

## 📜 Iniciar
Inicie o projeto com Docker: O comando npm run init configura o banco de dados e inicia o ambiente Docker.
   ```bash
   npm run init
   ```
Ou, se preferir rodar sem Docker, use o nodemon para desenvolvimento local:
   ```bash
   npm run dev
   ```

## 📜 Endpoints
### Contas:
   **POST** `/conta/criar` <br>
   ```json
   {
     "nome": "string",
     "email": "string",
     "senha": "string"
   }
   ```
   **POST** `/conta/login` <br>
   ```json
   {
     "email": "string",
     "senha": "string"
   }
   ```
### Tarefas:
   **AUTH** - `Bearer Token` <br>
   **GET** `/tarefa/mostrar` <br>
   ```json
   {
      "token": "string"
      "query": "string"
   }
   ```
   **POST** `/tarefa/criar` <br>
   ```json
   {
      "token": "string"
      "conteudo": "string"
   }
   ```
   **PATCH** `/tarefa/atualizar` <br>
   ```json
   {
      "token": "string"
      "id": "string"
      "conteudo": "string"
   }
   ```
   **DELETE** `/tarefa/deletar`
   ```json
   {
      "token": "string"
      "id": "string"
   }
   ```
   
