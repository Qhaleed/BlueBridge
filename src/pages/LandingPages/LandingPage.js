import React from 'react'
import MyNavbar from '../../components/NavigationBar/navbar'
import "./LandingPage.css";
import "../../App.css";
import MyFooter from '../../components/Footer/Footer';
import BlueBorder from '../../components/BlueBorder/BlueBorder';
export const LandingPage = () => {
  return (
    <>
      <MyNavbar />
      <div className='section1' id='home'>
        <img src='global/1.png' alt='1.png'></img>
        <div className='section-1-text-container'>
          <h1 className='section-1-head'>What is BlueRidge?</h1>
          <p>Blue Ridge is an online platform that aims to centralize<br />
            and Improve the online volunteering and donation scene, creating a more transparent and accessible environment to send love through donations and volunteering works to those who are willing to give and those truly in need</p>
        </div>
      </div>
      <BlueBorder />

      <div className='section2' id='volunteer'>
        {/* Success Story */}
        <img className="background-image1" src="/Hands1.png" alt="Decorative" />
        <img className="background-image2" src="/Hands2.png" alt="Decorative" />
        <div className='section2-title'>
          <h1>START YOU FUND RAISING JOURNEY</h1>
        </div>
        <div className='subhead'>
          <h1>SUCCESS <span className='subhead-span'>STORIES</span></h1>
        </div>
        <div className='disaster-image-container'>
          <img src='./picture1.webp' alt='picture-1'></img>
        </div>
      </div>




      <div className='section3' id='donation'>

        <h1 className='section3-title'><span className='call'>CALL </span><span className='for'>FOR</span> <span className='donation'>DONATION</span></h1>
        <h2 className='section3-subtitle'>Each cent will go directly to the lives of those who need it the most.</h2>
        <div className='grid-container'>

          <div class="card">
            <div class="picture-container">
              <img src="./picture1.webp" alt="event-image" />
            </div>
            <div class="card-body">
              <h1>Fundraising for those affected by the recent fire in barangay Pasonanca</h1>
              <div class="progress-bar">
                <div class="progress"></div>
              </div>
              <h2 className='amount-raised'>Php12,400.00 raised </h2>
            </div>
          </div>
          <div class="card">
            <div class="picture-container">
              <img src="./picture1.webp" alt="event-image" />
            </div>
            <div class="card-body">
              <h1>Zamboanga City Canelar Fire Incident</h1>
              <div class="progress-bar">
                <div class="progress"></div>
              </div>
              <h2 className='amount-raised'>Php7,400.00 raised </h2>
            </div>
          </div>
          <div class="card">
            <div class="picture-container">
              <img src="./picture1.webp" alt="event-image" />
            </div>
            <div class="card-body">
              <h1>Zamboanga City fireworks warehouse blast</h1>
              <div class="progress-bar">
                <div class="progress"></div>
              </div>
              <h2 className='amount-raised'>Php22,320.00 raised </h2>
            </div>
          </div>




        </div>

      </div >

      <div className='section4'>
        <div className='section4-container'>
          <div className='section4-image-container'>
            <img src='./2.png' alt='2.png'></img>
          </div>
          <div className='section4-text-container'>
            <h1 className='section4-text-container-header'>
              <span className='call'>CALL </span><span className='for'>FOR</span> <span className='donation'>DONATION</span>
            </h1>
            <h1>Join us in achieving our mission by volunteering! Click the link below to be a part of the Blue Bridge journey!</h1>
            <div class="section4-card">
              <div class="section4-card-image">
                <img src="./picture1.webp" alt="Barangay Tumaga" />
              </div>
              <div class="section4-card-body">
                <h1>Zamboanga City fireworks warehouse blast</h1>
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
                <h2>12 Volunteers</h2>
              </div>
            </div>
            <div class="section4-card">
              <div class="section4-card-image">
                <img src="./picture1.webp" alt="Barangay Tumaga" />
              </div>
              <div class="section4-card-body">
                <h1>Zamboanga City Canelar Fire Incident</h1>
                <div class="progress-bar">
                  <div class="progress" id='event2'></div>
                </div>
                <h2>12 Volunteers</h2>
              </div>
            </div>



          </div>
        </div>

      </div>


      <div className='section5'>
        <div className='section5-text-container'>
          <h1>"Giving is not just about making a donation. It is about making a difference." – Kathy Calvin</h1>
        </div>
        <div className='section5-subhead-container'>
          <h2><span className='call'>Call </span><span className='for'>for </span><span className='goods'>goods</span>  </h2>
        </div>

        <div className='donation-image-container'>
          <img src='global/3.png'></img>
        </div>



        <button className='donation-button'>Donate Now   </button>
      </div >




      <MyFooter></MyFooter>
    </>
  )
}

export default LandingPage;
