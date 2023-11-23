import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import imagen1 from '../img/Carouselimg1.jpg'
import imagen2 from '../img/CarouselImg3.jpg'
import imagen4 from '../img/CarouselImg4.jpg'
import imagen3 from '../img/Carouselimg2.jpg'
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
          src={imagen4}
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
          src={imagen3}
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