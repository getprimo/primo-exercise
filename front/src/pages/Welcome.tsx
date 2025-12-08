import { User } from '../api/auth';

export const WelcomePage = () => {
  const user: User | null = null; // À remplacer

  const handleLogout = () => {
    console.log('Déconnexion...');
  };

  return (
    <div className="card">
        <h2>Bienvenue, {user?.name} !</h2>
        <p>Email: {user?.email}</p>
        <button onClick={handleLogout}>Se déconnecter</button>
    </div>
  );
}

