import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChefHat, Clock, Users, MapPin, Star, Heart, Plus, Camera } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const recentRecipes = [
  {
    id: 1,
    name: "आजीचे पुरणपोळी",
    englishName: "Grandmother's Puran Poli", 
    contributor: "Kavita from Pune",
    region: "Maharashtra",
    cuisine: "Maharashtrian",
    cookTime: "45 mins",
    difficulty: "Medium",
    servings: "6",
    likes: 156,
    verified: true,
    ingredients: ["चना दाल", "गुड़", "मैदा", "तेल"]
  },
  {
    id: 2,
    name: "Fish Curry (കറി)",
    contributor: "Reshma from Kochi",
    region: "Kerala",
    cuisine: "Malayali",
    cookTime: "30 mins", 
    difficulty: "Easy",
    servings: "4",
    likes: 203,
    verified: true,
    ingredients: ["Fish", "Coconut milk", "Curry leaves", "Tamarind"]
  },
  {
    id: 3,
    name: "মাছের ঝোল",
    englishName: "Traditional Fish Curry",
    contributor: "Dipti from Kolkata",
    region: "West Bengal",
    cuisine: "Bengali",
    cookTime: "25 mins",
    difficulty: "Easy", 
    servings: "4",
    likes: 189,
    verified: false,
    ingredients: ["রুই মাছ", "পেঁয়াজ", "আদা", "হলুদ"]
  }
]

export default function Recipes() {
  const [formData, setFormData] = useState({
    name: "",
    englishName: "",
    region: "",
    cuisine: "",
    cookTime: "",
    difficulty: "",
    servings: "",
    ingredients: "",
    instructions: "",
    tips: "",
    occasion: ""
  })
  const { toast } = useToast()

  const handleSubmit = () => {
    toast({
      title: "Recipe Shared!",
      description: "Thank you for contributing to our culinary heritage"
    })
    setFormData({
      name: "",
      englishName: "",
      region: "",
      cuisine: "",
      cookTime: "",
      difficulty: "",
      servings: "",
      ingredients: "",
      instructions: "",
      tips: "",
      occasion: ""
    })
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <ChefHat className="h-8 w-8 text-primary" />
            Family Recipe Exchange
          </h1>
          <p className="text-muted-foreground mt-2">
            Share traditional family recipes and preserve culinary heritage
          </p>
        </div>
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          <Heart className="mr-1 h-4 w-4" />
          1,834 Recipes Shared
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recipe Submission Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle>Share a Family Recipe</CardTitle>
              <CardDescription>
                Document traditional recipes passed down through generations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Photo Upload */}
              <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-border rounded-lg bg-muted/20">
                <Camera className="h-10 w-10 text-muted-foreground mb-3" />
                <h3 className="font-semibold mb-2">Add Recipe Photos</h3>
                <p className="text-muted-foreground text-center text-sm mb-3">
                  Upload photos of the dish, ingredients, or cooking process
                </p>
                <Button variant="outline">
                  <Camera className="mr-2 h-4 w-4" />
                  Upload Photos
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Recipe Name (Local Language)</Label>
                  <Input 
                    id="name"
                    placeholder="e.g., आलू गोभी, சாம்பார்"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="englishName">English Name</Label>
                  <Input 
                    id="englishName"
                    placeholder="e.g., Aloo Gobi, Sambar"
                    value={formData.englishName}
                    onChange={(e) => setFormData({...formData, englishName: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="region">Region/State</Label>
                  <Input 
                    id="region"
                    placeholder="e.g., Punjab, Tamil Nadu"
                    value={formData.region}
                    onChange={(e) => setFormData({...formData, region: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="cuisine">Cuisine Type</Label>
                  <Select value={formData.cuisine} onValueChange={(value) => setFormData({...formData, cuisine: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select cuisine" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="north-indian">North Indian</SelectItem>
                      <SelectItem value="south-indian">South Indian</SelectItem>
                      <SelectItem value="maharashtrian">Maharashtrian</SelectItem>
                      <SelectItem value="bengali">Bengali</SelectItem>
                      <SelectItem value="gujarati">Gujarati</SelectItem>
                      <SelectItem value="punjabi">Punjabi</SelectItem>
                      <SelectItem value="rajasthani">Rajasthani</SelectItem>
                      <SelectItem value="malayali">Malayali</SelectItem>
                      <SelectItem value="tamil">Tamil</SelectItem>
                      <SelectItem value="telugu">Telugu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="occasion">Occasion</Label>
                  <Select value={formData.occasion} onValueChange={(value) => setFormData({...formData, occasion: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="When is it made?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily Meal</SelectItem>
                      <SelectItem value="festival">Festival Special</SelectItem>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="monsoon">Monsoon</SelectItem>
                      <SelectItem value="winter">Winter Special</SelectItem>
                      <SelectItem value="religious">Religious Occasion</SelectItem>
                      <SelectItem value="snack">Snack/Tea Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="cookTime">Cooking Time</Label>
                  <Input 
                    id="cookTime"
                    placeholder="e.g., 30 minutes"
                    value={formData.cookTime}
                    onChange={(e) => setFormData({...formData, cookTime: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="difficulty">Difficulty Level</Label>
                  <Select value={formData.difficulty} onValueChange={(value) => setFormData({...formData, difficulty: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="How difficult?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="easy">Easy</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="hard">Hard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="servings">Servings</Label>
                  <Input 
                    id="servings"
                    placeholder="e.g., 4 people"
                    value={formData.servings}
                    onChange={(e) => setFormData({...formData, servings: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="ingredients">Ingredients</Label>
                <Textarea 
                  id="ingredients"
                  placeholder="List all ingredients with quantities in your local language or English..."
                  className="min-h-[120px]"
                  value={formData.ingredients}
                  onChange={(e) => setFormData({...formData, ingredients: e.target.value})}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  List each ingredient on a new line with quantity
                </p>
              </div>

              <div>
                <Label htmlFor="instructions">Cooking Instructions</Label>
                <Textarea 
                  id="instructions"
                  placeholder="Step-by-step cooking instructions..."
                  className="min-h-[150px]"
                  value={formData.instructions}
                  onChange={(e) => setFormData({...formData, instructions: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="tips">Family Tips & Secrets (Optional)</Label>
                <Textarea 
                  id="tips"
                  placeholder="Any special tips or family secrets that make this recipe unique?"
                  className="min-h-[80px]"
                  value={formData.tips}
                  onChange={(e) => setFormData({...formData, tips: e.target.value})}
                />
              </div>

              <Button onClick={handleSubmit} className="w-full bg-primary" size="lg">
                <Plus className="mr-2 h-5 w-5" />
                Share Recipe
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Recipes Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ChefHat className="h-5 w-5" />
                Recent Recipes
              </CardTitle>
              <CardDescription>
                Discover family recipes from across India
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentRecipes.map((recipe) => (
                <div key={recipe.id} className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm mb-1">{recipe.name}</h4>
                      {recipe.englishName && (
                        <p className="text-xs text-muted-foreground mb-2">{recipe.englishName}</p>
                      )}
                    </div>
                    {recipe.verified && (
                      <Badge variant="secondary" className="ml-2 text-xs">
                        Verified
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-2">{recipe.contributor}</p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {recipe.region}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {recipe.cookTime}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {ingredient}
                      </Badge>
                    ))}
                    {recipe.ingredients.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{recipe.ingredients.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1 text-xs">
                        <Heart className="h-3 w-3 text-red-500" />
                        {recipe.likes}
                      </span>
                      <span className="flex items-center gap-1 text-xs">
                        <Users className="h-3 w-3" />
                        {recipe.servings}
                      </span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {recipe.difficulty}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Popular Cuisines */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Popular Cuisines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">North Indian</span>
                <Badge variant="secondary">234 recipes</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">South Indian</span>
                <Badge variant="secondary">189 recipes</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Bengali</span>
                <Badge variant="secondary">145 recipes</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}