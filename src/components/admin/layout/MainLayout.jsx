import React from 'react'
import './main-layout.scss'
import Sidebar from '../components/sidebar/Sidebar'
import TopNav from '../components/topnav/TopNav'

const MainLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="main">
        <div className="main__content">
          <TopNav />
          {children}
        </div>
      </div>
    </>
  )
}

export default MainLayout
