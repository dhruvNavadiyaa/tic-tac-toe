import React from 'react'

export default function Player({player}) {

  const handleChange = (e) => {
    const { name, value } = e.target;
  }
  return (
    <>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <input value={player?.name} disabled className='border' onChange={handleChange} />
          <button>c</button>
        </div>
      </div>
    </>
  )
}
