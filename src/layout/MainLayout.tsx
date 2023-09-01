import React from 'react'
import { } from 'next'
import Header from './Header'

type Props = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Header/>
      <main>
        <div className="w-full h-max">
          {children}
        </div>
      </main>
    </div>
  )
}

export default MainLayout