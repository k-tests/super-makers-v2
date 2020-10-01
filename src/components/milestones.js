import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Line from './milestonesLine'

const Milestones = () => {

    return (
        <Container fluid className='yellow-bg yellow-typo p-4'>

        <Row className=''>
        <Col xs={6} className=''>
        <h1>Milestones:</h1>
        <Row>
            <Col xs={3}>
           
            </Col>
            <Col xs={3}><h3>2020</h3>   
            </Col>
            <Col xs={3}><h3>2021</h3>   
            </Col>
          </Row>
          <Row className='py-5'>
            <Col xs={3}>
              <h3>Alpha</h3>
            </Col>
            <Col>
              <Line  offset={'20%'} width={'95%'}/>
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <h3>Alpha</h3>
            </Col>
            <Col>
              <Line  offset={'5%'} width={'50%'}/>
            </Col>
          </Row>
        </Col>
         
        </Row>
              </Container>
    )

}

export default Milestones
{/* <div className='d-flex flex-nowrap align-items-center'> */}
