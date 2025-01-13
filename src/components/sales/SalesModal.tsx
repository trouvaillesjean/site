import { useState } from 'react';
import { X, Calendar, ShoppingBag, MessageCircle, Bell } from 'lucide-react';
import Button from '../ui/Button';
import { useAuthStore } from '../../stores/authStore';
import AuthModal from '../auth/AuthModal';

interface Sale {
  id: string;
  title: string;
  description: string;
  startPrice: number;
  status: 'live' | 'upcoming';
  startTime?: string;
}

// Simulated sales data - replace with actual API call
const mockSales: Sale[] = [
  {
    id: '1',
    title: 'Collection Vintage',
    description: 'Meubles et objets déco des années 50-60',
    startPrice: 45,
    status: 'live'
  },
  {
    id: '2',
    title: 'Collection Mode',
    description: 'Vêtements et accessoires des années 70-80',
    startPrice: 25,
    status: 'upcoming',
    startTime: '2024-03-23T15:00:00'
  }
];

interface SalesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SalesModal({ isOpen, onClose }: SalesModalProps) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user } = useAuthStore();
  
  const liveSales = mockSales.filter(sale => sale.status === 'live');
  const upcomingSales = mockSales.filter(sale => sale.status === 'upcoming');

  if (!isOpen) return null;

  const handleAuthRequired = () => {
    if (!user) {
      setIsAuthModalOpen(true);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-3xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Ventes en cours et à venir</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        {mockSales.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Aucune vente pour le moment
            </h3>
            <p className="text-gray-600 mb-6">
              Revenez plus tard pour découvrir de nouvelles ventes passionnantes !
            </p>
            <Button 
              variant="outline"
              onClick={onClose}
              className="inline-flex items-center gap-2"
            >
              <Bell className="w-4 h-4" />
              Être notifié des nouvelles ventes
            </Button>
          </div>
        ) : (
          <div className="space-y-8">
            {liveSales.length > 0 && (
              <section>
                <h3 className="text-lg font-semibold mb-4">En direct</h3>
                <div className="space-y-4">
                  {liveSales.map(sale => (
                    <div key={sale.id} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                            <span className="text-red-500 font-medium">En direct</span>
                          </div>
                          <h4 className="font-semibold text-lg mt-2">{sale.title}</h4>
                          <p className="text-gray-600 mt-1">{sale.description}</p>
                          <p className="text-emerald-600 font-medium mt-2">
                            Prix à partir de {sale.startPrice}€
                          </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                          <Button 
                            variant="outline" 
                            className="flex items-center gap-2"
                            onClick={handleAuthRequired}
                          >
                            <MessageCircle className="w-4 h-4" />
                            Chat
                          </Button>
                          <Button 
                            className="flex items-center gap-2"
                            onClick={handleAuthRequired}
                          >
                            <ShoppingBag className="w-4 h-4" />
                            Acheter
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {upcomingSales.length > 0 && (
              <section>
                <h3 className="text-lg font-semibold mb-4">À venir</h3>
                <div className="space-y-4">
                  {upcomingSales.map(sale => (
                    <div key={sale.id} className="bg-white border rounded-lg shadow-sm p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-lg">{sale.title}</h4>
                          <p className="text-gray-600 mt-1">{sale.description}</p>
                          <p className="text-emerald-600 font-medium mt-2">
                            {sale.startTime && formatDate(sale.startTime)}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex items-center gap-2"
                            onClick={handleAuthRequired}
                          >
                            <Bell className="w-4 h-4" />
                            Rappel
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode="register"
      />
    </div>
  );
}