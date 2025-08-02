import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LucideIcon } from "lucide-react"
import { Link } from "react-router-dom"

interface CollectionCardProps {
  title: string
  description: string
  icon: LucideIcon
  stats: {
    contributions: number
    languages: number
    regions: string[]
  }
  href: string
  gradient?: string
  featured?: boolean
}

export function CollectionCard({ 
  title, 
  description, 
  icon: Icon, 
  stats, 
  href, 
  gradient = "bg-gradient-card",
  featured = false 
}: CollectionCardProps) {
  return (
    <Card className={`
      group hover:shadow-warm transition-all duration-300 hover:-translate-y-1 
      ${featured ? 'ring-2 ring-primary/20 shadow-glow' : ''}
      ${gradient}
    `}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className={`
            p-3 rounded-xl bg-white/80 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300
            ${featured ? 'animate-pulse-glow' : ''}
          `}>
            <Icon className="h-6 w-6 text-primary" />
          </div>
          {featured && (
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Featured
            </Badge>
          )}
        </div>
        
        <div>
          <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="mt-2 text-muted-foreground leading-relaxed">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-4">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{stats.contributions}</div>
              <div className="text-xs text-muted-foreground">Contributions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">{stats.languages}</div>
              <div className="text-xs text-muted-foreground">Languages</div>
            </div>
          </div>
          
          {/* Regions */}
          <div className="flex flex-wrap gap-1">
            {stats.regions.slice(0, 3).map((region) => (
              <Badge key={region} variant="outline" className="text-xs">
                {region}
              </Badge>
            ))}
            {stats.regions.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{stats.regions.length - 3} more
              </Badge>
            )}
          </div>
          
          {/* Action Button */}
          <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link to={href}>
              Start Contributing
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}