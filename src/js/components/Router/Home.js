import React, { Component } from 'react'
import Slider from '../../../js/components/Slider/Slider';

const IMAGE_DATA = [
  {
    src: require('../../../images/demo1-1.jpg'),
    alt: 'images-1',
  },
  {
    src: require('../../../images/demo2-1.jpg'),
    alt: 'images-2',
  },
  {
    src: require('../../../images/demo3-1.jpg'),
    alt: 'images-3',
  },
  {
    src: require('../../../images/demo4-1.jpg'),
    alt: 'images-4',
  },
  {
    src: require('../../../images/demo5-1.jpg'),
    alt: 'images-4',
  },
];

class Home extends Component {
  render() {
    return (
      <div>
        <Slider
          items={IMAGE_DATA}
          speed={1.2}
          delay={2.1}
          pause={true}
          autoplay={true}
          dots={true}
          arrows={true} />
      </div>);
  }
}

export default Home