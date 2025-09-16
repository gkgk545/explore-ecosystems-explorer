import { Animal } from '@/data/ecosystems';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface AnimalCardProps {
  animal: Animal;
}

export const AnimalCard = ({ animal }: AnimalCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-card bg-gradient-card border-2 border-border/50 hover:border-primary/30 animate-float">
      <CardContent className="p-0">
        <div className="aspect-video bg-muted/30 flex items-center justify-center">
          <img
            src={animal.imageUrl}
            alt={animal.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://api.dicebear.com/7.x/shapes/svg?seed=${animal.name}&backgroundColor=c5f6fa,ffdeeb,d0bfff,bae6fd&scale=80`;
            }}
          />
        </div>
        <div className="p-4 space-y-3">
          <div className="text-center">
            <h3 className="font-round text-xl font-bold text-foreground mb-2">
              {animal.name}
            </h3>
            <Badge 
              variant={animal.type === '동물' ? 'default' : 'secondary'}
              className="font-round text-sm"
            >
              #{animal.type}
            </Badge>
          </div>
          <p className="font-round text-sm text-muted-foreground leading-relaxed text-center">
            {animal.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};