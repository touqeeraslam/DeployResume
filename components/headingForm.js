import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, } from "@fortawesome/free-solid-svg-icons"

const icon = <FontAwesomeIcon icon={faArrowLeft} />



const headingForm = () => {
  return (
    <>
    
      <div className="container py-4 font-grotesk">
        <div className="row ">
          <div className="col-xl-9 col-lg-9 col-md-12 col-12">
            <h2 className="fw-bolder">What’s the best way for employers to contact you?</h2>
            <p className="font-21 color-dark">We suggest including an email and phone number.</p>
            <div className="form py-4">
              <form>
                <div className="inputs d-inline">
                  <div className="row">
                    <div className="col-6">
                  <label className=" fw-600 font-16" >First Name</label>
                  <input class="input border-input" type="text" placeholder="e.g. Aliza"/>
                    </div>
                    <div className="col-6">
                    <label className="fw-600 font-16"  >Surname</label>
                <input class="input" type="text" placeholder="e.g. Khan"/>
                    </div>
                  </div>
                  <div className="py-4">
                  <label className=" fw-600 font-16" >Profession</label>
                  <input class="input" type="text" placeholder="e.g. Accountant"/>
                  </div>
                  <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-6">
                  <label className=" fw-600 font-16" >City/Municipality</label>
                  <input class="input" type="text" placeholder="e.g. New York"/>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                    <label className="fw-600 font-16"  >Country</label>
                <input class="input" type="text" placeholder="e.g. United States"/>
                    </div>
                    <div className="col-xl-3 col-lg-3">
                    <label className="fw-600 font-16"  >Postal Code</label>
                <input class="input" type="text" placeholder="e.g. 6000"/>
                    </div>
                  </div>
                  <div className="row py-4">
                    <div className="col-6">
                  <label className=" fw-600 font-16" >Phone</label>
                  <input class="input" type="text" placeholder=" e.g. +9223742363"/>
                    </div>
                    <div className="col-6">
                    <label className="fw-600 font-16"  >Email</label>
              <input class="input" type="text" placeholder=" e.g. aliza@gmail.com"/>
                    </div>
                  </div>
                 
                </div>
                
              </form>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
          <div className="pt-4">
                    <button type="button" className="btn btn-lg btn-outline-info px-4 py-2 rounded-5 text-center">
                      {icon} <span className="px-2">Back</span> 
                        </button>
                  </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="pt-4">
                    <button type="button" className="btn btn-lg btn-outline-warning   rounded-5 text-center">
                    Next: Work History
                        </button>
                  </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default headingForm
