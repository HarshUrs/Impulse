

export const Learn = (props) => {
    return (
      <div id='learne'>
        <div className='container'>
          <div className='row'>
            {/* <div className='col-xs-12 col-md-6'>
              {' '}
              <img src='img/about.png' className='img-responsive' alt='' />{' '}
            </div> */}
            <div className='col-xs-12 col-md-6'>
              <div className='learn-text'>
                  
                <h2>Start Learning Today!</h2>
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
                  
                </div>
              </div>
            </div>
            <div className='col-xs-12 col-md-5'>
              {' '}
              <img src='img/lear.png' className='img-responsive' alt='' />{' '}
            </div>
          </div>
        </div>
      </div>
    )
  }
  