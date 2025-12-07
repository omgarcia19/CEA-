import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '525613771948';
  const message = encodeURIComponent('Hola, me interesa obtener más información sobre sus servicios.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 text-primary-foreground px-5 py-4 rounded-full shadow-xl hover:bg-green-600 transition-all duration-300 hover:scale-105 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 animate-pulse-soft" />
      <span className="font-semibold hidden sm:inline-block">
        ¡Escríbenos!
      </span>
      
      {/* Ping animation */}
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-400"></span>
      </span>
    </a>
  );
};

export default WhatsAppButton;
