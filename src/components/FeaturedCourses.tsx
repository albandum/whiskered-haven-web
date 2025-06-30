
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/courses";
import { Shield, Calendar } from "lucide-react";

const FeaturedCourses = () => {
  // Get 3 featured courses for the homepage
  const featuredCourses = courses.slice(0, 3);

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Cybersecurity Courses</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advance your cybersecurity career with our expert-led courses. From beginner fundamentals to advanced specializations, we have the training you need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredCourses.map((course) => (
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
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{course.name}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{course.duration} • {course.instructor}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {course.specialty.slice(0, 2).map((spec) => (
                      <span
                        key={spec}
                        className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">{course.description}</p>
                <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full">
                  <Link to={`/course/${course.id}`}>View Course Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-semibold">
            <Link to="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
