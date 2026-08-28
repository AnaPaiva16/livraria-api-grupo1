# 📘 API de Gestão da Livraria — Grupo 1

<p align="left">
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-1E3A8A?style=for-the-badge&logoColor=white" alt="Status">
  <img src="https://img.shields.io/badge/Node.js-3B82F6?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Status">
  <img src="https://img.shields.io/badge/SENAI-00529B?style=for-the-badge" alt="SENAI">
</p>

> 📖 Projeto da UC de **Programação Back-End** > 🎓 **Curso Técnico em Desenvolvimento de Sistemas** > 🏫 **Escola SENAI "Santo Paschoal Crepaldi"** — Turma `1-2026-SESI_DEV_OC_1`

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
  <img src="https://img.shields.io/badge/Git-60A5FA?style=flat-square&logo=git&logoColor=white" />
</p>

---

## 📊 4. Tabela de Auditoria (UML x MVC)

| Classe do diagrama | Existe em src/models/? | Se não existe, por quê |
| :--- | :--- | :--- |
| **Livro** | Sim | — |
| **Categoria** | Sim | — |
| **LivroFisico** | Sim | — |
| **LivroDigital** | Sim | — |
| **Pessoa** | Sim | — |
| **Cliente** | Sim | — |
| **Funcionario** | Sim | — |
| **Carrinho** | Sim | — |
| **Pedido** | Não | Ainda não existe em código nenhum; foi desenhada em 14/08 para o Bloco 3. |
| **ItemPedido** | Não | Ainda não existe em código nenhum; foi desenhada em 14/08 para o Bloco 3. |

---

## 🚀 5. Como Rodar o Projeto

### ⚙️ Pré-requisitos
* [Node.js](https://nodejs.org/) instalado

### 🔧 Passos para execução

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/AnaPaiva16/livraria-api-grupo1.git](https://github.com/AnaPaiva16/livraria-api-grupo1.git)