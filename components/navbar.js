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
          <Navbar.Brand>
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
                      <span  className="fs-6 text-decoration-none">
                        Resume Builder
                      </span>
                      <br />
                      <span className="fs-14 nav-color">
                        Create a resume in 5 minutes. Get the job you want.
                      </span>
                </NavDropdown.Item>
                <div>
                <NavDropdown.Item >
                  <span>
                  <i class="fa-thin fa-messages-question"></i>
                    <span className="fs-6 text-decoration-none nav-color" >
                      Resume Checker
                    </span>
                    <br />
                    <span className="fs-14 nav-color ">
                      Get your resume checked and scored with one click.
                    </span>
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  
                  <span className="fs-14 text-decoration-none" >
                    Cv Maker
                  </span>
                  <br />
                  <span  className="fs-14 nav-color">Create a CV in 5 minutes. Get the job you want.</span>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <span className="fs-6 text-decoration-none" >
                    Cover Letter Builder
                  </span>
                  <br />
                  <span  className="fs-14 nav-color">
                    Write a cover letter that convinces employers you’re the
                    best.
                  </span>
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
                <NavDropdown.Item >
                <div>
                    <Image
                      src="/resume-builder.png"
                      height="100"
                      width="90"
                    ></Image>
                    <span>
                      <span  className="fs-6 text-decoration-none">
                        Resume Builder
                      </span>
                      <br />
                      <span className="fs-14 nav-color">
                        Create a resume in 5 minutes. Get the job you want.
                      </span>
                    </span>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <div ><span className="text-decoration-none" > Resume Template</span><br />
                  <span  className="fs-14 nav-color">Find the perfect resume template.</span></div>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <span className="text-decoration-none" >Resume Examples</span>
                  <span  className="fs-14 nav-color">See perfect resume samples that get jobs.</span>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <span className="text-decoration-none" >Resume Format</span>
                  <span  className="fs-14 nav-color">Pick the right resume format for your situation.</span>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <span className="text-decoration-none" >How to Write a Resume</span>
                  <span  className="fs-14 nav-color">Learn how to make a resume that gets interviews.</span>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <span className="text-decoration-none" >Resume Checker</span>
                  <span  className="fs-14 nav-color">Get your resume checked and scored with one click.</span>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <span className="text-decoration-none" >Resume Help</span>
                  <span  className="fs-14 nav-color">Improve your resume with help from expert guides.</span>
                </NavDropdown.Item>
            

              </NavDropdown>
            </div>
            <div className="px-4  ">
              <NavDropdown
              className=""
                title="Resume"
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
                      <span  className="fs-6 text-decoration-none">
                        Resume Builder
                      </span>
                      <br />
                      <span className="fs-14 nav-color">
                        Create a resume in 5 minutes. Get the job you want.
                      </span>
                    </span>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <div ><span className="text-decoration-none" > Resume Template</span><br />
                  <span  className="fs-14 nav-color">Find the perfect resume template.</span></div>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <span className="text-decoration-none" >Resume Examples</span>
                  <span  className="fs-14 nav-color">See perfect resume samples that get jobs.</span>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <span className="text-decoration-none" >Resume Format</span>
                  <span  className="fs-14 nav-color">Pick the right resume format for your situation.</span>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <span className="text-decoration-none" >How to Write a Resume</span>
                  <span  className="fs-14 nav-color">Learn how to make a resume that gets interviews.</span>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <span className="text-decoration-none" >Resume Checker</span>
                  <span  className="fs-14 nav-color">Get your resume checked and scored with one click.</span>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <span className="text-decoration-none" >Resume Help</span>
                  <span  className="fs-14 nav-color">Improve your resume with help from expert guides.</span>
                </NavDropdown.Item>
            

              </NavDropdown>
            </div>
            <div className="px-4  ">
              <NavDropdown
              className=""
                title="Resume"
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
                      <span  className="fs-6 text-decoration-none">
                        Resume Builder
                      </span>
                      <br />
                      <span className="fs-14 nav-color">
                        Create a resume in 5 minutes. Get the job you want.
                      </span>
                    </span>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <div ><span className="text-decoration-none" > Resume Template</span><br />
                  <span  className="fs-14 nav-color">Find the perfect resume template.</span></div>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <span className="text-decoration-none" >Resume Examples</span>
                  <span  className="fs-14 nav-color">See perfect resume samples that get jobs.</span>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <span className="text-decoration-none" >Resume Format</span>
                  <span  className="fs-14 nav-color">Pick the right resume format for your situation.</span>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <span className="text-decoration-none" >How to Write a Resume</span>
                  <span  className="fs-14 nav-color">Learn how to make a resume that gets interviews.</span>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <span className="text-decoration-none" >Resume Checker</span>
                  <span  className="fs-14 nav-color">Get your resume checked and scored with one click.</span>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <span className="text-decoration-none" >Resume Help</span>
                  <span  className="fs-14 nav-color">Improve your resume with help from expert guides.</span>
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