import { cn } from '@/lib/utils';
import Image from 'next/image';

export const CardGroup = () => {
  return (
    <div
      className="
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6"
    >
      <Card
        title="View Products"
        description="Explore innovative products designed and manufactured to meet the specific needs of your market."
        imageSrc="/hospital-kid.webp"
        imageAlt="home-card-1"
      />
      <Card
        title="Shop Retail"
        description="Discover our collection of bath and bed essentials made for the finest hotels, now available for you."
        imageSrc="/woman-sleep.webp"
        imageAlt="home-card-2"
      />
      <Card
        title="Our Story"
        description="Founded in 1940, Charles Heiman created a legacy of helping others succeed. His philosophy remains with us today."
        imageSrc="/friends.webp"
        imageAlt="home-card-2"
      />
      <Card
        title="Why Standard Textile?"
        description="Over 80 years of experience gives us an in-depth understanding of the challenges you face."
        imageSrc="/textile.webp"
        imageAlt="home-card-2"
      />
    </div>
  );
};
const Card = ({
  title,
  description,
  imageSrc,
  imageAlt,
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <Image src={imageSrc} alt={imageAlt} width={400} height={300} />
      <h1 className="text-2xl">{title}</h1>
      <p>{description}</p>
      <Button variant="outline" className="w-64 border-black bg-gray-100">
        Learn More
      </Button>
    </div>
  );
};
const Button = ({
  variant,
  className,
  children,
}: {
  variant: 'outline' | 'destructive';
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-md text-sm font-medium transition-colors',
        {
          'bg-black text-white': variant === 'destructive',
          'bg-white text-black border': variant === 'outline',
        },
        className
      )}
    >
      {children}
    </button>
  );
};