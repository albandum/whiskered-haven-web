
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Navigation />
      
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Touch</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about adoption, volunteering, or our cats? We'd love to hear from you! 
              Our team is here to help make your cat adoption journey as smooth as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          className="border-pink-200 focus:border-pink-400"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          className="border-pink-200 focus:border-pink-400"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className="border-pink-200 focus:border-pink-400"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Inquiry Type *
                        </label>
                        <Select value={formData.inquiryType} onValueChange={(value) => handleChange("inquiryType", value)}>
                          <SelectTrigger className="border-pink-200 focus:border-pink-400">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="adoption">Cat Adoption</SelectItem>
                            <SelectItem value="volunteer">Volunteering</SelectItem>
                            <SelectItem value="donation">Donations</SelectItem>
                            <SelectItem value="surrender">Cat Surrender</SelectItem>
                            <SelectItem value="general">General Question</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        required
                        value={formData.subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                        className="border-pink-200 focus:border-pink-400"
                        placeholder="Brief subject of your message"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className="border-pink-200 focus:border-pink-400 h-32"
                        placeholder="Tell us more about your inquiry. If you're interested in a specific cat, please mention their name!"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Hours */}
            <div className="space-y-6">
              {/* Contact Information */}
              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">Address</p>
                        <p className="text-gray-600 text-sm">
                          123 Whiskers Lane<br />
                          Catville, CV 12345
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">Phone</p>
                        <p className="text-gray-600 text-sm">(555) 123-CATS</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">Email</p>
                        <p className="text-gray-600 text-sm">info@whiskershaven.org</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hours */}
              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-5 w-5 text-purple-500 mr-2" />
                    <h3 className="text-xl font-bold text-gray-800">Visiting Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium text-gray-800">12:00 PM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium text-gray-800">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium text-gray-800">12:00 PM - 5:00 PM</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-xs text-gray-600">
                      <strong>Note:</strong> We recommend calling ahead to schedule cat meet-and-greets 
                      to ensure staff availability and the best experience for you and our cats.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency */}
              <Card className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Heart className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="text-lg font-bold mb-2">Found a Stray Cat?</h3>
                  <p className="text-sm mb-4 opacity-90">
                    If you've found a cat in need of help, please call us immediately. 
                    We have resources and can guide you on next steps.
                  </p>
                  <Button className="bg-white text-pink-600 hover:bg-gray-100 font-semibold">
                    Emergency Line: (555) 123-HELP
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map placeholder */}
          <Card className="mt-12 bg-white border-0 shadow-lg overflow-hidden">
            <div className="h-64 bg-gradient-to-r from-pink-100 to-purple-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Our Shelter</h3>
                <p className="text-gray-600">123 Whiskers Lane, Catville, CV 12345</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
