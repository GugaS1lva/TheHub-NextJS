import { notFound } from "next/navigation";

export async function genereteStaticParams() {
    const idsPermitidos = ['guga', 'magistrado', 'navas']

    return idsPermitidos.map((id) => ({id}));
}

export default function PerfilPage({ params }: { params: {id: string} }){
    const idsPermitidos = ['guga', 'magistrado', 'navas']

    if (!idsPermitidos.includes(params.id)) {
       notFound()
    }

    return <h1>Perfil do: {params.id}</h1>
}