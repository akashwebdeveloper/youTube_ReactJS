import React from 'react'

const SidebarContent = ({contentDetails}) => {
    const { contentLogo, contentName } = contentDetails;
    return (
        <div className='p-2 rounded-lg flex hover:bg-gray-100'>
            <img className='h-6 w-6' src={contentLogo} alt="home" srcset="" />
            <span className='text-base ml-6'>{contentName}</span>
        </div>
    )
}

export default SidebarContent