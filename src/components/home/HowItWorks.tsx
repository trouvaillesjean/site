import { Camera, Clock, CreditCard, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    title: 'Présentez en Direct',
    description: 'Montrez vos objets en temps réel via notre système de live streaming intégré.',
    number: '1'
  },
  {
    icon: Clock,
    title: 'Vendez en quelques minutes',
    description: 'Négociez et vendez rapidement pendant le live avec des acheteurs intéressés.',
    number: '2'
  },
  {
    icon: CreditCard,
    title: 'Paiement Sécurisé',
    description: 'L\'argent est immédiatement comptabilisé sur votre compte LiveSell de manière sécurisée.',
    number: '3'
  },
  {
    icon: Truck,
    title: 'Expédition Simple',
    description: 'Envoyez votre article avec le bon d\'envoi reçu automatiquement après la vente.',
    number: '4'
  },
  {
    icon: CheckCircle,
    title: 'Validation & Paiement',
    description: 'Une fois l\'article reçu et validé conforme par l\'acheteur, votre paiement est débloqué.',
    number: '5'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Vendez en 5 étapes simples</h2>
          <p className="text-gray-600">
            Notre plateforme sécurisée vous permet de vendre vos objets rapidement
            et en toute confiance grâce au live streaming.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-emerald-200 -translate-x-1/2" />
              )}
              <div className="text-center relative">
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-emerald-100 mb-6 mx-auto">
                  <step.icon className="w-12 h-12 text-emerald-600" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Clock className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Processus rapide et sécurisé</h4>
              <p className="text-gray-600">
                Notre système garantit une transaction sûre pour les deux parties. Le paiement est
                sécurisé et conservé jusqu'à la validation de la réception, vous permettant de
                vendre en toute confiance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}