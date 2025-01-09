### [**Async Request APIs (Breaking Change) 🔗**](https://nextjs.org/blog/next-15?utm_source=chatgpt.com#async-request-apis-breaking-change)

O **Async Request APIs** é uma mudança significativa introduzida no Next.js 15 que altera a forma como certas APIs lidam com dados específicos da requisição.

> Imagine que você está assistindo a um filme em um serviço de streaming. Antes, o filme só começava a ser carregado quando você apertava o play, o que poderia causar uma espera mais longa. Agora, com as novas mudanças, partes do filme já começam a ser preparadas antes mesmo de você apertar o play, tornando a experiência mais rápida.

Normalmente no Next.js, algumas APIs fornecem dados específicos da requisição, como cookies, cabeçalhos (headers) e parâmetros de busca. Antes, essas APIs eram acessadas de forma síncrona, ou seja, o código aguardava a resposta dessas APIs antes de continuar. Com a atualização no Next.js 15, essas APIs agora são assíncronas, permitindo que o servidor prepare o máximo possível antes da chegada de uma requisição, melhorando a eficiência e a performance da aplicação.

---

### **APIs Atingidas por essa Mudança**
- `cookies`
- `headers`
- `draftMode`
- `params` em `layouts.js`, `page.js`, `route.js`, `default.js`, `generateMetadata.js` e `generateViewport.js`
- `searchParams` em `page.js`

Para facilitar a migração, essas APIs podem ser acessadas de forma síncrona temporariamente, mas exibirão avisos durante o desenvolvimento e em produção até a próxima versão principal.  
**Um codemod está disponível para automatizar a migração:**

```bash
npx @next/codemod@canary next-async-request-api .
```

---

### **Exemplos de Migração**

#### **Cookies**
**Antes:**
```javascript
import { cookies } from 'next/headers';

export function AdminPanel() {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
}
```

**Depois:**
```javascript
import { cookies } from 'next/headers';

export async function AdminPanel() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token');
  //...
}
```

---

#### **Headers**
**Antes:**
```javascript
import { headers } from 'next/headers';

export function Page() {
  const headersList = headers();
  const userAgent = headersList.get('user-agent');
  //...
}
```

**Depois:**
```javascript
import { headers } from 'next/headers';

export async function Page() {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent');
  //...
}
```

---

#### **Draft Mode**
**Antes:**
```javascript
import { draftMode } from 'next/headers';

export function handleDraftMode() {
  const { enable } = draftMode();
  enable();
  //...
}
```

**Depois:**
```javascript
import { draftMode } from 'next/headers';

export async function handleDraftMode() {
  const { enable } = await draftMode();
  enable();
  //...
}
```

---

#### **Params em Layout, Page, Route, Default, GenerateMetadata e GenerateViewport**

**Page Assíncrono**
**Antes:**
```javascript
export default function Page({ params }) {
  const { id } = params;
  return <div>Page ID: {id}</div>;
}
```

**Depois:**
```javascript
export default async function Page({ params }) {
  const { id } = params;
  return <div>Page ID: {id}</div>;
}
```

**GenerateMetadata**
**Antes:**
```javascript
export function generateMetadata({ params }) {
  return {
    title: `Page ${params.id}`,
  };
}
```

**Depois:**
```javascript
export async function generateMetadata({ params }) {
  return {
    title: `Page ${params.id}`,
  };
}
```

**GenerateViewport**
**Antes:**
```javascript
export function generateViewport({ params }) {
  return {
    width: "device-width",
    height: "device-height",
  };
}
```

**Depois:**
```javascript
export async function generateViewport({ params }) {
  return {
    width: "device-width",
    height: "device-height",
  };
}
```

---

#### **SearchParams em Page.js**

**Antes:**
```javascript
export default function Page({ searchParams }) {
  const { q } = searchParams;
  return <div>Search Query: {q}</div>;
}
```

**Depois:**
```javascript
export default async function Page({ searchParams }) {
  const { q } = searchParams;
  return <div>Search Query: {q}</div>;
}
```

---

### **Resumo**
- `draftMode`: Agora precisa ser acessado de forma assíncrona com `await draftMode()`.
- `params`: Todas as funções que utilizam `params` (em `page.js`, `layout.js`, etc.) agora precisam ser declaradas como assíncronas (`async`).
- `searchParams`: Similar a `params`, funções que utilizam `searchParams` também precisam ser declaradas como assíncronas.

Essa mudança torna o comportamento mais consistente e melhora a performance geral da aplicação.