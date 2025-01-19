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
        <li>Páginas aninhadas são criadas por meio de subpastas dentro do diretório app.</li>
      </ol>

      <ol>
        <li><code>route.ts</code>: Cria APIs internas associadas à rota correspondente.</li>
        <li><code>head.tsx</code>: Personaliza metadados da página, como título e meta tags.</li>
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