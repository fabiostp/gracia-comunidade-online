
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Usando o shadcn button
import { Input } from "@/components/ui/input"; // Usando o shadcn input
import { Label } from "@/components/ui/label"; // Usando o shadcn label
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LogIn, UserPlus, Mail, KeyRound } from "lucide-react";

const AuthPage = () => {
  const { type } = useParams(); // 'login' or 'register'

  const isLogin = type === "login";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica de autenticação virá aqui com Supabase
    console.log("Form submitted for:", type);
    // Exemplo: toast({ title: "Em construção!", description: `Funcionalidade de ${isLogin ? "Login" : "Cadastro"} será implementada.` });
  };

  return (
    <div className="flex-grow container mx-auto px-6 py-12 flex flex-col items-center justify-center">
      <Card className="w-full max-w-md shadow-xl bg-white">
        <CardHeader className="text-center">
          <div className="mx-auto bg-theme-accent p-3 rounded-full w-fit mb-4">
            {isLogin ? <LogIn size={32} className="text-theme-primary-foreground" /> : <UserPlus size={32} className="text-theme-primary-foreground" />}
          </div>
          <CardTitle className="text-3xl font-playfair text-theme-primary">{isLogin ? "Bem-vinda de volta!" : "Crie sua conta"}</CardTitle>
          <CardDescription className="text-theme-foreground">
            {isLogin ? "Acesse sua conta para continuar." : "Junte-se à nossa comunidade."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-theme-foreground">Nome Completo</Label>
                <Input id="name" type="text" placeholder="Seu nome completo" required className="bg-theme-background border-theme-accent focus:ring-theme-accent" />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-theme-foreground">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input id="email" type="email" placeholder="seuemail@exemplo.com" required className="pl-10 bg-theme-background border-theme-accent focus:ring-theme-accent" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-theme-foreground">Senha</Label>
               <div className="relative">
                <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input id="password" type="password" placeholder="Sua senha" required className="pl-10 bg-theme-background border-theme-accent focus:ring-theme-accent" />
              </div>
            </div>
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="confirm-password" className="text-theme-foreground">Confirmar Senha</Label>
                <Input id="confirm-password" type="password" placeholder="Confirme sua senha" required className="bg-theme-background border-theme-accent focus:ring-theme-accent" />
              </div>
            )}
            <Button type="submit" className="w-full bg-theme-accent text-theme-primary-foreground hover:bg-opacity-90 text-lg py-3">
              {isLogin ? "Entrar" : "Cadastrar"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-2">
          {isLogin ? (
            <p className="text-sm text-theme-foreground">
              Não tem uma conta?{" "}
              <Link to="/auth/register" className="font-semibold text-theme-accent hover:underline">
                Cadastre-se
              </Link>
            </p>
          ) : (
            <p className="text-sm text-theme-foreground">
              Já tem uma conta?{" "}
              <Link to="/auth/login" className="font-semibold text-theme-accent hover:underline">
                Faça Login
              </Link>
            </p>
          )}
           {isLogin && (
             <Link to="#" className="text-sm text-theme-accent hover:underline">
                Esqueceu sua senha?
              </Link>
           )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthPage;
