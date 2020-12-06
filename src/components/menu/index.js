
import { Navbar, Nav } from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import './menu.css';

function BaseMenu(props) {
    const {location} = props;
    return (
        <Navbar className="navbar-dark" bg="success" expand="lg" fixed="top">
            <Navbar.Brand>
                AmigãoPet
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="item-menu" />    
            <Navbar.Collapse id="item-menu">
                <Nav activeKey={location.pathname} className="ml-auto mr-3">
                    <Nav.Item>
                        <Nav.Link as={Link} href="/produtos" to="/produtos">Amigões de estimação</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/" to="/">Nossas lojas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/pedidos" to="/pedidos">Pedidos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/" to="/">Contato</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

const Menu = withRouter(BaseMenu);

export default Menu;