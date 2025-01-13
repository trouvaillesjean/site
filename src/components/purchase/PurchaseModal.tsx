import { useState } from 'react';
import { ShoppingBag, Truck, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemPrice: number;
  onConfirm: () => void;
}

export default function PurchaseModal({ isOpen, onClose, itemPrice, onConfirm }: PurchaseModalProps) {
  const shippingCost = 4.95; // Mondial Relay
  const platformFee = itemPrice * 0.05; // 5% platform fee
  const total = itemPrice + shippingCost + platformFee;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex items-center gap-3 mb-6">
          <ShoppingBag className="w-6 h-6 text-emerald-600" />
          <h2 className="text-xl font-semibold">Confirmer votre achat</h2>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between">
            <span>Prix de l'article</span>
            <span className="font-medium">{itemPrice.toFixed(2)} €</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-gray-500" />
              <span>Frais de livraison (Mondial Relay)</span>
            </div>
            <span className="font-medium">{shippingCost.toFixed(2)} €</span>
          </div>
          <div className="flex justify-between">
            <span>Frais de service (5%)</span>
            <span className="font-medium">{platformFee.toFixed(2)} €</span>
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between">
              <span className="font-semibold">Total à payer</span>
              <span className="font-semibold">{total.toFixed(2)} €</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex gap-2">
            <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
            <p className="text-sm text-blue-700">
              Le vendeur dispose de 3 jours pour expédier l'article. Vous aurez ensuite 3 jours après réception pour confirmer ou contester la transaction.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" className="flex-1" onClick={onClose}>
            Annuler
          </Button>
          <Button className="flex-1" onClick={onConfirm}>
            Confirmer l'achat
          </Button>
        </div>
      </div>
    </div>
  );
}