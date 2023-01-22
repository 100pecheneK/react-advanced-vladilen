import React, { ReactNode } from 'react'

export default function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
      {children}
    </div>
  )
}
