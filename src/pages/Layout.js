import { Outlet, Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import { Container } from "react-bootstrap";

const Layout = () => {
    return (
        <>
            <NavigationBar />
            <Container>
                <Outlet />
            </Container>
        </>
    )
};

export default Layout;