import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'

const LandingScreen = () => {
	return (
		<Container className='land-main'>
			<Row>
				<Col xs='6'>.col-6</Col>
				<Col xs='6'>
					<Image
						src='https://ik.imagekit.io/9lcmzagx8k7/cristina-carrillo-gRL51XF4NWM-unsplash_64OmP0MZF.jpg?updatedAt=1626777261310'
						alt='Main'
						className='responsive'
					/>
				</Col>
			</Row>
		</Container>
	)
}

export default LandingScreen
