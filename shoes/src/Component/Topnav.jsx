import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";
const TopNav = ()=>{
    return(
        <>
        <div id="navbar">
              <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand  as={Link} to="home">E-Clothes-Site</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link}   to="home">Home</Nav.Link>
            <Nav.Link as={Link}   to="men">Men </Nav.Link>
            <Nav.Link as={Link}   to="women">Women</Nav.Link>
            <Nav.Link as={Link}   to="kid">Kids</Nav.Link>
          </Nav>
          <div id="icons">
            <FaUserAlt />
            <MdLocalGroceryStore />
          </div>
        </Container>
      </Navbar>
</div>

        </>
    )
}

export default TopNav;