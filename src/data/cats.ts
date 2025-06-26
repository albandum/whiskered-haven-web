
export interface Cat {
  id: string;
  name: string;
  age: string;
  breed: string;
  gender: "Male" | "Female";
  personality: string[];
  description: string;
  backstory: string;
  goodWith: string[];
  specialNeeds: string[];
  adoptionFee: number;
  image: string;
  gallery: string[];
  medicalNotes?: string;
  isSpayedNeutered: boolean;
  isVaccinated: boolean;
  isMicrochipped: boolean;
  dateArrived: string;
}

export const cats: Cat[] = [
  {
    id: "whiskers",
    name: "Whiskers",
    age: "3 years",
    breed: "Domestic Shorthair Mix",
    gender: "Male",
    personality: ["Playful", "Curious", "Social"],
    description: "Whiskers is a charming orange tabby with the most expressive green eyes you've ever seen. He loves to play with feather toys and has an adorable habit of 'talking' to his humans with soft chirps and trills.",
    backstory: "Found as a stray kitten in a parking lot, Whiskers has blossomed into a confident and loving cat who adores attention and gentle pets behind his ears.",
    goodWith: ["Kids over 8", "Other cats", "Cat-friendly dogs"],
    specialNeeds: [],
    adoptionFee: 125,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=800&h=600&fit=crop"
    ],
    isSpayedNeutered: true,
    isVaccinated: true,
    isMicrochipped: true,
    dateArrived: "2024-01-15"
  },
  {
    id: "luna",
    name: "Luna",
    age: "2 years",
    breed: "Russian Blue Mix",
    gender: "Female",
    personality: ["Gentle", "Quiet", "Affectionate"],
    description: "Luna is a stunning silver-gray beauty with mesmerizing yellow eyes. She's the perfect lap cat who purrs like a little motor and loves nothing more than curling up for cozy nap sessions.",
    backstory: "Luna came to us when her elderly owner could no longer care for her. She's looking for a quiet home where she can be someone's devoted companion.",
    goodWith: ["Adults", "Seniors", "Quiet households"],
    specialNeeds: ["Indoor only", "Sensitive to loud noises"],
    adoptionFee: 150,
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=500&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=800&h=600&fit=crop"
    ],
    medicalNotes: "Slightly sensitive stomach - does well on high-quality food",
    isSpayedNeutered: true,
    isVaccinated: true,
    isMicrochipped: true,
    dateArrived: "2024-02-03"
  },
  {
    id: "shadow",
    name: "Shadow",
    age: "5 years",
    breed: "Black Domestic Longhair",
    gender: "Male",
    personality: ["Independent", "Loyal", "Mysterious"],
    description: "Shadow is a magnificent black cat with piercing amber eyes and a luxurious coat. He's selective with his affection but incredibly loyal to his chosen humans, often following them from room to room.",
    backstory: "Shadow lived as a barn cat before coming to us. He's learned to love indoor life but still enjoys watching birds from sunny windows.",
    goodWith: ["Adults", "Patient families", "Other cats with proper introduction"],
    specialNeeds: ["Needs time to adjust", "Prefers calm environments"],
    adoptionFee: 100,
    image: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=500&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=800&h=600&fit=crop"
    ],
    isSpayedNeutered: true,
    isVaccinated: true,
    isMicrochipped: true,
    dateArrived: "2023-11-20"
  },
  {
    id: "bella",
    name: "Bella",
    age: "1 year",
    breed: "Calico Mix",
    gender: "Female",
    personality: ["Energetic", "Playful", "Sweet"],
    description: "Bella is a beautiful calico kitten with patches of orange, black, and white. She's full of kitten energy and loves interactive toys, climbing cat trees, and playing with anything that moves!",
    backstory: "Bella was born to a stray mother cat who was rescued while pregnant. She's been socialized from birth and is ready to bring joy and laughter to her new family.",
    goodWith: ["Kids", "Other young cats", "Active families"],
    specialNeeds: [],
    adoptionFee: 175,
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800&h=600&fit=crop"
    ],
    isSpayedNeutered: true,
    isVaccinated: true,
    isMicrochipped: true,
    dateArrived: "2024-03-10"
  },
  {
    id: "max",
    name: "Max",
    age: "7 years",
    breed: "Maine Coon Mix",
    gender: "Male",
    personality: ["Gentle Giant", "Calm", "Patient"],
    description: "Max is a large, fluffy tabby with the sweetest disposition. Despite his impressive size, he's incredibly gentle and has never used his claws inappropriately. He loves being brushed and enjoys quiet companionship.",
    backstory: "Max's previous owner developed allergies and made the difficult decision to surrender him. He's a well-mannered gentleman cat looking for a loving retirement home.",
    goodWith: ["All ages", "Other pets", "Quiet or active homes"],
    specialNeeds: ["Regular grooming needed"],
    adoptionFee: 75,
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=500&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&h=600&fit=crop"
    ],
    medicalNotes: "Mild arthritis - managed with supplements, no daily medication needed",
    isSpayedNeutered: true,
    isVaccinated: true,
    isMicrochipped: true,
    dateArrived: "2024-01-28"
  },
  {
    id: "pepper",
    name: "Pepper",
    age: "4 years",
    breed: "Tuxedo Shorthair",
    gender: "Female",
    personality: ["Sassy", "Smart", "Entertaining"],
    description: "Pepper is a striking tuxedo cat who thinks she's the queen of the castle. She's incredibly intelligent, loves puzzle toys, and has a playful sass that keeps everyone entertained with her antics.",
    backstory: "Pepper was found as a young cat living under a porch. She's learned to trust humans and now shows her personality with confidence and charm.",
    goodWith: ["Adults", "Teenagers", "Experienced cat owners"],
    specialNeeds: ["Needs mental stimulation", "Prefers to be the only cat"],
    adoptionFee: 125,
    image: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=500&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1547955922-85fb218ca8cc?w=800&h=600&fit=crop"
    ],
    isSpayedNeutered: true,
    isVaccinated: true,
    isMicrochipped: true,
    dateArrived: "2023-12-05"
  },
  {
    id: "daisy",
    name: "Daisy",
    age: "6 months",
    breed: "Orange Tabby Mix",
    gender: "Female",
    personality: ["Cuddly", "Gentle", "Sleepy"],
    description: "Daisy is an adorable orange tabby kitten who loves nothing more than snuggling in warm laps. She's less energetic than typical kittens and prefers gentle play and lots of nap time with her humans.",
    backstory: "Daisy was rescued from a high-kill shelter where she was too shy to get noticed. In foster care, she's blossomed into a sweet, loving kitten who just wants to be cherished.",
    goodWith: ["All ages", "Other gentle cats", "Calm dogs"],
    specialNeeds: [],
    adoptionFee: 175,
    image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=500&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?w=800&h=600&fit=crop"
    ],
    isSpayedNeutered: true,
    isVaccinated: true,
    isMicrochipped: true,
    dateArrived: "2024-04-01"
  },
  {
    id: "smokey",
    name: "Smokey",
    age: "8 years",
    breed: "Gray Domestic Shorthair",
    gender: "Male",
    personality: ["Wise", "Calm", "Loving"],
    description: "Smokey is a distinguished senior cat with beautiful gray fur and kind green eyes. He's the perfect companion for someone looking for a mature, well-behaved cat who appreciates the quieter moments in life.",
    backstory: "Smokey's owner passed away, and he's looking for a new home to spend his golden years. He's a testament to how wonderful senior cats can be as companions.",
    goodWith: ["Adults", "Seniors", "Quiet households", "Other calm cats"],
    specialNeeds: ["Senior care", "Regular vet checkups"],
    adoptionFee: 50,
    image: "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?w=500&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=600&fit=crop"
    ],
    medicalNotes: "Healthy for his age, just needs regular senior wellness exams",
    isSpayedNeutered: true,
    isVaccinated: true,
    isMicrochipped: true,
    dateArrived: "2024-02-20"
  },
  {
    id: "mittens",
    name: "Mittens",
    age: "3 years",
    breed: "White & Gray Shorthair",
    gender: "Female",
    personality: ["Shy", "Sweet", "Observant"],
    description: "Mittens is named for her adorable white paws that look like tiny mittens. She's a bit shy at first but incredibly sweet once she gets to know you. She loves to perch up high and observe her surroundings.",
    backstory: "Mittens was surrendered by a family who didn't have time for a shy cat. She's looking for a patient family who will give her the time she needs to come out of her shell.",
    goodWith: ["Adults", "Patient families", "Quiet homes"],
    specialNeeds: ["Needs time to adjust", "Shy with strangers"],
    adoptionFee: 100,
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1520315342629-6ea920342ba7?w=800&h=600&fit=crop"
    ],
    isSpayedNeutered: true,
    isVaccinated: true,
    isMicrochipped: true,
    dateArrived: "2024-03-22"
  },
  {
    id: "charlie",
    name: "Charlie",
    age: "2 years",
    breed: "Brown Tabby Mix",
    gender: "Male",
    personality: ["Adventurous", "Friendly", "Vocal"],
    description: "Charlie is a handsome brown tabby with striking markings and a personality to match. He's very vocal and will 'chat' with you throughout the day. He loves exploring and would do well in an active household.",
    backstory: "Charlie was found as a young cat roaming the streets. He's incredibly social and seems to have been someone's pet before, though no owner was ever found.",
    goodWith: ["Active families", "Kids", "Other social cats"],
    specialNeeds: ["Needs stimulation and activity"],
    adoptionFee: 150,
    image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=500&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=800&h=600&fit=crop"
    ],
    isSpayedNeutered: true,
    isVaccinated: true,
    isMicrochipped: true,
    dateArrived: "2024-01-08"
  }
];
