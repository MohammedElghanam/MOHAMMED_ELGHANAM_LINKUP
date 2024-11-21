import React from 'react'

export default function Background() {
  return (
    <>
        <div className="fixed -z-40 bg-[rgb(24,0,161)] filter blur-[250px] rounded-full top-[-176px] left-[-80px] w-[800px] h-[300px]"></div>
        <div className="fixed -z-40 bg-[rgb(124,115,230)] filter blur-[250px] rounded-full top-0 right-[-220px] w-[400px] h-screen"></div>
        <div className="fixed -z-40 bg-[rgb(255,0,166)] filter blur-[290px] rounded-full bottom-[-200px] left-[-0px] w-[800px] h-[300px]"></div>
    </>
  )
}
