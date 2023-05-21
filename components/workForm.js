import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const icon = <FontAwesomeIcon icon={faArrowLeft} />;
const workForm = () => {
  const  disable=()=>{
    document.getElementById("endDate").disabled = true;
    document.getElementById("endDate").style.background = '#838fa0';
  }

  return (
    <>
      <div className="container font-grotesk">
        <div className="row ">-
          <h2 className="fw-bolder">Tell us about your most recent job</h2>
          <p className="font-21 color-dark">
            We’ll start there and work backward.
          </p>
          <div className="form py-4">
            <form>
              <div className="inputs d-inline">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 py-3">
                    <label className=" fw-600 font-16">Job Title</label>
                    <input
                      class="input border-input"
                      type="text"
                      placeholder="e.g. Retails Associate"
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 py-3">
                    <label className="fw-600 font-16">Employer</label>
                    <input class="input" type="text" placeholder="e.g. H&M" />
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 py-3">
                    <label className=" fw-600 font-16">City/Municipality</label>
                    <input
                      class="input"
                      type="text"
                      placeholder="e.g. Cebu City"
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 py-3">
                    <label className=" fw-600 font-16">Country</label>
                    <input
                      class="input"
                      type="text"
                      placeholder="e.g. Phillipines"
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 py-3">
                    <label className=" fw-600 font-16">Start Date</label>
                    <input class="input" type="date" />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 py-3">
                    <label className=" fw-600 font-16">End Date</label>
                    <input class="input" id="endDate" type="date" />
                    <div class="form-check py-3 mx-2">
                      <input
                        class="form-check-input"
                        onClick={()=>disable()}
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label  class="form-check-label font-16" for="defaultCheck1">
                          I currently work here
                      </label>
                    </div>
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

export default workForm;
