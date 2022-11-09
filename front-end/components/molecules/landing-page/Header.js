import React, { useState, useEffect } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  Row,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  }

  return (
    <div className={`mb-1 header${sticky ? ' sticky' : ''}`}>
      <Navbar light expand="md">
        <Container>
          <Row className="text-center mb-2">
          <h1 href="/" className="font-bold text-5xl text-gray-900">Language Notes</h1>
          <p className=" font-base text-base text-gray-600">blog de anotações de estudo</p>
          </Row>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#history">História</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#service">Serviços</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#team">Equipe</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/registration">Cadastro</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login-page">Login</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;