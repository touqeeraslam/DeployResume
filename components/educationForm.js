import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import education from "./education";

const icon = <FontAwesomeIcon icon={faArrowLeft} />;
const educationForm = () => {
  const disable = () => {
    document.getElementById("endDate").disabled = true;
    document.getElementById("endDate").style.background = "#838fa0";
  };
  const show = () => {
    var x = document.getElementById("select")
    if(x =='enter'){
          document.getElementById('enter').style.display='visible'
    }
    else{
      document.getElementById('enter').style.display='hidden'
    }

   
    // document.getElementById("endDate").style.background = "#838fa0";
  };


  return (
    <>
      <div className="container font-grotesk">
        <div className="row ">
          -<h2 className="fw-bolder">Tell us about your education</h2>
          <p className="font-21 color-dark">
            Include every school, even if you're still there or didn't graduate.
          </p>
          <div className="form py-4">
            <form>
              <div className="inputs d-inline">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 py-3">
                    <label className=" fw-600 font-16">School Name</label>
                    <input
                      class="input border-input"
                      type="text"
                      placeholder="e.g. University of Kings"
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 py-3">
                    <label className="fw-600 font-16">School Location</label>
                    <input
                      class="input"
                      type="text"
                      placeholder="e.g. Cebu City"
                    />
                  </div>
                

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 py-3">
                    <label className=" fw-600 font-16">Degree</label>
                    <select  onClick={()=>show()}
                      class="form-select input"
                      aria-label="Default select example"
                    >
                      <option selected disabled>Select</option>
                      <option value="1">High School Deploma </option>
                      <option value="2">GED</option>
                      <option value="3">Associate Of Arts</option>
                      <option value="3">Associate Of Science</option>
                      <option value="3">Associate Of Applied Science</option>
                      <option value="3">Bachelor Of Arts</option>
                      <option value="3">Bachelor Of Science</option>
                      <option value="3">BBA</option>
                      <option value="3">Master Of Arts</option>
                      <option value="3">Master Of Science</option>
                      <option value="3">MBA</option>
                      <option value="3">J.D.</option>
                      <option value="3">M.D.</option>
                      <option value="3">Ph.D.</option>
                      <option value="enter">Enter a different degree</option>
                      <option value="3">No Degree</option>
                    </select>
                    
                  </div>
                  <div  id="enter" className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 py-3 enter">
                    <label className="fw-600 font-16">Enter a different  Degree</label>
                    <input
                      class="input"
                  
                      type="text"
                      placeholder="e.g. Bachelor's"
                    />
                  </div>
                
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 py-3">
                    <label className=" fw-600 font-16">Field Of Study</label>
                    <input
                      class="input"
                      type="text"
                      placeholder="e.g. Accounting Technology"
                    />
                  </div>
                  <div  className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6 py-3">
                    <label className=" fw-600 font-16">Graduation Start Date</label>
                    <input class="input" type="date" />
                    <div class="form-check py-3 mx-2">
                      <input
                        class="form-check-input"
                        onClick={() => disable()}
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label
                        class="form-check-label font-16"
                        for="defaultCheck1"
                      >
                        I currently attend here
                      </label>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6 py-3">
                    <label className=" fw-600 font-16">Graduation End Date</label>
                    <input class="input" id="endDate" type="date" />
             
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row justify-content-center ">
          <div className="col-xl-11 col-lg-10 col-md-10 col-sm-9 col-8">
            <div className="pt-4">
              <button
                type="button"
                className="btn btn-lg btn-outline-info px-4 py-2 rounded-5 text-center"
              >
                {icon} <span className="px-2">Back</span>
              </button>
            </div>
          </div>
          <div className="col-xl-1 col-lg-2 col-md-2 col-sm-3 col-4">
            <div className="pt-4">
              <button
                type="button"
                className="btn btn-lg btn-outline-warning  px-4 py-2 rounded-5 text-center"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default educationForm;
