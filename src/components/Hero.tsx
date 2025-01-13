import { ArrowRight, Clock, ShoppingBag } from 'lucide-react';
import Button from './Button';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Vendez vos objets</span>
                <span className="block text-emerald-600">en quelques minutes</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Présentez vos objets d'occasion en direct live et vendez-les instantanément. Simple, rapide et efficace !
              </p>
              <div className="mt-8 space-y-4 sm:space-y-0 sm:flex sm:gap-4">
                <Button size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5" />
                  Vendre maintenant
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto flex items-center justify-center gap-2">
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
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Vente en direct"
        />
      </div>
    </div>
  );
}