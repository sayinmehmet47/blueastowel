'use client';

import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';

const images = [
  '/towel-1.jpeg',
  '/towel-2.jpeg',
  '/towel-3.jpeg',
  '/towel-4.jpeg',
  '/towel-5.jpeg',
];

export function ProductCarousel() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="basis-3/4">
            <div className="p-1">
              <Card>
                <CardContent className="aspect-banner">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant="secondary" />
      <CarouselNext variant="secondary" />
    </Carousel>
  );
}
