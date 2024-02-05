import { Blog } from '@/components/ui-kit/card-group';
import { ProductCarousel } from '@/components/ui-kit/product-carousel';
import { Testimonial } from '@/components/ui-kit/testimonial';

export default function Home() {
  return (
    <main className="w-full ">
      <section className="py-9">
        <div className="flex justify-center">
          <ProductCarousel />
        </div>
      </section>
      <Blog />
      <Testimonial />
    </main>
  );
}
