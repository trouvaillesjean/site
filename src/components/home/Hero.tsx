import { useState } from 'react';
import { ArrowRight, Clock, ShoppingBag } from 'lucide-react';
import Button from '../ui/Button';
import AuthModal from '../auth/AuthModal';
import SalesModal from '../sales/SalesModal';

export default function Hero() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);

  const handleStartSelling = () => {
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <div className="relative bg-white">
        {/* Background container */}
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 w-full lg:max-w-2xl">
            <main className="pt-10 px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8">
              <div className="text-center lg:text-left">
                <span className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Vente en live entre particuliers
                </span>
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Vendez vos objets d'occasion</span>
                  <span className="block text-emerald-600">en quelques minutes !</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Présentez vos objets en direct live et vendez-les instantanément. 
                  Plus besoin de créer des annonces ou de répondre à des messages !
                </p>
                <div className="mt-8 space-y-4 sm:space-y-0 sm:flex sm:gap-4">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto flex items-center justify-center gap-2"
                    onClick={handleStartSelling}
                  >
                    <Clock className="w-5 h-5" />
                    Vendre maintenant
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full sm:w-auto flex items-center justify-center gap-2"
                    onClick={() => setIsSalesModalOpen(true)}
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Voir les ventes
                  </Button>
                </div>
                
                {/* Quick Stats */}
                <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-emerald-600">5 min</div>
                    <div className="mt-1 text-sm text-gray-500">Temps moyen de vente</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-emerald-600">+2000</div>
                    <div className="mt-1 text-sm text-gray-500">Objets vendus</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-emerald-600">95%</div>
                    <div className="mt-1 text-sm text-gray-500">Vendeurs satisfaits</div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>

        {/* Image section */}
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:hidden z-10" />
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
              alt="Vente en direct"
            />
          </div>
        </div>
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode="register"
      />

      <SalesModal
        isOpen={isSalesModalOpen}
        onClose={() => setIsSalesModalOpen(false)}
      />
    </>
  );
}