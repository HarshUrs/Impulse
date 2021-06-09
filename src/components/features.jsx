import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';

export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 sectionn-title'>
          <Bounce left>
          <h2>Associates</h2>
          </Bounce>
          </div>
        
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-4'>
                  {' '}
                  <br></br>
                  <br></br>
                  <br></br>
                  <Flip left>
                  <img src={d.img} alt='...' className='features=img' />
                  </Flip>
                  <br></br>
                  <br></br>
                  <h3>{d.title}</h3>
                  
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
