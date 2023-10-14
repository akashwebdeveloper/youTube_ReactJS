import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
    return (
        <div className="flex mt-4 grid grid-flow-col">
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Body