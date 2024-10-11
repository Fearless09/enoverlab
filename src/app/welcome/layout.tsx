import React from 'react'
import { metadata } from '../layout'


metadata.title="Enoverlab - Welcome"

export default function layout({ children }: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}
