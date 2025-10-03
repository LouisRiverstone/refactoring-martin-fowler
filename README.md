# 🔧 Refatoração - Aperfeiçoando o Projeto de Código Existente

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> Exemplos práticos e didáticos das 60 refatorações do livro **"Refactoring: Improving the Design of Existing Code"** (2ª edição) de Martin Fowler, implementados em TypeScript com Bun.

## 📚 Sobre o Projeto

Este repositório contém implementações práticas de todas as técnicas de refatoração apresentadas no livro clássico de Martin Fowler. Cada exemplo demonstra claramente o "antes" e "depois" da refatoração, facilitando o aprendizado e a aplicação dessas técnicas no dia a dia.

## 🚀 Como Executar

### Pré-requisitos

- [Bun](https://bun.sh) (JavaScript runtime e package manager)

### Instalação e Execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/LouisRiverstone/refactoring-martin-fowler.git
   cd refactoring-martin-fowler
   ```

2. **Instale as dependências:**
   ```bash
   bun install
   ```

3. **Execute os exemplos:**
   ```bash
   bun ./src/index.ts
   ```

## 📁 Estrutura do Projeto

Cada refatoração está organizada em `src/NN-nome-da-refatoracao/` e contém:

```
src/
├── NN-nome-da-refatoracao/
│   ├── before.ts     # 🔴 Código com smell/problema
│   ├── after.ts      # ✅ Código após a refatoração
│   └── README.md     # 📖 Explicação detalhada em português
```

## 📖 Catálogo de Refatorações (1–60)

### 🔄 Refatorações Básicas (1-10)

| # | Refatoração | Descrição |
|---|-------------|-----------|
| 01 | [Extract Function](src/01-extract-function/) | Extrair função a partir de código duplicado |
| 02 | [Inline Function](src/02-inline-function/) | Incorporar função simples no código chamador |
| 03 | [Extract Variable](src/03-extract-variable/) | Extrair variável para expressar intenção |
| 04 | [Inline Variable](src/04-inline-variable/) | Remover variável desnecessária |
| 05 | [Change Function Declaration](src/05-change-function-declaration/) | Alterar assinatura de função |
| 06 | [Encapsulate Variable](src/06-encapsulate-variable/) | Encapsular acesso a variável global |
| 07 | [Introduce Parameter Object](src/07-introduce-parameter-object/) | Agrupar parâmetros relacionados em objeto |
| 08 | [Combine Functions into Class](src/08-combine-functions-into-class/) | Organizar funções relacionadas em classe |
| 09 | [Combine Functions into Transform](src/09-combine-functions-into-transform/) | Combinar funções em transformação |
| 10 | [Split Phase](src/10-split-phase/) | Separar fases de processamento |

### 🏗️ Encapsulamento (11-19)

| # | Refatoração | Descrição |
|---|-------------|-----------|
| 11 | [Encapsulate Record](src/11-encapsulate-record/) | Encapsular estrutura de dados |
| 12 | [Encapsulate Collection](src/12-encapsulate-collection/) | Encapsular coleção |
| 13 | [Replace Primitive with Object](src/13-replace-primitive-with-object/) | Substituir primitivo por objeto |
| 14 | [Replace Temp with Query](src/14-replace-temp-with-query/) | Substituir variável temporária por consulta |
| 15 | [Extract Class](src/15-extract-class/) | Extrair classe |
| 16 | [Inline Class](src/16-inline-class/) | Incorporar classe |
| 17 | [Hide Delegate](src/17-hide-delegate/) | Ocultar delegação |
| 18 | [Remove Middle Man](src/18-remove-middle-man/) | Remover intermediário |
| 19 | [Substitute Algorithm](src/19-substitute-algorithm/) | Substituir algoritmo |

### 🧬 Herança (20-27)

| # | Refatoração | Descrição |
|---|-------------|-----------|
| 20 | [Pull Up Method](src/20-pull-up-method/) | Subir método na hierarquia |
| 21 | [Pull Up Field](src/21-pull-up-field/) | Subir campo na hierarquia |
| 22 | [Pull Up Constructor Body](src/22-pull-up-constructor-body/) | Subir corpo do construtor |
| 23 | [Push Down Method](src/23-push-down-method/) | Descer método na hierarquia |
| 24 | [Push Down Field](src/24-push-down-field/) | Descer campo na hierarquia |
| 25 | [Replace Type Code with Subclasses](src/25-replace-type-code-with-subclasses/) | Substituir código de tipo por subclasses |
| 26 | [Replace Subclass with Delegate](src/26-replace-subclass-with-delegate/) | Substituir subclasse por delegação |
| 27 | [Replace Delegate with Subclass](src/27-replace-delegate-with-subclass/) | Substituir delegação por subclasse |

### 🔀 Condicionais (28-34)

| # | Refatoração | Descrição |
|---|-------------|-----------|
| 28 | [Consolidate Duplicate Conditional Fragments](src/28-consolidate-duplicate-conditional-fragments/) | Consolidar fragmentos condicionais duplicados |
| 29 | [Decompose Conditional](src/29-decompose-conditional/) | Decompor condicional |
| 30 | [Consolidate Conditional Expression](src/30-consolidate-conditional-expression/) | Consolidar expressão condicional |
| 31 | [Replace Nested Conditional with Guard Clauses](src/31-replace-nested-conditional-with-guard-clauses/) | Substituir condicionais aninhadas por cláusulas de guarda |
| 32 | [Replace Conditional with Polymorphism](src/32-replace-conditional-with-polymorphism/) | Substituir condicional por polimorfismo |
| 33 | [Introduce Special Case](src/33-introduce-special-case/) | Introduzir caso especial |
| 34 | [Introduce Assertion](src/34-introduce-assertion/) | Introduzir asserção |

### ⚙️ APIs e Parâmetros (35-42)

| # | Refatoração | Descrição |
|---|-------------|-----------|
| 35 | [Separate Query from Modifier](src/35-separate-query-from-modifier/) | Separar consulta de modificação |
| 36 | [Parameterize Function](src/36-parameterize-function/) | Parametrizar função |
| 37 | [Preserve Whole Object](src/37-preserve-whole-object/) | Preservar objeto inteiro |
| 38 | [Replace Parameter with Query](src/38-replace-parameter-with-query/) | Substituir parâmetro por consulta |
| 39 | [Remove Setting Method](src/39-remove-setting-method/) | Remover método de configuração |
| 40 | [Replace Constructor with Factory Function](src/40-replace-constructor-with-factory-function/) | Substituir construtor por função factory |
| 41 | [Replace Function with Command](src/41-replace-function-with-command/) | Substituir função por comando |
| 42 | [Replace Command with Function](src/42-replace-command-with-function/) | Substituir comando por função |

### 🔄 Reorganização (43-60)

| # | Refatoração | Descrição |
|---|-------------|-----------|
| 43 | [Slide Statements](src/43-slide-statements/) | Deslizar declarações |
| 44 | [Slide Statements into Function](src/44-slide-statements-into-func/) | Deslizar declarações para função |
| 45 | [Remove Dead Code](src/45-remove-dead-code/) | Remover código morto |
| 46 | [Rename Function](src/46-rename-function/) | Renomear função |
| 47 | [Rename Variable](src/47-rename-variable/) | Renomear variável |
| 48 | [Split Variable](src/48-split-variable/) | Dividir variável |
| 49 | [Rename Field](src/49-rename-field/) | Renomear campo |
| 50 | [Introduce Foreign Method](src/50-introduce-foreign-method/) | Introduzir método externo |
| 51 | [Introduce Local Extension](src/51-introduce-local-extension/) | Introduzir extensão local |
| 52 | [Replace Magic Literal](src/52-replace-magic-literal/) | Substituir literal mágico |
| 53 | [Change Reference to Value](src/53-change-reference-to-value/) | Mudar referência para valor |
| 54 | [Change Value to Reference](src/54-change-value-to-reference/) | Mudar valor para referência |
| 55 | [Replace Array with Object](src/55-replace-array-with-object/) | Substituir array por objeto |
| 56 | [Replace Derived Variable with Query](src/56-replace-derived-variable-with-query/) | Substituir variável derivada por consulta |
| 57 | [Change Unidirectional Association to Bidirectional](src/57-change-unidirectional-association-to-bidirectional/) | Mudar associação unidirecional para bidirecional |
| 58 | [Change Bidirectional Association to Unidirectional](src/58-change-bidirectional-association-to-unidirectional/) | Mudar associação bidirecional para unidirecional |
| 59 | [Encapsulate Field](src/59-encapsulate-field/) | Encapsular campo |
| 60 | [Other Small Refactorings](src/60-other-small-refactorings/) | Outras pequenas refatorações |

## 🎯 Objetivos de Aprendizado

- **Identificar Code Smells**: Reconhecer sinais de código que precisa ser refatorado
- **Aplicar Refatorações**: Implementar melhorias de forma segura e incremental
- **Melhorar Legibilidade**: Tornar o código mais claro e expressivo
- **Reduzir Complexidade**: Simplificar estruturas complexas
- **Aumentar Manutenibilidade**: Facilitar futuras modificações

## 🛠️ Tecnologias Utilizadas

- **[TypeScript](https://www.typescriptlang.org/)**: Linguagem principal para os exemplos
- **[Bun](https://bun.sh)**: Runtime JavaScript rápido e package manager
- **[Biome](https://biomejs.dev/)**: Linter e formatter para qualidade de código

## 📚 Recursos Adicionais

- 📖 [Livro original: Refactoring (2ª edição)](https://martinfowler.com/books/refactoring.html)
- 🌐 [Site oficial do Martin Fowler](https://martinfowler.com/)
- 📝 [Catálogo de Refatorações Online](https://refactoring.com/catalog/)

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se livre para:

- 🐛 Reportar bugs
- 💡 Sugerir melhorias
- 📝 Melhorar documentação
- ✨ Adicionar novos exemplos

### Como Contribuir

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ⭐ Reconhecimentos

- **Martin Fowler** - Pelo livro fundamental sobre refatoração
- **Comunidade TypeScript** - Pelas ferramentas e documentação
- **Equipe Bun** - Pelo runtime rápido e moderno

---

<div align="center">
  <p>Feito com ❤️ para a comunidade de desenvolvedores</p>
  <p>Se este projeto te ajudou, considere deixar uma ⭐!</p>
</div>
