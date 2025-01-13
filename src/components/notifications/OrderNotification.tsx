import { ShoppingBag, Package, AlertCircle } from 'lucide-react';
import { OrderStatus } from '../../types/order';

interface OrderNotificationProps {
  type: 'purchase' | 'shipping' | 'delivery' | 'dispute';
  status: OrderStatus;
  orderId: string;
}

export default function OrderNotification({ type, status, orderId }: OrderNotificationProps) {
  const notificationConfig = {
    purchase: {
      icon: ShoppingBag,
      title: 'Nouvelle commande à expédier',
      description: 'Vous avez 3 jours pour expédier la commande',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100',
    },
    shipping: {
      icon: Package,
      title: 'Commande expédiée',
      description: 'Votre commande est en route',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    delivery: {
      icon: Package,
      title: 'Commande livrée',
      description: 'Confirmez la réception de votre commande',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    dispute: {
      icon: AlertCircle,
      title: 'Litige en cours',
      description: 'Un problème a été signalé sur votre commande',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
  };

  const config = notificationConfig[type];

  return (
    <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow">
      <div className={`${config.bgColor} rounded-full p-2`}>
        <config.icon className={`w-5 h-5 ${config.color}`} />
      </div>
      <div>
        <h3 className="font-medium">{config.title}</h3>
        <p className="text-sm text-gray-600">{config.description}</p>
        <p className="text-sm text-gray-500 mt-1">Commande #{orderId}</p>
      </div>
    </div>
  );
}