import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { render } from "react-dom";
const navbar = () => {
  useEffect(()=>{
    var x = localStorage.getItem('loggedIn')
    if(x == 'logged'){
      document.getElementById('btn1').textContent='Log out'
    }
  })
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
            <div className="px-4 ">
              <NavDropdown
                className=""
                title="Tools"
                id="collasible-nav-dropdown"
                renderMenuOnMount={true}
              >
                <NavDropdown.Item  className="bg-white  " href="#action/3.1">
                  <Image
                    src="/resume-builder.png"
                    height="100"
                    width="90"
                  ></Image>

                  <h5 className=" text-decoration-none">Resume</h5>
                  <br />
                  <span className="fs-14  nav-color">
                    Create a resume in 5 minutes.
                  </span>
                </NavDropdown.Item>
                <div className="bgnav">
                  <NavDropdown.Item>
                    <div className="resume-checker mx-5 nav-color">
                      <svg
                        height="50"
                        className="fill-none move"
                        viewBox="0 0 24 24"
                      >
                        <defs></defs>
                        <circle cx="17.25" cy="17.261" r="6" class="a"></circle>
                        <path
                          d="M15.375 16.136a1.875 1.875 0 1 1 1.875 1.875M17.25 20.261a.375.375 0 1 1-.375.375.375.375 0 0 1 .375-.375M5.25 10.511h5.25M5.25 14.261h3M5.25 18.011h3M9.75 23.261h-7.5a1.5 1.5 0 0 1-1.5-1.5V6.011a1.5 1.5 0 0 1 1.5-1.5H6a3.75 3.75 0 0 1 7.5 0h3.75a1.5 1.5 0 0 1 1.5 1.5v2.25"
                          class="a"
                        ></path>
                        <path
                          d="M9.75 3.761a.375.375 0 1 1-.375.375.375.375 0 0 1 .375-.375"
                          class="a"
                        ></path>
                      </svg>

                      <h5 className="">
                        Resume Checker
                      </h5>
                      <br />
                      <span className="fs-14 nav-color ">
                        Get your resume checked and scored with one click.
                      </span>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <div className="cv-maker nav-color mx-5">
                      <svg className="fill-none move " viewBox="0 0 24 24">
                        <defs></defs>
                        <path
                          d="M13.045 18.636l-3.712.53.53-3.712 9.546-9.546a2.25 2.25 0 0 1 3.182 3.182z"
                          class="a"
                        ></path>
                        <rect
                          width="7.5"
                          height="3"
                          x="5.25"
                          y=".749"
                          class="a"
                          rx=".75"
                          ry=".75"
                        ></rect>
                        <path
                          d="M12.75 2.249h3a1.5 1.5 0 0 1 1.5 1.5M17.25 18.749v3a1.5 1.5 0 0 1-1.5 1.5H2.25a1.5 1.5 0 0 1-1.5-1.5v-18a1.5 1.5 0 0 1 1.5-1.5h3M5.25 8.249h7.5M5.25 12.749h3"
                          class="a"
                        ></path>
                      </svg>

                      <span className="fs-14 text-decoration-none">
                        Cv Maker
                      </span>
                      <br />
                      <span className="fs-14 nav-color">
                        Create a CV in 5 minutes. Get the job you want.
                      </span>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    <div className="cover-letter mx-5 nav-color">
                      <svg className="fill-none move " viewBox="0 0 24 24">
                        <defs></defs>
                        <path
                          d="M9 12.75H2.25a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5h18a1.5 1.5 0 0 1 1.5 1.5v6M23.25 17.25a6 6 0 1 1-6-6"
                          class="a"
                        ></path>
                        <path
                          d="M23.25 12.749l-5.47 5.47a.749.749 0 0 1-1.06 0L15 16.5M5.25 6.375a.375.375 0 1 1-.375.375.374.374 0 0 1 .375-.375M11.25 6.375a.375.375 0 1 1-.375.375.374.374 0 0 1 .375-.375M17.25 6.375a.375.375 0 1 1-.375.375.374.374 0 0 1 .375-.375"
                          class="a"
                        ></path>
                      </svg>
                      <span className="fs-6 text-decoration-none">
                        Cover Letter Builder
                      </span>
                      <br />
                      <span className="fs-14 nav-color">
                        Write a cover letter that convinces employers you're the
                        best.
                      </span>
                    </div>
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
                <div className=" bgnav "style={{ height: "30rem", overflowY: "auto" }}
                >
                  <NavDropdown.Item className="bg-white" href="#action/3.1">
                    <Image
                      src="/resume-builder.png"
                      height="100"
                      width="90"
                    ></Image>
                    <span className="fs-6 text-decoration-none">
                      Resume Builder
                    </span>
                    <br />
                    <span className="fs-14 nav-color">
                      Create a resume in 5 minutes. <br /> Get the job you want
                      3.55
                    </span>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    <div className="resume-template mx-5 nav-color">
                      <svg className="fill-none move " viewBox="0 0 24 24">
                        <defs></defs>
                        <path
                          d="M9 12.75H2.25a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5h18a1.5 1.5 0 0 1 1.5 1.5v6M23.25 17.25a6 6 0 1 1-6-6"
                          class="a"
                        ></path>
                        <path
                          d="M23.25 12.749l-5.47 5.47a.749.749 0 0 1-1.06 0L15 16.5M5.25 6.375a.375.375 0 1 1-.375.375.374.374 0 0 1 .375-.375M11.25 6.375a.375.375 0 1 1-.375.375.374.374 0 0 1 .375-.375M17.25 6.375a.375.375 0 1 1-.375.375.374.374 0 0 1 .375-.375"
                          class="a"
                        ></path>
                      </svg>

                      <span className="text-decoration-none">
                        {" "}
                        Resume Template
                      </span>
                      <br />
                      <span className="fs-14 nav-color">
                        Find the perfect resume template.
                      </span>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <div className="resume-examples mx-5 nav-color">
                      <svg className="fill-none move " viewBox="0 0 24 24">
                        <defs></defs>
                        <path
                          d="M5.25 2.249h-3a1.5 1.5 0 0 0-1.5 1.5v18a1.5 1.5 0 0 0 1.5 1.5h19.5a1.5 1.5 0 0 0 1.5-1.5v-18a1.5 1.5 0 0 0-1.5-1.5h-10.5"
                          class="a"
                        ></path>
                        <path
                          d="M11.25 11.249L8.25 9l-3 2.25V1.5A.75.75 0 0 1 6 .749h4.5a.75.75 0 0 1 .75.75zM5.25 18.749h10.5M5.25 14.249h13.5M18.75 9.749h-4.5"
                          class="a"
                        ></path>
                      </svg>

                      <span className="text-decoration-none">
                        Resume Examples
                      </span>
                      <br />
                      <span className="fs-14 nav-color">
                        See perfect resume samples that get jobs.
                      </span>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    <div className="resume-format mx-5 nav-color">
                      <svg className="fill-none move " viewBox="0 0 24 24">
                        <defs></defs>
                        <path
                          d="M13.045 18.636l-3.712.53.53-3.712 9.546-9.546a2.25 2.25 0 0 1 3.182 3.182z"
                          class="a"
                        ></path>
                        <rect
                          width="7.5"
                          height="3"
                          x="5.25"
                          y=".749"
                          class="a"
                          rx=".75"
                          ry=".75"
                        ></rect>
                        <path
                          d="M12.75 2.249h3a1.5 1.5 0 0 1 1.5 1.5M17.25 18.749v3a1.5 1.5 0 0 1-1.5 1.5H2.25a1.5 1.5 0 0 1-1.5-1.5v-18a1.5 1.5 0 0 1 1.5-1.5h3M5.25 8.249h7.5M5.25 12.749h3"
                          class="a"
                        ></path>
                      </svg>

                      <span className="text-decoration-none">
                        Resume Format
                      </span>
                      <br />
                      <span className="fs-14 nav-color">
                        Pick the right resume format for your situation.
                      </span>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="">
                    <div className="write-resume mx-5 nav-color">
                      <svg className="fill-none  move" viewBox="0 0 24 24">
                        <defs></defs>
                        <circle cx="5.249" cy="15.75" r="3" class="a"></circle>
                        <path
                          d="M9.473 23.25a4.474 4.474 0 0 0-8.449 0M21.516 14.589a3 3 0 0 1-5.192 2.927M22.973 23.25a4.474 4.474 0 0 0-8.449 0M21 .75h.75a1.5 1.5 0 0 1 1.5 1.5v8.25a1.5 1.5 0 0 1-1.5 1.5h-4.5l-4.5 4.5V12h-3a1.5 1.5 0 0 1-1.5-1.5V2.25a1.5 1.5 0 0 1 1.5-1.5h1.5M13.874 3.375a1.875 1.875 0 1 1 1.875 1.875"
                          class="a"
                        ></path>
                        <path
                          d="M15.749 8.25a.375.375 0 1 1-.375.375.375.375 0 0 1 .375-.375"
                          class="a"
                        ></path>
                      </svg>

                      <span className="text-decoration-none">
                        How to Write a Resume
                      </span>
                      <br />
                      <span className="fs-14 nav-color">
                        Learn how to make a resume that gets interviews.
                      </span>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    <div className="resume-checker mx-5 nav-color">
                      <svg className="fill-none move" viewBox="0 0 24 24">
                        <defs></defs>
                        <circle cx="17.25" cy="17.261" r="6" class="a"></circle>
                        <path
                          d="M15.375 16.136a1.875 1.875 0 1 1 1.875 1.875M17.25 20.261a.375.375 0 1 1-.375.375.375.375 0 0 1 .375-.375M5.25 10.511h5.25M5.25 14.261h3M5.25 18.011h3M9.75 23.261h-7.5a1.5 1.5 0 0 1-1.5-1.5V6.011a1.5 1.5 0 0 1 1.5-1.5H6a3.75 3.75 0 0 1 7.5 0h3.75a1.5 1.5 0 0 1 1.5 1.5v2.25"
                          class="a"
                        ></path>
                        <path
                          d="M9.75 3.761a.375.375 0 1 1-.375.375.375.375 0 0 1 .375-.375"
                          class="a"
                        ></path>
                      </svg>

                      <span className="text-decoration-none">
                        Resume Checker
                      </span>
                      <br />
                      <span className="fs-14 nav-color">
                        Get your resume checked and scored with one click.
                      </span>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    <div className="resume-help nav-color mx-5">
                      <svg className="fill-none move " viewBox="0 0 24 24">
                        <defs></defs>
                        <circle cx="17.25" cy="17.261" r="6" class="a"></circle>
                        <path
                          d="M15.375 16.136a1.875 1.875 0 1 1 1.875 1.875M17.25 20.261a.375.375 0 1 1-.375.375.375.375 0 0 1 .375-.375M5.25 10.511h5.25M5.25 14.261h3M5.25 18.011h3M9.75 23.261h-7.5a1.5 1.5 0 0 1-1.5-1.5V6.011a1.5 1.5 0 0 1 1.5-1.5H6a3.75 3.75 0 0 1 7.5 0h3.75a1.5 1.5 0 0 1 1.5 1.5v2.25"
                          class="a"
                        ></path>
                        <path
                          d="M9.75 3.761a.375.375 0 1 1-.375.375.375.375 0 0 1 .375-.375"
                          class="a"
                        ></path>
                      </svg>

                      <span className="text-decoration-none">Resume Help</span>
                      <br />
                      <span className="fs-14 nav-color">
                        Improve your resume with help from expert guides.
                      </span>
                    </div>
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
            </div>

            <div className="px-4">
              <NavDropdown
                title="Cv"
                id="collasible-nav-dropdown"
                renderMenuOnMount={true}
              >
                <div
                  className="bgnav"
                  style={{ height: "30rem", overflowY: "auto" }}
                >
                  <NavDropdown.Item className="bg-white">
                    <Image
                      src="/resume-builder.png"
                      height="100"
                      width="90"
                    ></Image>
                    <span className="fs-6">CV Builder</span>
                    <br />
                    <span className="fs-14 nav-color">
                      Create a resume in 5 minutes. Get the job you want.
                    </span>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <div className="cv-template nav-color mx-5">
                      <svg className="fill-none move" viewBox="0 0 24 24">
                        <defs></defs>
                        <path
                          d="M9 12.75H2.25a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5h18a1.5 1.5 0 0 1 1.5 1.5v6M23.25 17.25a6 6 0 1 1-6-6"
                          class="a"
                        ></path>
                        <path
                          d="M23.25 12.749l-5.47 5.47a.749.749 0 0 1-1.06 0L15 16.5M5.25 6.375a.375.375 0 1 1-.375.375.374.374 0 0 1 .375-.375M11.25 6.375a.375.375 0 1 1-.375.375.374.374 0 0 1 .375-.375M17.25 6.375a.375.375 0 1 1-.375.375.374.374 0 0 1 .375-.375"
                          class="a"
                        ></path>
                      </svg>
                      <span className="text-decoration-none">Cv Template</span>
                      <br />
                      <span className="fs-14 nav-color">
                        Find the perfect CV template.
                      </span>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <div className="cv-example nav-color mx-5">
                      <svg className="fill-none move" viewBox="0 0 24 24">
                        <defs></defs>
                        <path
                          d="M5.25 2.249h-3a1.5 1.5 0 0 0-1.5 1.5v18a1.5 1.5 0 0 0 1.5 1.5h19.5a1.5 1.5 0 0 0 1.5-1.5v-18a1.5 1.5 0 0 0-1.5-1.5h-10.5"
                          class="a"
                        ></path>
                        <path
                          d="M11.25 11.249L8.25 9l-3 2.25V1.5A.75.75 0 0 1 6 .749h4.5a.75.75 0 0 1 .75.75zM5.25 18.749h10.5M5.25 14.249h13.5M18.75 9.749h-4.5"
                          class="a"
                        ></path>
                      </svg>
                      <span className="text-decoration-none">Cv Examples</span>
                      <br />
                      <span className="fs-14 nav-color">
                        See perfect CV samples that get jobs.
                      </span>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <div className="cv-format nav-color mx-5">
                      <svg className="fill-none move" viewBox="0 0 24 24">
                        <defs></defs>
                        <path
                          d="M5.25 2.249h-3a1.5 1.5 0 0 0-1.5 1.5v18a1.5 1.5 0 0 0 1.5 1.5h19.5a1.5 1.5 0 0 0 1.5-1.5v-18a1.5 1.5 0 0 0-1.5-1.5h-10.5"
                          class="a"
                        ></path>
                        <path
                          d="M11.25 11.249L8.25 9l-3 2.25V1.5A.75.75 0 0 1 6 .749h4.5a.75.75 0 0 1 .75.75zM5.25 18.749h10.5M5.25 14.249h13.5M18.75 9.749h-4.5"
                          class="a"
                        ></path>
                      </svg>

                      <span className="text-decoration-none">Cv Format</span>
                      <br />
                      <span className="fs-14 nav-color">
                        Pick the right format for your situation.
                      </span>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <div className="write-cv nav-color mx-5">
                      <svg className="fill-none move" viewBox="0 0 24 24">
                        <defs></defs>
                        <circle cx="5.249" cy="15.75" r="3" class="a"></circle>
                        <path
                          d="M9.473 23.25a4.474 4.474 0 0 0-8.449 0M21.516 14.589a3 3 0 0 1-5.192 2.927M22.973 23.25a4.474 4.474 0 0 0-8.449 0M21 .75h.75a1.5 1.5 0 0 1 1.5 1.5v8.25a1.5 1.5 0 0 1-1.5 1.5h-4.5l-4.5 4.5V12h-3a1.5 1.5 0 0 1-1.5-1.5V2.25a1.5 1.5 0 0 1 1.5-1.5h1.5M13.874 3.375a1.875 1.875 0 1 1 1.875 1.875"
                          class="a"
                        ></path>
                        <path
                          d="M15.749 8.25a.375.375 0 1 1-.375.375.375.375 0 0 1 .375-.375"
                          class="a"
                        ></path>
                      </svg>

                      <span className="text-decoration-none">
                        How to Write a Cv
                      </span>
                      <br />
                      <span className="fs-14 nav-color">
                        Learn how to make a CV that gets interviews.
                      </span>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <div className="cv-help mx-5 nav-color">
                      <svg className="fill-none move" viewBox="0 0 24 24">
                        <defs></defs>
                        <circle cx="17.25" cy="17.261" r="6" class="a"></circle>
                        <path
                          d="M15.375 16.136a1.875 1.875 0 1 1 1.875 1.875M17.25 20.261a.375.375 0 1 1-.375.375.375.375 0 0 1 .375-.375M5.25 10.511h5.25M5.25 14.261h3M5.25 18.011h3M9.75 23.261h-7.5a1.5 1.5 0 0 1-1.5-1.5V6.011a1.5 1.5 0 0 1 1.5-1.5H6a3.75 3.75 0 0 1 7.5 0h3.75a1.5 1.5 0 0 1 1.5 1.5v2.25"
                          class="a"
                        ></path>
                        <path
                          d="M9.75 3.761a.375.375 0 1 1-.375.375.375.375 0 0 1 .375-.375"
                          class="a"
                        ></path>
                      </svg>
                      <span className="text-decoration-none">Cv Help</span>
                      <br />
                      <span className="fs-14 nav-color">
                        Improve your CV with help from expert guides.
                      </span>{" "}
                      <br />
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <button className="btn btn-outline-danger    w-100 btn-lg ">
                      Create CV
                    </button>
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
            </div>

            <div className="px-4">
              <NavDropdown
                title="Cover Letter"
                id="collasible-nav-dropdown"
                renderMenuOnMount={true}
              >
                <div
                  className="bgnav"
                  style={{ height: "30rem", overflowY: "auto" }}
                >
                  <NavDropdown.Item className="bg-white">
                    <Image
                      src="/cover-letter.png"
                      height="120"
                      width="110"
                    ></Image>
                    <span className="text-decoration-none">
                      Cover Letter Builder
                    </span>{" "}
                    <br />
                    <span className="fs-14">
                      Create a cover letter in 5 minutes. Get the job you want.
                    </span>
                  </NavDropdown.Item>

                  <NavDropdown.Item className="">
                    <div className="cover-letter mx-5 nav-color">
                      <svg className="fill-none move" viewBox="0 0 24 24">
                        <defs></defs>
                        <path
                          d="M9 12.75H2.25a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5h18a1.5 1.5 0 0 1 1.5 1.5v6M23.25 17.25a6 6 0 1 1-6-6"
                          class="a"
                        ></path>
                        <path
                          d="M23.25 12.749l-5.47 5.47a.749.749 0 0 1-1.06 0L15 16.5M5.25 6.375a.375.375 0 1 1-.375.375.374.374 0 0 1 .375-.375M11.25 6.375a.375.375 0 1 1-.375.375.374.374 0 0 1 .375-.375M17.25 6.375a.375.375 0 1 1-.375.375.374.374 0 0 1 .375-.375"
                          class="a"
                        ></path>
                      </svg>
                      <span className="text-decoration-none">
                        Cover Letter Builder
                      </span>{" "}
                      <br />
                      <span className="fs-14 nav-color">
                        Find the perfect cover letter template.
                      </span>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <div className="letter-example nav-color mx-5">
                      <svg className="fill-none move " viewBox="0 0 24 24">
                        <defs></defs>
                        <path
                          d="M5.25 2.249h-3a1.5 1.5 0 0 0-1.5 1.5v18a1.5 1.5 0 0 0 1.5 1.5h19.5a1.5 1.5 0 0 0 1.5-1.5v-18a1.5 1.5 0 0 0-1.5-1.5h-10.5"
                          class="a"
                        ></path>
                        <path
                          d="M11.25 11.249L8.25 9l-3 2.25V1.5A.75.75 0 0 1 6 .749h4.5a.75.75 0 0 1 .75.75zM5.25 18.749h10.5M5.25 14.249h13.5M18.75 9.749h-4.5"
                          class="a"
                        ></path>
                      </svg>
                      <span className="text-decoration-none">
                        Cover Letter Examples
                      </span>{" "}
                      <br />
                      <span className="fs-14 nav-color">
                        See perfect cover letter samples that get jobs.
                      </span>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    <div className="letter-format nav-color mx-5">
                      <svg className="fill-none move" viewBox="0 0 24 24">
                        <defs></defs>
                        <path
                          d="M13.045 18.636l-3.712.53.53-3.712 9.546-9.546a2.25 2.25 0 0 1 3.182 3.182z"
                          class="a"
                        ></path>
                        <rect
                          width="7.5"
                          height="3"
                          x="5.25"
                          y=".749"
                          class="a"
                          rx=".75"
                          ry=".75"
                        ></rect>
                        <path
                          d="M12.75 2.249h3a1.5 1.5 0 0 1 1.5 1.5M17.25 18.749v3a1.5 1.5 0 0 1-1.5 1.5H2.25a1.5 1.5 0 0 1-1.5-1.5v-18a1.5 1.5 0 0 1 1.5-1.5h3M5.25 8.249h7.5M5.25 12.749h3"
                          class="a"
                        ></path>
                      </svg>
                      <span className="text-decoration-none">
                        Cover Letter Format
                      </span>{" "}
                      <br />
                      <span className="fs-14 nav-color">
                        Pick the right format for your situation.
                      </span>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <div className="write-cover-letter nav-color mx-5">
                      <svg className="fill-none move" viewBox="0 0 24 24">
                        <defs></defs>
                        <path
                          d="M13.045 18.636l-3.712.53.53-3.712 9.546-9.546a2.25 2.25 0 0 1 3.182 3.182z"
                          class="a"
                        ></path>
                        <rect
                          width="7.5"
                          height="3"
                          x="5.25"
                          y=".749"
                          class="a"
                          rx=".75"
                          ry=".75"
                        ></rect>
                        <path
                          d="M12.75 2.249h3a1.5 1.5 0 0 1 1.5 1.5M17.25 18.749v3a1.5 1.5 0 0 1-1.5 1.5H2.25a1.5 1.5 0 0 1-1.5-1.5v-18a1.5 1.5 0 0 1 1.5-1.5h3M5.25 8.249h7.5M5.25 12.749h3"
                          class="a"
                        ></path>
                      </svg>
                      <span className="text-decoration-none">
                        How to Write a Cover Letter
                      </span>
                      <br />
                      <span className="fs-14 nav-color">
                        Learn how to make a cover letter that gets interviews.
                      </span>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    <div className="letter-help nav-color mx-5">
                      <svg className="fill-none move" viewBox="0 0 24 24">
                        <defs></defs>
                        <circle cx="17.25" cy="17.261" r="6" class="a"></circle>
                        <path
                          d="M15.375 16.136a1.875 1.875 0 1 1 1.875 1.875M17.25 20.261a.375.375 0 1 1-.375.375.375.375 0 0 1 .375-.375M5.25 10.511h5.25M5.25 14.261h3M5.25 18.011h3M9.75 23.261h-7.5a1.5 1.5 0 0 1-1.5-1.5V6.011a1.5 1.5 0 0 1 1.5-1.5H6a3.75 3.75 0 0 1 7.5 0h3.75a1.5 1.5 0 0 1 1.5 1.5v2.25"
                          class="a"
                        ></path>
                        <path
                          d="M9.75 3.761a.375.375 0 1 1-.375.375.375.375 0 0 1 .375-.375"
                          class="a"
                        ></path>
                      </svg>
                      <span className="text-decoration-none">
                        Cover Letter Help
                      </span>
                      <br />
                      <span className="fs-14 nav-color">
                        Boost your chances of having your resume read with our
                        help.
                      </span>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    <button className="btn btn-outline-danger btn-lg w-100">
                      Create Cover Letter
                    </button>
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
            </div>

            <div className="px-4">
              <NavDropdown
                title="Career Blog"
                id="collasible-nav-dropdown"
                renderMenuOnMount={true}
              >
                <div
                  className="bgnav"
                  style={{ height: "30rem", overflowY: "auto" }}
                >
                  <NavDropdown.Item className="bg-white" href="#action/3.1">
                    <Image src="/all-post.png" height="100" width="90"></Image>
                    <span className="text-decoration-none">
                      Cover Letter Builder
                    </span>
                    <br />
                    <span className="fs-14 nav-color">
                      Create a cover letter in 5 minutes. Get the job you want.
                    </span>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <div className="job-search mx-5 nav-color">
                      <svg className="fill-none move" viewBox="0 0 24 24">
                        <defs></defs>
                        <circle cx="17.25" cy="17.261" r="6" class="a"></circle>
                        <path
                          d="M15.375 16.136a1.875 1.875 0 1 1 1.875 1.875M17.25 20.261a.375.375 0 1 1-.375.375.375.375 0 0 1 .375-.375M5.25 10.511h5.25M5.25 14.261h3M5.25 18.011h3M9.75 23.261h-7.5a1.5 1.5 0 0 1-1.5-1.5V6.011a1.5 1.5 0 0 1 1.5-1.5H6a3.75 3.75 0 0 1 7.5 0h3.75a1.5 1.5 0 0 1 1.5 1.5v2.25"
                          class="a"
                        ></path>
                        <path
                          d="M9.75 3.761a.375.375 0 1 1-.375.375.375.375 0 0 1 .375-.375"
                          class="a"
                        ></path>
                      </svg>
                      <span className="text-decoration-none">Job Search</span>
                      <br />
                      <span className="fs-14 nav-color">
                        Learn how to find the right job and get it.
                      </span>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <div className="job-interviews nav-color mx-5">
                      <svg className="fill-none move" viewBox="0 0 24 24">
                        <defs></defs>
                        <path
                          d="M12.749 21h1.5v2.25l3-2.25h4.5a1.5 1.5 0 0 0 1.5-1.5V15a1.5 1.5 0 0 0-1.5-1.5h-9a1.5 1.5 0 0 0-1.5 1.5v4.5a1.5 1.5 0 0 0 1.5 1.5z"
                          class="a"
                        ></path>
                        <circle
                          cx="4.973"
                          cy="16.875"
                          r="2.625"
                          class="a"
                        ></circle>
                        <path
                          d="M9.2 23.25a4.474 4.474 0 0 0-8.449 0"
                          class="a"
                        ></path>
                        <circle
                          cx="19.024"
                          cy="4.125"
                          r="2.625"
                          class="a"
                        ></circle>
                        <path
                          d="M23.249 10.5a4.474 4.474 0 0 0-8.449 0M16.499 15.75h3.75M14.249 18h6M11.249 8.25h-1.5v2.25l-3-2.25h-4.5a1.5 1.5 0 0 1-1.5-1.5v-4.5a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5v4.5a1.5 1.5 0 0 1-1.5 1.5zM7.499 3h-3.75M9.749 5.25h-6"
                          class="a"
                        ></path>
                      </svg>
                      <span className="text-decoration-none">
                        Job Interviews
                      </span>
                      <br />
                      <span className="fs-14 nav-color">
                        Prepare for any interview and ace it.
                      </span>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    <div className="career-advice nav-color mx-5">
                      <svg className="fill-none move" viewBox="0 0 24 24">
                        <defs></defs>
                        <path
                          d="M.75 9v6M23.25 1.5v21M.75 10.5L23.25 3M.75 13.5l22.5 7.5M5.126 14.959V15A6.71 6.71 0 0 0 17.1 18.949"
                          class="a"
                        ></path>
                      </svg>
                      <span className="text-decoration-none">
                        Career Advice
                      </span>
                      <br />
                      <span className="fs-14 nav-color">
                        Improve your career with expert tips and strategies.
                      </span>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    <div className="resume-help nav-color mx-5">
                      <svg className="fill-none move" viewBox="0 0 24 24">
                        <defs></defs>
                        <circle cx="17.25" cy="17.261" r="6" class="a"></circle>
                        <path
                          d="M15.375 16.136a1.875 1.875 0 1 1 1.875 1.875M17.25 20.261a.375.375 0 1 1-.375.375.375.375 0 0 1 .375-.375M5.25 10.511h5.25M5.25 14.261h3M5.25 18.011h3M9.75 23.261h-7.5a1.5 1.5 0 0 1-1.5-1.5V6.011a1.5 1.5 0 0 1 1.5-1.5H6a3.75 3.75 0 0 1 7.5 0h3.75a1.5 1.5 0 0 1 1.5 1.5v2.25"
                          class="a"
                        ></path>
                        <path
                          d="M9.75 3.761a.375.375 0 1 1-.375.375.375.375 0 0 1 .375-.375"
                          class="a"
                        ></path>
                      </svg>
                      <span className="text-decoration-none">Resume Help</span>
                      <br />
                      <span className="fs-14 nav-color">
                        Improve your resume with help from expert guides.
                      </span>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    <div className="cv-help mx-5 nav-color">
                      <svg className="fill-none move" viewBox="0 0 24 24">
                        <defs></defs>
                        <circle cx="17.25" cy="17.261" r="6" class="a"></circle>
                        <path
                          d="M15.375 16.136a1.875 1.875 0 1 1 1.875 1.875M17.25 20.261a.375.375 0 1 1-.375.375.375.375 0 0 1 .375-.375M5.25 10.511h5.25M5.25 14.261h3M5.25 18.011h3M9.75 23.261h-7.5a1.5 1.5 0 0 1-1.5-1.5V6.011a1.5 1.5 0 0 1 1.5-1.5H6a3.75 3.75 0 0 1 7.5 0h3.75a1.5 1.5 0 0 1 1.5 1.5v2.25"
                          class="a"
                        ></path>
                        <path
                          d="M9.75 3.761a.375.375 0 1 1-.375.375.375.375 0 0 1 .375-.375"
                          class="a"
                        ></path>
                      </svg>
                      <span className="text-decoration-none">CV Help</span>
                      <br />
                      <span className="fs-14 nav-color">
                        Improve your CV with help from expert guides.
                      </span>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    <div className="cover-letter-help mx-5 nav-color">
                      <svg className="fill-none move" viewBox="0 0 24 24">
                        <defs></defs>
                        <circle cx="17.25" cy="17.261" r="6" class="a"></circle>
                        <path
                          d="M15.375 16.136a1.875 1.875 0 1 1 1.875 1.875M17.25 20.261a.375.375 0 1 1-.375.375.375.375 0 0 1 .375-.375M5.25 10.511h5.25M5.25 14.261h3M5.25 18.011h3M9.75 23.261h-7.5a1.5 1.5 0 0 1-1.5-1.5V6.011a1.5 1.5 0 0 1 1.5-1.5H6a3.75 3.75 0 0 1 7.5 0h3.75a1.5 1.5 0 0 1 1.5 1.5v2.25"
                          class="a"
                        ></path>
                        <path
                          d="M9.75 3.761a.375.375 0 1 1-.375.375.375.375 0 0 1 .375-.375"
                          class="a"
                        ></path>
                      </svg>

                      <span className="text-decoration-none">
                        Cover Letter Help
                      </span>
                      <br />
                      <span className="fs-14 nav-color">
                        Boost your chances of having your resume read with our
                        help.
                      </span>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    <div className="asked-question nav-color mx-5">
                      <svg className="fill-none move" viewBox="0 0 24 24">
                        <defs></defs>
                        <circle cx="5.249" cy="15.75" r="3" class="a"></circle>
                        <path
                          d="M9.473 23.25a4.474 4.474 0 0 0-8.449 0M21.516 14.589a3 3 0 0 1-5.192 2.927M22.973 23.25a4.474 4.474 0 0 0-8.449 0M21 .75h.75a1.5 1.5 0 0 1 1.5 1.5v8.25a1.5 1.5 0 0 1-1.5 1.5h-4.5l-4.5 4.5V12h-3a1.5 1.5 0 0 1-1.5-1.5V2.25a1.5 1.5 0 0 1 1.5-1.5h1.5M13.874 3.375a1.875 1.875 0 1 1 1.875 1.875"
                          class="a"
                        ></path>
                        <path
                          d="M15.749 8.25a.375.375 0 1 1-.375.375.375.375 0 0 1 .375-.375"
                          class="a"
                        ></path>
                      </svg>

                      <span className="text-decoration-none">
                        Frequently Asked Question
                      </span>
                      <br />
                      <span className="fs-14 nav-color">
                        Get answers to frequently asked questions about resumes,
                        Zety, and more.
                      </span>
                    </div>
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
            </div>

            <div className="text-decoration-none">
              <NavDropdown
                title="About"
                id="collasible-nav-dropdown"
                renderMenuOnMount={true}
              ><div className="bgnav">
                <NavDropdown.Item className="bg-white">
                  <Image src="/all-post.png" height="100" width="90"></Image>
                  <span>About</span>
                  <br />
                  <span className="fs-14 nav-color">
                    Find out more about Zety and its career experts.
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <div className="press-page nav-color mx-5">
                    <svg className="fill-none move" viewBox="0 0 24 24">
                      <defs></defs>
                      <path
                        d="M12.749 21h1.5v2.25l3-2.25h4.5a1.5 1.5 0 0 0 1.5-1.5V15a1.5 1.5 0 0 0-1.5-1.5h-9a1.5 1.5 0 0 0-1.5 1.5v4.5a1.5 1.5 0 0 0 1.5 1.5z"
                        class="a"
                      ></path>
                      <circle
                        cx="4.973"
                        cy="16.875"
                        r="2.625"
                        class="a"
                      ></circle>
                      <path
                        d="M9.2 23.25a4.474 4.474 0 0 0-8.449 0"
                        class="a"
                      ></path>
                      <circle
                        cx="19.024"
                        cy="4.125"
                        r="2.625"
                        class="a"
                      ></circle>
                      <path
                        d="M23.249 10.5a4.474 4.474 0 0 0-8.449 0M16.499 15.75h3.75M14.249 18h6M11.249 8.25h-1.5v2.25l-3-2.25h-4.5a1.5 1.5 0 0 1-1.5-1.5v-4.5a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5v4.5a1.5 1.5 0 0 1-1.5 1.5zM7.499 3h-3.75M9.749 5.25h-6"
                        class="a"
                      ></path>
                    </svg>

                    <span className="text-decoration-none">Press Page</span>
                    <br />
                    <span className="fs-14 nav-color">
                      Read original data insights to boost your reporting.
                    </span>
                  </div>
                </NavDropdown.Item>
                </div>
              </NavDropdown>
            </div>
            <div className="px-4">
              <Link href="/auth/login">
                <button id="btn1" className=" button  py-2 px-4">My Account</button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default navbar;
