import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Store, Camera, MapPin, Tag, Star, Upload, Plus } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const recentProducts = [
  {
    id: 1,
    name: "हस्तनिर्मित खादी साड़ी",
    englishName: "Handwoven Khadi Saree",
    contributor: "Sunita from Khadi Gramodyog",
    location: "Ahmedabad, Gujarat",
    category: "Textiles",
    price: "₹2,500",
    description: "Traditional handwoven saree with natural dyes",
    verified: true,
    rating: 4.8
  },
  {
    id: 2,
    name: "Authentic Mysore Pak",
    contributor: "Krishna Sweets",
    location: "Mysore, Karnataka", 
    category: "Food & Sweets",
    price: "₹350/kg",
    description: "Traditional ghee-based sweet made with besan",
    verified: true,
    rating: 4.9
  },
  {
    id: 3,
    name: "কাঁথা স্টিচ শাল",
    englishName: "Kantha Stitch Shawl",
    contributor: "Mita Das",
    location: "Shantiniketan, West Bengal",
    category: "Handicrafts",
    price: "₹800",
    description: "Hand-embroidered shawl with traditional kantha work",
    verified: false,
    rating: 4.6
  }
]

export default function Market() {
  const [formData, setFormData] = useState({
    name: "",
    englishName: "",
    location: "",
    category: "",
    price: "",
    description: "",
    materials: "",
    cultural_significance: ""
  })
  const { toast } = useToast()

  const handleSubmit = () => {
    toast({
      title: "Product Added!",
      description: "Thank you for documenting local market products"
    })
    setFormData({
      name: "",
      englishName: "",
      location: "",
      category: "",
      price: "",
      description: "",
      materials: "",
      cultural_significance: ""
    })
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Store className="h-8 w-8 text-primary" />
            Local Market Documentation
          </h1>
          <p className="text-muted-foreground mt-2">
            Document local products, crafts, and market goods from your region
          </p>
        </div>
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          <Tag className="mr-1 h-4 w-4" />
          856 Products Documented
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Product Documentation Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle>Document a Local Product</CardTitle>
              <CardDescription>
                Help preserve knowledge about traditional crafts, foods, and local market products
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Image Upload */}
              <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-border rounded-lg bg-muted/20">
                <Camera className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="font-semibold text-lg mb-2">Add Product Photos</h3>
                <p className="text-muted-foreground text-center mb-4">
                  Upload clear photos of the product from different angles
                </p>
                <Button variant="outline" size="lg">
                  <Upload className="mr-2 h-5 w-5" />
                  Upload Photos
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Product Name (Local Language)</Label>
                  <Input 
                    id="name"
                    placeholder="e.g., खादी कुर्ता, கோவில் பட்டு"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="englishName">English Name</Label>
                  <Input 
                    id="englishName"
                    placeholder="e.g., Khadi Kurta, Temple Silk"
                    value={formData.englishName}
                    onChange={(e) => setFormData({...formData, englishName: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="location">Location/Market</Label>
                  <Input 
                    id="location"
                    placeholder="e.g., Chandni Chowk, Delhi"
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
                      <SelectItem value="textiles">Textiles & Clothing</SelectItem>
                      <SelectItem value="food">Food & Beverages</SelectItem>
                      <SelectItem value="handicrafts">Handicrafts</SelectItem>
                      <SelectItem value="jewelry">Jewelry & Accessories</SelectItem>
                      <SelectItem value="pottery">Pottery & Ceramics</SelectItem>
                      <SelectItem value="spices">Spices & Herbs</SelectItem>
                      <SelectItem value="tools">Traditional Tools</SelectItem>
                      <SelectItem value="cosmetics">Natural Cosmetics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="price">Typical Price Range</Label>
                <Input 
                  id="price"
                  placeholder="e.g., ₹500-1000, ₹50/kg"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="description">Product Description</Label>
                <Textarea 
                  id="description"
                  placeholder="Describe the product, its uses, and unique features..."
                  className="min-h-[100px]"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="materials">Materials & Making Process</Label>
                <Textarea 
                  id="materials"
                  placeholder="What materials are used? How is it made traditionally?"
                  className="min-h-[80px]"
                  value={formData.materials}
                  onChange={(e) => setFormData({...formData, materials: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="cultural_significance">Cultural Significance (Optional)</Label>
                <Textarea 
                  id="cultural_significance"
                  placeholder="Any cultural or historical significance of this product?"
                  className="min-h-[80px]"
                  value={formData.cultural_significance}
                  onChange={(e) => setFormData({...formData, cultural_significance: e.target.value})}
                />
              </div>

              <Button onClick={handleSubmit} className="w-full bg-primary" size="lg">
                <Plus className="mr-2 h-5 w-5" />
                Document Product
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Products Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Store className="h-5 w-5" />
                Recent Products
              </CardTitle>
              <CardDescription>
                Explore products documented by the community
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentProducts.map((product) => (
                <div key={product.id} className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm mb-1">{product.name}</h4>
                      {product.englishName && (
                        <p className="text-xs text-muted-foreground mb-2">{product.englishName}</p>
                      )}
                    </div>
                    {product.verified && (
                      <Badge variant="secondary" className="ml-2 text-xs">
                        Verified
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-2">{product.contributor}</p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {product.location}
                    </span>
                    <span className="font-medium text-primary">{product.price}</span>
                  </div>

                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span className="text-xs font-medium">{product.rating}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Market Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Products Today</span>
                <Badge variant="secondary">18</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Active Markets</span>
                <Badge variant="secondary">47</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Top Category</span>
                <Badge variant="secondary">Textiles</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}