'use client';

import * as React from 'react';
import Carousel from '../ui/corousel/carousel';

const images = [
  '/towel-1.jpeg',
  '/towel-2.jpeg',
  '/towel-3.jpeg',
  '/towel-4.jpeg',
  '/towel-5.jpeg',
];

const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const OPTIONS = { loop: true };

export function ProductCarousel() {
  return <Carousel slides={images} options={OPTIONS} />;
}
