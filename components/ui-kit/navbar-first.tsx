import { Button } from '../ui/button';

export const NavbarFirst = () => {
  return (
    <nav className="h-full p-4 bg-black text-white  text-sm w-full flex justify-between items-center">
      <div>
        Modern Alternative to Messy Bed Skirts!
        <span className="underline ps-2">Learn More</span>
      </div>
      <Button className="flex justify-end" size="lg" variant="destructive">
        CONTACT US
      </Button>
    </nav>
  );
};
