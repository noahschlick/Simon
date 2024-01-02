import React, { useEffect } from 'react'




function Avatar({seed, large}) {
  
  return (
    <div className={`overflow-hidden relative ${large ? 'h-20 w-20' : 'h-10 w-10'} 
            rounded-full border-gray-300 bg-white my-auto`}>
        <img src={`https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=${
            seed || 'Hank'
        }.svg`} alt=""/>
    </div>
  )
}

export default Avatar