import { Camera, Upload, Calendar, Settings } from 'lucide-react';
import Button from '../components/Button';

export default function SellerPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {/* En-tête */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <Camera className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h1 className="text-3xl font-bold mb-4">Espace Vendeur</h1>
                <p className="text-gray-600">
                  Commencez à vendre vos objets en quelques clics. Présentez-les en direct et
                  trouvez rapidement des acheteurs intéressés.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Button className="flex items-center justify-center gap-2">
                  <Camera className="w-5 h-5" />
                  Démarrer un live maintenant
                </Button>
                <Button variant="outline" className="flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Programmer un live
                </Button>
              </div>
            </div>

            {/* Préparation des objets */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-semibold mb-6">Préparer vos objets</h2>
              <div className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Déposez vos photos ici ou</p>
                  <Button variant="outline" size="sm">Parcourir</Button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Titre de la vente
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder="Ex: Collection Vintage - Vêtements et Accessoires"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description des objets
                    </label>
                    <textarea
                      rows={4}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder="Décrivez les objets que vous souhaitez vendre..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Prix indicatif total
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 pl-8"
                        placeholder="0.00"
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">€</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ventes programmées */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-semibold mb-6">Vos prochaines ventes</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Collection Vintage</p>
                      <p className="text-gray-600 text-sm mt-1">
                        Vêtements et accessoires des années 70-80
                      </p>
                      <p className="text-emerald-600 font-medium mt-2">
                        Samedi 23 Mars - 15:00
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Modifier
                      </Button>
                      <Button variant="outline" size="sm">
                        Annuler
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Paramètres de vente */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Paramètres de vente</h2>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Configurer
                </Button>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Durée maximale du live</h3>
                  <p className="text-gray-600 text-sm">30 minutes par défaut</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Paiement instantané</h3>
                  <p className="text-gray-600 text-sm">Activé</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}