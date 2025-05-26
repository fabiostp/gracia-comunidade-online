
import { ShieldCheck } from "lucide-react";

const DashboardPage = () => {
  return (
    <div className="flex-grow container mx-auto px-6 py-12 flex flex-col items-center justify-center text-center">
      <ShieldCheck size={64} className="text-theme-accent mb-6" />
      <h1 className="text-4xl font-playfair font-bold text-theme-primary mb-4">
        Bem-vinda ao seu Espaço Seguro!
      </h1>
      <p className="text-xl text-theme-foreground mb-8 max-w-2xl">
        Este é o painel da comunidade. Em breve, aqui você poderá interagir com outras membras, compartilhar experiências e crescer em fé e ministério.
      </p>
      <p className="text-lg text-theme-foreground">
        Funcionalidades como postagens, fóruns e mensagens diretas serão adicionadas em breve!
      </p>
      {/* Conteúdo do Dashboard virá aqui */}
    </div>
  );
};

export default DashboardPage;
