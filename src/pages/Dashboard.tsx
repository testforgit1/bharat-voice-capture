import { CollectionCard } from "@/components/CollectionCard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  Mic, 
  BookOpen, 
  Store, 
  Palette, 
  ChefHat, 
  Landmark,
  TrendingUp,
  Users,
  Globe,
  Award,
  Target,
  Heart
} from "lucide-react"

const collectionModules = [
  {
    title: "Voice Stories",
    description: "Record and preserve oral traditions, folk tales, and cultural stories in your native language. Help build an audio-text corpus of India's rich storytelling heritage.",
    icon: Mic,
    href: "/voice-stories",
    stats: {
      contributions: 1248,
      languages: 23,
      regions: ["Maharashtra", "Kerala", "Punjab", "Assam", "Tamil Nadu"]
    },
    featured: true
  },
  {
    title: "Daily Wisdom",
    description: "Share traditional proverbs, sayings, and wisdom from your community. Bridge generational knowledge gaps with modern explanations.",
    icon: BookOpen,
    href: "/wisdom",
    stats: {
      contributions: 892,
      languages: 18,
      regions: ["Rajasthan", "Bengal", "Gujarat", "Odisha"]
    }
  },
  {
    title: "Local Market Voice",
    description: "Document local products, ingredients, and services in your regional language. Create a comprehensive marketplace vocabulary.",
    icon: Store,
    href: "/market",
    stats: {
      contributions: 634,
      languages: 15,
      regions: ["Karnataka", "Andhra Pradesh", "Haryana"]
    }
  },
  {
    title: "Desi Meme Creator",
    description: "Create culturally relevant memes with local language captions. Capture informal communication and modern slang patterns.",
    icon: Palette,
    href: "/memes",
    stats: {
      contributions: 2156,
      languages: 21,
      regions: ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai"]
    },
    featured: true
  },
  {
    title: "Recipe Exchange",
    description: "Share family recipes and cooking traditions in your mother tongue. Preserve culinary heritage and regional food vocabulary.",
    icon: ChefHat,
    href: "/recipes",
    stats: {
      contributions: 756,
      languages: 16,
      regions: ["Bihar", "Jharkhand", "Chhattisgarh"]
    }
  },
  {
    title: "Landmark Guide",
    description: "Describe local monuments, temples, and cultural sites. Create visual-text pairs linking places with vernacular descriptions.",
    icon: Landmark,
    href: "/landmarks",
    stats: {
      contributions: 423,
      languages: 12,
      regions: ["Uttarakhand", "Himachal Pradesh", "J&K"]
    }
  }
]

const quickStats = [
  {
    label: "Total Contributions",
    value: "6,109",
    change: "+12.5%",
    icon: TrendingUp,
    color: "text-primary"
  },
  {
    label: "Active Contributors",
    value: "2,847",
    change: "+8.2%",
    icon: Users,
    color: "text-accent"
  },
  {
    label: "Languages Covered",
    value: "28",
    change: "+3 new",
    icon: Globe,
    color: "text-secondary"
  },
  {
    label: "Regions Active",
    value: "18",
    change: "+2 states",
    icon: Award,
    color: "text-orange-500"
  }
]

export default function Dashboard() {
  return (
    <div className="p-6 space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-hero p-8 text-white">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="h-8 w-8" />
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Building India's Digital Heritage
            </Badge>
          </div>
          <h1 className="text-4xl font-bold mb-3">
            Welcome to Bharat Voice
          </h1>
          <p className="text-xl opacity-90 mb-6 max-w-2xl">
            Join thousands of contributors preserving India's linguistic and cultural diversity. 
            Every story, recipe, and memory you share helps build AI that truly understands our heritage.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Target className="mr-2 h-5 w-5" />
              Start Contributing
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label} className="bg-gradient-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold mt-1">{stat.value}</p>
                    <p className={`text-sm mt-1 ${stat.color} font-medium`}>{stat.change}</p>
                  </div>
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Progress Tracking */}
      <Card className="bg-gradient-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Community Goals Progress
          </CardTitle>
          <CardDescription>
            Help us reach our monthly targets for cultural data collection
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Voice Stories Target</span>
              <span>1,248 / 2,000</span>
            </div>
            <Progress value={62} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Meme Contributions</span>
              <span>2,156 / 3,000</span>
            </div>
            <Progress value={72} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Recipe Collection</span>
              <span>756 / 1,500</span>
            </div>
            <Progress value={50} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Collection Modules */}
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Collection Modules</h2>
          <p className="text-muted-foreground">
            Choose how you'd like to contribute to India's digital heritage. Each module captures different aspects of our cultural and linguistic diversity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collectionModules.map((module) => (
            <CollectionCard
              key={module.title}
              {...module}
            />
          ))}
        </div>
      </div>
    </div>
  )
}