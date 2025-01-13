import { useState } from 'react';
import { X } from 'lucide-react';
import AuthForm from './AuthForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: 'login' | 'register';
}

export default function AuthModal({ isOpen, onClose, mode = 'register' }: AuthModalProps) {
  const [currentMode, setCurrentMode] = useState(mode);
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">
            {currentMode === 'login' ? 'Connexion' : 'Créer un compte'}
          </h2>
          <p className="text-gray-600">
            {currentMode === 'login' 
              ? 'Connectez-vous pour commencer à vendre'
              : 'Inscrivez-vous pour commencer à vendre'}
          </p>
        </div>

        <AuthForm mode={currentMode} onSuccess={onClose} />

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            {currentMode === 'login' ? (
              <>
                Pas encore de compte ?{' '}
                <button
                  onClick={() => setCurrentMode('register')}
                  className="text-emerald-600 font-medium hover:text-emerald-700"
                >
                  S'inscrire
                </button>
              </>
            ) : (
              <>
                Déjà un compte ?{' '}
                <button
                  onClick={() => setCurrentMode('login')}
                  className="text-emerald-600 font-medium hover:text-emerald-700"
                >
                  Se connecter
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}