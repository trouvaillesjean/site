import { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import ErrorMessage from '../ui/ErrorMessage';
import { useAuthStore } from '../../stores/authStore';
import { validateEmail, validatePassword, validateFullName } from '../../lib/validation';

interface AuthFormProps {
  mode: 'login' | 'register';
  onSuccess: () => void;
}

export default function AuthForm({ mode, onSuccess }: AuthFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const { signIn, signUp } = useAuthStore();

  const validateForm = () => {
    try {
      if (!validateEmail(formData.email)) {
        throw new Error('Email invalide');
      }
      if (!validatePassword(formData.password)) {
        throw new Error('Le mot de passe doit contenir au moins 6 caractères');
      }
      if (mode === 'register' && !validateFullName(formData.fullName)) {
        throw new Error('Le nom doit contenir au moins 2 caractères');
      }
    } catch (err) {
      if (err instanceof Error) {
        throw err;
      }
      throw new Error('Erreur de validation du formulaire');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      validateForm();
      
      if (mode === 'login') {
        await signIn(formData.email, formData.password);
      } else {
        await signUp(formData.email, formData.password, formData.fullName);
      }
      onSuccess();
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Une erreur est survenue');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <ErrorMessage message={error} />}

      {mode === 'register' && (
        <Input
          icon={User}
          label="Nom complet"
          type="text"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          placeholder="John Doe"
          required
        />
      )}

      <Input
        icon={Mail}
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="exemple@email.com"
        required
      />

      <Input
        icon={Lock}
        label="Mot de passe"
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        placeholder="••••••••"
        required
        minLength={6}
      />

      <Button 
        type="submit" 
        className="w-full" 
        disabled={isLoading}
      >
        {isLoading ? 'Chargement...' : mode === 'login' ? 'Se connecter' : 'S\'inscrire'}
      </Button>
    </form>
  );
}