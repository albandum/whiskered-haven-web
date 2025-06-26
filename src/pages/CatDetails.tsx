
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { cats } from "@/data/cats";
import { ArrowLeft, Calendar, Heart, CheckCircle, Users, Home as HomeIcon, AlertCircle } from "lucide-react";

const CatDetails = () => {
  const { id } = useParams();
  const cat = cats.find((c) => c.id === id);

  if (!cat) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <Navigation />
        <div className="py-20 px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Cat Not Found</h1>
          <p className="text-gray-600 mb-8">The cat you're looking for doesn't exist.</p>
          <Link to="/cats">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full">
              Back to All Cats
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Navigation />
      
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link to="/cats" className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-6 font-medium">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Cats
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Images */}
            <div className="lg:col-span-2">
              <Card className="bg-white border-0 shadow-lg overflow-hidden mb-6">
                <div className="relative">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-lg font-bold">
                    ${cat.adoptionFee}
                  </div>
                </div>
              </Card>

              {/* Gallery */}
              {cat.gallery && cat.gallery.length > 0 && (
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {cat.gallery.map((image, index) => (
                    <Card key={index} className="overflow-hidden shadow-lg">
                      <img
                        src={image}
                        alt={`${cat.name} photo ${index + 1}`}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </Card>
                  ))}
                </div>
              )}

              {/* Description */}
              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">About {cat.name}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{cat.description}</p>
                  
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">{cat.name}'s Story</h4>
                  <p className="text-gray-700 leading-relaxed">{cat.backstory}</p>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              {/* Basic Info */}
              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{cat.name}</h2>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{cat.age} • {cat.gender} • {cat.breed}</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Personality</h4>
                      <div className="flex flex-wrap gap-2">
                        {cat.personality.map((trait) => (
                          <Badge key={trait} variant="secondary" className="bg-pink-100 text-pink-700">
                            {trait}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Good With</h4>
                      <div className="space-y-1">
                        {cat.goodWith.map((item) => (
                          <div key={item} className="flex items-center text-gray-600">
                            <Users className="h-4 w-4 mr-2 text-green-500" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    {cat.specialNeeds.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-2 text-blue-500" />
                          Special Considerations
                        </h4>
                        <div className="space-y-1">
                          {cat.specialNeeds.map((need) => (
                            <div key={need} className="text-gray-600 text-sm bg-blue-50 p-2 rounded">
                              {need}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Medical Info */}
              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Medical Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">
                        {cat.isSpayedNeutered ? "Spayed/Neutered" : "Not Spayed/Neutered"}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">
                        {cat.isVaccinated ? "Up to date on vaccinations" : "Needs vaccinations"}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">
                        {cat.isMicrochipped ? "Microchipped" : "Not microchipped"}
                      </span>
                    </div>
                    {cat.medicalNotes && (
                      <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                        <h4 className="font-medium text-gray-800 mb-1">Medical Notes:</h4>
                        <p className="text-sm text-gray-700">{cat.medicalNotes}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Adoption CTA */}
              <Card className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Heart className="h-12 w-12 mx-auto mb-4 text-white" />
                  <h3 className="text-2xl font-bold mb-2">Ready to Adopt {cat.name}?</h3>
                  <p className="mb-6 opacity-90">Give {cat.name} the loving home they deserve!</p>
                  <div className="space-y-3">
                    <Button asChild className="w-full bg-white text-pink-600 hover:bg-gray-100 font-semibold">
                      <Link to="/contact">Start Adoption Process</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full border-white text-white hover:bg-white/10">
                      <Link to="/about">Learn About Our Process</Link>
                    </Button>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-white/20 text-sm opacity-90">
                    <div className="flex items-center justify-center">
                      <HomeIcon className="h-4 w-4 mr-2" />
                      With us since {new Date(cat.dateArrived).toLocaleDateString()}
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

export default CatDetails;
