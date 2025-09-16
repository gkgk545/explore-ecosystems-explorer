import { Animal } from '@/data/ecosystems';
import { AnimalCard } from './AnimalCard';
import { MapPin, Trees } from 'lucide-react';

interface ResultsSectionProps {
  results: Animal[];
  searchQuery: string;
  hasSearched: boolean;
}

export const ResultsSection = ({ results, searchQuery, hasSearched }: ResultsSectionProps) => {
  if (!hasSearched) {
    return (
      <div className="text-center py-16">
        <div className="inline-block p-6 rounded-full bg-accent/30 mb-6 animate-bounce-gentle">
          <Trees className="h-16 w-16 text-primary" />
        </div>
        <h2 className="text-2xl font-round font-bold text-foreground mb-4">
          어떤 생태계를 탐험해 볼까요?
        </h2>
        <p className="text-muted-foreground font-round text-lg">
          바다, 강, 숲, 갯벌, 사막 중에서 골라보세요! 🌍
        </p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="inline-block p-6 rounded-full bg-destructive/10 mb-6">
          <MapPin className="h-16 w-16 text-destructive animate-bounce" />
        </div>
        <h2 className="text-2xl font-round font-bold text-foreground mb-4">
          아직 탐험할 수 없는 곳이에요! 😅
        </h2>
        <p className="text-muted-foreground font-round text-lg">
          다른 생태계를 찾아볼까요? (바다, 강, 숲, 갯벌, 사막)
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-round font-bold text-primary mb-2">
          🎉 {searchQuery} 생태계 탐험 결과
        </h2>
        <p className="text-muted-foreground font-round text-lg">
          총 {results.length}마리의 친구들을 발견했어요!
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {results.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};