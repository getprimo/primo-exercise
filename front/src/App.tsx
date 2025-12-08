import { LoginPage } from './pages/Login';
import { WelcomePage } from './pages/Welcome';

function App() {
  // Handle page display depending on the authentication status
  const isAuthenticated = false;

  return (
    <div>
      <h1>Exercice Frontend</h1>
      
      {isAuthenticated ? (
        <WelcomePage />
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default App;
