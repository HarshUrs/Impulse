import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
export const Blog = (props) => {
    return (
      <div id='blog' className='text-center'>
        <div className='container'>
          <div className='col-md-8 col-md-offset-2 section-title'>
          <Zoom> <h2>Blog</h2></Zoom>
            
          </div>
          <div id='row'>
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className='col-md-6 col-sm-6 blog'>
                    <div className='thumbnail'>
                      {' '}
                      <Flip left>
                      <img src={d.img} alt='...' className='blog-img' />
                      </Flip>
                      <div className='caption'>
                        <h3>{d.name}</h3>
                        <a
                          href='#features'
                          className='btn btn-custom btn-lg page-scroll'
                        >
                          Read More
                        </a>
                        {' '}
                      </div>
                    </div>
                  </div>
                ))
              : 'loading'}
          </div>
        </div>
      </div>
    )
  }
  