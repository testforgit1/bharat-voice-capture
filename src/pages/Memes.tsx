import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Palette, Download, Share2, Languages, Sparkles, Plus, ImageIcon, Laugh } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const memeTemplates = [
  {
    id: 1,
    name: "Rajinikanth Style",
    description: "Classic Tamil cinema pose",
    category: "Cinema",
    uses: 234
  },
  {
    id: 2,
    name: "Crying Indian Fan",
    description: "Cricket match reaction",
    category: "Sports", 
    uses: 189
  },
  {
    id: 3,
    name: "Indian Mom Expression",
    description: "Classic household reaction",
    category: "Family",
    uses: 345
  },
  {
    id: 4,
    name: "Bollywood Drama",
    description: "Over-dramatic film scene",
    category: "Cinema",
    uses: 167
  }
]

const recentMemes = [
  {
    id: 1,
    caption: "जब मम्मी कहती है 'बस 5 मिनट और'",
    translation: "When mom says 'just 5 more minutes'",
    template: "Indian Mom Expression",
    language: "Hindi",
    creator: "Rohit from Delhi",
    likes: 234,
    shares: 45
  },
  {
    id: 2,
    caption: "போன் பேட்டரி 1% இருக்கும் போது",
    translation: "When phone battery is at 1%",
    template: "Rajinikanth Style", 
    language: "Tamil",
    creator: "Priya from Chennai",
    likes: 189,
    shares: 67
  },
  {
    id: 3,
    caption: "ভাত ছাড়া খাওয়া মানে কী খাওয়া?",
    translation: "What's a meal without rice?",
    template: "Bollywood Drama",
    language: "Bengali",
    creator: "Amit from Kolkata", 
    likes: 156,
    shares: 23
  }
]

export default function Memes() {
  const [selectedTemplate, setSelectedTemplate] = useState("")
  const [formData, setFormData] = useState({
    caption: "",
    translation: "",
    language: "",
    category: "",
    context: ""
  })
  const { toast } = useToast()

  const handleGenerate = () => {
    toast({
      title: "Meme Generated!",
      description: "Your cultural meme is ready to download and share"
    })
  }

  const handleSubmit = () => {
    toast({
      title: "Meme Submitted!",
      description: "Thank you for contributing to Indian meme culture"
    })
    setFormData({
      caption: "",
      translation: "",
      language: "",
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
            <Palette className="h-8 w-8 text-primary" />
            Desi Meme Creator
          </h1>
          <p className="text-muted-foreground mt-2">
            Create hilarious memes in your local language using popular Indian templates
          </p>
        </div>
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          <Laugh className="mr-1 h-4 w-4" />
          2,456 Memes Created
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Meme Creator */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle>Create Your Meme</CardTitle>
              <CardDescription>
                Choose a template and add your funny caption in any Indian language
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Template Selection */}
              <div>
                <Label htmlFor="template">Choose Meme Template</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                  {memeTemplates.map((template) => (
                    <div 
                      key={template.id} 
                      className={`p-4 border rounded-lg cursor-pointer transition-all hover:border-primary ${
                        selectedTemplate === template.name ? 'border-primary bg-primary/5' : 'border-border'
                      }`}
                      onClick={() => setSelectedTemplate(template.name)}
                    >
                      <div className="aspect-square bg-muted rounded-md flex items-center justify-center mb-2">
                        <ImageIcon className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <h4 className="font-medium text-sm">{template.name}</h4>
                      <p className="text-xs text-muted-foreground mb-1">{template.description}</p>
                      <Badge variant="outline" className="text-xs">{template.uses} uses</Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Meme Preview */}
              {selectedTemplate && (
                <div className="p-6 border-2 border-dashed border-primary/30 rounded-lg bg-primary/5">
                  <div className="flex flex-col items-center">
                    <div className="w-full max-w-md aspect-square bg-muted rounded-lg flex items-center justify-center mb-4">
                      <div className="text-center">
                        <ImageIcon className="h-16 w-16 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">{selectedTemplate}</p>
                      </div>
                    </div>
                    {formData.caption && (
                      <div className="text-center p-4 bg-white rounded-lg max-w-md w-full">
                        <p className="font-medium text-lg">{formData.caption}</p>
                        {formData.translation && (
                          <p className="text-sm text-muted-foreground mt-1">{formData.translation}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Caption Form */}
              <div>
                <Label htmlFor="caption">Meme Caption *</Label>
                <Textarea 
                  id="caption"
                  placeholder="Add your funny caption in your local language..."
                  className="min-h-[80px] text-lg"
                  value={formData.caption}
                  onChange={(e) => setFormData({...formData, caption: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="translation">English Translation</Label>
                <Input 
                  id="translation"
                  placeholder="Translate your caption for wider understanding..."
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
                  <Label htmlFor="category">Meme Category</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="family">Family Life</SelectItem>
                      <SelectItem value="cinema">Cinema & Entertainment</SelectItem>
                      <SelectItem value="sports">Sports</SelectItem>
                      <SelectItem value="politics">Politics & Social</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="food">Food & Cooking</SelectItem>
                      <SelectItem value="festival">Festivals & Culture</SelectItem>
                      <SelectItem value="student">Student Life</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="context">Context (Optional)</Label>
                <Textarea 
                  id="context"
                  placeholder="When would someone use this meme? What's the joke about?"
                  className="min-h-[60px]"
                  value={formData.context}
                  onChange={(e) => setFormData({...formData, context: e.target.value})}
                />
              </div>

              <div className="flex gap-3">
                <Button onClick={handleGenerate} className="flex-1 bg-primary" size="lg">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Generate Meme
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="mr-2 h-5 w-5" />
                  Share
                </Button>
              </div>

              <Button onClick={handleSubmit} variant="secondary" className="w-full" size="lg">
                <Plus className="mr-2 h-5 w-5" />
                Submit to Gallery
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Memes Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Laugh className="h-5 w-5" />
                Recent Memes
              </CardTitle>
              <CardDescription>
                Popular memes from the community
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentMemes.map((meme) => (
                <div key={meme.id} className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="mb-3">
                    <p className="font-medium text-sm mb-1">"{meme.caption}"</p>
                    {meme.translation && (
                      <p className="text-xs text-muted-foreground italic">{meme.translation}</p>
                    )}
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-2">{meme.creator}</p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Languages className="h-3 w-3" />
                      {meme.language}
                    </span>
                    <Badge variant="outline" className="text-xs">
                      {meme.template}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs">
                      <span>👍 {meme.likes}</span>
                      <span>🔄 {meme.shares}</span>
                    </div>
                    <Button size="sm" variant="outline" className="h-6 px-2 text-xs">
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Template Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Popular Templates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Indian Mom</span>
                <Badge variant="secondary">345 uses</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Rajinikanth</span>
                <Badge variant="secondary">234 uses</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Cricket Fan</span>
                <Badge variant="secondary">189 uses</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}