import { Animal } from '@/data/ecosystems';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface AnimalCardProps {
  animal: Animal;
}

export const AnimalCard = ({ animal }: AnimalCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-card bg-gradient-card border-2 border-border/50 hover:border-primary/30">
      <CardContent className="p-0">
        {/* 이미지 표시 영역을 삭제하여 사진이 보이지 않도록 합니다. */}
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
