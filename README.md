# 📊 REACT CSV CRUD

Uma aplicação em React que simula um banco de dados baseado em um único arquivo CSV. Os dados são obtidos da [Random Data API](https://random-data-api.com/documentation), com suporte a CRUD completo, upload/download de CSV e pesquisa avançada por nome de usuário e e-mail.

---

## 🚀 Funcionalidades

✅ Listagem de usuários gerados automaticamente via API  
✅ Upload de arquivo CSV com usuários  
✅ Download do banco de dados como CSV  
✅ Edição e exclusão de usuários diretamente da tabela  
✅ Paginação e responsividade mobile-first 📱  
✅ Pesquisa filtrando por **username** e **email**  
✅ Menu de navegação com rotas separadas  
✅ Totalmente funcional com arquivos CSV únicos e integridade garantida

---

## 📂 Estrutura do Projeto

```
📁 src/
│ ├── components/
│ │   └── DialogEdit.tsx
│ ├── hooks/
│ │   ├── usePagination.ts
│ │   └── useUsers.ts
│ ├── pages/
│ │   ├── index.tsx        ← Página principal
│ │   └── MePage.tsx       ← Sobre mim
│ ├── services/
│ │   └── httpClient.ts
│ ├── utils/
│ │   └── csvUtils.ts      ← Funções para parse e download de CSV
│ ├── App.tsx              ← Rotas e navegação
│ ├── index.tsx
```

---

## 🛠 Tecnologias Utilizadas

- ⚛️ **React** (com TypeScript)
- 📦 **Axios** – para chamadas HTTP
- 📁 **PapaParse** – leitura e escrita de CSV
- 💾 **FileSaver.js** – salvar arquivos do lado do cliente
- 📐 Estilo CSS Mobile-First puro

---

## 🌐 Acesso Online

Você pode acessar a aplicação funcionando diretamente neste link:  
🔗 [https://bernardoenock.github.io/react_csv_crud/](https://bernardoenock.github.io/react_csv_crud/)

---

## 🖥️ Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/bernardoenock/react_csv_crud.git
cd react_csv_crud

# Instale as dependências
npm install

# Rode o projeto
npm run dev  # ou npm start se estiver usando outro boilerplate

# Acesse via http://localhost:5173/react_csv_crud/ (caso use Vite)
```

---

## 🧪 Requisitos Atendidos

- ✅ Listar usuários da API `random-data-api`
- ✅ Armazenar dados em um **único** arquivo CSV
- ✅ Permitir edição e exclusão mantendo integridade dos dados
- ✅ Funcionalidade de pesquisa por `username` e `email`
- ✅ Upload/Download de CSV do/para o cliente
- ✅ Totalmente versionado com Git

---

## ✨ Sobre o Autor

Desenvolvido por **[Bernardo Enock](https://github.com/bernardoenock)**  
💼 Desenvolvedor React Pleno.