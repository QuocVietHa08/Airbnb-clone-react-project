import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={this.props.imag1} alt='imag-1' />
          </div>
          <div>
            <img src={this.props.imag2} alt='imag-2' />
          </div>
          <div>
            <img src={this.props.imag3} alt='imag-3' />
          </div>
          <div>
            <img src={this.props.imag3} alt='img-4' />
          </div>
        </Slider>
      </div>
    );
  }
}
