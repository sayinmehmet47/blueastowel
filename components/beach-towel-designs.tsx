'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';

const BeachTowelDesigns = () => {
  const [images, setImages] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  useEffect(() => {
    fetch('/api/beach-towel-designs')
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:brightness-105"
        >
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
              onClick={() => setSelectedIndex(index)}
            />
          </div>
        </div>
      ))}
      <Lightbox
        index={selectedIndex}
        slides={images.map((image) => ({
          src: `/rounded-beach-towels/${image}`,
        }))}
        close={() => setSelectedIndex(-1)}
        open={selectedIndex >= 0}
      />
    </div>
  );
};

export default BeachTowelDesigns;
