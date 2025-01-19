import { ReactNode } from "react"

interface DefaultLayoutProps {
  children: ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="prose text-white max-w-[1200px] min-h-[calc(100vh+400px)] flex flex-col items-center mx-auto">
      { children }
    </div>
  )
}