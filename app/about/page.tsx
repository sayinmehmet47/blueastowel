import { NavbarFirst } from '@/components/ui-kit/navbar-first';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div>
      <NavbarFirst />
      <div className="mt-12 text-sky-900">
        <div className="flex items-center gap-10 flex-col md:flex-row">
          <div>
            <Image
              src="/towel-6.png"
              alt="towel"
              width={460}
              height={342}
            ></Image>
          </div>
          <div className="flex flex-col gap-3 max-w-lg">
            <h1 className="text-5xl">About Us</h1>
            <p>
              WHETHER FOR HERMÈS OR MISSONI AFICIONADOS, THE NEWEST URBAN
              RETREAT IN TOWN DRAWS A VOGUISH CROWD WITH ITS UNIQUE DESIGN
              DWELLINGS ON THE BANKS OF THE DOURO RIVER.
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
