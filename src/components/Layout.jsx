import { Outlet } from 'react-router-dom';
import {Header} from './Header.jsx';
import {Footer} from './Footer.jsx';
export const Layout = () => {
    return (
        <main>
            <Header />
            <Outlet />
            <Footer/>
        </main>
    )
}