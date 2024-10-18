import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight ,FaCircle} from 'react-icons/fa';

const Slider = ({ link, page, limit }) => {
  const [images, setImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1); // Corrected circular logic
  };

  const handlePrevious = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1); // Corrected reverse logic
  };

  const fetchImages = async (link, page = 1, limit = 10) => {
    setLoading(true);
    setErrorMessage('');

    try {
      const res = await fetch(`${link}?page=${page}&limit=${limit}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error('Error fetching images');
      }

      setImages(data);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (link !== '') {
      fetchImages(link, page, limit);
    }
  }, [link]);

  

  return (
    <div className='container relative h-[650px] w-[500px] bg-green-500 overflow-hidden mx-auto'>
      <h1 className='text-center text-white font-bold'>Image Slider</h1>
      {errorMessage && <p className='text-red-500 text-center'>{errorMessage}</p>}

      <div className="relative flex items-center justify-between">
        {/* Left Arrow */}
        <FaArrowAltCircleLeft
          className="absolute left-4 text-white text-4xl cursor-pointer z-10"
          onClick={handlePrevious}
        />

        {/* Images */}
        {loading ? (
          <p className='text-white text-center'>Loading...</p>
        ) : (
          images.length > 0 && (
            <div className="flex justify-center w-full overflow-hidden">
              <div className="w-[500px] flex-shrink-0">
                <img 
                  src={images[current]?.download_url} 
                  alt={images[current]?.author} 
                  className='h-[500px] w-full object-cover' 
                />
              </div>
            </div>
          )
        )}

        {/* Right Arrow */}
        <FaArrowAltCircleRight
          className="absolute right-4 text-white text-4xl cursor-pointer z-10"
          onClick={handleNext}
        />
         <div className="absolute flex justify-center left-[40%]  bg-red bottom-2  ">
        
                {images.length > 0 && images.map((_,i)=>(
                   <div className="flex ">
                  <FaCircle 
                  onClick={()=>setCurrent(i)}
              key={i} 
              className={`w-3 h-3  ${current === i ? 'text-red-500 animate-spin' : 'text-white'}`} 
            />
                   </div>
                ))}
  
            
         </div>

      </div>
    </div>
  );
};

export default Slider;
