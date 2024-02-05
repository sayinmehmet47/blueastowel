import React from 'react';

const About = () => {
  return (
    <div className="mt-12">
      <div className="flex justify-around mt-12">
        <div className="flex flex-col items-center text-center">
          <div className="text-4xl mb-4">OMER SAYIN</div>
          <div>BLUEASTOWEL</div>
          <div>OWNER</div>
          <div>SANTA BARBARA. CA 93117</div>
          <div>blueastowel@gmail.com</div>
          <div>+1 (480) 330 2295</div>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="text-4xl mb-4">RACHID MOULAY</div>
          <div>BLUEASTOWEL</div>
          <div>OWNER</div>
          <div>SANTA BARBARA. CA 93117</div>
          <div>blueastowel@gmail.com</div>
          <div>+1 (805) 895 1706</div>
        </div>
      </div>

      <iframe
        className="mt-12 mx-auto"
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
  );
};

export default About;
