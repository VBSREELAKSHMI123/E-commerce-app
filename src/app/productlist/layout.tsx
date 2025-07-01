import Navbar from '@/coreComponents/Navbar'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
      <>
          <Navbar />
          {children}
      </>
  )
}

export default layout                                                   