import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, Users, Globe, Mic, BookOpen, Store, ImageIcon, ChefHat, Landmark } from "lucide-react"

const moduleStats = [
  { name: "Voice Stories", icon: Mic, contributions: 1847, languages: 28, growth: "+12%" },
  { name: "Daily Wisdom", icon: BookOpen, contributions: 1247, languages: 22, growth: "+8%" },
  { name: "Local Market", icon: Store, contributions: 856, languages: 18, growth: "+15%" },
  { name: "Landmarks", icon: Landmark, contributions: 967, languages: 16, growth: "+11%" },
  { name: "Recipes", icon: ChefHat, contributions: 1834, languages: 24, growth: "+9%" },
  { name: "Meme Creator", icon: ImageIcon, contributions: 2456, languages: 19, growth: "+22%" }
]

const languageStats = [
  { language: "Hindi", speakers: "हिंदी", contributions: 3456, percentage: 28 },
  { language: "Tamil", speakers: "தமிழ்", contributions: 2134, percentage: 17 },
  { language: "Bengali", speakers: "বাংলা", contributions: 1876, percentage: 15 },
  { language: "Marathi", speakers: "मराठी", contributions: 1543, percentage: 12 },
  { language: "Telugu", speakers: "తెలుగు", contributions: 1234, percentage: 10 },
  { language: "Gujarati", speakers: "ગુજરાતી", contributions: 987, percentage: 8 },
  { language: "Others", speakers: "अन्य", contributions: 1270, percentage: 10 }
]

const regionStats = [
  { region: "Maharashtra", contributions: 1876, active_users: 234 },
  { region: "Tamil Nadu", contributions: 1654, active_users: 189 },
  { region: "West Bengal", contributions: 1432, active_users: 167 },
  { region: "Gujarat", contributions: 1234, active_users: 145 },
  { region: "Karnataka", contributions: 1156, active_users: 134 },
  { region: "Uttar Pradesh", contributions: 1098, active_users: 128 }
]

export default function Analytics() {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <BarChart3 className="h-8 w-8 text-primary" />
            Analytics Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">
            Insights into cultural data collection and community engagement
          </p>
        </div>
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          <TrendingUp className="mr-1 h-4 w-4" />
          Data Updated Live
        </Badge>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Contributions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,847</div>
            <p className="text-xs text-muted-foreground">+2.1% from last week</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Contributors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,567</div>
            <p className="text-xs text-muted-foreground">+5.3% from last week</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Languages Covered</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">+2 new this month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">States/Regions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
            <p className="text-xs text-muted-foreground">+1 new this week</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Module Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Module Performance
            </CardTitle>
            <CardDescription>
              Contributions and engagement by collection module
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {moduleStats.map((module) => (
              <div key={module.name} className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <module.icon className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium text-sm">{module.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {module.contributions} contributions • {module.languages} languages
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant={module.growth.startsWith('+') ? "default" : "secondary"} className="text-xs">
                    {module.growth}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Language Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Language Distribution
            </CardTitle>
            <CardDescription>
              Content contributions by language
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {languageStats.map((lang) => (
              <div key={lang.language} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{lang.language}</span>
                    <span className="text-xs text-muted-foreground">{lang.speakers}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium">{lang.contributions}</span>
                    <span className="text-xs text-muted-foreground ml-2">({lang.percentage}%)</span>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${lang.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Regional Engagement */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Regional Engagement
            </CardTitle>
            <CardDescription>
              Top contributing states and regions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {regionStats.map((region, index) => (
              <div key={region.region} className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">#{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{region.region}</h4>
                    <p className="text-xs text-muted-foreground">
                      {region.active_users} active contributors
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium">{region.contributions}</span>
                  <p className="text-xs text-muted-foreground">contributions</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity Highlights</CardTitle>
            <CardDescription>
              Latest milestones and achievements
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 border border-border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">New Record</Badge>
                <span className="text-sm text-muted-foreground">2 hours ago</span>
              </div>
              <p className="text-sm">
                <strong>1000th recipe</strong> contributed from Kerala - Traditional Fish Curry collection milestone reached!
              </p>
            </div>

            <div className="p-3 border border-border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="default">Achievement</Badge>
                <span className="text-sm text-muted-foreground">1 day ago</span>
              </div>
              <p className="text-sm">
                <strong>New language support</strong> - Bhojpuri dialect stories now being collected from Bihar region.
              </p>
            </div>

            <div className="p-3 border border-border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">Milestone</Badge>
                <span className="text-sm text-muted-foreground">3 days ago</span>
              </div>
              <p className="text-sm">
                <strong>Community growth</strong> - 1500+ active contributors reached across 25 Indian states.
              </p>
            </div>

            <div className="p-3 border border-border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">Featured</Badge>
                <span className="text-sm text-muted-foreground">1 week ago</span>
              </div>
              <p className="text-sm">
                <strong>Quality content</strong> - Rajasthani folk tales collection verified by cultural experts.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}