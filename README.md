# Refatoração - Aperfeiçoando o Projeto de Código Existente (exemplos em TypeScript + Bun)

Este repositório contém exemplos didáticos das refatorações do livro "Refactoring" (2ª edição, Martin Fowler).

Como rodar

1. Instale o Bun (https://bun.sh) se ainda não tiver.
2. No diretório do projeto, rode:

```bash
bun ./src/index.ts    # executa os exemplos (importa before/after de cada refatoração)
```

Estrutura

Cada refatoração está em `src/NN-name/` e contém:
- `before.ts` — código com smell/exemplo ruim
- `after.ts` — código após a refatoração
- `README.md` — explicação curta em português

Cobertura (1–60)

1. 01-extract-function
2. 02-inline-function
3. 03-extract-variable
4. 04-inline-variable
5. 05-change-function-declaration
6. 06-encapsulate-variable
7. 07-introduce-parameter-object
8. 08-combine-functions-into-class
9. 09-combine-functions-into-transform
10. 10-split-phase
11. 11-encapsulate-record
12. 12-encapsulate-collection
13. 13-replace-primitive-with-object
14. 14-replace-temp-with-query
15. 15-extract-class
16. 16-inline-class
17. 17-hide-delegate
18. 18-remove-middle-man
19. 19-substitute-algorithm
20. 20-pull-up-method
21. 21-pull-up-field
22. 22-pull-up-constructor-body
23. 23-push-down-method
24. 24-push-down-field
25. 25-replace-type-code-with-subclasses
26. 26-replace-subclass-with-delegate
27. 27-replace-delegate-with-subclass
28. 28-consolidate-duplicate-conditional-fragments
29. 29-decompose-conditional
30. 30-consolidate-conditional-expression
31. 31-replace-nested-conditional-with-guard-clauses
32. 32-replace-conditional-with-polymorphism
33. 33-introduce-special-case
34. 34-introduce-assertion
35. 35-separate-query-from-modifier
36. 36-parameterize-function
37. 37-preserve-whole-object
38. 38-replace-parameter-with-query
39. 39-remove-setting-method
40. 40-replace-constructor-with-factory-function
41. 41-replace-function-with-command
42. 42-replace-command-with-function
43. 43-slide-statements
44. 44-slide-statements-into-func
45. 45-remove-dead-code
46. 46-rename-function
47. 47-rename-variable
48. 48-split-variable
49. 49-rename-field
50. 50-introduce-foreign-method
51. 51-introduce-local-extension
52. 52-replace-magic-literal
53. 53-change-reference-to-value
54. 54-change-value-to-reference
55. 55-replace-array-with-object
56. 56-replace-derived-variable-with-query
57. 57-change-unidirectional-association-to-bidirectional
58. 58-change-bidirectional-association-to-unidirectional
59. 59-encapsulate-field
60. 60-other-small-refactorings

Contribuições

Sinta-se livre para abrir PRs com exemplos mais detalhados ou melhorias nas explicações.
