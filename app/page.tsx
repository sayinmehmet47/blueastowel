import { Blog } from '@/components/ui-kit/card-group';
import { Footer } from '@/components/ui-kit/footer';
import { NavbarFirst } from '@/components/ui-kit/navbar-first';
import { NavigationMenuSecondary } from '@/components/ui-kit/navigation-menu';
import { ProductCarousel } from '@/components/ui-kit/product-carousel';
import { Testimonial } from '@/components/ui-kit/testimonial';

export default function Home() {
  return (
    <main className="w-full">
      <NavbarFirst />
      <section className="bg-gray-100 py-9">
        <div className="flex justify-center">
          <ProductCarousel />
        </div>
      </section>
      <Blog />
      <Testimonial />
      <Footer />
    </main>
  );
}
