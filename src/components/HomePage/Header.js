import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Header.module.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {

    return (
        <Navbar className={styles.navBrndBg} bg="light" data-bs-theme="light" collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand href="#home" className={styles.headerImageIcon} >
                    <img src="eg-logo.png" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <NavDropdown className={styles.navLinsk} title="Products" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

                        </NavDropdown>
                        <NavDropdown className={styles.navLinsk} title="Data" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

                        </NavDropdown>
                        <Nav.Link className={styles.navLinsk} href="#features">How We Help</Nav.Link>
                        <Nav.Link className={styles.navLinsk} href="#pricing">Pricing</Nav.Link>
                        <Nav.Link className={styles.navLinsk} href="#features">Search Data</Nav.Link>

                        <NavDropdown className={styles.navLinsk} title="Company" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className={styles.navBrnNab}>
                        <Nav.Link href="#deets" className={styles.loingBtn} >Login</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes" className={styles.TrlBtn} >
                            Free Trial
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;