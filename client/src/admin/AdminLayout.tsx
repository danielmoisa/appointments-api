import React from 'react'

//Components
import Header from './components/Header'

const AdminLayout = ({ children }) => {
    return (
        <div className="admin-content">
            <Header />
            { children }
        </div>
    )
}

export default AdminLayout
