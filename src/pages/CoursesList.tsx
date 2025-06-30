
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { courses } from "@/data/courses";
import { Shield, Calendar, Search } from "lucide-react";

const CoursesList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [levelFilter, setLevelFilter] = useState("all");
  const [specialtyFilter, setSpecialtyFilter] = useState("all");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesLevel = levelFilter === "all" || course.level === levelFilter;
      
      const matchesSpecialty = specialtyFilter === "all" ||
                              course.specialty.some(spec => 
                                spec.toLowerCase().includes(specialtyFilter.toLowerCase())
                              );
      
      return matchesSearch && matchesLevel && matchesSpecialty;
    });
  }, [searchTerm, levelFilter, specialtyFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
      <Navigation />
      
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Cybersecurity Courses</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive selection of cybersecurity courses designed by industry experts. Build the skills you need to advance your career.
            </p>
          </div>

          {/* Filters */}
          <Card className="mb-8 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-blue-200 focus:border-blue-400"
                  />
                </div>
                <Select value={levelFilter} onValueChange={setLevelFilter}>
                  <SelectTrigger className="border-blue-200 focus:border-blue-400">
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                    <SelectItem value="Expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={specialtyFilter} onValueChange={setSpecialtyFilter}>
                  <SelectTrigger className="border-blue-200 focus:border-blue-400">
                    <SelectValue placeholder="Specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Specialties</SelectItem>
                    <SelectItem value="penetration">Penetration Testing</SelectItem>
                    <SelectItem value="network">Network Security</SelectItem>
                    <SelectItem value="incident">Incident Response</SelectItem>
                    <SelectItem value="cloud">Cloud Security</SelectItem>
                    <SelectItem value="forensics">Digital Forensics</SelectItem>
                  </SelectContent>
                </Select>
                <div className="text-center md:text-left">
                  <span className="text-gray-600 font-medium">
                    {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} found
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Courses Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Shield className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ${course.price}
                  </div>
                  <div className="absolute top-4 left-4 bg-gray-800/80 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {course.level}
                  </div>
                  {course.certification && (
                    <div className="absolute bottom-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Certification
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{course.name}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{course.duration} • {course.instructor}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {course.specialty.slice(0, 3).map((spec) => (
                        <span
                          key={spec}
                          className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">{course.description}</p>
                  <div className="space-y-2">
                    <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full">
                      <Link to={`/course/${course.id}`}>View Course Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No courses found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search criteria to see more courses.</p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setLevelFilter("all");
                  setSpecialtyFilter("all");
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CoursesList;
