import { ProductCarousel } from '@/components/ui-kit/product-carousel';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import '../components/ui/corousel/embla.css';
import MenuBar from '@/components/ui-kit/menu-bar';

export default function Home() {
  return (
    <main className="w-full">
      <div className="relative flex h-[520px] w-full items-center justify-center text-center ">
        <Image src="/hero.png" alt="image" layout="fill" objectFit="cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <Link href="/" className="absolute top-1 -left-12 md:left-1">
          <Image
            src="/logoblueastowel.svg"
            alt="Logo"
            width={250}
            height={100}
            className="text-red-100"
          />
        </Link>
        <MenuBar headerClassName="absolute top-28 md:top-12" />
        <div className="absolute md:text-6xl gap-5 flex flex-col text-white">
          <h1 className="text-6xl md:text-7xl">elevate your quality</h1>
          <h2 className="text-base md:text-xl">
            TRANSFORM YOUR HOTEL OR VILLA INTO A DISTINCTIVE BRAND THAT CAPTURES
            HEARTS AND MINDS
          </h2>
        </div>
      </div>
      <section className="flex p-8 gap-12 md:gap-36 text-sky-900">
        <div className="flex-auto md:w-36 w-full">
          WHETHER FOR HERMÈS OR MISSONI AFICIONADOS, THE NEWEST URBAN RETREAT IN
          TOWN DRAWS A VOGUISH CROWD WITH ITS UNIQUE DESIGN DWELLINGS ON THE
          BANKS OF THE DOURO RIVER.
        </div>
        <div className="flex-auto w-36 gap-3 flex flex-col">
          <div className="flex flex-col gap-3">
            <Button variant="secondary">
              <div className="flex gap-3 items-center">
                <span>COLLECTION</span>
                <ArrowRight />
              </div>
            </Button>
            <Button variant="secondary">
              <Link href="/beach-towel-designs">
                <div className="flex gap-3 items-center">
                  <span>ROUNDED BEACH TOWELS</span>
                  <ArrowRight />
                </div>
              </Link>
            </Button>
            <Button variant="secondary">
              <Link href="/references">
                <div className="flex gap-3 items-center">
                  <span>OUR WORKS</span>
                  <ArrowRight />
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="text-sky-900 flex justify-center md:justify-end mt-12">
        <h1 className="w-80">
          Fashionistas can opt for one of the signature rooms, each inspired by
          an iconic maison: Kenzo, Etro, Ralph Lauren, Missoni, Hermès, Manuel
          Canovas, Pierre Frey or Christian Lacroix.
        </h1>
      </section>
      <section className="m-16">
        <ProductCarousel />
      </section>
      <section className="p-8">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-4xl text-sky-900">
              Whether
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-4xl text-sky-900">
              Cotton
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>{' '}
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-4xl text-sky-900">
              Textures
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-4xl text-sky-900">
              Collection
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-4xl text-sky-900">
              Deluxe Room
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
