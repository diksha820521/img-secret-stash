import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Upload, Download, Image as ImageIcon, Lock, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const HideDataPage = () => {
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [stegoImage, setStegoImage] = useState<string | null>(null);
  const [secretMessage, setSecretMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [psnr, setPsnr] = useState<number | null>(null);
  const [ssim, setSsim] = useState<number | null>(null);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.includes("png")) {
        toast({
          title: "Invalid File Type",
          description: "Please upload a PNG image only.",
          variant: "destructive",
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setCoverImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateProcessing = () => {
    setIsProcessing(true);
    setProcessingProgress(0);
    
    const interval = setInterval(() => {
      setProcessingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          // Simulate successful processing
          setStegoImage(coverImage); // In real app, this would be processed image
          setPsnr(42.3);
          setSsim(0.987);
          toast({
            title: "Success!",
            description: "Steganographic image generated successfully.",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleGenerateStego = () => {
    if (!coverImage || !secretMessage.trim()) {
      toast({
        title: "Missing Information",
        description: "Please upload an image and enter a secret message.",
        variant: "destructive",
      });
      return;
    }
    simulateProcessing();
  };

  const handleDownload = () => {
    if (stegoImage) {
      const link = document.createElement('a');
      link.href = stegoImage;
      link.download = 'steganographic-image.png';
      link.click();
      
      toast({
        title: "Download Started",
        description: "Your steganographic image is being downloaded.",
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold gradient-text-primary">Hide Secret Data</h1>
        <p className="text-muted-foreground">
          Embed your secret message into an image using steganography
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="h-5 w-5 text-primary" />
                <span>Cover Image</span>
              </CardTitle>
              <CardDescription>Upload a PNG image to hide data in</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="upload-zone">
                <input
                  type="file"
                  accept=".png"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  {coverImage ? (
                    <div className="space-y-4">
                      <img 
                        src={coverImage} 
                        alt="Cover" 
                        className="max-h-48 mx-auto rounded-lg shadow-card"
                      />
                      <p className="text-sm text-muted-foreground">Click to change image</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <ImageIcon className="h-12 w-12 mx-auto text-muted-foreground" />
                      <div>
                        <p className="font-medium">Upload PNG Image</p>
                        <p className="text-sm text-muted-foreground">
                          Click to browse or drag and drop
                        </p>
                      </div>
                    </div>
                  )}
                </label>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="h-5 w-5 text-primary" />
                <span>Secret Message</span>
              </CardTitle>
              <CardDescription>Enter the message to hide in the image</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="secret-message">Your Secret Message</Label>
                <Textarea
                  id="secret-message"
                  placeholder="Enter your secret message here..."
                  value={secretMessage}
                  onChange={(e) => setSecretMessage(e.target.value)}
                  rows={4}
                  className="resize-none"
                />
                <p className="text-xs text-muted-foreground">
                  {secretMessage.length} characters
                </p>
              </div>

              <Button
                onClick={handleGenerateStego}
                disabled={!coverImage || !secretMessage.trim() || isProcessing}
                className="btn-gradient-primary w-full"
              >
                {isProcessing ? "Processing..." : "Generate Stego Image"}
              </Button>

              {isProcessing && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Processing...</span>
                    <span>{processingProgress}%</span>
                  </div>
                  <Progress value={processingProgress} className="h-2" />
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Output Section */}
        <div className="space-y-6">
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <ImageIcon className="h-5 w-5 text-accent" />
                <span>Steganographic Image</span>
              </CardTitle>
              <CardDescription>Your image with hidden data embedded</CardDescription>
            </CardHeader>
            <CardContent>
              {stegoImage ? (
                <div className="space-y-4">
                  <img 
                    src={stegoImage} 
                    alt="Steganographic" 
                    className="w-full rounded-lg shadow-card"
                  />
                  <Button onClick={handleDownload} className="w-full" variant="secondary">
                    <Download className="h-4 w-4 mr-2" />
                    Download Stego Image
                  </Button>
                </div>
              ) : (
                <div className="upload-zone">
                  <ImageIcon className="h-12 w-12 mx-auto text-muted-foreground" />
                  <p className="text-muted-foreground">
                    Steganographic image will appear here
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {(psnr !== null || ssim !== null) && (
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Info className="h-5 w-5 text-primary" />
                  <span>Image Quality Metrics</span>
                </CardTitle>
                <CardDescription>Quality assessment of the steganographic image</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>PSNR (Peak Signal-to-Noise Ratio)</Label>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        {psnr?.toFixed(2)} dB
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Higher is better (&gt;40 dB is excellent)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label>SSIM (Structural Similarity)</Label>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        {ssim?.toFixed(3)}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Closer to 1.0 is better
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default HideDataPage;