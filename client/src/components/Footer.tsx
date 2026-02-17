/*
  Art Deco Luxury Footer Component
  - Black background with gold geometric patterns
  - Social media links
  - Copyright information
*/

import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-accent/30 relative overflow-hidden">
      {/* Art Deco Top Border Pattern */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-l from-transparent via-accent to-transparent" />
      
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-12 h-12 bg-accent flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground font-['Playfair_Display']">
                  RM
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground font-['Playfair_Display']">
                مؤسسة الرماح الماسية
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              نصنع الفخامة في تفاصيل الإضاءة والديكور، ونقدم تصاميم نجف وستائر تضيف لمسة راقية لكل مساحة.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-accent mb-4 font-['Montserrat']">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-accent transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">
                  خدماتنا
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-muted-foreground hover:text-accent transition-colors">
                  معرض الصور
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-accent mb-4 font-['Montserrat']">معلومات التواصل</h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                <MapPin size={18} className="text-accent" />
                <span>جدة - المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                <Phone size={18} className="text-accent" />
                <span>سيتم إضافة الرقم لاحقاً</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                <Mail size={18} className="text-accent" />
                <span>info@alrimah.sa</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-l from-transparent via-accent/30 to-transparent" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            جميع الحقوق محفوظة © {new Date().getFullYear()} مؤسسة الرماح الماسية
          </p>
        </div>
      </div>

      {/* Art Deco Corner Decorations */}
      <div className="absolute bottom-4 left-4 w-12 h-12 border-r border-b border-accent/20" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-l border-b border-accent/20" />
    </footer>
  );
}
