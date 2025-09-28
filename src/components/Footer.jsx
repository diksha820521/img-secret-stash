import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span className="text-sm">Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span className="text-sm">by</span>
            <span className="text-sm font-semibold text-primary">DIKSHA CHAUHAN</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;