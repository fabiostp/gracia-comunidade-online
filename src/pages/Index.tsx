
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeartHandshake, Users, MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="flex-grow flex flex-col">
      {/* Seção Hero */}
      <section className="bg-gradient-to-br from-theme-secondary via-white to-theme-secondary py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-theme-primary mb-6 leading-tight">
            Comunidade Ministerial Feminina <span className="text-theme-accent">Florescer</span>
          </h1>
          <p className="text-xl md:text-2xl text-theme-foreground mb-10 max-w-3xl mx-auto">
            Um espaço de acolhimento, crescimento e fortalecimento para mulheres cristãs dedicadas ao ministério.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-theme-accent text-theme-primary-foreground hover:bg-opacity-90 text-lg px-8 py-3 shadow-lg transform hover:scale-105 transition-transform">
              <Link to="/auth/register">Junte-se à Comunidade</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-theme-accent text-theme-accent hover:bg-theme-accent hover:text-theme-primary-foreground text-lg px-8 py-3 shadow-lg transform hover:scale-105 transition-transform">
              <Link to="/auth/login">Já sou Membra</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-playfair font-bold text-theme-primary text-center mb-12">Nossa Missão</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-theme-background rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <HeartHandshake size={48} className="text-theme-accent mx-auto mb-4" />
              <h3 className="text-2xl font-playfair text-theme-primary mb-2">Acolher</h3>
              <p className="text-theme-foreground">Criar um ambiente seguro e amoroso onde cada mulher se sinta valorizada e compreendida em sua jornada ministerial.</p>
            </div>
            <div className="p-6 bg-theme-background rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Users size={48} className="text-theme-accent mx-auto mb-4" />
              <h3 className="text-2xl font-playfair text-theme-primary mb-2">Conectar</h3>
              <p className="text-theme-foreground">Promover laços de irmandade e apoio mútuo, incentivando a troca de experiências e sabedoria entre as membras.</p>
            </div>
            <div className="p-6 bg-theme-background rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <MessageCircle size={48} className="text-theme-accent mx-auto mb-4" />
              <h3 className="text-2xl font-playfair text-theme-primary mb-2">Capacitar</h3>
              <p className="text-theme-foreground">Oferecer recursos, mentoria e encorajamento para que cada mulher floresça em seu chamado e sirva com excelência.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Seção de Chamada para Ação */}
      <section className="py-16 bg-theme-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-playfair font-bold text-theme-primary mb-6">Pronta para Florescer Conosco?</h2>
          <p className="text-xl text-theme-foreground mb-8 max-w-xl mx-auto">
            Faça parte de uma rede de mulheres que entendem seus desafios e celebram suas vitórias.
          </p>
          <Button asChild size="lg" className="bg-theme-accent text-theme-primary-foreground hover:bg-opacity-90 text-lg px-10 py-4 shadow-lg transform hover:scale-105 transition-transform">
            <Link to="/auth/register">Quero Fazer Parte</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
