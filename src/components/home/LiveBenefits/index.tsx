import BenefitCard from './BenefitCard';
import CallToAction from './CallToAction';
import { benefits } from './data';

export default function LiveBenefits() {
  return (
    <section className="py-24 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">
            La révolution de la vente d'occasion
          </h2>
          <p className="text-lg text-gray-600">
            Oubliez les anciennes méthodes chronophages. Avec LiveSell, présentez vos articles
            en direct et vendez-les en quelques minutes !
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>

        <CallToAction />
      </div>
    </section>
  );
}