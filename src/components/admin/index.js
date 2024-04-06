import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { Outlet } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
export default function App() {
  return (
    <MainLayout >
      <Outlet />
    </MainLayout>
  )
} 
