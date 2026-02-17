/*
  Floating WhatsApp Button Component
  - Fixed position at bottom left
  - Gold accent color matching Art Deco theme
  - Smooth animations
*/

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number when provided
    const phoneNumber = '966500000000'; // Placeholder
    const message = encodeURIComponent('مرحباً، أرغب في الاستفسار عن خدماتكم');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 z-40 w-14 h-14 lg:w-16 lg:h-16 bg-accent hover:bg-accent/90 text-primary-foreground rounded-full shadow-lg shadow-accent/30 flex items-center justify-center transition-all duration-300 hover:scale-110 gold-shimmer group"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
      
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20" />
    </button>
  );
}
