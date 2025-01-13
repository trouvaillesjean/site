import { Camera } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="mt-16 bg-emerald-600 rounded-2xl p-8 max-w-4xl mx-auto text-center text-white">
      <h3 className="text-2xl font-bold mb-4">
        Vendez plus vite, vendez plus simple !
      </h3>
      <p className="text-emerald-100 mb-6 text-lg">
        En moyenne, nos vendeurs concluent leurs ventes en moins de 5 minutes
        pendant leur live. Rejoignez la révolution de la vente d'occasion !
      </p>
      <div className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors cursor-pointer">
        <Camera className="w-5 h-5" />
        Démarrer mon premier live
      </div>
    </div>
  );
}