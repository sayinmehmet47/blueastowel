import MenuBar from '@/components/ui-kit/menu-bar';
import { NavbarFirst } from '@/components/ui-kit/navbar-first';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div>
      <MenuBar headerClassName="bg-sky-300 rounded-lg mt-4 " showLogo={true}/>
      <div className="mt-12 text-sky-900">
        <div className="flex items-center gap-10 flex-col md:flex-row">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center gap-4">
              <div className="w-40 h-40 relative">
                <Image src="/about-us/owner-3.png" alt="Owner 3" layout="fill" objectFit="cover" className="rounded-full" />
              </div>
              <h2 className="text-xl font-semibold text-center">Rachid Moulay<br/><span className="text-base font-normal">(US founder and chief financial officer)</span></h2>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-40 h-40 relative">
                <Image src="/about-us/owner-2.png" alt="Owner 2" layout="fill" objectFit="cover" className="rounded-full" />
              </div>
              <h2 className="text-xl font-semibold text-center">Ömer Sayin<br/><span className="text-base font-normal">(USA founder sales marketing manager)</span></h2>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-40 h-40 relative">
                <Image src="/about-us/owner-1.png" alt="Owner 1" layout="fill" objectFit="cover" className="rounded-full" />
              </div>
              <h2 className="text-xl font-semibold text-center">Osman Türker<br/><span className="text-base font-normal">(Turkey founder sales marketing manager)</span></h2>
            </div>
          </div>
          <div className="flex flex-col gap-3 max-w-lg mt-10 md:mt-0">
            <h1 className="text-5xl">About Us</h1>
            <p>
              Welcome to BlueAstowel, your ultimate destination for premium quality towels. We are dedicated to transforming everyday essentials into a symbol of sophistication and luxury. Our collection ranges from timeless classics to contemporary designs, all crafted to provide unparalleled comfort and durability. At BlueAstowel, we believe in enhancing your bathing experience with our meticulously designed, plush, and absorbent towels. Join us on this journey of redefining comfort and luxury, one towel at a time.
            </p>
            <p>
              Our team, led by our three dedicated owners, is committed to delivering the highest quality products and exceptional customer service. We are proud to serve you and look forward to making your bathing experience a luxurious one.
            </p>
          </div>
        </div>
        <iframe
          className="mt-12"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2688071.6525802407!2d-113.49415921830177!3d35.99721670623729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e94dc7dfa104c9%3A0x64373b03f95e26a9!2sSanta%20Barbara%2C%20Kaliforniya%2093117%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2sch!4v1707166607838!5m2!1str!2sch"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer"
          lang="en"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
