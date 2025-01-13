import { CreditCard, Truck, Info } from 'lucide-react';
import Button from '../ui/Button';

interface PaymentSummaryProps {
  itemPrice: number;
  shippingCost: number;
  platformFee: number;
}

export default function PaymentSummary({ itemPrice, shippingCost, platformFee }: PaymentSummaryProps) {
  const total = itemPrice + shippingCost + platformFee;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Résumé de la commande</h3>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Prix de l'article</span>
          <span className="font-medium">{itemPrice.toFixed(2)} €</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-gray-500" />
            <span>Frais de livraison (Mondial Relay)</span>
          </div>
          <span className="font-medium">{shippingCost.toFixed(2)} €</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <span className="text-gray-600">Frais de service</span>
            <Info className="w-4 h-4 text-gray-400" />
          </div>
          <span className="font-medium">{platformFee.toFixed(2)} €</span>
        </div>
        
        <div className="border-t pt-3">
          <div className="flex justify-between">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">{total.toFixed(2)} €</span>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <Button className="w-full flex items-center justify-center gap-2">
          <CreditCard className="w-5 h-5" />
          Payer maintenant
        </Button>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Truck className="w-4 h-4" />
          <span>Livraison via Mondial Relay ou Colissimo</span>
        </div>
      </div>
    </div>
  );
}