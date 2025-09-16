import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Sparkles } from 'lucide-react';

interface SearchSectionProps {
  onSearch: (query: string) => void;
}

export const SearchSection = ({ onSearch }: SearchSectionProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-12">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="text"
            placeholder="궁금한 생태계의 이름을 입력해 보세요 (예: 바다, 숲)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-6 text-lg font-round border-2 border-border/50 focus:border-primary/50 bg-input shadow-card transition-all duration-300"
          />
        </div>
        <Button 
          type="submit" 
          size="lg"
          className="px-8 py-6 text-lg font-round font-bold bg-gradient-primary hover:scale-105 shadow-button transition-all duration-300 border-0"
        >
          <Sparkles className="mr-2 h-5 w-5" />
          탐험하기!
        </Button>
      </form>
    </div>
  );
};