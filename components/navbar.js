import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const check = <FontAwesomeIcon icon={faMessage} size="lg" />;
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import Link from "next/link";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { render } from "react-dom";
const navbar = () => {
  return (
    <>
      <Navbar
      className=""
        collapseOnSelect
        expand="xl"
        bg="light"
        variant="light"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <Image src="/resume.png" height="83" width="144"></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end text-center py"
          >
            <div className="px-4">
              <NavDropdown className=""
                title="Tools"
                id="collasible-nav-dropdown"
                renderMenuOnMount={true}
              >
                <NavDropdown.Item >
                    <Image
                      src="/resume-builder.png"
                      height="100"
                      width="90"
                    ></Image>
                   nav-color
                      <a href="#" className="fs-6 text-decoration-none">
                        Resume Builder
                      </a>{" "}
                      <br />
                      <p className="fs-14 nav-color">
                        Create a resume in 5 minutes. Get the job you want.
                      </p>{" "}
                </NavDropdown.Item>
                <div>
                <NavDropdown.Item >
                  <span>
                  <i class="fa-thin fa-messages-question"></i>
                    <p className="fs-6 text-decoration-none nav-color" >
                      Resume Checker
                    </p>
                    <br />
                    <p className="fs-14 nav-color ">
                      Get your resume checked and scored with one click.
                    </p>{" "}
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  {" "}
                  <a className="fs-14 text-decoration-none" href="#">
                    Cv Maker
                  </a>
                  <br />
                  <p  className="fs-14 nav-color">Create a CV in 5 minutes. Get the job you want.</p>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <a className="fs-6 text-decoration-none" href="#">
                    Cover Letter Builder
                  </a>{" "}
                  <br />
                  <p  className="fs-14 nav-color">
                    Write a cover letter that convinces employers you’re the
                    best.
                  </p>
                </NavDropdown.Item>
                </div>
              </NavDropdown>
            </div>

            <div className="px-4  ">
              <NavDropdown
              className=""
                title="Resume"
                id="collasible-nav-dropdown"
                renderMenuOnMount={true}
              >
                <NavDropdown.Item href="#action/3.1">
                <div>
                    <Image
                      src="/resume-builder.png"
                      height="100"
                      width="90"
                    ></Image>
                    <span>
                      <a href="#" className="fs-6 text-decoration-none">
                        Resume Builder
                      </a>{" "}
                      <br />
                      <p className="fs-14 nav-color">
                        Create a resume in 5 minutes. Get the job you want.
                      </p>{" "}
                    </span>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <div ><a className="text-decoration-none" href="#"> Resume Template</a><br />
                  <p  className="fs-14 nav-color">Find the perfect resume template.</p></div>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <a className="text-decoration-none" href="#">Resume Examples</a>
                  <p  className="fs-14 nav-color">See perfect resume samples that get jobs.</p>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <a className="text-decoration-none" href="#">Resume Format</a>
                  <p  className="fs-14 nav-color">Pick the right resume format for your situation.</p>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <a className="text-decoration-none" href="#">How to Write a Resume</a>
                  <p  className="fs-14 nav-color">Learn how to make a resume that gets interviews.</p>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <a className="text-decoration-none" href="#">Resume Checker</a>
                  <p  className="fs-14 nav-color">Get your resume checked and scored with one click.</p>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <a className="text-decoration-none" href="#">Resume Help</a>
                  <p  className="fs-14 nav-color">Improve your resume with help from expert guides.</p>
                </NavDropdown.Item>
            

              </NavDropdown>
            </div>

            <div className="px-4">
              <NavDropdown
                title="Cv"
                id="collasible-nav-dropdown"
                renderMenuOnMount={true}
              >
                <NavDropdown.Item >
                <div>
                    <Image
                      src="/resume-builder.png"
                      height="100"
                      width="90"
                    ></Image>
                    <span>
                      <a href="#" className="fs-6">
                        CV Builder
                      </a>{" "}
                      <br />
                      <p className="fs-14 nav-color">
                        Create a resume in 5 minutes. Get the job you want.
                      </p>{" "}
                    </span>
                  </div>

                </NavDropdown.Item>
                <NavDropdown.Item >
                  <a className="text-decoration-none" href="#">Cv Template</a>
                  <p  className="fs-14 nav-color">Find the perfect CV template.</p>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <a className="text-decoration-none" href="#">Cv Examples</a>
                  <p  className="fs-14 nav-color">See perfect CV samples that get jobs.</p>

                </NavDropdown.Item>
                <NavDropdown.Item >
                  <a className="text-decoration-none" href="#">Cv Format</a>
                  <p  className="fs-14 nav-color">Pick the right format for your situation.</p>

                </NavDropdown.Item>
                <NavDropdown.Item>
                  <a className="text-decoration-none" href="#">How to Write a Cv</a>
                  <p  className="fs-14 nav-color">Learn how to make a CV that gets interviews.</p>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <a className="text-decoration-none" href="#">Cv Help</a>
                  <p  className="fs-14 nav-color">Improve your CV with help from expert guides.</p>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <button className="btn btn-outline-danger  w-100 btn-lg ">Create CV</button>
                </NavDropdown.Item>
              </NavDropdown>
            </div>

            <div className="px-4">
              <NavDropdown
                title="Cover Letter"
                id="collasible-nav-dropdown"
                renderMenuOnMount={true}
              >
                <NavDropdown.Item>
                <div>
                    <Image
                      src="/cover-letter.png"
                      height="100"
                      width="90"
                    ></Image>
                    <span>
                      <a href="#" className="text-decoration-none">
                        Cover Letter Builder
                      </a>
                      <br />
                      <p className="fs-14 nav-color">
                      Create a cover letter in 5 minutes. Get the job you want.
                      </p>
                    </span>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <a className="text-decoration-none" href="#">Cover Letter Builder</a>
                  <p  className="fs-14 nav-color">Find the perfect cover letter template.</p>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <a className="text-decoration-none" href="#">Cover Letter Examples</a>
                  <p  className="fs-14 nav-color">See perfect cover letter samples that get jobs.</p>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <a className="text-decoration-none" href="#">Cover Letter Format</a>
                  <p  className="fs-14 nav-color">Pick the right format for your situation.</p>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <a className="text-decoration-none" href="#">How to Write a Cover Letter</a>
                  <p className="fs-14 nav-color">Learn how to make a cover letter that gets interviews.</p>
                  
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <a className="text-decoration-none" href="#">Cover Letter Help</a>
                  <p  className="fs-14 nav-color">Boost your chances of having your resume read with our help.</p>
                  
                </NavDropdown.Item>
                <NavDropdown.Item >
               <button className="btn btn-outline-danger btn-lg w-100">Create Cover Letter</button>
                </NavDropdown.Item>
              </NavDropdown>
            </div>

            <div className="px-4">
              <NavDropdown
                title="Career Blog"
                id="collasible-nav-dropdown"
                renderMenuOnMount={true}
              >
                <NavDropdown.Item className="" style={{height:'30rem', overflowY:'auto' }}>
                <NavDropdown.Item href="#action/3.1">
                    <Image
                      src="/all-post.png"
                      height="100"
                      width="90"
                    ></Image>
                      <a href="#" className="text-decoration-none">
                        Cover Letter Builder
                      </a>
                      <br />
                      <p  className="fs-14 nav-color">
                      Create a cover letter in 5 minutes. <br /> Get the job you want.
                      </p>

                </NavDropdown.Item>
                <NavDropdown.Item >
                  <a className="text-decoration-none" href="#">Job Search</a>
                  <p  className="fs-14 nav-color">Learn how to find the right <br /> job and get it.</p>
                </NavDropdown.Item>
                <NavDropdown.Item >
                <a className="text-decoration-none" href="#">Job Interviews</a>
                <p  className="fs-14 nav-color">Prepare for any interview <br /> and ace it.</p>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <a className="text-decoration-none" href="#">Career Advice</a>
                  <p  className="fs-14 nav-color">Improve your career with expert <br /> tips and strategies.</p>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <a className="text-decoration-none" href="#">Resume Help</a>
                  <p  className="fs-14 nav-color">Improve your resume with help <br /> from expert guides.</p>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <a className="text-decoration-none" href="#">CV Help</a>
                  <p  className="fs-14 nav-color">Improve your CV with help <br /> from expert guides.</p>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <a className="text-decoration-none" href="#">Cover Letter Help</a>
                  <p  className="fs-14 nav-color">Boost your chances of having your <br /> resume read with our help.</p>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <a className="text-decoration-none" href="#">Frequently Asked Question</a>
                  <p  className="fs-14 nav-color">Get answers to frequently asked <br /> questions about resumes, Zety, and more.</p>
                </NavDropdown.Item>
                </NavDropdown.Item>
                
              </NavDropdown>
            </div>

            <div className="text-decoration-none">
              <NavDropdown
                title="About"
                id="collasible-nav-dropdown"
                renderMenuOnMount={true}
              >
                <NavDropdown.Item >Action</NavDropdown.Item>
                <NavDropdown.Item >
                <div>
                    <Image
                      src="/all-post.png"
                      height="100"
                      width="90"
                    ></Image>
                    <span>
                      <a href="#">
                        About
                      </a>
                      <br />
                      <p  className="fs-14 nav-color">
                      Find out more about Zety and its career experts.
                      </p>
                    </span>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <a className="text-decoration-none" href="#">Press Page</a>
                  <p  className="fs-14 nav-color">Read original data insights to boost your reporting.</p>
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="px-4">
              <Link href="/auth/login">
                <button className=" button  py-2 px-4">My Account</button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  
  
  );
  
};

export default navbar;