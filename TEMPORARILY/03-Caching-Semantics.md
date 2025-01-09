### [**Caching Semantics 🔗**](https://nextjs.org/blog/next-15?utm_source=chatgpt.com#caching-semantics)

As principais mudanças no cache do Next.js foram feitas para tornar o comportamento de cache mais explícito e previsível, aumentando a flexibilidade no controle de dados dinâmicos e estáticos.

---

### **Requisições `fetch` no Servidor**
Antes, o cache padrão era ativado automaticamente para requisições. Agora, as requests **não são mais cacheadas por padrão**.

#### **Como ativar o cache manualmente:**
```javascript
const data = await fetch('https://api.github.com/users/gugas1lva/repos', { cache: 'force-cache' });
```

#### **Para garantir sempre dados frescos:**
```javascript
const data = await fetch('https://api.github.com/users/gugas1lva/repos', { cache: 'no-store' });
```

---

### **Manipuladores de Rotas `GET`**
Anteriormente, as rotas `GET` eram cacheadas automaticamente. Agora, **não armazenam mais em cache por padrão**.

#### **Como ativar o cache manualmente:**
```javascript
export const dynamic = 'force-static';

export async function GET(request) {
  return new Response('Cached-response');
}
```

---

### **Cache no Cliente para Páginas Dinâmicas**
Antes, os dados em cache no cliente poderiam ser desatualizados. Agora, o tempo de expiração (`staleTime`) padrão é `0`, garantindo que os **dados sejam sempre atualizados**.

#### **Como personalizar o cache no cliente:**
```javascript
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30, // Tempo em segundos
    },
  },
};

module.exports = nextConfig;
```

---

### **Resumo**
- **Cache no `fetch` (Servidor)**: Desativado por padrão.  
  - **Ativar cache**: Use `cache: 'force-cache'`.
  - **Sempre dados frescos**: Use `cache: 'no-store'`.

- **Rotas `GET`**: Desativado por padrão.  
  - **Ativar cache**: Adicione `dynamic: 'force-static'`.

- **Cache no Cliente (Páginas Dinâmicas)**:  
  - **Comportamento padrão**: Atualização imediata dos dados (`staleTime: 0`).
  - **Personalizar tempo de cache**: Configure `staleTime` no `next.config.js`.

---

Essas mudanças tornam o comportamento de cache mais **explícito** e **previsível**, permitindo maior controle sobre dados dinâmicos e estáticos.