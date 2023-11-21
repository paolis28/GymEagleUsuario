import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import imagen1 from '../img/Carouselimg1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

function carousel() {
  return (
    <Carousel className='carousel'>
      
    <Carousel.Item>
      <div className="carousel-image-container">
        <img
          className="d-block w-100 imagen-carousel"
          src={imagen1}
          alt="Second slide"
        />
      </div>
      <Carousel.Caption>

      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <div className="carousel-image-container">
        <img
          className="d-block w-100 imagen-carousel"
          src={imagen1}
          alt="Second slide"
        />
      </div>
      <Carousel.Caption>
      
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <div className="carousel-image-container">
        <img
          className="d-block w-100 imagen-carousel"
          src={imagen1}
          alt="Second slide"
        />
      </div>
      <Carousel.Caption>
      
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}

export default carousel;