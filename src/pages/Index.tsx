import { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { SearchSection } from '@/components/SearchSection';
import { ResultsSection } from '@/components/ResultsSection';
import { searchAnimals, Animal } from '@/data/ecosystems';

const Index = () => {
  const [results, setResults] = useState<Animal[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (query: string) => {
    const searchResults = searchAnimals(query);
    setResults(searchResults);
    setSearchQuery(query);
    setHasSearched(true);
  };

  return (
    <div className="min-h-screen bg-gradient-background font-round">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-3">
            <div className="p-3 rounded-full bg-gradient-primary animate-float">
              <SearchIcon className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-round font-bold bg-gradient-primary bg-clip-text text-transparent">
              🌍 곡수초 생태계 탐험대
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Search Section */}
        <SearchSection onSearch={handleSearch} />
        
        {/* Results Section */}
        <ResultsSection 
          results={results} 
          searchQuery={searchQuery} 
          hasSearched={hasSearched} 
        />
      </main>

      {/* Footer */}
      <footer className="mt-20 py-8 bg-card/50 border-t border-border/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground font-round">
            🌱 생태계를 탐험하며 자연의 소중함을 배워요! 🌱
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
