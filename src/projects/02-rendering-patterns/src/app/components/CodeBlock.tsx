{/* CHECANDO TODOS OS TEMAS:
import * as prismThemes from "react-syntax-highlighter/dist/esm/styles/prism";
console.log(prismThemes);

a11yDark
atomDark
base16AteliersulphurpoolLight
cb
coldarkCold
coldarkDark
coy
coyWithoutShadows
darcula
dark
dracula
duotoneDark
duotoneEarth
duotoneForest
duotoneLight
duotoneSea
duotoneSpace
funky
ghcolors
gruvboxDark // BEST 2
gruvboxLight
holiTheme
hopscotch
lucario
materialDark
materialLight
materialOceanic
nightOwl
nord
okaidia
oneDark
oneLight
pojoaque // BEST
prism
shadesOfPurple
solarizedDarkAtom
solarizedlight
synthwave84
tomorrow
twilight
vs
vscDarkPlus
xonokai
zTouch  
*/}

{/* INSTALAÇÃO DA LIB
npm install react-syntax-highlighter
npm install --save-dev @types/react-syntax-highlighter
  
O código é recebido via prop e exibido com realce de sintaxe.
*/}

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = "typescript" }) => {
  return (
    <SyntaxHighlighter language={language} style={gruvboxDark} showLineNumbers>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;

export const fetchExample = 
`interface PokemonProps{
  name: string
}

export default async function MyComponent() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
  const data = await res.json()
  const pokemons = data.results

  return (
    <>
      <h1>Pokemons</h1>

      <ul className="bg-red-950 text-white">
        {pokemons.map((poke: PokemonProps) => (
          <li key={poke.name}>{poke.name}</li>
        ))}
      </ul>
    </>
  )
}`
