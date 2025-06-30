
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FeaturedCourses from "@/components/FeaturedCourses";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 tracking-tight">
              Master
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                Cybersecurity
              </span>
              <span className="text-3xl md:text-4xl font-normal text-gray-600">with Expert Training</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advance your career with industry-leading cybersecurity courses. Learn from experts, earn certifications, and build the skills to protect organizations from evolving threats.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/courses">Browse Courses</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">10+</h3>
                <p className="text-gray-600">Specialized Courses</p>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">2500+</h3>
                <p className="text-gray-600">Students Trained</p>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">95%</h3>
                <p className="text-gray-600">Certification Rate</p>
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
            At CyberSecure Academy, we bridge the cybersecurity skills gap by providing world-class training 
            that prepares professionals for real-world challenges. Our comprehensive curriculum, expert instructors, 
            and hands-on labs ensure you gain practical skills that employers value. Whether you're starting your 
            cybersecurity journey or advancing your expertise, we have the courses to accelerate your career.
          </p>
          <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold">
            <Link to="/about">Learn About Our Approach</Link>
          </Button>
        </div>
      </section>

      {/* Featured Courses */}
      <FeaturedCourses />

      <Footer />
    </div>
  );
};

export default Index;
