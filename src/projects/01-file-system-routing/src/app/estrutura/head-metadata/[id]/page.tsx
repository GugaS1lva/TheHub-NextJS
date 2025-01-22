// import type { Metadata } from "next";

// interface Params {
//     id: string;
// }

// export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
//     return {
//         title: `Perfil do usuário - ${params.id}`,
//         description: `teste de descrição ${params.id}`
//     }
// }

interface ParamsProps {
    params: {
        id: 'string'
    } 
}

export default function ComponentName({params}: ParamsProps) {
  return (
    <>
        <h1>Aqui deve mostrar o ID da página atual: {params.id}</h1>
    </>
  )
}