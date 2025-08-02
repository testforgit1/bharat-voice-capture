import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Mic, 
  MicOff, 
  Play, 
  Pause, 
  Square, 
  Upload, 
  Languages,
  MapPin,
  Clock,
  Users,
  Star,
  Headphones
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const recentStories = [
  {
    id: 1,
    title: "The Legend of River Godavari",
    contributor: "Ananya from Nashik",
    language: "Marathi",
    duration: "4:32",
    region: "Maharashtra",
    category: "Mythology",
    likes: 127,
    verified: true
  },
  {
    id: 2,
    title: "Folk Tale of the Brave Farmer",
    contributor: "Rajesh from Jaipur",
    language: "Rajasthani",
    duration: "6:15",
    region: "Rajasthan", 
    category: "Folk Tale",
    likes: 94,
    verified: true
  },
  {
    id: 3,
    title: "Grandmother's Monsoon Stories",
    contributor: "Priya from Kochi",
    language: "Malayalam",
    duration: "8:41",
    region: "Kerala",
    category: "Family Stories",
    likes: 203,
    verified: false
  }
]

export default function VoiceStories() {
  const [isRecording, setIsRecording] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    language: "",
    region: "",
    category: "",
    description: "",
    transcript: ""
  })
  const { toast } = useToast()

  const handleStartRecording = () => {
    setIsRecording(true)
    toast({
      title: "Recording Started",
      description: "Share your story in your native language"
    })
  }

  const handleStopRecording = () => {
    setIsRecording(false)
    toast({
      title: "Recording Complete",
      description: "Your story has been captured successfully"
    })
  }

  const handleSubmit = () => {
    toast({
      title: "Story Submitted!",
      description: "Thank you for contributing to India's oral heritage"
    })
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Mic className="h-8 w-8 text-primary" />
            Voice Stories Collection
          </h1>
          <p className="text-muted-foreground mt-2">
            Preserve oral traditions, folk tales, and cultural stories for future generations
          </p>
        </div>
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          <Languages className="mr-1 h-4 w-4" />
          28 Languages Supported
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recording Interface */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle>Record Your Story</CardTitle>
              <CardDescription>
                Share traditional stories, personal experiences, or cultural memories in your native language
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Recording Controls */}
              <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-border rounded-lg bg-muted/20">
                <div className={`
                  w-24 h-24 rounded-full flex items-center justify-center mb-4 transition-all duration-300
                  ${isRecording ? 'bg-red-500 animate-pulse-glow' : 'bg-primary hover:bg-primary/90'}
                `}>
                  {isRecording ? (
                    <Square className="h-8 w-8 text-white" />
                  ) : (
                    <Mic className="h-8 w-8 text-white" />
                  )}
                </div>
                
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-lg">
                    {isRecording ? "Recording in Progress..." : "Ready to Record"}
                  </h3>
                  <p className="text-muted-foreground">
                    {isRecording ? "Click stop when you're finished" : "Click the microphone to start"}
                  </p>
                  {isRecording && (
                    <p className="text-red-500 font-medium mt-2">
                      Recording: 00:32
                    </p>
                  )}
                </div>

                <div className="flex gap-3">
                  {!isRecording ? (
                    <Button onClick={handleStartRecording} size="lg" className="bg-primary">
                      <Mic className="mr-2 h-5 w-5" />
                      Start Recording
                    </Button>
                  ) : (
                    <Button onClick={handleStopRecording} variant="destructive" size="lg">
                      <Square className="mr-2 h-5 w-5" />
                      Stop Recording
                    </Button>
                  )}
                  
                  <Button variant="outline" size="lg">
                    <Upload className="mr-2 h-5 w-5" />
                    Upload File
                  </Button>
                </div>
              </div>

              {/* Story Details Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Story Title</Label>
                  <Input 
                    id="title"
                    placeholder="e.g., The Legend of..."
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                  />
                </div>
                
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
                      <SelectItem value="rajasthani">Rajasthani</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="region">Region/State</Label>
                  <Input 
                    id="region"
                    placeholder="e.g., Maharashtra, Kerala"
                    value={formData.region}
                    onChange={(e) => setFormData({...formData, region: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mythology">Mythology</SelectItem>
                      <SelectItem value="folktale">Folk Tale</SelectItem>
                      <SelectItem value="family">Family Stories</SelectItem>
                      <SelectItem value="historical">Historical Events</SelectItem>
                      <SelectItem value="spiritual">Spiritual Stories</SelectItem>
                      <SelectItem value="adventure">Adventure Tales</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="description">Story Description</Label>
                <Textarea 
                  id="description"
                  placeholder="Brief description of your story..."
                  className="min-h-[100px]"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="transcript">Transcript (Optional)</Label>
                <Textarea 
                  id="transcript"
                  placeholder="Provide a written version of your story..."
                  className="min-h-[120px]"
                  value={formData.transcript}
                  onChange={(e) => setFormData({...formData, transcript: e.target.value})}
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Adding a transcript helps with searchability and accessibility
                </p>
              </div>

              <Button onClick={handleSubmit} className="w-full bg-primary" size="lg">
                Submit Story
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Stories Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Headphones className="h-5 w-5" />
                Recent Stories
              </CardTitle>
              <CardDescription>
                Listen to stories shared by the community
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentStories.map((story) => (
                <div key={story.id} className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-sm line-clamp-2">{story.title}</h4>
                    {story.verified && (
                      <Badge variant="secondary" className="ml-2 text-xs">
                        Verified
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-2">{story.contributor}</p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Languages className="h-3 w-3" />
                      {story.language}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {story.duration}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" className="h-7 px-2">
                        <Play className="h-3 w-3" />
                      </Button>
                      <span className="flex items-center gap-1 text-xs">
                        <Star className="h-3 w-3 text-yellow-500" />
                        {story.likes}
                      </span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {story.category}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Today's Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Stories Shared</span>
                <Badge variant="secondary">12</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Languages Used</span>
                <Badge variant="secondary">8</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Duration</span>
                <Badge variant="secondary">2h 34m</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}