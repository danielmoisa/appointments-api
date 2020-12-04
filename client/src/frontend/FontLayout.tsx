import React from 'react'

//Components
import Header from './components/Header'

const FontLayout = ({ children }) => {
    return (
        <div className="page-content">
            <Header />
            {children}
        </div>
    )
}

export default FontLayout
