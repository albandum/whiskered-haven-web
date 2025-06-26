
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { cats } from "@/data/cats";
import { Heart, Calendar, Search } from "lucide-react";

const CatsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [ageFilter, setAgeFilter] = useState("all");
  const [personalityFilter, setPersonalityFilter] = useState("all");

  const filteredCats = useMemo(() => {
    return cats.filter((cat) => {
      const matchesSearch = cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           cat.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           cat.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesAge = ageFilter === "all" || 
                        (ageFilter === "kitten" && parseInt(cat.age) < 2) ||
                        (ageFilter === "adult" && parseInt(cat.age) >= 2 && parseInt(cat.age) < 7) ||
                        (ageFilter === "senior" && parseInt(cat.age) >= 7);
      
      const matchesPersonality = personalityFilter === "all" ||
                                cat.personality.some(trait => 
                                  trait.toLowerCase().includes(personalityFilter.toLowerCase())
                                );
      
      return matchesSearch && matchesAge && matchesPersonality;
    });
  }, [searchTerm, ageFilter, personalityFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Navigation />
      
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Available Cats</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through our wonderful cats looking for their forever homes. Each one has been lovingly cared for and is ready to bring joy to your family.
            </p>
          </div>

          {/* Filters */}
          <Card className="mb-8 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search cats..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-pink-200 focus:border-pink-400"
                  />
                </div>
                <Select value={ageFilter} onValueChange={setAgeFilter}>
                  <SelectTrigger className="border-pink-200 focus:border-pink-400">
                    <SelectValue placeholder="Age" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ages</SelectItem>
                    <SelectItem value="kitten">Kittens (Under 2)</SelectItem>
                    <SelectItem value="adult">Adults (2-6 years)</SelectItem>
                    <SelectItem value="senior">Seniors (7+ years)</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={personalityFilter} onValueChange={setPersonalityFilter}>
                  <SelectTrigger className="border-pink-200 focus:border-pink-400">
                    <SelectValue placeholder="Personality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Personalities</SelectItem>
                    <SelectItem value="playful">Playful</SelectItem>
                    <SelectItem value="calm">Calm</SelectItem>
                    <SelectItem value="social">Social</SelectItem>
                    <SelectItem value="gentle">Gentle</SelectItem>
                    <SelectItem value="energetic">Energetic</SelectItem>
                  </SelectContent>
                </Select>
                <div className="text-center md:text-left">
                  <span className="text-gray-600 font-medium">
                    {filteredCats.length} cat{filteredCats.length !== 1 ? 's' : ''} found
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCats.map((cat) => (
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
                  {cat.specialNeeds.length > 0 && (
                    <div className="absolute top-4 left-4 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Special Needs
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{cat.name}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{cat.age} • {cat.gender} • {cat.breed}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {cat.personality.slice(0, 3).map((trait) => (
                        <span
                          key={trait}
                          className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">{cat.description}</p>
                  <div className="space-y-2">
                    <Button asChild className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full">
                      <Link to={`/cat/${cat.id}`}>Meet {cat.name}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCats.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🐱</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No cats found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search criteria to see more cats.</p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setAgeFilter("all");
                  setPersonalityFilter("all");
                }}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full"
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

export default CatsList;
