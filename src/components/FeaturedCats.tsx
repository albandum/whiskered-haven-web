
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cats } from "@/data/cats";
import { Heart, Calendar } from "lucide-react";

const FeaturedCats = () => {
  // Get 3 featured cats for the homepage
  const featuredCats = cats.slice(0, 3);

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet Some of Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Amazing Cats</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each of our cats has a unique personality and story. Here are just a few of the wonderful companions waiting for their forever homes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredCats.map((cat) => (
            <Card key={cat.id} className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <Heart className="h-5 w-5 text-pink-500" />
                </div>
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ${cat.adoptionFee}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{cat.name}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{cat.age} • {cat.breed}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {cat.personality.slice(0, 2).map((trait) => (
                      <span
                        key={trait}
                        className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">{cat.description}</p>
                <Button asChild className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full">
                  <Link to={`/cat/${cat.id}`}>Meet {cat.name}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full text-lg font-semibold">
            <Link to="/cats">View All Available Cats</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCats;
