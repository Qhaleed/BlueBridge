import React from 'react'
import MyNavbar from '../../components/NavigationBar/navbar'
import MyFooter from '../../components/Footer/Footer'
import "./DocumentationPage.css"
function DocumentationPage() {
    return (
        <>
            <MyNavbar />
            <div className='section-1'>
                <div className='hero'>

                </div>
                <div className='header'>
                    <h1>Documentation</h1>
                    <h3>Everything you need to know to get to know the team</h3>
                    <br />
                </div>
                <div className="content">
                    <div className="content-1">
                        <img src='./documentation/d1.jpg' alt='Documentation Image 1' />
                        <p>Developed the donation page</p>
                    </div>
                    <div className="content-2">
                        <img src='./documentation/d2.jpg' alt='Documentation Image 2' />
                        <p>Ran into the system breaking error</p>
                    </div>
                    <div className="content-3">
                        <img src='./documentation/d3.jpg' alt='Documentation Image 3' />
                        <p>Saturday Coding Grind</p>
                    </div>
                    <div className="content-4">
                        <img src='./documentation/d4.jpg' alt='Documentation Image 4' />
                        <p> Sunday Coding Session @ mercedes</p>
                    </div>
                    <div className="content-5">
                        <img src='./documentation/d5.jpg' alt='Documentation Image 5' />
                        <p>Random Update</p>
                    </div>
                    <div className="content-6">
                        <img src='./documentation/d6.jpg' alt='Documentation Image 6' />
                        <p>Created a volunteer page (removed)</p>
                    </div>
                    <div className="content-7">
                        <img src='./documentation/d7.png' alt='Documentation Image 7' />
                        <p>UI disaster</p>
                    </div>
                    <div className="content-8">
                        <img src='./documentation/d8.jpg' alt='Documentation Image 8' />
                        <p>Coding session at Iya's Coffee</p>
                    </div>
                    <div className="content-9">
                        <img src='./documentation/d9.png' alt='Documentation Image 9' />
                        <p>Early donation page (updated)</p>
                    </div>
                </div>


            </div>
            <MyFooter />
        </>
    )
}

export default DocumentationPage
