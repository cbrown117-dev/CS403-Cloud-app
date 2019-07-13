import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { logout } from './actions/auth';
import { LinkContainer } from 'react-router-bootstrap';
import './css/Navigation.css';

const Navigation = ({ isAuthenticated, logout }) => {
  const onLogout = () => {
    logout();
  };
  return (
    <Navbar expand='lg' collapseOnSelect bg='dark' variant='dark'>
      <Navbar.Brand>
        <Link style={{ textDecoration: 'none' }} to='/'>
          Omegaflix
        </Link>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Nav className='ml-auto'>
          {isAuthenticated ? (
            <Nav>
              <LinkContainer to='/movielist'>
                <Nav.Link eventKey='link-3'>
                  <i className='fas fa-ticket-alt' /> Movies
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/me'>
                <Nav.Link eventKey='link-4'>
                  <i className='fas fa-user' /> Profile
                </Nav.Link>
              </LinkContainer>
              <Nav.Link eventKey='link-0' onClick={onLogout}>
                <i className='fas fa-power-off' /> Logout
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <LinkContainer to='/signup'>
                <Nav.Link eventKey='link-1'>Sign Up</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link eventKey='link-2'>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { logout }
)(Navigation);
