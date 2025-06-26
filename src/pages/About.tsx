
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Home as HomeIcon, CheckCircle, Clock, FileText, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const adoptionSteps = [
    {
      step: 1,
      title: "Browse Our Cats",
      description: "Look through our available cats online or visit us in person to meet them.",
      icon: <Users className="h-6 w-6" />
    },
    {
      step: 2,
      title: "Submit Application",
      description: "Fill out our adoption application with information about your home and lifestyle.",
      icon: <FileText className="h-6 w-6" />
    },
    {
      step: 3,
      title: "Meet & Greet",
      description: "Schedule a visit to spend time with your chosen cat and ensure it's a good match.",
      icon: <Heart className="h-6 w-6" />
    },
    {
      step: 4,
      title: "Home Check",
      description: "We may conduct a brief home visit to ensure your space is safe and suitable.",
      icon: <HomeIcon className="h-6 w-6" />
    },
    {
      step: 5,
      title: "Finalize Adoption",
      description: "Complete the adoption paperwork and welcome your new family member home!",
      icon: <CheckCircle className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Navigation />
      
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Whiskers Haven</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For over 15 years, we've been dedicated to rescuing, rehabilitating, and rehoming cats in need. 
              Every whisker tells a story, and we're here to help write happy endings.
            </p>
          </div>

          {/* Our Story */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Whiskers Haven Cat Rescue was founded in 2009 by Sarah Mitchell, a lifelong cat lover who 
                    couldn't ignore the growing number of homeless cats in our community. What started as 
                    fostering a few cats in her home has grown into a full-scale rescue operation.
                  </p>
                  <p>
                    We operate as a no-kill shelter, meaning every cat that comes through our doors is given 
                    the time, care, and love they need to find their perfect match. We believe that every cat, 
                    regardless of age, health, or background, deserves a chance at happiness.
                  </p>
                  <p>
                    Today, our dedicated team of volunteers and staff work around the clock to rescue cats 
                    from high-kill shelters, provide medical care, behavioral support, and most importantly, 
                    find loving forever homes for each and every one of our feline friends.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Heart className="h-8 w-8 text-pink-500 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                  </div>
                  <p className="text-gray-700">
                    To rescue, rehabilitate, and rehome cats while educating our community about 
                    responsible pet ownership and the importance of spaying and neutering.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-purple-500 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-800">Our Values</h3>
                  </div>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Compassionate care for every cat</li>
                    <li>• No-kill philosophy</li>
                    <li>• Transparent adoption process</li>
                    <li>• Community education and support</li>
                    <li>• Lifetime commitment to our cats</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Adoption Process */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Adoption Process</span>
            </h2>
            
            <div className="grid md:grid-cols-5 gap-6">
              {adoptionSteps.map((step, index) => (
                <Card key={step.step} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      {step.icon}
                    </div>
                    <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3">
                      <span className="text-sm font-bold text-gray-700">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </CardContent>
                  {index < adoptionSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 transform -translate-y-1/2"></div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg mb-16">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Adoption Requirements</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">What We Look For:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Stable living situation (own or rent with pet permission)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Financial ability to provide ongoing care</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Commitment to keeping cats indoors or in secure outdoor spaces</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Agreement to spay/neuter if not already done</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>All family members on board with adoption</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Timeline & Fees:</h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <Clock className="h-5 w-5 text-blue-500 mr-3" />
                      <div>
                        <p className="font-medium text-gray-800">Processing Time</p>
                        <p className="text-sm text-gray-600">2-5 business days</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded-lg">
                      <Calendar className="h-5 w-5 text-green-500 mr-3" />
                      <div>
                        <p className="font-medium text-gray-800">Adoption Fees</p>
                        <p className="text-sm text-gray-600">$50-175 (includes spay/neuter, vaccines, microchip)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Match?</h2>
              <p className="text-lg mb-6 opacity-90">
                Browse our available cats or get in touch to learn more about our adoption process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-pink-600 hover:bg-gray-100 font-semibold px-8">
                  <Link to="/cats">Meet Our Cats</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
