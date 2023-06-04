import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image"
import Stepper from 'react-stepper-horizontal';
import { useState } from "react";
function UserDetails() {
  return <h2>User details</h2>;
}

function Payment() {
  return <h2>Payment information</h2>;
}

function Confirmation() {
  return <h2>Booking is confirmed</h2>;
}
const navbarStepper = () => {
  const [ activeStep, setActiveStep ] = useState(0);
  
    const steps = [
      { title: 'User details' },
      { title: 'Payment' },
      { title: 'Booking confirmation' },
    ];

    function getSectionComponent() {
      switch(activeStep) {
        case 0: return <UserDetails/>;
        case 1: return <Payment/>;
        case 2: return <Confirmation/>;
        default: return null;
      }
    }
  return (
    <>

            <Navbar sticky="top" bg="light" className="h-80">
        <Container>
          <Navbar.Brand href="#home">
        <Image height="100" width="128" src='/resume.png'></Image>
          </Navbar.Brand>
          <Stepper
        steps={steps}
        activeStep={activeStep}/>
      <div style={{padding: '20px'}}>
        { getSectionComponent()  }
        { (activeStep !== 0 && activeStep !== steps.length - 1)
            && <button onClick={ () => setActiveStep(activeStep - 1) }>Previous</button>
        }
        { activeStep !== steps.length - 1
          && <button onClick={ () => setActiveStep(activeStep + 1) }>Next</button>
        }
      </div>
        </Container>
      </Navbar>
    </>
  )
}



export default navbarStepper
