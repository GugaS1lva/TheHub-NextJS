'use client';

import { useParams } from "next/navigation"

export default function ComponentName() {
  const params = useParams()

  return (
    <div className="text-xl my-16 w-[680px]">
      <h1>Teste fiel de uma rota usando ID de usuário.</h1>
      <hr />

      <h3>A rota atual é: {params.id}</h3>

      <p>OBS: O servidor não sabe de antemão qual rota o usuário vai abrir, então ele não pode pegar os parãmetros de URL diretamente, isto é, como a URL depende do cliente, precisamos marcar o arquivo atual com "use-client" para acessar essas informações.</p>

      <p>Quando a página é estática (SSG), o servidor precisa saber todos os possíveis parâmetros com antecedência pra poder gerar as páginas. Mas, se o ID ou Slug só é conhecido no momento em que o usuário acessa a pagina (pela sua propriedade dinâmica), o servidor não consegue prever isso, então precisa ser tratado no Cliente, usando o useParams() + 'use client'.</p>
    </div>
  )
}



// A diferença entre essas duas abordagens de obtenção do parâmetro de rota dinâmico (`id`) no Next.js 15 reside na **fase de execução** (lado do servidor vs. lado do cliente) e nos **casos de uso específicos**.

// ---

// ### **1. Primeira abordagem (via props em Server Components)**
// ```tsx
// interface ParamsProps {
//     params: {
//         id: string;
//     };
// }

// export default function ComponentName({ params }: ParamsProps) {
//   return (
//     <>
//         <h1>Aqui deve mostrar o ID da página atual: {params.id}</h1>
//     </>
//   );
// }
// ```

// #### **Como funciona:**
// - O **Next.js passa automaticamente os parâmetros** para a página via `props` quando uma rota dinâmica é acessada (`/user/[id]`).
// - Essa abordagem **funciona no lado do servidor (Server Components)**, o que significa que os dados são resolvidos antes da página ser entregue ao cliente.
// - É ideal para **SSR (Server-Side Rendering)** e **SSG (Static Site Generation)**, onde os parâmetros são conhecidos antes da renderização.

// #### **Vantagens:**
// 1. **Melhor para SEO**, pois o conteúdo é totalmente renderizado no servidor antes de ser enviado ao navegador.
// 2. **Não precisa de marcação `use client`**, pois a página é renderizada no servidor.
// 3. **Melhor para páginas estáticas e dinâmicas conhecidas de antemão**, já que o servidor conhece os parâmetros antes do tempo de execução.

// #### **Desvantagens:**
// 1. **Não funciona bem em ambientes totalmente dinâmicos**, onde os parâmetros não podem ser previstos antes do tempo de execução.
// 2. **Necessita que os parâmetros sejam resolvidos na requisição do servidor**, o que pode adicionar latência em algumas situações.

// ---

// ### **2. Segunda abordagem (via `useParams` no lado do cliente)**
// ```tsx
// 'use client';

// import { useParams } from "next/navigation";

// export default function ComponentName() {
//   const params = useParams();

//   return (
//     <div className="text-xl my-16 w-[680px]">
//       <h1>Teste fiel de uma rota usando ID de usuário.</h1>
//       <hr />

//       <h3>A rota atual é: {params.id}</h3>

//       <p>OBS: O servidor não sabe de antemão qual rota o usuário vai abrir, então ele não pode pegar os parâmetros de URL diretamente, isto é, como a URL depende do cliente, precisamos marcar o arquivo atual com "use client" para acessar essas informações.</p>

//       <p>Quando a página é estática (SSG), o servidor precisa saber todos os possíveis parâmetros com antecedência pra poder gerar as páginas. Mas, se o ID ou Slug só é conhecido no momento em que o usuário acessa a pagina (pela sua propriedade dinâmica), o servidor não consegue prever isso, então precisa ser tratado no Cliente, usando o useParams() + 'use client'.</p>
//     </div>
//   );
// }
// ```

// #### **Como funciona:**
// - O hook `useParams()` é usado para obter os parâmetros da URL **no lado do cliente** (CSR - Client-Side Rendering).
// - A página precisa ser marcada com `'use client'`, indicando que o código será executado no navegador, pois o servidor não terá acesso ao `window` para obter a URL.
// - Funciona bem para páginas totalmente dinâmicas, onde os parâmetros são definidos apenas quando o usuário acessa a página.

// #### **Vantagens:**
// 1. **Ideal para aplicações altamente dinâmicas**, como Single Page Applications (SPA), onde os parâmetros da URL podem mudar sem uma nova requisição ao servidor.
// 2. **Evita SSR desnecessário**, tornando a navegação mais rápida e interativa, pois a página não precisa ser gerada no servidor.
// 3. **Bom para situações onde o ID é definido dinamicamente pelo usuário**, como mudanças na URL por interações (ex: filtros, buscas, etc.).

// #### **Desvantagens:**
// 1. **Ruim para SEO**, já que o conteúdo da página é renderizado apenas no cliente, não estando disponível para motores de busca até que a página seja carregada.
// 2. **Não disponível durante a renderização inicial no servidor**, o que pode resultar em um "conteúdo vazio" até que o navegador carregue.
// 3. **Requer que o arquivo use a diretiva `'use client'`**, tornando-o menos eficiente em termos de performance quando comparado a Server Components.

// ---

// ### **Resumo Comparativo:**

// | Critério                      | Props do Next.js (Server Components) | `useParams()` (Client Components)   |
// |-------------------------------|--------------------------------------|-------------------------------------|
// | Execução                       | Lado do Servidor (SSR/SSG)           | Lado do Cliente (CSR)               |
// | Performance                    | Melhor (pré-renderização)            | Depende da conexão e do navegador  |
// | SEO                            | Ótimo (conteúdo pronto para o Google)| Ruim (conteúdo carregado após o JS) |
// | Uso dinâmico (dependendo do cliente) | Limitado                           | Muito flexível                      |
// | Facilidade de uso               | Mais direto, baseado em props       | Requer conhecimento de hooks        |
// | Disponibilidade de dados        | Imediata (antes do carregamento)     | Apenas após a montagem do componente|
// | Melhor para                     | Páginas estáticas e SSR              | Aplicações interativas, SPAs         |

// ---

// ### **Quando usar cada abordagem?**

// - **Use props do Next.js (Server Components):**
//   - Quando os parâmetros são conhecidos antes da renderização (SSR ou SSG).
//   - Para melhorar o SEO e garantir um carregamento inicial rápido.
//   - Em páginas que dependem de dados de back-end no momento da requisição.

// - **Use `useParams` (Client Components):**
//   - Quando o ID ou slug não é conhecido até que o usuário navegue para a página.
//   - Para aplicativos interativos com muitas mudanças de URL baseadas em interações.
//   - Quando não há necessidade de SEO, como em dashboards internos.

// ---

// Espero que esta explicação detalhada tenha esclarecido as diferenças entre as abordagens. Se tiver mais dúvidas, estou à disposição!