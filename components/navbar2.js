import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image"
const navbar2 = () => {
  return (
    <>
        <Navbar sticky="top" bg="light" className="h-80">
        <Container>
          <Navbar.Brand href="#home">
        <Image height="100" width="128" src='/resume.png'></Image>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default navbar2
