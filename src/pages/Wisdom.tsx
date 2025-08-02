import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Plus, Heart, Languages, MapPin, Quote, Star, ThumbsUp } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const recentWisdom = [
  {
    id: 1,
    text: "जो व्यक्ति दूसरों की मदद करता है, वह सबसे अमीर होता है।",
    translation: "The person who helps others is the richest.",
    contributor: "Meera from Varanasi",
    language: "Hindi",
    region: "Uttar Pradesh",
    category: "Life Wisdom",
    likes: 89,
    verified: true
  },
  {
    id: 2,
    text: "நீர் இல்லாத இடத்தில் வேர் பரவாது",
    translation: "Roots don't spread where there's no water",
    contributor: "Ravi from Chennai",
    language: "Tamil", 
    region: "Tamil Nadu",
    category: "Nature",
    likes: 67,
    verified: true
  },
  {
    id: 3,
    text: "ಮರವು ತನ್ನ ನೆರಳಿನಿಂದ ತನ್ನನ್ನು ತಾನೇ ರಕ್ಷಿಸಿಕೊಳ್ಳಲಾರದು",
    translation: "A tree cannot protect itself with its own shadow",
    contributor: "Lakshmi from Bangalore",
    language: "Kannada",
    region: "Karnataka", 
    category: "Philosophy",
    likes: 134,
    verified: false
  }
]

export default function Wisdom() {
  const [formData, setFormData] = useState({
    text: "",
    translation: "",
    language: "",
    region: "",
    category: "",
    context: ""
  })
  const { toast } = useToast()

  const handleSubmit = () => {
    toast({
      title: "Wisdom Shared!",
      description: "Thank you for contributing to our cultural knowledge base"
    })
    setFormData({
      text: "",
      translation: "",
      language: "",
      region: "",
      category: "",
      context: ""
    })
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-primary" />
            Daily Wisdom Collection
          </h1>
          <p className="text-muted-foreground mt-2">
            Share traditional sayings, proverbs, and wisdom from your region
          </p>
        </div>
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          <Quote className="mr-1 h-4 w-4" />
          1,247 Sayings Collected
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Submit Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle>Share Traditional Wisdom</CardTitle>
              <CardDescription>
                Contribute proverbs, sayings, or traditional wisdom from your culture
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="text">Original Text *</Label>
                <Textarea 
                  id="text"
                  placeholder="Enter the saying or proverb in its original language..."
                  className="min-h-[100px] text-lg"
                  value={formData.text}
                  onChange={(e) => setFormData({...formData, text: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="translation">English Translation</Label>
                <Textarea 
                  id="translation"
                  placeholder="Provide an English translation..."
                  className="min-h-[80px]"
                  value={formData.translation}
                  onChange={(e) => setFormData({...formData, translation: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="language">Language</Label>
                  <Select value={formData.language} onValueChange={(value) => setFormData({...formData, language: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="marathi">Marathi</SelectItem>
                      <SelectItem value="bengali">Bengali</SelectItem>
                      <SelectItem value="tamil">Tamil</SelectItem>
                      <SelectItem value="telugu">Telugu</SelectItem>
                      <SelectItem value="malayalam">Malayalam</SelectItem>
                      <SelectItem value="kannada">Kannada</SelectItem>
                      <SelectItem value="gujarati">Gujarati</SelectItem>
                      <SelectItem value="punjabi">Punjabi</SelectItem>
                      <SelectItem value="urdu">Urdu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="region">Region/State</Label>
                  <Input 
                    id="region"
                    placeholder="e.g., West Bengal, Kerala"
                    value={formData.region}
                    onChange={(e) => setFormData({...formData, region: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="life-wisdom">Life Wisdom</SelectItem>
                    <SelectItem value="nature">Nature & Environment</SelectItem>
                    <SelectItem value="family">Family & Relationships</SelectItem>
                    <SelectItem value="work">Work & Success</SelectItem>
                    <SelectItem value="philosophy">Philosophy</SelectItem>
                    <SelectItem value="humor">Humor & Wit</SelectItem>
                    <SelectItem value="morals">Morals & Ethics</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="context">Context (Optional)</Label>
                <Textarea 
                  id="context"
                  placeholder="When is this saying typically used? Any background story?"
                  className="min-h-[80px]"
                  value={formData.context}
                  onChange={(e) => setFormData({...formData, context: e.target.value})}
                />
              </div>

              <Button onClick={handleSubmit} className="w-full bg-primary" size="lg">
                <Plus className="mr-2 h-5 w-5" />
                Share Wisdom
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Wisdom Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Quote className="h-5 w-5" />
                Recent Wisdom
              </CardTitle>
              <CardDescription>
                Explore sayings shared by the community
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentWisdom.map((wisdom) => (
                <div key={wisdom.id} className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <blockquote className="font-medium text-sm mb-2 italic">
                        "{wisdom.text}"
                      </blockquote>
                      {wisdom.translation && (
                        <p className="text-xs text-muted-foreground mb-2">
                          {wisdom.translation}
                        </p>
                      )}
                    </div>
                    {wisdom.verified && (
                      <Badge variant="secondary" className="ml-2 text-xs">
                        Verified
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-2">{wisdom.contributor}</p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Languages className="h-3 w-3" />
                      {wisdom.language}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {wisdom.region}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" className="h-7 px-2">
                        <ThumbsUp className="h-3 w-3" />
                      </Button>
                      <span className="flex items-center gap-1 text-xs">
                        <Heart className="h-3 w-3 text-red-500" />
                        {wisdom.likes}
                      </span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {wisdom.category}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Today's Contributions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Wisdom Shared</span>
                <Badge variant="secondary">23</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Languages</span>
                <Badge variant="secondary">12</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Top Category</span>
                <Badge variant="secondary">Life Wisdom</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}