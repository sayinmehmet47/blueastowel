'use client';

import * as React from 'react';
import Carousel from '../ui/corousel/carousel';

const images = [
  '/newly-added/towel-15.jpeg',
  '/newly-added/towel-16.jpeg',
  '/newly-added/towel-17.jpeg',
  '/newly-added/towel-18.jpeg',
  '/newly-added/towel-19.jpeg',
  '/newly-added/towel-20.jpeg',
  '/newly-added/towel-21.jpeg',
  '/newly-added/towel-22.jpeg',
  '/newly-added/towel-23.jpeg',
  '/newly-added/towel-24.jpeg',
  '/newly-added/towel-25.jpeg',
  '/newly-added/towel-26.jpeg',
  '/newly-added/towel-27.jpeg',
  '/newly-added/towel-28.jpeg',
  '/newly-added/towel-30.jpeg',
  '/newly-added/towel-31.jpeg',
  '/newly-added/towel-32.jpeg',
  '/newly-added/towel-33.jpeg',
  '/newly-added/towel-34.jpeg',
  '/newly-added/towel-35.jpeg',
  '/newly-added/towel-36.jpeg',
  '/newly-added/towel-37.jpeg',
  '/newly-added/towel-38.jpeg',
  '/newly-added/towel-39.jpeg',
  '/newly-added/towel-40.jpeg',
  '/newly-added/towel-41.jpeg',
  '/newly-added/towel-42.jpeg',
  '/newly-added/towel-43.jpeg',
  '/newly-added/towel-44.jpeg',
  '/newly-added/towel-45.jpeg',
  '/newly-added/towel-46.jpeg',
  '/newly-added/towel-51.jpeg',
  '/newly-added/towel-13.jpeg',
  '/newly-added/towel-14.jpeg',
];

const OPTIONS = { loop: true, };

export function ProductCarousel() {
  return <Carousel slides={images} options={OPTIONS} />;
}
