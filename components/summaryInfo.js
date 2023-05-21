import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, } from "@fortawesome/free-solid-svg-icons"

const icon = <FontAwesomeIcon icon={faArrowLeft} />


const summaryInfo = () => {
  return (
    <>
      <div className="container font-grotesk">
        <div className="row py-5">
            <div className="col-9">
                <div>
                    <h2 className="text-primary">Finally, let’s work on your summary
</h2>
                    <h4 className="font-16 color-07 fw-bold py-2">Here's what you need to know</h4>
                    <div className="fw-light">Your summary shows employers you’re right for their job.
</div>
                    <div>We’ll help you write a great one with expert content you can customize.


</div>
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
                    <button type="button" className="btn btn-lg btn-outline-warning  px-4 py-2 rounded-5 text-center">
                    Next
                        </button>
                  </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default summaryInfo;
