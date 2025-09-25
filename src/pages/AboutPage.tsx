import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Lock, Zap, Globe, Users } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold gradient-text-primary">About Plain Domain Steganography</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Understanding the technology behind invisible data hiding in digital images
        </p>
      </div>

      {/* What is Steganography */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-primary" />
            <span>What is Plain Domain Steganography?</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Plain domain steganography is a technique for hiding secret information directly within the pixel values 
            of digital images. Unlike other steganographic methods that work in transform domains (like DCT or DWT), 
            plain domain techniques manipulate the raw pixel data of images.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The most common approach is <strong>Least Significant Bit (LSB) substitution</strong>, where the least 
            significant bits of pixel color channels are replaced with bits from the secret message. Since these 
            changes are minimal, they are virtually imperceptible to the human eye while preserving the secret data.
          </p>
        </CardContent>
      </Card>

      {/* How It Works */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Eye className="h-6 w-6 text-accent" />
            <span>How It Works</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-primary">Data Hiding Process</h3>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <Badge variant="outline" className="min-w-[24px] h-6 text-xs">1</Badge>
                  <span>Convert secret message to binary format</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Badge variant="outline" className="min-w-[24px] h-6 text-xs">2</Badge>
                  <span>Select pixel locations for embedding</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Badge variant="outline" className="min-w-[24px] h-6 text-xs">3</Badge>
                  <span>Replace LSBs with message bits</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Badge variant="outline" className="min-w-[24px] h-6 text-xs">4</Badge>
                  <span>Generate steganographic image</span>
                </li>
              </ol>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-accent">Data Extraction Process</h3>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <Badge variant="outline" className="min-w-[24px] h-6 text-xs">1</Badge>
                  <span>Identify embedded pixel locations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Badge variant="outline" className="min-w-[24px] h-6 text-xs">2</Badge>
                  <span>Extract LSBs from pixels</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Badge variant="outline" className="min-w-[24px] h-6 text-xs">3</Badge>
                  <span>Reconstruct binary message</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Badge variant="outline" className="min-w-[24px] h-6 text-xs">4</Badge>
                  <span>Convert back to readable text</span>
                </li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Applications */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="h-6 w-6 text-secondary" />
            <span>Applications & Use Cases</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2 p-4 rounded-lg bg-muted/30">
              <Lock className="h-6 w-6 text-primary" />
              <h3 className="font-semibold">Secure Communication</h3>
              <p className="text-sm text-muted-foreground">
                Send confidential messages through public channels without detection
              </p>
            </div>
            <div className="space-y-2 p-4 rounded-lg bg-muted/30">
              <Shield className="h-6 w-6 text-accent" />
              <h3 className="font-semibold">Digital Watermarking</h3>
              <p className="text-sm text-muted-foreground">
                Embed copyright information and ownership data in images
              </p>
            </div>
            <div className="space-y-2 p-4 rounded-lg bg-muted/30">
              <Users className="h-6 w-6 text-secondary" />
              <h3 className="font-semibold">Privacy Protection</h3>
              <p className="text-sm text-muted-foreground">
                Hide sensitive personal data within ordinary-looking images
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technical Details */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-primary" />
              <span>Advantages</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Simple implementation</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>High embedding capacity</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Minimal computational overhead</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Preserves image quality</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Works with various image formats</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Eye className="h-5 w-5 text-destructive" />
              <span>Limitations</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-destructive" />
                <span>Vulnerable to statistical attacks</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-destructive" />
                <span>Sensitive to image compression</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-destructive" />
                <span>May introduce visual artifacts</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-destructive" />
                <span>Limited robustness to modifications</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-destructive" />
                <span>Requires lossless image format</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Quality Metrics */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Quality Assessment Metrics</CardTitle>
          <CardDescription>
            Understanding PSNR and SSIM values for steganographic images
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-primary">PSNR (Peak Signal-to-Noise Ratio)</h3>
              <p className="text-sm text-muted-foreground">
                Measures the ratio between maximum signal power and noise power. Higher PSNR values 
                indicate better image quality preservation.
              </p>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span>Excellent:</span>
                  <Badge variant="secondary">&gt; 40 dB</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Good:</span>
                  <Badge variant="outline">30-40 dB</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Acceptable:</span>
                  <Badge variant="outline">20-30 dB</Badge>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-accent">SSIM (Structural Similarity Index)</h3>
              <p className="text-sm text-muted-foreground">
                Measures structural similarity between original and steganographic images. 
                Values closer to 1.0 indicate higher structural preservation.
              </p>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span>Excellent:</span>
                  <Badge variant="secondary">&gt; 0.95</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Good:</span>
                  <Badge variant="outline">0.85-0.95</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Acceptable:</span>
                  <Badge variant="outline">0.70-0.85</Badge>
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