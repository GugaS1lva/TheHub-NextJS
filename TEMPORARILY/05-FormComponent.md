### [**`<Form>` Component 🔗**](https://nextjs.org/blog/next-15?utm_source=chatgpt.com#form-component)

O novo componente `<Form>` é uma extensão do elemento HTML `<form>` com melhorias específicas para o Next.js, incluindo:

- **Prefetching**: Pré-carrega o layout e o estado de carregamento quando o formulário está visível.
- **Navegação no lado do Cliente**: Preserva layouts compartilhados e estados do cliente ao enviar o formulário.
- **Progressive Enhancement**: Funciona como um formulário HTML comum (com navegação completa) caso o JavaScript não tenha carregado.

---

### **Exemplo Simples de Uso**

Código com o `<Form>`:

```jsx
import Form from 'next/form';

export default function Page() {
  return (
    <Form action="/search">
      <input name="query" placeholder="Search..." />
      <button type="submit">Submit</button>
    </Form>
  );
}
```

---

### **O que acontece:**

- Quando o formulário está visível na página, o layout da rota de destino (neste caso, `/search`) é pré-carregado.
- Ao enviar o formulário:
  - **Com JavaScript habilitado**: Navegação no cliente (rápida, preserva estados e layouts compartilhados).
  - **Sem JavaScript**: Funciona como um formulário HTML normal (navegação completa).

---

### **Resumo**

O `<Form>` facilita a criação de formulários com:
- **Navegação rápida no cliente**.
- **Pré-carregamento automático de layouts**.
- **Compatibilidade com navegadores sem JavaScript**.
- **Simplificação** na criação de formulários que levam a outras páginas (como formulários de busca).
- **Melhora** a produtividade do desenvolvedor e a performance geral da aplicação.