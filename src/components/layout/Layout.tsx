import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import AuthButton from './AuthButton';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-emerald-600" />
              <span className="text-2xl font-bold text-emerald-600">LiveSell</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/seller" className="text-gray-600 hover:text-gray-900">
                Mode Vendeur
              </Link>
              <Link to="/buyer" className="text-gray-600 hover:text-gray-900">
                Mode Acheteur
              </Link>
              <AuthButton />
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <Link 
                to="/seller" 
                className="block text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Mode Vendeur
              </Link>
              <Link 
                to="/buyer" 
                className="block text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Mode Acheteur
              </Link>
              <div className="pt-2">
                <AuthButton />
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-50 border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>© 2024 LiveSell. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}