import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';

export const Works = (props) => {
    return (
      <div id='works' className='text-center'>
        <div className='container'>
          <div className='col-md-10 col-md-offset-1 section-title'>
            <Zoom left>
            <h2>Why Impulse works</h2>
            </Zoom>
          </div>
          <div className='row'>
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                    {' '}
                    {/* <i className={d.img}></i> */}
                    <div>
                    <Rotate top right>
                    <img src={d.img} alt='' />
                    </Rotate>
                    {' '}
                      </div>
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