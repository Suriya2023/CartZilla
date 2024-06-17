import React from 'react'

function CarOusel(props) {
  return (
    <div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" style={props.mystyle}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* <h1>Switch Between Light & Dark Mode</h1> */}
            <img  id="boomimg" src="https://cartzilla.createx.studio/assets/img/intro/dark-mode.jpg" alt="..."/>
            <img  id="boomimg" src="https://cartzilla.createx.studio/assets/img/intro/light-mode.jpg" alt="..."/>
          </div>

        </div>
        <br /><br /><br /><br />
        <h1 id='center'>Cartzilla Feature Highlights</h1>
        <br />
      </div>

    </div>
  )
}

export default CarOusel
