
import ProductDisplay from '@/components/ProductDisplay';
import { Button } from '@/components/ui/button';
import { Route, ExternalLink } from 'lucide-react';

const Index = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-[#f8f8f8] font-sans overflow-y-auto">
      {/* Navigation Bar - Simplified */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="bg-primary text-white p-2 rounded-md mr-2">
                <span className="font-bold text-xl">K</span>
              </div>
              <span className="text-xl font-bold">Koriam</span>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <div id="main" className="min-h-screen flex flex-col pt-20 pb-10 px-4 relative">
        <div className="container mx-auto text-center z-10 flex flex-col h-full justify-between">
          {/* Header Section */}
          <div className="max-w-4xl mx-auto space-y-6 pt-10">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Building the Future
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our suite of decentralised technologies built to redefine connectivity, data control, and community engagement for the next generation of digital experiences.
            </p>
          </div>
          
          {/* Products Display - Main Focus */}
          <div className="my-8">
            <ProductDisplay />
          </div>
          
          {/* Roadmap CTA */}
          <div className="w-full max-w-4xl mx-auto mb-10 mt-4">
            <div className="bg-gradient-to-r from-violet-500 to-purple-700 rounded-xl p-8 shadow-xl transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center">
                  <Route className="h-8 w-8 text-white mr-3 animate-pulse-slow" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Our Roadmap</h2>
                </div>
                <a 
                  href="https://roadmap.koriam.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    className="bg-white text-purple-700 hover:bg-purple-100 hover:text-purple-800 gap-2 shadow-lg"
                  >
                    View Roadmap
                    <ExternalLink className="h-4 w-4 animate-pulse-slow" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="py-4 mt-auto">
            <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Koriam. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
