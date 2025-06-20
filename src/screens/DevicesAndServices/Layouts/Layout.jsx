import React from 'react'

export const Layout = ({ children }) => {
    return (
        <div className = 'layout-outer'>
            <div className = 'layout-inner'>                
                { children }
            </div>
        </div>
    )
}
