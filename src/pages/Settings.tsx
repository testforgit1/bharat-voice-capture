import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Settings, User, Bell, Shield, Download, Trash2, Languages, Palette } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    name: "",
    email: "",
    region: "",
    primaryLanguage: "",
    emailNotifications: true,
    contributionReminders: false,
    communityUpdates: true,
    qualityAlerts: true,
    theme: "system",
    language: "english",
    autoTranslate: false,
    showTranslations: true
  })
  const { toast } = useToast()

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your preferences have been updated successfully"
    })
  }

  const handleExportData = () => {
    toast({
      title: "Export Initiated",
      description: "Your contribution data will be emailed to you shortly"
    })
  }

  const handleDeleteAccount = () => {
    toast({
      title: "Account Deletion Request",
      description: "Please check your email for deletion confirmation instructions",
      variant: "destructive"
    })
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Settings className="h-8 w-8 text-primary" />
            Settings
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your account, preferences, and data settings
          </p>
        </div>
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          <User className="mr-1 h-4 w-4" />
          Contributor Profile
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile Information
              </CardTitle>
              <CardDescription>
                Update your personal information and cultural background
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Display Name</Label>
                  <Input 
                    id="name"
                    placeholder="Your name or handle"
                    value={settings.name}
                    onChange={(e) => setSettings({...settings, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={settings.email}
                    onChange={(e) => setSettings({...settings, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="region">Primary Region/State</Label>
                  <Select value={settings.region} onValueChange={(value) => setSettings({...settings, region: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                      <SelectItem value="assam">Assam</SelectItem>
                      <SelectItem value="bihar">Bihar</SelectItem>
                      <SelectItem value="gujarat">Gujarat</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="kerala">Kerala</SelectItem>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="rajasthan">Rajasthan</SelectItem>
                      <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                      <SelectItem value="west-bengal">West Bengal</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="primaryLanguage">Primary Language</Label>
                  <Select value={settings.primaryLanguage} onValueChange={(value) => setSettings({...settings, primaryLanguage: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select primary language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hindi">Hindi (हिंदी)</SelectItem>
                      <SelectItem value="bengali">Bengali (বাংলা)</SelectItem>
                      <SelectItem value="tamil">Tamil (தமிழ்)</SelectItem>
                      <SelectItem value="telugu">Telugu (తెలుగు)</SelectItem>
                      <SelectItem value="marathi">Marathi (मराठी)</SelectItem>
                      <SelectItem value="gujarati">Gujarati (ગુજરાતી)</SelectItem>
                      <SelectItem value="malayalam">Malayalam (മലയാളം)</SelectItem>
                      <SelectItem value="kannada">Kannada (ಕನ್ನಡ)</SelectItem>
                      <SelectItem value="punjabi">Punjabi (ਪੰਜਾਬੀ)</SelectItem>
                      <SelectItem value="urdu">Urdu (اردو)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>
                Choose what notifications you'd like to receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="emailNotifications">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive updates about your contributions and community activity
                  </p>
                </div>
                <Switch
                  id="emailNotifications"
                  checked={settings.emailNotifications}
                  onCheckedChange={(checked) => setSettings({...settings, emailNotifications: checked})}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="contributionReminders">Contribution Reminders</Label>
                  <p className="text-sm text-muted-foreground">
                    Weekly reminders to share cultural content
                  </p>
                </div>
                <Switch
                  id="contributionReminders"
                  checked={settings.contributionReminders}
                  onCheckedChange={(checked) => setSettings({...settings, contributionReminders: checked})}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="communityUpdates">Community Updates</Label>
                  <p className="text-sm text-muted-foreground">
                    News about platform features and community milestones
                  </p>
                </div>
                <Switch
                  id="communityUpdates"
                  checked={settings.communityUpdates}
                  onCheckedChange={(checked) => setSettings({...settings, communityUpdates: checked})}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="qualityAlerts">Quality Alerts</Label>
                  <p className="text-sm text-muted-foreground">
                    Notifications when your content is verified or featured
                  </p>
                </div>
                <Switch
                  id="qualityAlerts"
                  checked={settings.qualityAlerts}
                  onCheckedChange={(checked) => setSettings({...settings, qualityAlerts: checked})}
                />
              </div>
            </CardContent>
          </Card>

          {/* Display & Language Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Languages className="h-5 w-5" />
                Display & Language
              </CardTitle>
              <CardDescription>
                Customize how content is displayed to you
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="theme">Theme</Label>
                  <Select value={settings.theme} onValueChange={(value) => setSettings({...settings, theme: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="language">Interface Language</Label>
                  <Select value={settings.language} onValueChange={(value) => setSettings({...settings, language: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="hindi">हिंदी (Hindi)</SelectItem>
                      <SelectItem value="bengali">বাংলা (Bengali)</SelectItem>
                      <SelectItem value="tamil">தமிழ் (Tamil)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="autoTranslate">Auto-translate Content</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically translate content to your preferred language
                  </p>
                </div>
                <Switch
                  id="autoTranslate"
                  checked={settings.autoTranslate}
                  onCheckedChange={(checked) => setSettings({...settings, autoTranslate: checked})}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="showTranslations">Show Translations</Label>
                  <p className="text-sm text-muted-foreground">
                    Display English translations alongside original content
                  </p>
                </div>
                <Switch
                  id="showTranslations"
                  checked={settings.showTranslations}
                  onCheckedChange={(checked) => setSettings({...settings, showTranslations: checked})}
                />
              </div>
            </CardContent>
          </Card>

          {/* Privacy & Data */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Privacy & Data
              </CardTitle>
              <CardDescription>
                Manage your data and account security
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Export Your Data</h4>
                  <p className="text-sm text-muted-foreground">
                    Download all your contributions and data
                  </p>
                </div>
                <Button variant="outline" onClick={handleExportData}>
                  <Download className="mr-2 h-4 w-4" />
                  Export Data
                </Button>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-destructive">Delete Account</h4>
                  <p className="text-sm text-muted-foreground">
                    Permanently delete your account and all data
                  </p>
                </div>
                <Button variant="destructive" onClick={handleDeleteAccount}>
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button onClick={handleSave} className="bg-primary" size="lg">
              Save All Settings
            </Button>
          </div>
        </div>

        {/* Settings Summary */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Your Contributions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Voice Stories</span>
                <Badge variant="secondary">23</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Wisdom Shared</span>
                <Badge variant="secondary">18</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Recipes</span>
                <Badge variant="secondary">12</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Landmarks</span>
                <Badge variant="secondary">8</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Account Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Member Since</span>
                <span className="text-sm">Jan 2024</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Verification</span>
                <Badge variant="default">Verified</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Contribution Score</span>
                <Badge variant="secondary">847</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start" size="sm">
                <Languages className="mr-2 h-4 w-4" />
                Change Language
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                <Palette className="mr-2 h-4 w-4" />
                Theme Settings
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                <Bell className="mr-2 h-4 w-4" />
                Notification Center
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}