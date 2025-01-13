import { useAuthStore } from '../../stores/authStore';
import Button from '../ui/Button';
import { useState } from 'react';
import AuthModal from '../auth/AuthModal';

export default function AuthButton() {
  const { user, signOut } = useAuthStore();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-gray-600">{user.full_name || user.email}</span>
        <Button variant="outline" onClick={() => signOut()}>
          Déconnexion
        </Button>
      </div>
    );
  }

  return (
    <>
      <Button onClick={() => setIsAuthModalOpen(true)}>
        Connexion
      </Button>
      
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode="login"
      />
    </>
  );
}