export default function Page() {
  return (
    <div className="bg-zinc-900 w-screen h-screen text-center">

      <h1 className="text-3xl">01 - O Next.js analisa a estrutura de pastas e resolve as rotas com base na especificidade.</h1>

      <ul>
        <li><code>[id]</code> terá prioridade sobre <code>[[...slug]]</code> porque o Next.js sempre tenta encontrar a rota mais específica pra corresponder à solicitação.</li>
        <li>Quando você acessa /22, o Next direciona pra <code>[id]</code> porque ela é a correspondência mais exata.</li>
        <li>Ao acessar /22/teste/de/slug, <code>[id]</code> mão pode ser usada, então o Framework direciona para <code>[[...slug]]</code>, que aceita múltiplos segmentos.</li>
      </ul>

      {/* <p>Olá, Rota estrutural. Aqui haverá um exemplo de ID e um exemplo de Slug ao mesmo tempo.
          Aqui vai existir uma explicação mais detalhada sobre o assunto e possiveis sobreposições de conceitos.
        </p>
        <p>Para consultar o material desta página, acesse o arquivo `NOTA.md` que se encontra neste mesmo nível de pastas.</p> */}
    </div>
  )
}