import { ShieldCheck, Clock, Leaf } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Vente Ultra Rapide',
    description: 'Vendez vos objets en quelques minutes seulement grâce à notre système de live streaming innovant.'
  },
  {
    icon: ShieldCheck,
    title: 'Transactions Sécurisées',
    description: 'Paiements protégés et sécurisés pour tous les utilisateurs de la plateforme.'
  },
  {
    icon: Leaf,
    title: 'Impact Écologique',
    description: 'Contribuez à la réduction des déchets en donnant une seconde vie à vos objets.'
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">La vente d'occasion réinventée</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Notre plateforme révolutionne la vente d'occasion en la rendant plus rapide,
            plus simple et plus interactive que jamais.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-6">
                <feature.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}