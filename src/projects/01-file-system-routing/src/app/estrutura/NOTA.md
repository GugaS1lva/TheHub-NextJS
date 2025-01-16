## 01 - O Next.js analisa a estrutura de pastas e resolve as rotas com base na especificidade.

- [id] terá prioridade sobre [[...slug]] porque o Next.js sempre tenta encontrar a rota mais específica pra corresponder à solicitação.
- Quando você acessa `/22`, o Next direciona pra [id] porque ela é a correspondência mais exata.
- Ao acessar `/22/teste/de/slug`, [id] mão pode ser usada, então o Framework direciona para [[...slug]], que aceita múltiplos segmentos.
