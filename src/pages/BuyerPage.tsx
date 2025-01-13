import { useState } from 'react';
import { Bell, Search, Calendar, Heart, Lock, MessageCircle, ShoppingBag } from 'lucide-react';
import Button from '../components/ui/Button';
import AuthModal from '../components/auth/AuthModal';

export default function BuyerPage() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [lastAttemptedAction, setLastAttemptedAction] = useState<'buy' | 'message' | null>(null);

  const handleAuthRequired = (action: 'buy' | 'message') => {
    setLastAttemptedAction(action);
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {/* En-tête */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <Search className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h1 className="text-3xl font-bold mb-4">Espace Acheteur</h1>
                <p className="text-gray-600">
                  Découvrez les ventes en direct et trouvez des objets uniques !
                </p>
              </div>

              {/* Barre de recherche */}
              <div className="relative max-w-xl mx-auto">
                <input
                  type="text"
                  placeholder="Rechercher des ventes par catégorie, type d'objets..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Information sur l'authentification */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Lock className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <div>
                  <h2 className="text-lg font-semibold text-blue-900 mb-2">
                    Visualisez gratuitement, achetez en toute sécurité
                  </h2>
                  <p className="text-blue-700">
                    Vous pouvez regarder toutes les ventes en direct sans inscription.
                    Pour acheter ou discuter avec les vendeurs, créez gratuitement votre compte.
                  </p>
                </div>
              </div>
            </div>

            {/* Lives en cours */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-semibold mb-6">Lives en cours</h2>
              <div className="grid gap-4">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        <span className="text-red-500 font-medium">En direct</span>
                      </div>
                      <h3 className="font-semibold text-lg mt-2">Collection Vintage</h3>
                      <p className="text-gray-600 mt-1">
                        Meubles et objets déco des années 50-60
                      </p>
                      <p className="text-emerald-600 font-medium mt-2">
                        Prix à partir de 45€
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                      <Button 
                        variant="outline" 
                        className="flex items-center gap-2"
                        onClick={() => handleAuthRequired('message')}
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Chat</span>
                      </Button>
                      <Button 
                        className="flex items-center gap-2"
                        onClick={() => handleAuthRequired('buy')}
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Acheter</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Prochaines ventes */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-semibold mb-6">Prochaines ventes</h2>
              <div className="space-y-4">
                <div className="bg-white border rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">Collection Vintage</h3>
                      <p className="text-gray-600 mt-1">
                        Vêtements et accessoires des années 70-80
                      </p>
                      <p className="text-emerald-600 font-medium mt-2">
                        Samedi 23 Mars - 15:00
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-2"
                        onClick={() => handleAuthRequired('message')}
                      >
                        <Bell className="w-4 h-4" />
                        Rappel
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-2"
                        onClick={() => handleAuthRequired('message')}
                      >
                        <Heart className="w-4 h-4" />
                        Favoris
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode="register"
      />
    </div>
  );
}