import { Camera, Banknote, Clock } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    title: 'Présentez en Direct',
    description: 'Montrez vos objets en temps réel via notre système de live streaming intégré.'
  },
  {
    icon: Clock,
    title: 'Vendez en Minutes',
    description: 'Négociez et vendez rapidement pendant le live avec des acheteurs intéressés.'
  },
  {
    icon: Banknote,
    title: 'Paiement Instantané',
    description: 'Recevez votre argent immédiatement après la vente de manière sécurisée.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Vendez en 3 étapes simples</h2>
          <p className="text-gray-600">
            Notre plateforme vous permet de vendre vos objets rapidement et en toute simplicité
            grâce au live streaming.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-emerald-200" />
              )}
              <div className="text-center relative">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-emerald-100 mb-6">
                  <step.icon className="w-12 h-12 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}