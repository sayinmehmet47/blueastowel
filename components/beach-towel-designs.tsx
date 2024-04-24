"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This line is important!

const BeachTowelDesigns = () => {
  const [images, setImages] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    fetch('/api/beach-towel-designs')
      .then(response => response.json())
      .then(data => setImages(data));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:brightness-105">
          <div className="h-64 overflow-hidden rounded-lg shadow-lg border-4 border-gray-200">
            <Image 
              className="object-cover w-full h-full cursor-pointer" 
              src={`/rounded-beach-towels/${image}`}
              alt="Description of image" 
              width={300}
              height={200}
              priority
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,..."
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            />
          </div>
        </div>
      ))}
      {isOpen && (
        <Lightbox
          mainSrc={`/rounded-beach-towels/${images[photoIndex]}`}
          nextSrc={`/rounded-beach-towels/${images[(photoIndex + 1) % images.length]}`}
          prevSrc={`/rounded-beach-towels/${images[(photoIndex + images.length - 1) % images.length]}`}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
      )}
    </div>
  );
}

export default BeachTowelDesigns;
