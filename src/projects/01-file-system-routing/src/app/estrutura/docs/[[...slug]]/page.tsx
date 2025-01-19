'use client'

import { useParams } from "next/navigation"

export default function ComponentName() {
  const params = useParams()

  return (
    <div className="text-xl my-16 w-[680px]">
      <h1>Exemplo mais próximo de uma rota real de Slug.</h1>
      <hr />

      <h3>O slug atual dessa página é: {params.slug}</h3>

      <p>OBS: O servidor não sabe de antemão qual rota o usuário vai abrir, então ele não pode pegar os parãmetros de URL diretamente, isto é, como a URL depende do cliente, precisamos marcar o arquivo atual com "use-client" para acessar essas informações.</p>

      <p>Quando a página é estática (SSG), o servidor precisa saber todos os possíveis parâmetros com antecedência pra poder gerar as páginas. Mas, se o ID ou Slug só é conhecido no momento em que o usuário acessa a pagina (pela sua propriedade dinâmica), o servidor não consegue prever isso, então precisa ser tratado no Cliente, usando o useParams() + 'use client'.</p>
    </div>
  )
}