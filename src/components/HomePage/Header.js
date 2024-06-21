import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Header.module.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./nav.css"

function Header() {

    return (
        <Navbar className={styles.navBrndBg} bg="light" data-bs-theme="light" collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand href="/home" className={styles.headerImageIcon} >
                    <img src="eg-logo.png" alt="eg logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <NavDropdown className={styles.navLinsk} title="Products" id="collapsible-nav-dropdown">
                            <NavDropdown.Item className={styles.navdropItemslnk} href="/platform">Trade Intelligence Platform</NavDropdown.Item>
                            <NavDropdown.Item className={styles.navdropItemslnk} href="/api"> Trade Inteligence API  </NavDropdown.Item>
                            <NavDropdown.Item className={styles.navdropItemslnk} href="/data-license"> Data License  </NavDropdown.Item>
                        </NavDropdown>
                        {/* <NavDropdown className={styles.navLinsk} title="Data" id="collapsible-nav-dropdown">
                            <NavDropdown.Item className={styles.navdropItemslnk} href="/data-flow">Data Availability</NavDropdown.Item>
                            <NavDropdown.Item className={styles.navdropItemslnk} href="/global-data">Countries Covered </NavDropdown.Item>
                            <NavDropdown.Item className={styles.navdropItemslnk} href="/download-sample">Download Samples</NavDropdown.Item>
                            <NavDropdown.Item className={styles.navdropItemslnk} href="/search-data">Search live Data</NavDropdown.Item>
                        </NavDropdown> */}
                        <Nav.Link className={styles.navLinsk} href="/data">Data</Nav.Link>
                        <Nav.Link className={styles.navLinsk} href="/how-we-help">How We Help</Nav.Link>
                        <Nav.Link className={styles.navLinsk} href="/pricing">Pricing</Nav.Link>
                        <Nav.Link className={styles.navLinsk} href="#search-data">Search Data</Nav.Link>

                        <NavDropdown className={styles.navLinsk} title="Company" id="collapsible-nav-dropdown">
                            <NavDropdown.Item className={styles.navdropItemslnk} href="/about-us">About Us</NavDropdown.Item>
                            <NavDropdown.Item className={styles.navdropItemslnk} href="/career-page"> Careers </NavDropdown.Item>
                            <NavDropdown.Item className={styles.navdropItemslnk} href="/client-testimonials">Clients & Testimonials</NavDropdown.Item>
                            <NavDropdown.Item className={styles.navdropItemslnk} href="/blog">Blog</NavDropdown.Item>
                            <NavDropdown.Item className={styles.navdropItemslnk} href="/faq">Faq</NavDropdown.Item>
                            <NavDropdown.Item className={styles.navdropItemslnk} href="/contact-us">Contact Us</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className={styles.navBrnNab}>
                        <Nav.Link href="#login" className={styles.loingBtn} >Login</Nav.Link>
                        <Nav.Link eventKey={2} href="#freetrial" className={styles.TrlBtn} > Free Trial </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;