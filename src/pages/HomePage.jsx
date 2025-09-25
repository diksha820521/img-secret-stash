import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EyeOff, Eye, Shield, Lock } from "lucide-react";

const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 animate-float">
          <Shield className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold gradient-text-primary">
          SteganoCrypt
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Hide secret data inside image pixels using plain domain steganography. 
          Secure your information with invisible encryption that preserves image quality.
        </p>
      </div>

      {/* Action Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="card-elegant group hover:shadow-glow transition-all duration-500">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <EyeOff className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl">Hide Data</CardTitle>
                <CardDescription>
                  Embed secret messages into images
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Upload an image and secret message to create a steganographic image 
              that looks identical but contains hidden data.
            </p>
            <Button asChild className="btn-gradient-primary w-full">
              <Link to="/hide" className="flex items-center justify-center space-x-2">
                <Lock className="h-4 w-4" />
                <span>Start Hiding Data</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="card-elegant group hover:shadow-glow transition-all duration-500">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-accent/10">
                <Eye className="h-6 w-6 text-accent" />
              </div>
              <div>
                <CardTitle className="text-xl">Extract Data</CardTitle>
                <CardDescription>
                  Reveal hidden messages from images
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Upload a steganographic image to extract and decode the hidden 
              secret message embedded within.
            </p>
            <Button asChild variant="secondary" className="w-full">
              <Link to="/extract" className="flex items-center justify-center space-x-2">
                <Eye className="h-4 w-4" />
                <span>Extract Hidden Data</span>
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Features Section */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle className="text-center">Why Choose SteganoCrypt?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <Shield className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold">Secure Encryption</h3>
              <p className="text-sm text-muted-foreground">
                Military-grade steganography ensures your data remains undetectable
              </p>
            </div>
            <div className="space-y-2">
              <Eye className="h-8 w-8 text-accent mx-auto" />
              <h3 className="font-semibold">Quality Preservation</h3>
              <p className="text-sm text-muted-foreground">
                Advanced algorithms maintain original image quality and appearance
              </p>
            </div>
            <div className="space-y-2">
              <Lock className="h-8 w-8 text-secondary mx-auto" />
              <h3 className="font-semibold">Privacy Focused</h3>
              <p className="text-sm text-muted-foreground">
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