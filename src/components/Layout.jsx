import { Outlet } from 'react-router-dom';
import {Header} from './Header.jsx';
import {Footer} from './Footer.jsx';
export const Layout = () => {
    return (
        <main style={{minHeight:'100vh'}}>
            <Header />
            <div style={{minHeight:'100vh'}}>
            <Outlet />
            </div>
            <Footer/>
        </main>
    )
}