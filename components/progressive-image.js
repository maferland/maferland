import React from 'react';
import './progressive-image.module.scss';

const ProgressiveImage = ({ image, style = '', className = '' }) => {
  const [highResImageLoaded, setHighResImageLoaded] = React.useState(() => false);
  const imageRef = React.useRef();
  const lowResUrl = `${image.url}?nf_resize=fit&w=4`;
  const highResUrl = `${image.url}?nf_resize=smartcrop&w=1200&h=800`;

  const handleLoad = () => {
    setHighResImageLoaded(true);
  };

  React.useEffect(() => {
    if (imageRef.current.complete) {
      handleLoad();
    }
  }, []);

  return (
    <div style={{ ...style }} className="progressive-image is-relative">
      <img className={className.trim()} alt={image.alt} onLoad={handleLoad} src={highResUrl} ref={imageRef} />
      <img
        className={`${className} overlay ${highResImageLoaded ? 'hidden' : ''}`.trim()}
        alt={image.alt}
        src={lowResUrl}
      />
    </div>
  );
};

export default ProgressiveImage;
