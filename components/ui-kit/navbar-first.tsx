import { Button } from '../ui/button';

export const NavbarFirst = () => {
  return (
    <nav className="h-full p-4 bg-black text-white text-sm w-full md:flex justify-between items-center">
      <div>
        Modern Alternative to Messy Bed Skirts!
        <span className="underline ps-2">Learn More</span>
      </div>
      <Button
        className="flex justify-end my-4 md:my-0"
        size="lg"
        variant="destructive"
      >
        CONTACT US
      </Button>
    </nav>
  );
};
