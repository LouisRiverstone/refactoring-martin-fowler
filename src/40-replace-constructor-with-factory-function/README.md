Replace Constructor with Factory Function

Descrição: Move lógica de criação e validação para um método estático/factory em vez de no construtor.

Benefício: Mantém construtor simples e permite retornos controlados (erros, objetos cacheados, subclasses).
