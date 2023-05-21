import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, } from "@fortawesome/free-solid-svg-icons"

const icon = <FontAwesomeIcon icon={faArrowLeft} />

const whyResume = () => {
  return (
    <>
      <div className="container ">
        <div className="text-center py-5">

        <h1 className="fw-bold">Why do you need a Resume?</h1>
        <p className="font-21 py-2 color-dark">We'll show you a personalized experience based on your response.</p>
        <ul className="pt-3">
            <li className="d-inline mx-2 " > 
                <button className="btn btn-outline-primary focus py-4 px-5">Job Seeking</button>
            </li>
            <li className="d-inline mx-2">
                <button className="btn btn-outline-primary focus p-4">A Different Reason</button>
            </li>
        </ul>
     
        </div>
        <div className="row justify-content-center ">
          <div className="col-xl-9 col-lg-8 col-md-7 col-sm-6 col-5">
          <div className="pt-4">
                    <button type="button" className="btn  btn-outline-info  rounded-5 text-center">
                      {icon} <span className="px-2">Back</span> 
                        </button>
                  </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-7">
         
                  <div className="pt-4">
                    <span className="px-3"> 

                  <a  className="text-decoration-none font-21" href="#">Skip for now</a>
                    </span>
                    <button type="button" className="btn btn-lg btn-outline-warning    rounded-5 text-center">
                    Next
                        </button>
                  </div>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default whyResume
