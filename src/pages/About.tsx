
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Award, CheckCircle, Clock, FileText, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const enrollmentSteps = [
    {
      step: 1,
      title: "Browse Our Courses",
      description: "Explore our comprehensive cybersecurity curriculum and find courses that match your goals.",
      icon: <Users className="h-6 w-6" />
    },
    {
      step: 2,
      title: "Submit Application",
      description: "Complete our enrollment application with your background and learning objectives.",
      icon: <FileText className="h-6 w-6" />
    },
    {
      step: 3,
      title: "Skills Assessment",
      description: "Take our placement assessment to ensure you're matched with the right course level.",
      icon: <Shield className="h-6 w-6" />
    },
    {
      step: 4,
      title: "Payment & Setup",
      description: "Complete payment and get access to our learning management system and labs.",
      icon: <Award className="h-6 w-6" />
    },
    {
      step: 5,
      title: "Start Learning",
      description: "Begin your cybersecurity journey with expert instruction and hands-on practice!",
      icon: <CheckCircle className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
      <Navigation />
      
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Glittery Helmet Academy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For over 10 years, we've been at the forefront of cybersecurity education, training the next generation 
              of security professionals. Every student matters, and we're committed to your success in this critical field.
            </p>
          </div>

          {/* Our Story */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Glittery Helmet Academy was founded in 2014 by Dr. Sarah Chen, a former NSA cybersecurity analyst 
                    who recognized the growing skills gap in cybersecurity. What started as weekend workshops for 
                    IT professionals has evolved into a comprehensive training academy.
                  </p>
                  <p>
                    We believe in practical, hands-on learning that prepares students for real-world challenges. 
                    Our courses combine theoretical knowledge with lab exercises, simulations, and case studies 
                    from actual security incidents.
                  </p>
                  <p>
                    Today, our expert instructors and industry partnerships provide students with cutting-edge 
                    curriculum, state-of-the-art labs, and direct pathways to cybersecurity careers. We've trained 
                    over 2,500 professionals who now protect organizations worldwide.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-blue-500 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                  </div>
                  <p className="text-gray-700">
                    To bridge the cybersecurity skills gap by providing world-class training that combines 
                    academic rigor with practical application, preparing professionals to defend against evolving threats.
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
                    <li>• Excellence in cybersecurity education</li>
                    <li>• Hands-on, practical learning approach</li>
                    <li>• Industry-relevant curriculum</li>
                    <li>• Supportive learning community</li>
                    <li>• Commitment to student success</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Enrollment Process */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Enrollment Process</span>
            </h2>
            
            <div className="grid md:grid-cols-5 gap-6">
              {enrollmentSteps.map((step, index) => (
                <Card key={step.step} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      {step.icon}
                    </div>
                    <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3">
                      <span className="text-sm font-bold text-gray-700">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </CardContent>
                  {index < enrollmentSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-y-1/2"></div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg mb-16">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Enrollment Requirements</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">What We Look For:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Basic understanding of computer networks and systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Commitment to completing coursework and assignments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Access to a computer for lab exercises and practice</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Professional interest in cybersecurity career</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Willingness to participate in hands-on labs and exercises</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Course Details:</h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <Clock className="h-5 w-5 text-blue-500 mr-3" />
                      <div>
                        <p className="font-medium text-gray-800">Course Duration</p>
                        <p className="text-sm text-gray-600">8-16 weeks (varies by course)</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded-lg">
                      <Calendar className="h-5 w-5 text-green-500 mr-3" />
                      <div>
                        <p className="font-medium text-gray-800">Course Fees</p>
                        <p className="text-sm text-gray-600">$1,200-$3,500 (includes labs, materials, certification prep)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Cybersecurity Journey?</h2>
              <p className="text-lg mb-6 opacity-90">
                Explore our courses or get in touch to learn more about our training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
                  <Link to="/courses">View Our Courses</Link>
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
