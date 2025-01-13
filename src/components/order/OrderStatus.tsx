import { Package, Truck, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';

interface OrderStatusProps {
  status: 'pending' | 'shipped' | 'delivered' | 'confirmed';
  trackingNumber?: string;
}

export default function OrderStatus({ status, trackingNumber }: OrderStatusProps) {
  const statusConfig = {
    pending: {
      icon: Package,
      title: 'En attente d\'expédition',
      description: 'Le vendeur doit expédier votre article',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    shipped: {
      icon: Truck,
      title: 'En cours de livraison',
      description: 'Votre colis est en route',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    delivered: {
      icon: CheckCircle,
      title: 'Livré',
      description: 'Veuillez vérifier votre article',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100'
    },
    confirmed: {
      icon: CheckCircle,
      title: 'Commande confirmée',
      description: 'Le paiement a été débloqué pour le vendeur',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100'
    }
  };

  const currentStatus = statusConfig[status];
  const StatusIcon = currentStatus.icon;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className={`${currentStatus.bgColor} p-3 rounded-full`}>
          <StatusIcon className={`w-6 h-6 ${currentStatus.color}`} />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{currentStatus.title}</h3>
          <p className="text-gray-600">{currentStatus.description}</p>
        </div>
      </div>

      {trackingNumber && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Numéro de suivi:</p>
              <p className="font-medium">{trackingNumber}</p>
            </div>
            <Button variant="outline" size="sm">Suivre le colis</Button>
          </div>
        </div>
      )}

      {status === 'delivered' && (
        <div className="mt-4">
          <Button className="w-full">Confirmer la réception</Button>
          <Button variant="outline" className="w-full mt-2 flex items-center justify-center gap-2">
            <AlertCircle className="w-4 h-4" />
            Signaler un problème
          </Button>
        </div>
      )}
    </div>
  );
}