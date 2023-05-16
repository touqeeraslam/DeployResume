import React from "react";
import { faFile, faLightbulb, faStar , } from "@fortawesome/fontawesome-free-regular";
import { faChartLine, faLock } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft, faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";
const star = <FontAwesomeIcon icon= { faStar} size='2xl' />
const result = <FontAwesomeIcon icon= { faChartLine} size='2xl' />
const check = <FontAwesomeIcon icon= { faRotateLeft} size='2xl' />
const lock = <FontAwesomeIcon icon= {faLock} size='2xl' />
const bulb = <FontAwesomeIcon icon= {faLightbulb} size='2xl' />
const file = <FontAwesomeIcon icon= {faFile} size='2xl' />
export default function Benefits() {
  return (
    <>
      <div className="container-fluid py-4  ">
            <h2 className="text-center mb-5 mt-5">
              What are the benefits of Zety Resume Builder?
            </h2>
            <div className="container-fluid  ">
            <div className="row mx-3  justify-content-center ">
              <div className="col-xl-4 col-lg-4   col-md-5 col-sm-6 col-10 ">
                <span className='icon-result'>{star}</span><div class="benefits__text">
               <h3 class="h5"> Professional Resume Builder </h3>
               <p class="mt-10--phone text--left">Our <a className="text-decoration-none" href="#">resume builder</a> is packed with expert tips to show you how to make each part of your resume.</p></div>
              </div>
              <div className="col-xl-4 col-lg-4   col-md-5 col-sm-6 col-10"><span className='icon-result'>{result}</span>
              <div class="benefits__text"><h3 class="h5">20+ Best Resume Templates</h3><p class="mt-10--phone text--left">Our templates were all designed by Certified Career Experts. <a className="text-decoration-none" href="#">Select a resume template here.</a></p></div>
              </div>
              <div className="col-xl-4 col-lg-4   col-md-5 col-sm-6 col-10">
                <span className='icon-result'>{check}</span>
              <div class="benefits__text"><h3 class="h5">Resume Check</h3><p class="mt-10--phone text--left">Zety Resume Builder reviews and scores your resume in real-time. <a className="text-decoration-none" href="#">Check how your resume performs here.</a></p></div>
              </div>
              <div className="col-xl-4 col-lg-4   col-md-5 col-sm-6 col-10">
              <span className='icon-result'>{lock}</span>
              <div class="benefits__text"><h3 class="h5">Cover Letter Builder</h3><p class="mt-10--phone text--left">Generate a cover letter using a template matching your resume. <a className="text-decoration-none" href="#">Build your cover letter here.</a></p></div>
              </div>
              <div className="col-xl-4 col-lg-4   col-md-5 col-sm-6 col-10">
              <span className='icon-result'>{bulb}</span>
              <div class="benefits__text"><h3 class="h5">Fast and Easy to Use Generator</h3><p class="mt-10--phone text--left">Drag and drop ready-made content tailored to your <a className="text-decoration-none"href="#">resume</a> in a click and enjoy a flexible text editor.</p></div>
              </div>
              <div className="col-xl-4 col-lg-4   col-md-5 col-sm-6 col-10">
                <span className='icon-result'>{file}</span>
              <div class="benefits__text"><h3 class="h5">Fast and Easy to Use Generator</h3><p class="mt-10--phone text--left">Drag and drop ready-made content tailored to your <a className="text-decoration-none"href="#">resume</a> in a click and enjoy a flexible text editor.</p></div>
              </div>
              </div>
            
            </div>
         
          </div>
    </>
  );
}