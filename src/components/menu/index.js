
import { Navbar, Nav } from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import './menu.css';
import logo from './logo.png';
import Image from 'react-bootstrap/Image';

function BaseMenu(props) {
    const {location} = props;
    return (
        <Navbar className="navbar-dark" bg="success" expand="lg" fixed="top">
            <Navbar.Brand>
            <Link className="nav-link text-white" to='/home'>
                  <Image className="Image-height" src={logo} fluid />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="item-menu" />    
            <Navbar.Collapse id="item-menu">
                <Nav activeKey={location.pathname} className="ml-auto mr-3">
                <Nav.Item>
                        <Nav.Link as={Link} href="/home" to="/home">Página Inicial</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/produtos" to="/produtos">Amigões de estimação</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/nossas_lojas" to="/nossas_lojas">Nossas lojas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/pedidos" to="/pedidos">Pedidos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/contato" to="/contato">Contato</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

const Menu = withRouter(BaseMenu);

export default Menu;