import React from 'react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full h-screen flex flex-col items-center p-2 lg:p-4 overflow-hidden font-sans tracking-[-0.6px]'>
      <div className='w-full flex-1 flex flex-col items-center gap-2 lg:gap-4 bg-[#f3f3f3] rounded-3xl lg:rounded-4xl p-2 lg:p-4 border border-gray-100 overflow-hidden'>
        {children}
      </div>
    </div>
  )
}

export default RootLayout;
