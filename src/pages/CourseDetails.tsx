
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { courses } from "@/data/courses";
import { ArrowLeft, Calendar, Shield, CheckCircle, Users, Award, AlertCircle } from "lucide-react";

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
        <Navigation />
        <div className="py-20 px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-8">The course you're looking for doesn't exist.</p>
          <Link to="/courses">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full">
              Back to All Courses
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
      <Navigation />
      
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link to="/courses" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 font-medium">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Courses
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Images */}
            <div className="lg:col-span-2">
              <Card className="bg-white border-0 shadow-lg overflow-hidden mb-6">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-lg font-bold">
                    ${course.price}
                  </div>
                  <div className="absolute top-4 left-4 bg-gray-800/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {course.level}
                  </div>
                </div>
              </Card>

              {/* Gallery */}
              {course.gallery && course.gallery.length > 0 && (
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {course.gallery.map((image, index) => (
                    <Card key={index} className="overflow-hidden shadow-lg">
                      <img
                        src={image}
                        alt={`${course.name} image ${index + 1}`}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </Card>
                  ))}
                </div>
              )}

              {/* Description */}
              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Course Overview</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{course.description}</p>
                  
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Course Syllabus</h4>
                  <p className="text-gray-700 leading-relaxed">{course.syllabus}</p>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              {/* Basic Info */}
              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{course.name}</h2>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{course.duration} • {course.instructor}</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Specialties</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.specialty.map((spec) => (
                          <Badge key={spec} variant="secondary" className="bg-blue-100 text-blue-700">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Prerequisites</h4>
                      <div className="space-y-1">
                        {course.prerequisites.length > 0 ? (
                          course.prerequisites.map((prereq) => (
                            <div key={prereq} className="flex items-center text-gray-600">
                              <Users className="h-4 w-4 mr-2 text-orange-500" />
                              {prereq}
                            </div>
                          ))
                        ) : (
                          <div className="flex items-center text-gray-600">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                            No prerequisites required
                          </div>
                        )}
                      </div>
                    </div>

                    {course.courseNotes && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-2 text-blue-500" />
                          Course Notes
                        </h4>
                        <div className="text-gray-600 text-sm bg-blue-50 p-2 rounded">
                          {course.courseNotes}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Course Features */}
              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Course Features</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">
                        {course.isAccredited ? "Accredited Course" : "Non-Accredited Course"}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">
                        {course.includesLabs ? "Hands-on Labs Included" : "Theory-Based Learning"}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">
                        {course.includesSupport ? "Instructor Support Included" : "Self-Paced Learning"}
                      </span>
                    </div>
                    {course.certification && (
                      <div className="mt-4 p-3 bg-green-50 rounded-lg">
                        <h4 className="font-medium text-gray-800 mb-1 flex items-center">
                          <Award className="h-4 w-4 mr-2 text-green-600" />
                          Certification:
                        </h4>
                        <p className="text-sm text-gray-700">{course.certification}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Enrollment CTA */}
              <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 mx-auto mb-4 text-white" />
                  <h3 className="text-2xl font-bold mb-2">Ready to Enroll?</h3>
                  <p className="mb-6 opacity-90">Start your cybersecurity journey with {course.name}!</p>
                  <div className="space-y-3">
                    <Button asChild className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                      <Link to="/contact">Enroll Now</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full border-white text-white hover:bg-white/10">
                      <Link to="/about">Learn About Our Program</Link>
                    </Button>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-white/20 text-sm opacity-90">
                    <div className="flex items-center justify-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Added {new Date(course.dateAdded).toLocaleDateString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseDetails;
