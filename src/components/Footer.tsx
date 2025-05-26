
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-theme-secondary text-theme-foreground py-8 mt-auto text-center">
      <div className="container mx-auto px-6">
        <p className="text-sm">
          &copy; {currentYear} Comunidade Ministerial Feminina "Florescer". Todos os direitos reservados.
        </p>
        <p className="text-xs mt-2">
          Desenvolvido com ❤️ por Mulheres para Mulheres.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
