import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Upload, Eye, Image as ImageIcon, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ExtractDataPage = () => {
  const [stegoImage, setStegoImage] = useState(null);
  const [extractedMessage, setExtractedMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  const { toast } = useToast();

  const handleImageUpload = (event) => {
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
        setStegoImage(reader.result);
        setExtractedMessage(""); // Reset previous message
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateExtraction = () => {
    setIsProcessing(true);
    setProcessingProgress(0);
    
    const interval = setInterval(() => {
      setProcessingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          // Simulate successful extraction
          setExtractedMessage("This is a secret message that was hidden in the image! 🔐\n\nSteganography allows us to hide data within digital images without visibly altering them. This technology has applications in secure communications, digital watermarking, and copyright protection.");
          toast({
            title: "Success!",
            description: "Hidden message extracted successfully.",
          });
          return 100;
        }
        return prev + 12;
      });
    }, 150);
  };

  const handleExtractMessage = () => {
    if (!stegoImage) {
      toast({
        title: "No Image",
        description: "Please upload a steganographic image first.",
        variant: "destructive",
      });
      return;
    }
    simulateExtraction();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(extractedMessage);
    toast({
      title: "Copied!",
      description: "Message copied to clipboard.",
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold gradient-text-primary">Extract Hidden Data</h1>
        <p className="text-muted-foreground">
          Upload a steganographic image to reveal the hidden message
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Upload Section */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Upload className="h-5 w-5 text-primary" />
              <span>Steganographic Image</span>
            </CardTitle>
            <CardDescription>
              Upload a PNG image containing hidden data
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="upload-zone">
              <input
                type="file"
                accept=".png"
                onChange={handleImageUpload}
                className="hidden"
                id="stego-upload"
              />
              <label htmlFor="stego-upload" className="cursor-pointer">
                {stegoImage ? (
                  <div className="space-y-4">
                    <img 
                      src={stegoImage} 
                      alt="Steganographic" 
                      className="max-h-64 mx-auto rounded-lg shadow-card"
                    />
                    <p className="text-sm text-muted-foreground">Click to change image</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <ImageIcon className="h-16 w-16 mx-auto text-muted-foreground" />
                    <div>
                      <p className="text-lg font-medium">Upload Steganographic Image</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        PNG files only • Click to browse or drag and drop
                      </p>
                    </div>
                  </div>
                )}
              </label>
            </div>

            <Button
              onClick={handleExtractMessage}
              disabled={!stegoImage || isProcessing}
              className="btn-gradient-primary w-full"
              size="lg"
            >
              <Eye className="h-4 w-4 mr-2" />
              {isProcessing ? "Extracting..." : "Extract Hidden Message"}
            </Button>

            {isProcessing && (
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Analyzing image...</span>
                  <span>{processingProgress}%</span>
                </div>
                <Progress value={processingProgress} className="h-2" />
                <p className="text-xs text-muted-foreground text-center">
                  Decoding steganographic data from image pixels
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Eye className="h-5 w-5 text-accent" />
              <span>Extracted Message</span>
            </CardTitle>
            <CardDescription>
              The hidden message recovered from the image
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {extractedMessage ? (
              <div className="space-y-4">
                <div className="relative">
                  <Textarea
                    value={extractedMessage}
                    readOnly
                    rows={8}
                    className="resize-none bg-muted/50 border-accent/20"
                  />
                  <Button
                    onClick={copyToClipboard}
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 h-8 w-8 p-0"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{extractedMessage.length} characters extracted</span>
                  <Button onClick={copyToClipboard} variant="outline" size="sm">
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Message
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Eye className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">
                  Upload a steganographic image and click extract to reveal hidden messages
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Info Section */}
      <Card className="card-elegant">
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <Upload className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold">1. Upload Image</h3>
              <p className="text-sm text-muted-foreground">
                Select a PNG image containing hidden steganographic data
              </p>
            </div>
            <div className="space-y-2">
              <Eye className="h-8 w-8 text-accent mx-auto" />
              <h3 className="font-semibold">2. Extract Data</h3>
              <p className="text-sm text-muted-foreground">
                Our algorithm analyzes pixels to recover embedded messages
              </p>
            </div>
            <div className="space-y-2">
              <Copy className="h-8 w-8 text-secondary mx-auto" />
              <h3 className="font-semibold">3. Copy Message</h3>
              <p className="text-sm text-muted-foreground">
                View and copy the extracted hidden message for use
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExtractDataPage;