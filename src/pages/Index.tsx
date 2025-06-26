
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Home as HomeIcon } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FeaturedCats from "@/components/FeaturedCats";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 tracking-tight">
              Welcome to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                Whiskers Haven
              </span>
              <span className="text-3xl md:text-4xl font-normal text-gray-600">Cat Rescue</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every whisker tells a story, every purr holds a promise. We're dedicated to finding loving forever homes for cats in need, one heart at a time.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/cats">Meet Our Cats</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300">
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">500+</h3>
                <p className="text-gray-600">Cats Rescued</p>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">450+</h3>
                <p className="text-gray-600">Happy Adoptions</p>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <HomeIcon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">15</h3>
                <p className="text-gray-600">Years of Service</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At Whiskers Haven Cat Rescue, we believe every cat deserves a chance at happiness. 
            We rescue, rehabilitate, and rehome cats from all walks of life, providing them with 
            medical care, love, and patience while they wait for their perfect match. Our dedicated 
            team works tirelessly to ensure each feline friend finds not just a house, but a true home.
          </p>
          <Button asChild className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold">
            <Link to="/about">Read Our Full Story</Link>
          </Button>
        </div>
      </section>

      {/* Featured Cats */}
      <FeaturedCats />

      <Footer />
    </div>
  );
};

export default Index;
