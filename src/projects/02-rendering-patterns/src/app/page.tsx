import Image from "next/image";
import CodeBlock, { fetchExample } from "./components/CodeBlock";

export default function Home() {
  return (
    <main className="">
      <h1>Rendering Patterns</h1>

      <Image
        src="/statue.webp"
        width={1100}
        height={385}
        alt="Statue Picture"
      />

      <hr />
      <h2>Client Side Rendering (CSR)</h2>
      <p>No CSR, toda a lógica de renderização acontece no navegador do cliente. O conteúdo inicial é carregado com HTML mínimo, e o JS é responsável por buscar e renderizar esses dados após a página ser carregada.</p>

      <p>Use em:</p>
      <ul>
        <li>Aplicações interativas e dinâmicas, como Dashboards.</li>
        <li>Quando os dados mudam constantemente e não há necessidade de SEO imediato.</li>
      </ul>

      <hr />
      <h2>Fetch de Dados</h2>
      <p>No Next13+ foi adicionado uma nova sintaxe para buscar dados. Com a nova versão do Next, podemos fazer chamadas HTTP diretamente no corpo do nosso componente, simplesmente transformando-os em componentes assincronos:</p>
      
      <CodeBlock code={fetchExample} language="tsx" />
    </main>
  );
}
