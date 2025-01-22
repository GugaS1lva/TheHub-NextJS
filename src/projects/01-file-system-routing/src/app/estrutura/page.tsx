import Image from "next/image";

export default function Page() {
  return (
    <main className="w-[680px] my-16 text-white">
      <h1 className="text-center">File System Routing</h1>

      <Image
        src="/statue.webp"
        width={1100}
        height={385}
        alt="Statue Picture"
      />

      <hr />
      <h2 className="text-center text-3xl">Estrutura de pastas no app directory</h2>

      <h3>O Next.js 15 trouxe uma nova estrutura de pastas mais organizada e modular no diretório app. Alguns arquivos e pastas especiais incluem:</h3>

      <ol>
        <li><code>page.tsx</code>: Define o conteúdo principal da rota e é renderizado automaticamente.</li>
        <li><code>layout.tsx</code>: Fornece uma estrutura persistente para páginas dentro da mesma hierarquia.</li>
        <li><code>loading.tsx</code>: Exibe uma tela de carregamento durante a renderização inicial da página.</li>
        <li><code>error.tsx</code>: Lida com erros de página e permite personalização de mensagens de erro.</li>
        <li><code>not-found.tsx</code>: Renderiza uma página personalizada pra URLs não existentes.</li>
        <li>Componente <code>head.tsx</code>: Personaliza metadados da página, como título e meta tags.</li>
        <li>Páginas aninhadas são criadas por meio de subpastas dentro do diretório app.</li>
      </ol>

      <ol>
        <li><code>route.ts</code>: Cria APIs internas associadas à rota correspondente.</li>
        <li><code>template.tsx</code>: Gera um novo estado de layout pra cada visita à página.</li>
        <li><code>default.tsx</code>: Define uma interface padrão caso nenhuma outra rota corresponda.</li>
      </ol>

      <hr />
      <h2 className="text-center text-3xl">Rotas: <code className="text-code">[id]</code> vs <code className="text-code">[[...slug]]</code></h2>

      <h3>O Next.js analisa a estrutura de pastas e resolve as rotas com base na especificidade. Significa que:</h3>

      <ol>
        <li><code>[id]</code> terá prioridade sobre <code>[[...slug]]</code> porque o Next.js sempre tenta encontrar a rota mais específica pra corresponder à solicitação.</li>
        <li>Quando você acessa /22, o Next direciona pra <code>[id]</code> porque ela é a correspondência mais exata.</li>
        <li>Ao acessar /22/teste/de/slug, <code>[id]</code> mão pode ser usada, então o Framework direciona para <code>[[...slug]]</code>, que aceita múltiplos segmentos.</li>
      </ol>

      <hr />
      <h2 className="text-center text-3xl">Layouts.tsx</h2>

      <p>O arquivo layout.tsx não recarrega quando você troca de rota. Isto é: Uma vez que o layout é carregado em tela, tudo que você colocar no layout (incluindo chamadas HTTP) não é recarredo durante a troca de rotas, o Next sabe que o que está no seu layout deve ser persistente à transição de rotas.</p>

      <p>Geralmente, o layout da estrutura de Login é diferente do layout do restante da aplicação, leia-se "Enquanto o usuário não estiver logado, mostre apenas o essencial para despertar a curiosidade. Quando logado, mostre toda a aplicação.".</p>

      <p>Para que haja um estilo de página específico (layout) para quando o usuário está logado e outro para quando o usuário não está logado, você pode criar uma estrutura semelhante a que foi criada dentro da pasta <code>dashboard</code>:</p>
      <div className="w-full flex items-center justify-center gap-10">
        <img src="./01-dashboard-structure.png" alt="" /> <img src="./02-auth-structure.png" alt="" />
      </div>

      <p>OBS: Já que os conteúdos de <code>SignIn</code> e <code>NotSignIn</code> precisam passar pela rota <code>auth</code>, é preciso deixar os dois conteúdos dentro da pasta de <code>auth</code>? Sim! <br />No entanto, se você quer que a página <code>auth</code> não gere nenhum efeito na URL, basta envolvê-la por parênteses <code>()</code>.</p>
      {/* <p>Pra que eu tenha um layout na página de login e na página de registro, eu realmente preciso da pasta auth na frente do Path? Sim!</p> */}

      <hr />
      <h2 className="text-center text-3xl">Metadata vs HeadComponent vs Head.tsx</h2>

      {/* <p>No Next15, o arquivo <code>head.tsx</code> não é mais utilizado como um Arquivo Especial, como nas versões anteriores. Agora, a manipulação dos elementos dentro da tag <code>head</code> é realizada através do Componente <code>Head</code> fornecido pelo Next.js. Esse componente especial permite que você adicione elementos personalizados ao <code>head</code> da sua aplicação de forma declarativa.</p> */}
      <p>Com a chegada do Next15, o framework introduziu uma abordagem mais declarativa pra manipulação de metadados da página, priorizando o uso da propriedade <code>metadata</code> ao invés do Arquivo Especial <code>head.tsx</code> e do Componente Especial <code>Head</code>. Isso se deve por várias razões, incluindo:</p>

      <ol>
        <li>Melhora de performance:
          <ul>
            <li>O uso da propriedade <code>metadata</code> permite que o Next prcesse Metadados de forma mais eficiente durante a renderização no servidor (SSR) e na geração de páginas estáticas (SSG), reduzindo o trabalho feito no lado do cliente.</li>
            <li>Metadados são processados em <code>build time</code> sempre que possível, melhorando o tempo de carregamento da página.</li>
          </ul>
        </li>

        <li>Controle declarativo:
          <ul>
            <li>Ao usar <code>metadata</code>, você declara todas as informações da página em um único local, proporcionando uma abordagem mais clara e previsível.</li>
            <li>Reduz a necessidade de componentes dinâmicos apenas pra manipular o <code>head</code></li>
          </ul>
        </li>

        <li>Eliminação de problemas de sincronização:
          <ul>
            <li>O novo sistema evita problemas de atualização dinâmica entre SSR e CSR (hydration), garantindo que os dados sempre estejam sincronizados corretamente entre client e servidor.</li>
          </ul>
        </li>

        <li>Melhor SEO e Acessibilidade:
          <ul>
            <li>A abordagem do <code>metadata</code> permite uma melhor otimização automática de SEO com suporte embutido pra metatags comuns.</li>
          </ul>
        </li>
      </ol>

      <h3>Essa propriedade <code>metadata</code> é uma exportação especial disponível dentro de arquivos de página e layout em projetos que usam o App Router (/app). Ela é declarada como um objeto TypeScript, permitindo a definição centralizada de informações da página.</h3>

      <hr />
      <h2>Rendering Patterns</h2>

      <ol>
        <li>Server Side Rendering no Next.js (SSR)</li>

        <li>React Server Components (RSC)</li>

        <li>Client Side Rendering (CSR)</li>        
      </ol>

      <h4>SSR no Next.js</h4>
      <p>Antes do React Server Components, o SSR clássico funcionava gerando páginas HTML no servidor a cada requisição, enviando esse HTML pronto pro cliente. Isso significava menos JS no lado do cliente, pois a página ja vinha totalmente renderizada. No entanto, o React ainda precisava ser "hidratado" no cliente, o que adicionava certo peso de JS pra interatividade.</p>
      <p>O que é enviado pro cliente: apenasr da página estar prontam um "hydration script" é enviado pra permitir interativiadde, o que significa que o budle de React ainda precisava ir pro cliente, embora em menos quantidade.</p>

      <h4>React Server Components (RSC)</h4>
      <p>Com a introdução dos RSC no Next13+ (e otimizados no Next15), o modelo de SSR mudou consideravelmente.</p>
      <ul>
        <li>Os SRC permitem que determinados componentes sejam executados exclusivamente no servidor, sem a necessidade de enviar qualquer JS pro cliente.</li>
        <li>Isso representa uma grande diferença entre o SSR clássico, pois elimina completamente a necessidade de hidratação para esses componentes.</li>
        <li>Com o RSC, você pode carregar apenas o HTML e enviar props mínimas ao cliente, mantendo a lógica complexa no servidor.</li>
      </ul>
      
      <h4>Client Side Rendering (CSR)</h4>
      <p>É aplicado em funcionalidades interativas (formulários, botões e eventos dinâmicos), ainda é necessário o CSR, onde Reacy é carregado no navegador e gerencia o estado da aplicação no cliente.</p>







      {/* INSTALL AND CONFIGURE TW.TYPIGRAPHY
      <code>
        - dentro de talwindconfig.css:
            plugins: [require("@tailwindcss/typography")],
        - no terminal: bun i -D @tailwindcss/typography
        - nos componentes: className="prose"
      </code>
       */}

      {/* LIMPAR CACHE DO NEXT.JS: rm -rf .next */}
    </main>
  )
}