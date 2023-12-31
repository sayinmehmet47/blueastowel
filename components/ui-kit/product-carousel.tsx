'use client';

import * as React from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

// Create an array of the image paths
const images = [
  '/towel-1.jpeg',
  '/towel-2.jpeg',
  '/towel-3.jpeg',
  '/towel-4.jpeg',
  '/towel-5.jpeg',
];

export function ProductCarousel() {
  return (
    <Carousel
      className="w-full max-w-7xl"
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Image
                src={image}
                alt={`Towel ${index + 1}`}
                width={2200}
                height={500}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-12 opacity-50 hover:opacity-100 transition-opacity duration-200" />
      <CarouselNext className="right-24 opacity-50 hover:opacity-100 transition-opacity duration-200" />
    </Carousel>
  );
}
