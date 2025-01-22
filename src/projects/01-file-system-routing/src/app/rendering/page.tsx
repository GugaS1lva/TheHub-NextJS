// export async function getServerSideProps() {
    

//     return {
//         props: {
//             userData,
//         }
//     }
// }

export default async function PageComponent() {
    const response = await fetch('https://api.github.com/users/GugaS1lva')
    const userData = await response.json()

    return (
        <div>
            <h1>Olá, SSR e CSR.</h1>
            <p>Username: {userData.login}</p>
        </div>
    )
}