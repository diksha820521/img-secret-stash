import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EyeOff, Eye, Shield, Lock } from "lucide-react";

const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center space-y-8 py-8 sm:py-12">
        <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/10 animate-float">
          <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold gradient-text-primary leading-tight">
          SteganoCrypt
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
          Hide secret data inside image pixels using plain domain steganography. 
          Secure your information with invisible encryption that preserves image quality.
        </p>
      </div>

      {/* Action Cards */}
      <div className="grid gap-8 md:grid-cols-2 pb-8">
        <Card className="card-elegant group hover:shadow-glow transition-all duration-500">
          <CardHeader className="space-y-4 p-6 sm:p-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <EyeOff className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl sm:text-2xl">Hide Data</CardTitle>
                <CardDescription className="mt-2">
                  Embed secret messages into images
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 p-6 sm:p-8 pt-0">
            <p className="text-muted-foreground leading-relaxed">
              Upload an image and secret message to create a steganographic image 
              that looks identical but contains hidden data.
            </p>
            <Button asChild className="btn-gradient-primary w-full h-12">
              <Link to="/hide" className="flex items-center justify-center space-x-2">
                <Lock className="h-4 w-4" />
                <span>Start Hiding Data</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="card-elegant group hover:shadow-glow transition-all duration-500">
          <CardHeader className="space-y-4 p-6 sm:p-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <Eye className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
              </div>
              <div>
                <CardTitle className="text-xl sm:text-2xl">Extract Data</CardTitle>
                <CardDescription className="mt-2">
                  Reveal hidden messages from images
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 p-6 sm:p-8 pt-0">
            <p className="text-muted-foreground leading-relaxed">
              Upload a steganographic image to extract and decode the hidden 
              secret message embedded within.
            </p>
            <Button asChild variant="secondary" className="w-full h-12">
              <Link to="/extract" className="flex items-center justify-center space-x-2">
                <Eye className="h-4 w-4" />
                <span>Extract Hidden Data</span>
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Features Section */}
      <Card className="card-elegant mb-12">
        <CardHeader className="p-6 sm:p-8">
          <CardTitle className="text-center text-2xl sm:text-3xl">Why Choose SteganoCrypt?</CardTitle>
        </CardHeader>
        <CardContent className="p-6 sm:p-8 pt-0">
          <div className="grid gap-8 sm:gap-12 md:grid-cols-3 text-center">
            <div className="space-y-4">
              <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto" />
              <h3 className="font-semibold text-lg">Secure Encryption</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Military-grade steganography ensures your data remains undetectable
              </p>
            </div>
            <div className="space-y-4">
              <Eye className="h-10 w-10 sm:h-12 sm:w-12 text-accent mx-auto" />
              <h3 className="font-semibold text-lg">Quality Preservation</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Advanced algorithms maintain original image quality and appearance
              </p>
            </div>
            <div className="space-y-4">
              <Lock className="h-10 w-10 sm:h-12 sm:w-12 text-secondary mx-auto" />
              <h3 className="font-semibold text-lg">Privacy Focused</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                All processing happens locally - your data never leaves your device
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;