import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <p className='text-3xl'>DASHBOARD</p>
        {children}
    </div>
  )
}

export default Layout