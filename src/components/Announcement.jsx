import './ann.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Announcement() {
  return (
    <Container fluid>
      <Row>
        <Col className='ann'>Super Deals Free Shipping on Order 15,000</Col>
      </Row>
    </Container>
  )
}
export default Announcement

// import styled from 'styled-components';
// import React from 'react'
// const Container=styled.div`
//     height:25px;
//     background-color:teal;
//     color:white;
//     display: flex;
//     align-item:center;
//     justify-content:center;
//     font-size:14px;
//     font-weight:500;
// `

// const Announcement = () => {
//   return (
//     <Container>
//       Super Deals Free Shipping on Order 15,000
//     </Container>
     
//   )
// }



// import styled from 'styled-components';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// const Containerr=styled.div`
//     height:25px;
//     background-color:teal;
//     color:white;
//     display: flex;
//     align-item:center;
//     justify-content:center;
//     font-size:14px;
//     font-weight:500;
// `

// const Announcement = () => {
//   return (
//     <Containerr>
//         <Row>
//         <Col>Super Deals Free Shipping on Order 15,000</Col>
//       </Row>
    
//     </Containerr>
//   )
// }

// export default Announcement
