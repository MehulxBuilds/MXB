import React from 'react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full h-screen flex flex-col items-center p-4 overflow-hidden font-sans tracking-[-0.6px]'>
      <div className='w-full flex-1 flex flex-col items-center gap-4 bg-[#f3f3f3] rounded-4xl p-4 border border-gray-100 overflow-hidden'>
        {children}
      </div>
    </div>
  )
}

export default RootLayout;