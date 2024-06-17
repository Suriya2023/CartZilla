import React from 'react'

function CarOusel(props) {
  return (
    <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner"style={props.mystyle}>
    <div className="carousel-item active" style={props.mystyle}><img data-testid="pixelbin-image" alt="img" class="ImageMagnifier__StyledPixelBinImage-sc-kcdk33-3 ImageMagnifier__ErasedPixelBinImage-sc-kcdk33-5 kBnRAJ cAIkIa" src="blob:https://www.erase.bg/c5dd803e-c42d-46a9-a71a-cf3e7d724932"/>
    </div>
  </div>
</div>
    </div>
  )
}

export default CarOusel
