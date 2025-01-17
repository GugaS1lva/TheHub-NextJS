import { ReactNode } from "react"

interface DefaultLayoutProps {
  children: ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="text-xl my-16 w-[680px]">
      { children }
    </div>
  )
}