import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { useState } from 'react'
import emailjs from 'emailjs-com'
import { Contact } from './contact';


export const Reg = (props) => {
  return (
    <div id='reg'>
        <div className="reg">
      <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-md-6'>
              <div className='learn-text'>
                 <Zoom>ggg
                <h2>Training</h2>
                </Zoom> 
                <div className='list-style'>
                  <div className='col-lg-8 col-sm-6 col-xs-14'>
                    <ul>
                      {/* {props.data
                        ? props.data.Wh.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : ''} */}
                        <h4>Training for college graduates</h4>
                        <p>
                            1.‘Live Your Dream” – A two full-day refresher training program for upcoming graduates from engineering and Management students, to prepare them for the corporate.
                        </p>
                        <p> 2.Personality Development </p>
                         <p> 3.Technological training </p>
                         <br></br>
                         <h4>Courses Offered</h4>
                         <p>Artificial Intelligence </p>
                         <p>Internet Of Things (IoT)</p>
                         <p>Data Science</p>
                         <p>Cloud Computing / Google Cloud Platform</p>
                         <p>Robotics</p>
                         <p>BlockChain</p>
                    </ul>
                    <ul>
                      <br></br>
                      <h4>
                      IT Training for Corporate
                      </h4>                 
                         <p>Internet Of Things (IoT)</p>
                         <p>Cloud Computing / Google Cloud Platform</p>
                         <p>Robotics</p>
                         <p>Data Science</p>
                         <p>BlockChain</p>
                         <p>Artificial Intelligence </p>
                    </ul>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className='cot'>
            <div className='col-xs-12 col-md-5'>
              {' '}
              <Zoom bottom>
              <img src='img/tr.jpg' className='img-responsive' alt='' />{' '}
              </Zoom>
            </div>
            </div>
          </div>
          </div>
        </div>
        <div>
            <Contact />
        </div>
        </div>
    
   
   
  )
}
