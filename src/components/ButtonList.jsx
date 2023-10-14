import React from 'react'

function Button({data}) {
  return (
    <span className='p-1 px-2 rounded-md mx-2 bg-gray-100'>{data}</span>
  )
}

const ButtonList = () => {
  return (  
    <div className='flex'>
      <Button data='News' />
      <Button data='Arijit Singh' />
      <Button data='MacBooks' />
      <Button data='Chill-out music' />
      <Button data='Smartphones' />
      <Button data='News' />
      <Button data='Arijit Singh' />
      <Button data='MacBooks' />
      <Button data='Chill-out music' />
      <Button data='Smartphones' />
    </div>
  )
}

export default ButtonList