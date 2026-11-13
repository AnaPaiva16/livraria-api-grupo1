# 📘 API de Gestão da Livraria — Grupo 1

<p align="left">
  <img src="https://shields.io" alt="Status">
  <img src="https://img.shields.io/badge/Node.js-3B82F6?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://shields.io" alt="MySQL">
  <img src="https://img.shields.io/badge/SENAI-00529B?style=for-the-badge" alt="SENAI">
</p>

> 📖 Projeto da UC de **Programação Back-End**  
> 🎓 **Curso Técnico em Desenvolvimento de Sistemas**  
> 🏫 **Escola SENAI "Santo Paschoal Crepaldi"** — Turma `1-2026-SESI_DEV_OC_1`

---

## 🔹 1. Integrantes do Grupo

* 👤 **Ana J. Paiva** — [@AnaPaiva16](https://github.com/AnaPaiva16) | [`ana.j.paiva@edu.senai.br`](mailto:ana.j.paiva@edu.senai.br)
* 👤 **Danielly M. Souza** — [@daniellysanches](https://github.com/daniellysanches) | [`danielly.m.souza@edu.senai.br`](mailto:danielly.m.souza@edu.senai.br)
* 👤 **Lara Piva** — [@lara-piva](https://github.com/lara-piva) | [`lara.piva@edu.senai.br`](mailto:lara.piva@edu.senai.br)
* 👤 **Rafaelly Lopes** — [@rafaellylopes-code](https://github.com/rafaellylopes-code) | [`rafaelly.lopes@edu.senai.br`](mailto:rafaelly.lopes@edu.senai.br)

---

## 👥 2. Divisão de Responsabilidades (Consolidação de Classes)

| Integrante | Responsável por | Arquivo | Status |
| :--- | :--- | :--- | :--- |
| 👤 **Ana Paiva** | `LivroFisico.js` | `src/models/LivroFisico.js` | Consolidado |
| 👤 **Danielly Monize** | `LivroDigital.js` | `src/models/LivroDigital.js` | Consolidado |
| 👤 **Lara Piva** | `Carrinho.js` | `src/models/Carrinho.js` | Consolidado |
| 👤 **Rafaelly Lopes** | `Pessoa.js` / Heranças | `src/models/Pessoa.js` | Consolidado |

---

## 🛠️ 3. Tecnologias & Ferramentas

<p align="left">
  <img src="https://img.shields.io/badge/Node.js-1E3A8A?style=flat-square&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/npm-1D4ED8?style=flat-square&logo=npm&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-2563EB?style=flat-square&logo=javascript&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-3B82F6?style=flat-square&logo=express&logoColor=white" />
  <img src="https://shields.io" />
  <img src="https://shields.io" />
  <img src="https://shields.io" />
  <img src="https://img.shields.io/badge/Git-60A5FA?style=flat-square&logo=git&logoColor=white" />
</p>

---

## 📊 4. Diagrama UML & Tabela de Auditoria (UML x MVC)

🔗 **[Acessar Diagrama UML Completo no Google Drive](https://drive.google.com/file/d/1sk--wYqzi1dMSGqm03_2SODGD2yUy6GU/view?usp=sharing)**

| Classe do diagrama | Existe em `src/models/`? | Se não existe, por quê |
| :--- | :--- | :--- |
| **Livro** | Sim | — |
| **Categoria** | Sim | — |
| **LivroFisico** | Sim | — |
| **LivroDigital** | Sim | — |
| **Pessoa** | Sim | — |
| **Cliente** | Sim | — |
| **Funcionario** | Sim | — |
| **Carrinho** | Sim | — |
| **Pedido** | Não | Representada apenas no diagrama UML (esperado para o planejamento da arquitetura). |
| **ItemPedido** | Não | Representada apenas no diagrama UML (esperado para o planejamento da arquitetura). |

---

## 🗄️ 5. Banco de Dados & Evolução da API (Bloco 4)

* **Persistência em MySQL:** Migração completa do armazenamento em memória para banco de dados relacional (`livraria`), utilizando `mysql2` e variáveis de ambiente (`dotenv`).
* **Relacionamento & Integridade:** Criação das tabelas `categorias` e `livros` com chave estrangeira (`categoria_id`) e consultas com `JOIN` para retornar o nome da categoria junto aos dados do livro.
* **Carga Inicial (`livraria.sql`):** Script completo de recriação do banco contendo **3 categorias** (*Ficção*, *Tecnologia*, *Infantil*) e **8 livros** pré-cadastrados.
* **Tratamento Global de Erros (`tratarErros.js`):** Middleware centralizado preparado para capturar e responder adequadamente a falhas de sintaxe JSON (`400`), estouro de tamanho/faixa no banco (`400`), chave estrangeira inexistente (`400`), conflito ao excluir categoria vinculada (`409`) e indisponibilidade do banco (`503`).
* **Refatoração e Clean Code:** Extração de números mágicos, modularização em arquitetura MVC (`config`, `controllers`, `database`, `middlewares`, `models`, `routes`, `services`) e revisão entre os integrantes.

---

## 📁 6. Estrutura do Projeto

```text
livraria-api-grupo1/
├── database/               # Scripts SQL (criação de tabelas e carga inicial)
├── docs/
│   ├── Insomnia/           # Coleção de testes exportada do Insomnia
│   └── Postman/            # Coleção de testes e evidências (prints)
├── src/
│   ├── config/             # Configurações de conexão com o banco de dados
│   ├── controllers/        # Controladores das requisições (Livros e Categorias)
│   ├── database/           # Scripts e utilitários de banco
│   ├── middlewares/        # logger.js, rotaNaoEncontrada.js e tratarErros.js
│   ├── models/             # Classes e modelos de domínio da livraria
│   ├── routes/             # Definição das rotas da API
│   ├── services/           # Regras de negócio e consultas SQL
│   └── index.js            # Ponto de entrada da aplicação Express
├── .env.example            # Modelo de variáveis de ambiente
├── .gitignore              # Arquivos ignorados pelo Git (node_modules, .env)
├── package.json            # Dependências e scripts do projeto
└── README.md               # Documentação do projeto
```

---

## 🌐 7. Principais Endpoints da API

### 📚 Livros (`/livros`)

| Método | Rota | Descrição | Status Esperado |
| :--- | :--- | :--- | :--- |
| `GET` | `/livros` | Lista todos os livros cadastrados com suas respectivas categorias (`JOIN`) | `200 OK` |
| `GET` | `/livros/:id` | Busca um livro específico pelo `id` | `200 OK` / `404 Not Found` |
| `POST` | `/livros` | Cadastra um novo livro vinculado a uma `categoria_id` existente | `201 Created` / `400 Bad Request` |
| `PUT` | `/livros/:id` | Atualiza todos os dados de um livro existente | `200 OK` / `400` / `404` |
| `PATCH` | `/livros/:id` | Atualiza parcialmente o estoque de um livro | `200 OK` / `400` / `404` |
| `DELETE` | `/livros/:id` | Remove um livro pelo `id` | `204 No Content` / `404` |

### 🏷️ Categorias (`/categorias`)

| Método | Rota | Descrição | Status Esperado |
| :--- | :--- | :--- | :--- |
| `GET` | `/categorias` | Lista todas as categorias cadastradas | `200 OK` |
| `GET` | `/categorias/:id` | Busca uma categoria específica pelo `id` | `200 OK` / `404 Not Found` |
| `POST` | `/categorias` | Cadastra uma nova categoria | `201 Created` / `400 Bad Request` |
| `PUT` | `/categorias/:id` | Atualiza os dados de uma categoria | `200 OK` / `400` / `404` |
| `DELETE` | `/categorias/:id` | Remove uma categoria (bloqueado se houver livros vinculados) | `204 No Content` / `409 Conflict` |

---

## 🚀 8. Como Rodar o Projeto

### ⚙️ Pré-requisitos
* [Node.js](https://nodejs.org/) instalado
* [MySQL Server](https://mysql.com) e [MySQL Workbench](https://mysql.comworkbench/) instalados

### 🔧 Passos para execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/AnaPaiva16/livraria-api-grupo1.git
   cd livraria-api-grupo1
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   * Copie o arquivo `.env.example` e renomeie a cópia para `.env`.
   * Preencha a senha do seu MySQL local no campo `DB_PASSWORD`:
   ```env
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=sua-senha-do-mysql
   DB_NAME=livraria
   ```

4. **Crie e popule o banco de dados:**
   * Abra o **MySQL Workbench**.
   * Carregue o arquivo `livraria.sql` (disponível na pasta `database/` ou `src/database/`) e execute o script completo (**⚡**).

5. **Inicie o servidor:**
   ```bash
   npm run dev
   ```
   * O terminal deverá exibir a confirmação: **`Conectado ao MySQL!`**.

6. **Execute os testes:**
   * Importe a coleção disponível em `docs/Insomnia/` ou `docs/Postman/` e execute as requisições para validar o CRUD, validações e regras de relacionamento.
