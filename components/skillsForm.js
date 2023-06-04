import ReactStars from "react-stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const icon = <FontAwesomeIcon icon={faTrash} />;
const skillsForm = () => {
  const [skillArray, setSkillArray] = useState([]);
  var c = {};

  const data = () => {
    var x = { id: "1", value: 0 };
    let copyArray = [...skillArray];
    copyArray.push(x);
    setSkillArray(copyArray);
    //  setSkillArray();
    // skillArray.push(x);
    console.log(skillArray);
  };

  const ratingChanged = (newRating, index) => {
    console.log(newRating);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 bg-choose "></div>
          <div className="col-6 ">
            <h2 className="text-primary fw-lighter">
              What skills what you like to highlight?
            </h2>
            {skillArray &&
              skillArray.map((e, index) => {
                return (
                  <>
                    <div className="row justify-content-center">
                      <div className="col-xl-5 col-lg-5 ">
                        <ReactStars
                          onChange={ratingChanged}
                          count={5}
                          size={35}
                          color2={"#ffd700"}
                        />
                      </div>
                      <div className="col-7">
                        <div className="row">
                          <div className="col-10">
                            <input id="in1" type="text" className="input" />
                          </div>
                          <div className="col-1 py-2">
                            <a onClick={() => removeTodo(index)} href="#">
                              {icon}
                            </a>
                          </div>
                        </div>
                      </div>

                    </div>
                  </>
                );
              })}
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-5 ">
                <ReactStars
                  onChange={ratingChanged}
                  count={5}
                  size={35}
                  color2={"#ffd700"}
                />
              </div>
              <div className="col-7">
                <div className="row">
                  <div className="col-10">
                    <input id="in1" type="text" className="input" />
                  </div>
                  <div className="col-1 py-2">
                    <a onClick={() => removeTodo(index)} href="#">
                      {icon}
                    </a>
                  </div>
                </div>
              </div>

              <div className="footer">
                <a
                  onClick={() => data()}
                  className="text-decoration-none font-16 py-5 "
                >
                  + Add one more
                </a>
                <div className="row  ">
                  <div className="col-6">
                    <div className="pt-4">
                      <button
                        type="button"
                        className="btn btn-lg bottom-3  btn-outline-info text-center"
                      >
                        Back
                      </button>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="pt-4 float-right2">
                      <button
                        type="button"
                        className="btn bottom-3  btn-lg btn-outline-warning  text-center "
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default skillsForm;
