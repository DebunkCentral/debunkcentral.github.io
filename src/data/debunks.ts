import { Debunk, Category } from '../types/debunk';

// Featured Debunk
export const featuredDebunk: Debunk =  {
  id: "whey-protein-is-bad",
  title: "DEBUNKED: Whey Proteins are bad for health",
  claim: "Whey Protein is Poison",
  summary: "A viral social media claim alleges that consuming whey protein is harmful, suggesting it can cause kidney stones and various other diseases.",
  analysis: "This claim has been making rounds online, with dramatic warnings that whey protein is 'poison' or leads to serious health problems. But when you actually dig into the science, there's little to support this fear. Whey protein is a byproduct of milk and has been safely consumed by millions of people for decades. It's one of the most studied supplements in sports and health nutrition.",
  facts: "1. Whey protein is a complete protein source, meaning it contains all essential amino acids.\n2. Numerous clinical studies have shown that moderate whey intake (20–40g/day) poses no harm to healthy kidneys or liver.\n3. The idea that whey causes kidney stones is not supported by evidence—unless someone already has kidney disease, whey in normal amounts is considered safe.\n4. Problems usually arise from extreme overconsumption or using poor-quality, unregulated supplements.",
  conclusion: "There’s no solid evidence that whey protein is toxic or causes disease in healthy individuals. Like anything, balance matters. For most people, whey protein is a convenient and safe way to meet their daily protein needs—especially for fitness, recovery, or dietary gaps.",
  truthLevel: "false",
  categories: ["Health", "Fitness Myths","Consumer Products"],
  date: "2025-06-08",
  imageUrl: "https://images.pexels.com/photos/15120889/pexels-photo-15120889/free-photo-of-close-up-of-preparing-protein-shake-with-powder.jpeg",
  originalSourceUrl: "https://www.youtube.com/shorts/RtCZ7g8zeJw",
  sources: [
    {
      title: "Whey protein supplementation and its effects on body composition and muscle strength",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3905294/"
    },
    {
      title: "Whey protein safety profile in healthy adults",
      url: "https://pubmed.ncbi.nlm.nih.gov/28698222/"
    }
  ]
};

// Recent Debunks
export const recentDebunks: Debunk[] = [
  {
  id: "whey-protein-is-bad",
  title: "DEBUNKED: Whey Proteins are bad for health",
  claim: "Whey Protein is Poison",
  summary: "A viral social media claim alleges that consuming whey protein is harmful, suggesting it can cause kidney stones and various other diseases.",
  analysis: "This claim has been making rounds online, with dramatic warnings that whey protein is 'poison' or leads to serious health problems. But when you actually dig into the science, there's little to support this fear. Whey protein is a byproduct of milk and has been safely consumed by millions of people for decades. It's one of the most studied supplements in sports and health nutrition.",
  facts: "1. Whey protein is a complete protein source, meaning it contains all essential amino acids.\n2. Numerous clinical studies have shown that moderate whey intake (20–40g/day) poses no harm to healthy kidneys or liver.\n3. The idea that whey causes kidney stones is not supported by evidence—unless someone already has kidney disease, whey in normal amounts is considered safe.\n4. Problems usually arise from extreme overconsumption or using poor-quality, unregulated supplements.",
  conclusion: "There’s no solid evidence that whey protein is toxic or causes disease in healthy individuals. Like anything, balance matters. For most people, whey protein is a convenient and safe way to meet their daily protein needs—especially for fitness, recovery, or dietary gaps.",
  truthLevel: "false",
  categories: ["Health", "Fitness Myths","Consumer Products"],
  date: "2025-06-08",
  imageUrl: "https://images.pexels.com/photos/15120889/pexels-photo-15120889/free-photo-of-close-up-of-preparing-protein-shake-with-powder.jpeg",
  originalSourceUrl: "https://www.youtube.com/shorts/RtCZ7g8zeJw",
  sources: [
    {
      title: "Whey protein supplementation and its effects on body composition and muscle strength",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3905294/"
    },
    {
      title: "Whey protein safety profile in healthy adults",
      url: "https://pubmed.ncbi.nlm.nih.gov/28698222/"
    }
  ]
},
];

// All Debunks (combining featured and recent)
export const allDebunks: Debunk[] = [featuredDebunk, ...recentDebunks];

// Categories
export const allCategories: Category[] = [
  {
    name: "Health",
    description: "Fact-checks on medical claims, wellness trends, nutrition, disease prevention, and public health information.",
    imageUrl: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    count: 1
  },
  {
    name: "Technology",
    description: "Debunking misinformation about gadgets, AI, digital privacy, cybersecurity, and technological innovations.",
    imageUrl: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    count: 0
  },
  {
    name: "Science",
    description: "Analyzing claims about scientific discoveries, climate change, space exploration, and general scientific principles.",
    imageUrl: "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    count: 0
  },
  {
    name: "Politics",
    description: "Fact-checking political statements, election information, government policies, and legislative claims.",
    imageUrl: "https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    count: 0
  },
  {
    name: "Conspiracy Theories",
    description: "Examining popular conspiracy theories and separating fact from fiction in viral speculative content.",
    imageUrl: "https://images.pexels.com/photos/6476783/pexels-photo-6476783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    count: 0
  },
  {
    name: "Food",
    description: "Debunking myths about nutrition, food safety, diets, and food production methods.",
    imageUrl: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    count: 0
  },
  {
    name: "Environment",
    description: "Fact-checking claims about climate change, pollution, conservation, and environmental policies.",
    imageUrl: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    count: 0
  },
  {
    name: "History",
    description: "Examining historical myths, misconceptions, and revisionist claims about past events.",
    imageUrl: "https://images.pexels.com/photos/36006/renaissance-schallaburg-figures-facade.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    count: 0
  },
  {
    name: "Consumer Products",
    description: "Investigating claims about product effectiveness, safety concerns, and consumer protection issues.",
    imageUrl: "https://images.pexels.com/photos/7608269/pexels-photo-7608269.jpeg",
    count: 1
  }
];

// Popular Categories (subset for homepage)
export const popularCategories: Category[] = allCategories.slice(0, 6);