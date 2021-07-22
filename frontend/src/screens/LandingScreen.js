import React from 'react'

import { Container, Row, Col, Image, Button } from 'react-bootstrap'

const LandingScreen = () => {
	return (
		<>
			<Container className='section-1-main'>
				<Row>
					<Col xs={12} md={6}>
						<div className='main-page-headline'>
							<Row>
								<t2>A perfect gift for</t2>
							</Row>
							<Row>
								<t3>everyone</t3>
							</Row>

							<Row>
								<t5>
									Shop you favourite plants or gift them to your loved ones.
								</t5>
							</Row>
							<Row>
								<Col lg={12} md={6}>
									<button type='button' class='btn-outline-customprimary'>
										Gift Someone
									</button>

									<button type='button' class='btn-outline-customsecondary'>
										Explore The Plant World
									</button>
								</Col>
							</Row>
						</div>
					</Col>
					<Col xs={12} md={6}>
						<div className='main-page-pic'>
							<Image
								src='https://ik.imagekit.io/9lcmzagx8k7/cristina-carrillo-gRL51XF4NWM-unsplash_64OmP0MZF.jpg?updatedAt=1626777261310'
								display='flex'
								width='90%'
							></Image>
						</div>
					</Col>
				</Row>
			</Container>

			<Container className='section-2-main'></Container>
		</>
	)
}

export default LandingScreen
