import React from 'react'
import { } from 'next'

type Props = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <main>
        <div className="w-full h-max">
          {children}
        </div>
      </main>
    </div>
  )
}

export default MainLayout