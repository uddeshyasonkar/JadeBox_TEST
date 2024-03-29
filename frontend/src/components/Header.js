import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import {
	Navbar,
	Nav,
	Container,
	NavDropdown,
	Figure,
	Form,
} from 'react-bootstrap'
import { logout } from '../actions/userActions'
import SearchBox from './SearchBox.js'
import logo from '../img/logo.png'

const Header = () => {
	const dispatch = useDispatch()

	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	const logoutHandler = () => {
		dispatch(logout())
	}
	return (
		<header>
			<Navbar variant='light' expand='lg' collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>
							<Figure.Image src={logo} alt='Logo' width={50} fluid />
						</Navbar.Brand>
					</LinkContainer>

					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav>
							<LinkContainer to='/'>
								<Nav.Link>Home</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/'>
								<Nav.Link>Adopt a Plant</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/'>
								<Nav.Link>Our Roots</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/'>
								<Nav.Link>Contact Us</Nav.Link>
							</LinkContainer>
						</Nav>
						<Container className='searchBox'>
							<Route
								render={({ history }) => <SearchBox history={history} />}
							/>
						</Container>
						<Nav className>
							{/* <LinkContainer to='/'>
								<Nav.Link> About Us</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/'>
								<Nav.Link> Products</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/'>
								<Nav.Link> News</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/'>
								<Nav.Link> Client Zone</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/'>
								<Nav.Link> Policies</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/'>
								<Nav.Link> Careers</Nav.Link>
							</LinkContainer> */}

							{/******************************************************
							 ********************ADD CATEGORIES HERE***************
							 *****************************************************/}

							{/* <NavDropdown title='Categories' id='categoriesmenu'>
								<LinkContainer to='/search/electronics'>
									<NavDropdown.Item>Electronics</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/search/music'>
									<NavDropdown.Item>Music</NavDropdown.Item>
								</LinkContainer>
							</NavDropdown> */}

							<LinkContainer to='/wishlist'>
								<Nav.Link>
									{' '}
									<i className='fas fa-heart fa-lg'></i>
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/cart'>
								<Nav.Link>
									{' '}
									<i className='fas fa-shopping-cart fa-lg'></i>
								</Nav.Link>
							</LinkContainer>

							{userInfo ? (
								<NavDropdown title={userInfo.name} id='username'>
									<LinkContainer to='/profile'>
										<NavDropdown.Item>Profile</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item onClick={logoutHandler}>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<LinkContainer to='/login'>
									<Nav.Link>
										<i className='fas fa-user fa-lg'></i> Sign In
									</Nav.Link>
								</LinkContainer>
							)}
							{userInfo && userInfo.isAdmin && (
								<NavDropdown title='Admin' id='adminmenu'>
									<LinkContainer to='/admin/userlist'>
										<NavDropdown.Item>Users</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/productlist'>
										<NavDropdown.Item>Products</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/orderlist'>
										<NavDropdown.Item>Orders</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/packaginglist'>
										<NavDropdown.Item>Packagings</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
