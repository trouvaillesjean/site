import { useState } from 'react';
import OrderStatus from '../components/order/OrderStatus';
import PaymentSummary from '../components/order/PaymentSummary';

export default function OrderPage() {
  const [orderStatus, setOrderStatus] = useState<'pending' | 'shipped' | 'delivered' | 'confirmed'>('pending');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-8">Suivi de commande</h1>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
              <OrderStatus 
                status={orderStatus} 
                trackingNumber={orderStatus === 'shipped' ? 'CB123456789FR' : undefined}
              />
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-semibold text-lg mb-4">Détails de l'article</h3>
                <div className="flex gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3"
                    alt="Article"
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-medium">iPhone 12 Pro - 128Go</h4>
                    <p className="text-gray-600">Vendu par: John Doe</p>
                    <p className="text-emerald-600 font-medium mt-2">550,00 €</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <PaymentSummary
                itemPrice={550}
                shippingCost={8.90}
                platformFee={27.50}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}