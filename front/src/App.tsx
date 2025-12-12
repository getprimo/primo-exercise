import { LoginPage } from './pages/Login';
import { WelcomePage } from './pages/Welcome';
import { useAppContext } from './AppContext';

function App() {
  // Handle page display depending on the authentication status
  const { isAuthenticated } = useAppContext();

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
