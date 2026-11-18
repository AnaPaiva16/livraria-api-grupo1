# Plano de Projeto — API de Gestão da Livraria

| Metadado | Informação |
| :--- | :--- |
| **Versão** | 1.0 |
| **Data** | 18/11/2026 |
| **Grupo** | 1 |
| **Integrantes** | Ana Júlia de Lima Paiva · Danielly Monize Sanches de Souza · Lara Caroliny Cardoso Piva · Rafaelly Fernanda Henrique Lopes |

---

## 1. Visão geral

A livraria atualmente realiza o controle de acervo, cadastro de autores e registro de vendas de forma manual, o que gera falhas na atualização de estoque, inconsistências de saldo e lentidão no atendimento. O objetivo deste projeto é desenvolver uma **Interface de Programação de Aplicações (API)** RESTful para automatizar e centralizar a gestão operacional da livraria.

> **Justificativa do Projeto:** A centralização dos dados em banco relacional elimina retrabalhos manuais, garante integridade referencial entre livros e operações de estoque e fornece uma base confiável para futuras integrações com interfaces web ou mobile.

---

## 2. Metodologia

O grupo adotou uma **abordagem ágil baseada no framework Scrum**, organizada em sprints semanais com gerenciamento visual centralizado no quadro Kanban do **GitHub Project**.

* **Justificativa da Escolha:** O modelo ágil foi escolhido porque o projeto evoluiu de forma incremental — partindo do planejamento e modelagem de dados até a implementação das rotas RESTful. Sprints curtas permitem validar entregas funcionais semanalmente e corrigir falhas de regra de negócio antes do encerramento do prazo.
* **Dinâmica de Trabalho:** Cada sprint inicia com a seleção de *issues* priorizadas no GitHub Project, passa pelo desenvolvimento em branches isoladas com revisão de código entre as integrantes e encerra com testes de rotas no Insomnia/Postman.

---

## 3. Escopo

### 3.1. Escopo incluído
* Cadastro, consulta, atualização e remoção (CRUD) de livros, autores e categorias.
* Controle automático de entrada e saída de exemplares no estoque.
* Registro e consulta de vendas realizadas na livraria.
* Validação de dados de entrada e tratamento padronizado de erros HTTP.

### 3.2. Escopo excluído
* Desenvolvimento de interface gráfica (Front-End web ou aplicativo mobile).
* Integração com gateways de pagamento online (cartão de crédito ou PIX).
* Módulo de emissão de nota fiscal eletrônica (NF-e).

> **Justificativa de Delimitação:** Os itens excluídos demandariam tecnologias de interface e integrações externas fora do foco da Unidade Curricular, o que comprometeria o prazo da Situação de Avaliação Somativa 1 (SA1) e a qualidade dos testes do Back-End.

### 3.3. Premissas e restrições
* **Premissas:** Disponibilidade das integrantes nas aulas de Projetos de Software (PSOF) e acesso contínuo ao repositório no GitHub.
* **Restrições:** Entrega obrigatória até a data da SA1 e desenvolvimento restrito à stack **Node.js, Express e banco de dados MySQL utilizando SQL puro (`mysql2`)**, sem uso de *Object-Relational Mappers* (ORMs), garantindo controle total sobre as consultas e transações SQL.

### 3.4. Critérios de aceitação
* Todas as rotas devem responder aos métodos HTTP adequados (<kbd>GET</kbd>, <kbd>POST</kbd>, <kbd>PUT</kbd>, <kbd>DELETE</kbd>) com os respectivos códigos de status (`200`, `201`, `400`, `404`, `500`).
* Todas as operações devem persistir corretamente no banco de dados MySQL sem falhas de integridade referencial.

---

## 4. Requisitos

### 4.1. Requisitos funcionais
A tabela abaixo apresenta os **Requisitos Funcionais (RF)** da API, seus critérios de aceitação e o vínculo direto com as tarefas (*issues*) cadastradas no GitHub Project.

| Código | Descrição | Critério de aceitação | Issue |
| :--- | :--- | :--- | :---: |
| **RF001** | Cadastrar novo livro no acervo. | A rota `POST /livros` deve validar os campos obrigatórios e retornar status `201` com o registro criado. | `#1` |
| **RF002** | Listar e buscar livros por título ou autor. | A rota `GET /livros` deve retornar status `200` e a lista em formato JSON. | `#2` |
| **RF003** | Atualizar dados e quantidade em estoque de um livro. | A rota `PUT /livros/:id` deve atualizar o registro no MySQL e retornar status `200` (ou `404` se inexistente). | `#3` |
| **RF004** | Remover livro do catálogo. | A rota `DELETE /livros/:id` deve excluir o livro caso não haja vendas vinculadas e retornar status `200`. | `#4` |
| **RF005** | Registrar venda e dar baixa automática no estoque. | A rota `POST /vendas` deve subtrair a quantidade vendida do estoque e bloquear a venda se o saldo for insuficiente. | `#5` |

### 4.2. Requisitos não-funcionais
A tabela a seguir especifica os **Requisitos Não-Funcionais (RNF)** técnicos e de qualidade exigidos para a aplicação, justificando as escolhas arquiteturais.

| Código | Descrição | Critério de aceitação e justificativa |
| :--- | :--- | :--- |
| **RNF001** | Arquitetura e tecnologias obrigatórias. | API construída exclusivamente em Node.js, Express e MySQL com driver `mysql2` (SQL puro), garantindo desempenho direto sem sobrecarga de ORMs. |
| **RNF002** | Padrão de comunicação de dados. | Todas as requisições e respostas da API devem utilizar o formato JSON (`application/json`) para padronizar a integração com qualquer cliente HTTP. |
| **RNF003** | Desempenho das consultas. | As requisições de leitura (`GET`) devem responder em menos de 500 milissegundos em ambiente local, assegurando fluidez na operação de balcão. |

---

## 5. Riscos

A matriz abaixo detalha os riscos mapeados para o projeto, sua classificação e as ações de resposta vinculadas diretamente ao cronograma e ao orçamento.

| ID | Risco | Probabilidade | Impacto | Classificação | Resposta / Mitigação | Dono | Gatilho |
| :---: | :--- | :---: | :---: | :---: | :--- | :--- | :--- |
| **R01** | Dificuldade na escrita de queries SQL puras com transações no `mysql2`. | Média | Alto | **Alto** | Realizar revisão técnica em dupla na Sprint 2 e reservar 15% de contingência no orçamento para horas extras de suporte. | Danielly Monize | Atraso superior a 2 dias na entrega da rota de vendas. |
| **R02** | Falha de integração entre branches no GitHub causando conflitos de código. | Média | Médio | **Médio** | Adotar fluxo de Pull Requests revisados antes do merge na `main` (marco de verificação semanal). | Ana Júlia | Mais de dois conflitos de merge na mesma sprint. |
| **R03** | Indisponibilidade temporária de integrante da equipe. | Baixa | Alto | **Médio** | Documentar todas as rotas e manter tarefas divididas no Project para redistribuição rápida. | Lara Caroliny | Ausência não planejada em aula de desenvolvimento. |

---

## 6. Cronograma

**Link do Project no GitHub:** [https://github.com](https://github.com)

A tabela abaixo apresenta as fases, datas e marcos principais do desenvolvimento, justificando a ordem das entregas e incorporando as ações preventivas dos riscos mapeados.

| Sprint / Fase | Período | Principais Entregas / Marcos | Dependências e Justificativa |
| :--- | :---: | :--- | :--- |
| **Fase 1 — Planejamento** | 11/09 a 30/10 | Definição de escopo, requisitos, matriz de riscos, estimativas, orçamento e matriz RACI. | Aprovação do escopo inicial antes de iniciar a codificação para evitar retrabalho. |
| **Sprint 1 — Estrutura e Banco** | 31/10 a 06/11 | Configuração do ambiente Node.js/Express, modelagem do banco MySQL e CRUD de livros (`RF001` a `RF004`). | Conclusão da Fase 1; o cadastro base precisa existir antes das operações de venda. |
| **Sprint 2 — Vendas e Mitigação** | 07/11 a 13/11 | Implementação da rota de vendas (`RF005`), revisão técnica de SQL puro (mitigação **R01**) e testes de integração. | CRUD de livros concluído para permitir validação de baixa de estoque. |
| **Fase Final — Consolidação e Defesa** | 14/11 a 18/11 | Consolidação do `docs/plano-de-projeto.md`, revisão de rastreabilidade e apresentação oral para a banca. | Todas as issues concluídas no GitHub Project. |

---

## 7. Estimativa e recursos

Para estimar o esforço das tarefas, o grupo utilizou a técnica de **Planning Poker** baseada em **Pontos de Função / Story Points (PF)** convertidos em horas de desenvolvimento (`1 ponto = 2 horas`).

* **Justificativa da Técnica:** O *Planning Poker* foi escolhido por promover consenso entre todas as integrantes, evitando estimativas individuais otimistas demais e ponderando a complexidade técnica das consultas SQL em cada rota.
* **Esforço total estimado:** **20 pontos (40 horas totais)** — distribuídos entre as 5 *issues* mapeadas no GitHub Project (média de 4 pontos / 8 horas por requisito funcional).
* **Recursos humanos:** 4 integrantes da equipe de desenvolvimento atuando em regime colaborativo.
* **Recursos técnicos:** Computadores locais, Visual Studio Code, Node.js, servidor MySQL, Postman/Insomnia para testes de rotas e GitHub para versionamento.

---
---

## 8. Orçamento

A tabela a seguir apresenta os quatro blocos de custos do projeto, calculados com base nas **40 horas estimadas na Seção 7**, acrescidos da reserva de contingência justificada.

| Bloco / Categoria | Descrição e Justificativa | Valor (R$) |
| :--- | :--- | :---: |
| **1. Recursos Humanos (Mão de Obra)** | 40 horas totais de desenvolvimento, testes e gestão × R$ 35,00/hora (rastreável diretamente à soma das *issues* estimadas na Seção 7). | R$ 1.400,00 |
| **2. Infraestrutura e Hardware** | Depreciação proporcional de 4 estações de trabalho e acesso à internet banda larga durante o ciclo do projeto. | R$ 250,00 |
| **3. Software e Licenças** | Utilização exclusiva de ferramentas gratuitas e *open-source* (Node.js, MySQL, VS Code, GitHub, Postman/Insomnia), reduzindo o custo fixo. | R$ 0,00 |
| **4. Custos Indiretos / Operacionais** | Consumo proporcional de energia elétrica e despesas administrativas de apoio à documentação técnica. | R$ 150,00 |
| **Subtotal Base** | **Soma dos quatro blocos operacionais** | **R$ 1.800,00** |
| **Reserva de Contingência (15%)** | **Justificativa:** 15% sobre o subtotal base (`R$ 1.800,00 × 0,15`) definidos para absorver eventuais horas extras de depuração nos riscos **R01 (Alto)** — complexidade de transações SQL puras no `mysql2` — e **R02 (Médio)** de conflitos de integração. | R$ 270,00 |
| **Total Geral** | **Subtotal Base + Reserva de Contingência** | **R$ 2.070,00** |

---

## 9. Equipe e papéis (Matriz RACI)

Para garantir organização, clareza na tomada de decisão e rastreabilidade direta com as tarefas (*issues*) atribuídas no GitHub Project, cada integrante assumiu um papel específico na gestão e no desenvolvimento da API:

* **Product Owner (PO) — Ana Júlia de Lima Paiva:** Responsável por priorizar os requisitos, manter o alinhamento do escopo com os objetivos da livraria e validar os critérios de aceitação das entregas.
* **Scrum Master (SM) — Lara Caroliny Cardoso Piva:** Responsável por acompanhar o quadro Kanban no GitHub Project, remover impedimentos técnicos e garantir o cumprimento dos prazos das sprints.
* **Desenvolvedora Back-End 1 — Danielly Monize Sanches de Souza:** Responsável pela configuração do servidor Express, estruturação do banco de dados MySQL e escrita das consultas SQL puras (`mysql2`).
* **Desenvolvedora Back-End 2 / Garantia de Qualidade (QA) — Rafaelly Fernanda Henrique Lopes:** Responsável pelas regras de negócio de estoque e vendas, tratamento padronizado de erros HTTP e execução dos testes de rotas no Insomnia/Postman.

> **Justificativa da Estrutura:** A divisão de papéis assegura que cada etapa do ciclo de vida do software — da definição do requisito até a validação final da rota — possua uma responsável direta pela execução e outra pela revisão, evitando gargalos e retrabalho.

A matriz **RACI** (**R**esponsável pela execução, **A**provador final, **C**onsultado e **I**nformado) abaixo formaliza a atribuição de cada entrega do projeto. Todo membro marcado como **R** corresponde exatamente ao *assignee* da respectiva *issue* no GitHub Project:

| Atividade / Entrega | Ana Júlia | Danielly Monize | Lara Caroliny | Rafaelly Fernanda |
| :--- | :---: | :---: | :---: | :---: |
| Levantamento de Escopo e Requisitos (`RF001`–`RF005`) | **R** | A | C | I |
| Modelagem e Criação do Banco de Dados MySQL | C | **R** | A | I |
| Desenvolvimento do CRUD de Livros (`RF001`–`RF004`) | **R** | I | C | A |
| Desenvolvimento da Rota de Vendas e Estoque (`RF005`) | C | **R** | A | I |
| Testes de Rotas e Validação dos Requisitos Não-Funcionais | I | C | C | **R / A** |
| Consolidação do Plano de Projeto (`docs/plano-de-projeto.md`) | **R** | C | A | I |

---

## Histórico de versões

A tabela abaixo registra o controle de revisões e atualizações realizadas neste documento de planejamento:

| Versão | Data | Descrição da Alteração | Responsável |
| :---: | :---: | :--- | :--- |
| **v1.0** | 18/11/2026 | Consolidação inicial do Documento de Planejamento do Projeto (`docs/plano-de-projeto.md`), integrando escopo, requisitos, matriz de riscos, cronograma, estimativas, orçamento e matriz RACI com rastreabilidade completa. | Grupo 1 (Ana Júlia, Danielly Monize, Lara Caroliny e Rafaelly Lopes) |