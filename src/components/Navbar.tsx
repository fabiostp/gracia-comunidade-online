
import { Link } from "react-router-dom";
import { Users, LogIn, Home } from "lucide-react"; // Adicionando Users para o ícone da comunidade

const Navbar = () => {
  return (
    <nav className="bg-theme-secondary shadow-md py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-playfair font-bold text-theme-primary hover:text-theme-accent transition-colors">
          Comunidade Florescer
        </Link>
        <div className="space-x-4">
          <Link
            to="/"
            className="flex items-center text-theme-primary hover:text-theme-accent transition-colors px-3 py-2 rounded-md text-sm font-medium"
          >
            <Home size={18} className="mr-1" />
            Início
          </Link>
          <Link
            to="/auth/login"
            className="flex items-center text-theme-primary hover:text-theme-accent transition-colors px-3 py-2 rounded-md text-sm font-medium"
          >
            <LogIn size={18} className="mr-1" />
            Login
          </Link>
          <Link
            to="/auth/register"
            className="flex items-center bg-theme-accent text-theme-primary-foreground hover:bg-opacity-90 transition-colors px-4 py-2 rounded-md text-sm font-medium shadow"
          >
            <Users size={18} className="mr-1" />
            Cadastre-se
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
