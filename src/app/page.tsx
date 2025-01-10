import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Olá, {"'TheHub - Next.js'"}</h1>

      <ul>
        <li>
          <Link href={'#'}>File SYstem Routing</Link>
        </li>

        <li>//...</li>
      </ul>
    </div>
  );
}
