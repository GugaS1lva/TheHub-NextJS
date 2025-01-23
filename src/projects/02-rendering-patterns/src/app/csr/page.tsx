interface PokemonProps{
  name: string
}

export default async function MyComponent() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
  const data = await res.json()
  const pokemons = data.results

  return (
    <>
      <h1>Pokemons</h1>

      <ul className="bg-red-950 text-white px-10 py-2 rounded-md">
        {pokemons.map((poke: PokemonProps) => (
          <li key={poke.name}>{poke.name}</li>
        ))}
      </ul>
    </>
  )
}
