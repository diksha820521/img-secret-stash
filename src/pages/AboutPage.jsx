import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Lock, Zap, Globe, Users } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-6 py-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text-primary">About Plain Domain Steganography</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Understanding the technology behind invisible data hiding in digital images
        </p>
      </div>

      {/* What is Steganography */}
      <Card className="card-elegant">
        <CardHeader className="p-6 sm:p-8">
          <CardTitle className="flex items-center space-x-3 text-xl sm:text-2xl">
            <Shield className="h-7 w-7 text-primary" />
            <span>What is Plain Domain Steganography?</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-6 sm:p-8 pt-0">
          <p className="text-muted-foreground leading-relaxed text-base">
            Plain domain steganography is a technique for hiding secret information directly within the pixel values 
            of digital images. Unlike other steganographic methods that work in transform domains (like DCT or DWT), 
            plain domain techniques manipulate the raw pixel data of images.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base">
            The most common approach is <strong>Least Significant Bit (LSB) substitution</strong>, where the least 
            significant bits of pixel color channels are replaced with bits from the secret message. Since these 
            changes are minimal, they are virtually imperceptible to the human eye while preserving the secret data.
          </p>
        </CardContent>
      </Card>

      {/* How It Works */}
      <Card className="card-elegant">
        <CardHeader className="p-6 sm:p-8">
          <CardTitle className="flex items-center space-x-3 text-xl sm:text-2xl">
            <Eye className="h-7 w-7 text-accent" />
            <span>How It Works</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 sm:p-8 pt-0">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h3 className="font-semibold text-primary text-lg">Data Hiding Process</h3>
              <ol className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <Badge variant="outline" className="min-w-[28px] h-7 text-sm flex items-center justify-center">1</Badge>
                  <span>Convert secret message to binary format</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Badge variant="outline" className="min-w-[28px] h-7 text-sm flex items-center justify-center">2</Badge>
                  <span>Select pixel locations for embedding</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Badge variant="outline" className="min-w-[28px] h-7 text-sm flex items-center justify-center">3</Badge>
                  <span>Replace LSBs with message bits</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Badge variant="outline" className="min-w-[28px] h-7 text-sm flex items-center justify-center">4</Badge>
                  <span>Generate steganographic image</span>
                </li>
              </ol>
            </div>
            <div className="space-y-6">
              <h3 className="font-semibold text-accent text-lg">Data Extraction Process</h3>
              <ol className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <Badge variant="outline" className="min-w-[28px] h-7 text-sm flex items-center justify-center">1</Badge>
                  <span>Identify embedded pixel locations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Badge variant="outline" className="min-w-[28px] h-7 text-sm flex items-center justify-center">2</Badge>
                  <span>Extract LSBs from pixels</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Badge variant="outline" className="min-w-[28px] h-7 text-sm flex items-center justify-center">3</Badge>
                  <span>Reconstruct binary message</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Badge variant="outline" className="min-w-[28px] h-7 text-sm flex items-center justify-center">4</Badge>
                  <span>Convert back to readable text</span>
                </li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Applications */}
      <Card className="card-elegant">
        <CardHeader className="p-6 sm:p-8">
          <CardTitle className="flex items-center space-x-3 text-xl sm:text-2xl">
            <Globe className="h-7 w-7 text-secondary" />
            <span>Applications & Use Cases</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 sm:p-8 pt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4 p-6 rounded-lg bg-muted/30">
              <Lock className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-lg">Secure Communication</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Send confidential messages through public channels without detection
              </p>
            </div>
            <div className="space-y-4 p-6 rounded-lg bg-muted/30">
              <Shield className="h-8 w-8 text-accent" />
              <h3 className="font-semibold text-lg">Digital Watermarking</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Embed copyright information and ownership data in images
              </p>
            </div>
            <div className="space-y-4 p-6 rounded-lg bg-muted/30 sm:col-span-2 lg:col-span-1">
              <Users className="h-8 w-8 text-secondary" />
              <h3 className="font-semibold text-lg">Privacy Protection</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Hide sensitive personal data within ordinary-looking images
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technical Details */}
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="card-elegant">
          <CardHeader className="p-6 sm:p-8">
            <CardTitle className="flex items-center space-x-3 text-lg">
              <Zap className="h-6 w-6 text-primary" />
              <span>Advantages</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 sm:p-8 pt-0">
            <ul className="space-y-4 text-sm sm:text-base text-muted-foreground">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span>Simple implementation</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span>High embedding capacity</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span>Minimal computational overhead</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span>Preserves image quality</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span>Works with various image formats</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardHeader className="p-6 sm:p-8">
            <CardTitle className="flex items-center space-x-3 text-lg">
              <Eye className="h-6 w-6 text-destructive" />
              <span>Limitations</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 sm:p-8 pt-0">
            <ul className="space-y-4 text-sm sm:text-base text-muted-foreground">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-destructive flex-shrink-0" />
                <span>Vulnerable to statistical attacks</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-destructive flex-shrink-0" />
                <span>Sensitive to image compression</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-destructive flex-shrink-0" />
                <span>May introduce visual artifacts</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-destructive flex-shrink-0" />
                <span>Limited robustness to modifications</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-destructive flex-shrink-0" />
                <span>Requires lossless image format</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Quality Metrics */}
      <Card className="card-elegant">
        <CardHeader className="p-6 sm:p-8">
          <CardTitle className="text-xl sm:text-2xl">Quality Assessment Metrics</CardTitle>
          <CardDescription className="mt-2 text-base">
            Understanding PSNR and SSIM values for steganographic images
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 p-6 sm:p-8 pt-0">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-semibold text-primary text-lg">PSNR (Peak Signal-to-Noise Ratio)</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Measures the ratio between maximum signal power and noise power. Higher PSNR values 
                indicate better image quality preservation.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span>Excellent:</span>
                  <Badge variant="secondary" className="text-sm">&gt; 40 dB</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Good:</span>
                  <Badge variant="outline" className="text-sm">30-40 dB</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Acceptable:</span>
                  <Badge variant="outline" className="text-sm">20-30 dB</Badge>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-accent text-lg">SSIM (Structural Similarity Index)</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Measures structural similarity between original and steganographic images. 
                Values closer to 1.0 indicate higher structural preservation.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span>Excellent:</span>
                  <Badge variant="secondary" className="text-sm">&gt; 0.95</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Good:</span>
                  <Badge variant="outline" className="text-sm">0.85-0.95</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Acceptable:</span>
                  <Badge variant="outline" className="text-sm">0.70-0.85</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;