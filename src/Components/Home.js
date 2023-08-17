import React from 'react'
import CardShow from './CardShow'

function Home() {
  return (
    <>
      <div className="Homepage_Section">
        <div id="homepage" >
          <div className="container d-flex justify-content-center align-content-center">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-md-9 " id='homePadding'>
                <h1>Learning Today,</h1>
                <h1>Leading Tomorrow</h1>
                <h3>We are team of talented designers making websites with Bootstrap</h3>
                <button className='btn btn-danger w-50 mt-3'>More Info</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <CardShow/>
    </>
  )
}

export default Home