import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Landmark, Camera, MapPin, Calendar, Users, Star, Plus, Upload, Eye } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const recentLandmarks = [
  {
    id: 1,
    name: "पुराना किला गेट",
    englishName: "Old Fort Gate",
    contributor: "Rajesh from Jaipur",
    location: "Amber Fort, Rajasthan",
    category: "Historical Monument",
    period: "16th Century",
    description: "मुगल काल का प्रवेश द्वार जो अपनी राजपूत स्थापत्य कला के लिए प्रसिद्ध है",
    verified: true,
    likes: 167,
    views: 1245
  },
  {
    id: 2,
    name: "கோயில் கோபுரம்",
    englishName: "Temple Gopuram",
    contributor: "Lakshmi from Madurai",
    location: "Meenakshi Temple, Tamil Nadu",
    category: "Religious Site",
    period: "12th Century",
    description: "द्रविड़ वास्तुकला का उत्कृष्ट उदाहरण, जटिल नक्काशी के साथ",
    verified: true,
    likes: 234,
    views: 2156
  },
  {
    id: 3,
    name: "পুরানো বাজার",
    englishName: "Old Marketplace",
    contributor: "Sourya from Shantiniketan",
    location: "Bolpur, West Bengal",
    category: "Cultural Site",
    period: "Colonial Era",
    description: "ঐতিহ্যবাহী বাজার যেখানে এখনও স্থানীয় কারুশিল্প বিক্রি হয়",
    verified: false,
    likes: 89,
    views: 567
  }
]

export default function Landmarks() {
  const [formData, setFormData] = useState({
    name: "",
    englishName: "",
    location: "",
    category: "",
    period: "",
    description: "",
    significance: "",
    visiting_info: "",
    local_stories: ""
  })
  const { toast } = useToast()

  const handleSubmit = () => {
    toast({
      title: "Landmark Documented!",
      description: "Thank you for preserving local heritage knowledge"
    })
    setFormData({
      name: "",
      englishName: "",
      location: "",
      category: "",
      period: "",
      description: "",
      significance: "",
      visiting_info: "",
      local_stories: ""
    })
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Landmark className="h-8 w-8 text-primary" />
            Local Landmark Guide
          </h1>
          <p className="text-muted-foreground mt-2">
            Document and describe local landmarks, monuments, and culturally significant places
          </p>
        </div>
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          <MapPin className="mr-1 h-4 w-4" />
          967 Landmarks Documented
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Landmark Documentation Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle>Document a Local Landmark</CardTitle>
              <CardDescription>
                Share information about local monuments, temples, markets, or culturally significant places
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Photo Upload */}
              <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-border rounded-lg bg-muted/20">
                <Camera className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="font-semibold text-lg mb-2">Upload Landmark Photos</h3>
                <p className="text-muted-foreground text-center mb-4">
                  Add clear photos from different angles, including details and surroundings
                </p>
                <Button variant="outline" size="lg">
                  <Upload className="mr-2 h-5 w-5" />
                  Upload Photos
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Landmark Name (Local Language)</Label>
                  <Input 
                    id="name"
                    placeholder="e.g., राम मंदिर, কালী বাড়ি"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="englishName">English Name</Label>
                  <Input 
                    id="englishName"
                    placeholder="e.g., Ram Temple, Kali Bari"
                    value={formData.englishName}
                    onChange={(e) => setFormData({...formData, englishName: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="location">Location/Address</Label>
                  <Input 
                    id="location"
                    placeholder="e.g., Old Delhi, Near Red Fort"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="temple">Temple/Religious Site</SelectItem>
                      <SelectItem value="monument">Historical Monument</SelectItem>
                      <SelectItem value="fort">Fort/Palace</SelectItem>
                      <SelectItem value="market">Traditional Market</SelectItem>
                      <SelectItem value="natural">Natural Landmark</SelectItem>
                      <SelectItem value="cultural">Cultural Center</SelectItem>
                      <SelectItem value="architecture">Architectural Heritage</SelectItem>
                      <SelectItem value="memorial">Memorial/Statue</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="period">Historical Period (Optional)</Label>
                <Input 
                  id="period"
                  placeholder="e.g., Mughal Era, 18th Century, Ancient"
                  value={formData.period}
                  onChange={(e) => setFormData({...formData, period: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description"
                  placeholder="Describe the landmark in your local language or English..."
                  className="min-h-[120px]"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="significance">Cultural/Historical Significance</Label>
                <Textarea 
                  id="significance"
                  placeholder="Why is this place important? What makes it special?"
                  className="min-h-[100px]"
                  value={formData.significance}
                  onChange={(e) => setFormData({...formData, significance: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="local_stories">Local Stories/Legends (Optional)</Label>
                <Textarea 
                  id="local_stories"
                  placeholder="Share any local stories, legends, or folklore associated with this place..."
                  className="min-h-[100px]"
                  value={formData.local_stories}
                  onChange={(e) => setFormData({...formData, local_stories: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="visiting_info">Visiting Information</Label>
                <Textarea 
                  id="visiting_info"
                  placeholder="Best time to visit, entry fees, opening hours, how to reach..."
                  className="min-h-[80px]"
                  value={formData.visiting_info}
                  onChange={(e) => setFormData({...formData, visiting_info: e.target.value})}
                />
              </div>

              <Button onClick={handleSubmit} className="w-full bg-primary" size="lg">
                <Plus className="mr-2 h-5 w-5" />
                Document Landmark
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Landmarks Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Landmark className="h-5 w-5" />
                Recent Landmarks
              </CardTitle>
              <CardDescription>
                Explore places documented by the community
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentLandmarks.map((landmark) => (
                <div key={landmark.id} className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm mb-1">{landmark.name}</h4>
                      {landmark.englishName && (
                        <p className="text-xs text-muted-foreground mb-2">{landmark.englishName}</p>
                      )}
                    </div>
                    {landmark.verified && (
                      <Badge variant="secondary" className="ml-2 text-xs">
                        Verified
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-2">{landmark.contributor}</p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {landmark.location}
                    </span>
                    {landmark.period && (
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {landmark.period}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    {landmark.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500" />
                        {landmark.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {landmark.views}
                      </span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {landmark.category}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Category Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Popular Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Temples</span>
                <Badge variant="secondary">245</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Monuments</span>
                <Badge variant="secondary">178</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Markets</span>
                <Badge variant="secondary">134</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}