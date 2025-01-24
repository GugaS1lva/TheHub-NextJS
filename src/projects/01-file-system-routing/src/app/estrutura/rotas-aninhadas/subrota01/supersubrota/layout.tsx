import { ReactNode } from "react"

interface DefaultLayoutProps {
  children: ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="bg-red-950 text-white w-full h-full">
      { children }
    </div>
  )
}