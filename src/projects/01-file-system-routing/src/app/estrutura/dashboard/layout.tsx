import { ReactNode } from "react"

interface DefaultLayoutProps {
  children: ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="bg-green-900">
      <h2>Dashboard da aplicação.</h2>
      { children }
    </div>
  )
}