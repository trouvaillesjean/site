import { CheckCircle, Clock, Package, Truck, AlertCircle } from 'lucide-react';
import { OrderStatus } from '../../types/order';

interface OrderTimelineProps {
  status: OrderStatus;
  createdAt: Date;
  shippedAt?: Date;
  deliveredAt?: Date;
  confirmedAt?: Date;
}

export default function OrderTimeline({ status, createdAt, shippedAt, deliveredAt, confirmedAt }: OrderTimelineProps) {
  const steps = [
    {
      icon: Clock,
      title: 'Commande passée',
      date: createdAt,
      isCompleted: true,
    },
    {
      icon: Package,
      title: 'Expédié par le vendeur',
      date: shippedAt,
      isCompleted: status !== 'pending_payment' && status !== 'paid',
    },
    {
      icon: Truck,
      title: 'Livré',
      date: deliveredAt,
      isCompleted: status === 'delivered' || status === 'confirmed' || status === 'disputed',
    },
    {
      icon: CheckCircle,
      title: 'Transaction confirmée',
      date: confirmedAt,
      isCompleted: status === 'confirmed',
    },
  ];

  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className={`rounded-full p-2 ${
            step.isCompleted ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-400'
          }`}>
            <step.icon className="w-5 h-5" />
          </div>
          <div>
            <p className={`font-medium ${step.isCompleted ? 'text-gray-900' : 'text-gray-500'}`}>
              {step.title}
            </p>
            {step.date && (
              <p className="text-sm text-gray-500">
                {step.date.toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}