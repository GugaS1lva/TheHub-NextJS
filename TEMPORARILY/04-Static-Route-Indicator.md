### [**Static Route Indicator 🔗**](https://nextjs.org/blog/next-15?utm_source=chatgpt.com#static-route-indicator)

O **Static Route Indicator (SRI)** é uma nova funcionalidade visual exibida durante o desenvolvimento no Next.js. Ele serve para indicar se uma **rota é estática ou dinâmica**, ajudando os desenvolvedores a identificar como suas páginas são renderizadas.

---

### **Por que isso importa?**
- **Estático**:  
  Páginas pré-geradas no momento do build, rápidas e ideais para conteúdo que não muda com frequência.
- **Dinâmico**:  
  Páginas geradas no momento da requisição, úteis para conteúdo atualizado frequentemente, mas com maior custo de performance.

O indicador permite que você **otimize facilmente sua estratégia de renderização**, sabendo exatamente como suas páginas estão sendo tratadas.

---

### **Como usar?**
- Durante o desenvolvimento, o Next.js exibe o indicador ao lado das rotas:
  - **⚡ Estático**: Rota pré-renderizada (Static Site Generation).
  - **🌀 Dinâmico**: Rota renderizada no servidor (Server-Side Rendering).
- Para rotas dinâmicas, ele informa se há potencial para serem convertidas em estáticas.

---

### **Saída de Compilação**
Além do indicador visual, a saída de compilação também detalha a estratégia de renderização das rotas:

```bash
● /about               Static
○ /profile/[id]        Dynamic
```

---

### **Desativando o Indicador**
Se não precisar do Static Route Indicator, ele pode ser desativado facilmente no arquivo `next.config.js`:

```javascript
const nextConfig = {
  devIndicators: {
    staticRoute: false,
  },
};

module.exports = nextConfig;
```

---

### **Resumo**
Em resumo, o **Static Route Indicator**:
- **Serve para**: Identificar facilmente se as rotas são estáticas ou dinâmicas durante o desenvolvimento.
- **Melhora**: Observabilidade, diagnóstico e otimização de performance.
- **Ferramentas adicionais**: Logs no terminal e indicadores visuais ajudam a ajustar a estratégia de renderização das páginas conforme necessário.