import React from 'react'
import { metadata } from '../layout'
import SideBar from './components/SideBar'

metadata.title= "Enoverlab - Internship Registration"

export default function Layout({ children }: {
    children?: React.ReactNode
}) {
    return (
        <div className='w-full h-screen overflow-hidden flex font-plus-jakarta-sans'>
            <SideBar/>
            <div className='px-5 py-11 w-full overflow-auto'>
                {children}
            </div>
        </div>
    )
}
