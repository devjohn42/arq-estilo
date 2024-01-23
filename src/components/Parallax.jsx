import { Parallax as ImageParallax } from 'react-parallax';

const Parallax = () => (
  <ImageParallax bgImage="/parallax-image.jpg" className="flex items-center">
    <div className="parallax-image"></div>
  </ImageParallax>
);

export default Parallax;
