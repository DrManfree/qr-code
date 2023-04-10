import { default as QrImg } from './image-qr-code.png';
import './QR.scss';

export const QR = () => {
  return (
    <div className='qr-panel'>
      <img className='qr-image' src={ QrImg } alt='QR Code' />
      <p className='main-text'>
        Improve your front-end skills by building projects
      </p>
      <p className='sub-text'>
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </p>
    </div>
  );
}
