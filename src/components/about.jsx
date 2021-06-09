import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <Fade left>
            <img src='img/about.png' className='img-responsive' alt='' />{' '}
            </Fade>
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
            <Zoom right>
              <h2>About Us</h2>
            </Zoom>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              <p>{props.data ? props.data.paragraph2 : 'loading...'}</p>
              <Zoom right>
              <h3>Why Choose Us?</h3>
              </Zoom>
              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
