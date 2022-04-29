import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from './Sidebar'
import NavBar from './NavBar'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import FirstSectionRow2 from './FirstSectionRow2'

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col>
          <NavBar />
          <FirstSection title="Good morning" search="money" />
          <FirstSectionRow2 />
          <SecondSection title="Recently Played" search="rock" />
          <SecondSection title="Jump back in" search="classical" />
          <SecondSection title="Fresh new music" search="rap" />
        </Col>
      </Row>
    </Container>
  )
}

export default Home
