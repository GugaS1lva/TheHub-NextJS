import type { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
    title: 'TESTE PORRA',
    description: 'finalmente essa merda funcionou. não sei porque caralhas o componente Head não tá funcionando mas, de qualquer forma, a maneira mais moderna tá funcionando então vamo seguir com o uso do objeto metadata que tá dando bom.',
}

export default function ComponentName() {
    return (
        <>
            {/* <Head>
                <title>Titulo da página.</title>
                <meta name="description" content="Aqui é pra ser a descrição da página gerada à partir da metatag Description." />
                <meta name="keywords" content="Head Component Nextjs Next 15 Next15" />
                <meta httpEquiv="Cache-Control" content="no-restore, no-cache, must-revalidate, proxy-revalidate" />
                <meta property="og:title" content="Meu novo título" key="title" />
            </Head> */}

            <h1>Aqui vai um exemplo prático do funcionamento da Metadata de dentro do Next.js.</h1>
        </>
    )
}