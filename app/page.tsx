import { CardGroup } from '@/components/ui-kit/card-group';
import { Footer } from '@/components/ui-kit/footer';
import { NavbarFirst } from '@/components/ui-kit/navbar-first';
import { NavigationMenuSecondary } from '@/components/ui-kit/navigation-menu';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="w-full">
      <NavbarFirst />
      <div className="flex w-full items-center">
        <span className="ps-10">
          <Image src="/logo.svg" alt="fd" width={400} height={100} />
        </span>
        <div className="flex justify-center w-full h-20">
          <NavigationMenuSecondary />
        </div>
      </div>
      <section className="bg-gray-100 py-9">
        <div className="flex justify-center gap-4 p-4 flex-col lg:flex-row">
          <Image
            src="/home-hero.webp"
            alt="home-hero"
            width={1200}
            height={1200}
          />
          <div className="flex flex-col gap-4 p-3">
            <h1 className="text-2xl">
              Inspiring Care, Comfort, and Change in our Communities
            </h1>
            <p>
              Standard Textile is a global manufacturer and provider of reusable
              textiles used in healthcare, hospitality, education, and our
              homes.
            </p>
            <p>
              From intelligent fiber technology to advanced product design, to
              patented weaving processes, to laundry solutions, Standard Textile
              takes a holistic approach to sustainability.
            </p>
            <p>
              We’re committed to providing a more viable alternative to
              disposables.
            </p>
            <Button variant="outline" className="w-64 border-black bg-gray-100">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-4xl text-center h-24 flex items-center justify-center">
          We hold ourselves to a higher standard.
        </h1>
      </section>
      {/* card groups */}
      <section>
        <CardGroup />
      </section>
      <Footer />
    </main>
  );
}
