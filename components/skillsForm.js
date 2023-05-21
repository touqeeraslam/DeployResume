import ReactStars from "react-stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const icon = <FontAwesomeIcon icon={faTrash} />;
const skillsForm = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo();
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
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
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-5 ">
                <ReactStars count={5} size={35} color2={"#ffd700"} />
              </div>
              <div className="col-7">
                <div className="row">
                  <div className="col-10">
                    <input
                      id="in1"
                      type="text"
                      className="input"
                      value={newTodo}
                      onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <div>
                      {todos.map((todo, index) => (
                        <div key={index}>
                          <div className="row justify-content-center">
                            <div className="col-xl-5 col-lg-5 ">
                              <ReactStars
                                count={5}
                                size={35}
                                color2={"#ffd700"}
                              />
                            </div>
                            <div className="col-7">
                              <div className="row">
                                <div className="col-10">
                                  <input
                                    id="in1"
                                    type="text"
                                    className="input "
                                    value={newTodo}
                                    onChange={(e) => setNewTodo(e.target.value)}
                                  />
                                  <div>
                                    {todos.map((todo, index) => (
                                      <div key={index}>
                                        {/* {todo}
            <button onClick={() => removeTodo(index)}>Remove</button> */}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div className="col-1 py-2">
                                  <a onClick={() => removeTodo(index)} href="#">
                                    {icon}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* {todo}
            <button onClick={() => removeTodo(index)}>Remove</button> */}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-1 py-2">
                    <a onClick={() => removeTodo(index)} href="#">
                      {icon}
                    </a>
                  </div>
                </div>
              </div>

              <a
                className="text-decoration-none font-16  float-right2"
                onClick={addTodo}
              >
                + Add one more
              </a>
              <div className="footer">
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
