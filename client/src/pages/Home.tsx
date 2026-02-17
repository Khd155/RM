/*
  Art Deco Luxury Home Page
  - Hero section with dramatic chandelier image
  - About section with company information
  - Services section with gold accents
  - Gallery section with luxury interiors
  - Contact section with form
*/

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Sparkles, Palette, Ruler, Lightbulb, MapPin, Phone, Mail } from 'lucide-react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const services = [
    {
      icon: Sparkles,
      title: 'توريد وتركيب النجف الفاخر',
      description: 'نوفر أفخم أنواع النجف الكريستال والنحاس المذهب بتصاميم عالمية حصرية',
    },
    {
      icon: Palette,
      title: 'تصميم ستائر راقية',
      description: 'ستائر فاخرة بأقمشة عالية الجودة وتصاميم تناسب جميع الأذواق',
    },
    {
      icon: Ruler,
      title: 'تنفيذ حسب الطلب',
      description: 'نصمم وننفذ قطع فريدة حسب مواصفاتك ومساحتك الخاصة',
    },
    {
      icon: Lightbulb,
      title: 'استشارات ديكور وإضاءة',
      description: 'فريق متخصص لمساعدتك في اختيار الأنسب لمساحتك',
    },
  ];

  const galleryImages = [
    {
      url: 'https://private-us-east-1.manuscdn.com/sessionFile/blZ6vdiJqnPXZVxyjgMITG/sandbox/rDXGOplrFrGuMxSQOHKu5c-img-1_1771329031000_na1fn_aGVyby1jaGFuZGVsaWVy.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYmxaNnZkaUpxblBYWlZ4eWpnTUlURy9zYW5kYm94L3JEWEdPcGxyRnJHdU14U1FPSEt1NWMtaW1nLTFfMTc3MTMyOTAzMTAwMF9uYTFmbl9hR1Z5YnkxamFHRnVaR1ZzYVdWeS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=PdzrCAp8yfnyZM2mD~1-dEr5o4426HpaZa0AXp79GpLFn7Y-R1QhVWkXWfGNze7Y5w0rYjW3buNPFxQ3DDdWCTUqK0q6k1RDAQ6I2WYise8xtRpCaCP~Gcnpi31eaNPkjMsGpJMtQ3ejcMgOlMVN8cGXEDfE69BcwVnpM6D75fKytqKu2AvAkzgBBvzaFvdO6OlHnbQcglpfSTRPSa0lDa3BJHo5v8Rs52ee2wBKxgQNycNq7pikTOrB2ewEx14Bkb9Xa8DC8XI4zw5Lp0Evk~a~r7V-1E5sUTyHu0nsBivCLqGJS~pgPq-fN5uzkCqeTmjk~h6vhr8IEsr1GamkJA__',
      alt: 'نجف كريستال فاخر',
    },
    {
      url: 'https://private-us-east-1.manuscdn.com/sessionFile/blZ6vdiJqnPXZVxyjgMITG/sandbox/rDXGOplrFrGuMxSQOHKu5c-img-3_1771329030000_na1fn_Z2FsbGVyeS1pbnRlcmlvci0x.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYmxaNnZkaUpxblBYWlZ4eWpnTUlURy9zYW5kYm94L3JEWEdPcGxyRnJHdU14U1FPSEt1NWMtaW1nLTNfMTc3MTMyOTAzMDAwMF9uYTFmbl9aMkZzYkdWeWVTMXBiblJsY21sdmNpMHguanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=lvhMYZHibMflGQW6I-vXN60HxDtNLWP3EFIIlhhPLXFz5FAH7YuXFB4IqlabICm~2q2HF~pZ0ZpETxOPgcMesJvFl4Tp-FhJXLfe7DEeQG1bgO7FZljXLQs90B8~7r7p-T9JH-5VYBMIYhuUJoqQ4Qd0PDM~A8Nig5LankS2mK06DxKOOCQDIkUeiHw7V1Tp7ybdOHhQSDAT4W3KeNtD6XLQ8LFyyBbAX12bWSCmNzeP-nuc-k4gRGB5fhN7h-JjWZYtX3PxAIPzQJD~kQs7zgpfRcdpxn~QOK~CEIyPz3bOk9rSiqoEuHnFsZH6J1NvHyIHnY0r4BGtbRwpDXCHGA__',
      alt: 'صالة فاخرة بنجف كريستال',
    },
    {
      url: 'https://private-us-east-1.manuscdn.com/sessionFile/blZ6vdiJqnPXZVxyjgMITG/sandbox/rDXGOplrFrGuMxSQOHKu5c-img-4_1771329033000_na1fn_Z2FsbGVyeS1pbnRlcmlvci0y.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYmxaNnZkaUpxblBYWlZ4eWpnTUlURy9zYW5kYm94L3JEWEdPcGxyRnJHdU14U1FPSEt1NWMtaW1nLTRfMTc3MTMyOTAzMzAwMF9uYTFmbl9aMkZzYkdWeWVTMXBiblJsY21sdmNpMHkuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=nQ1~5yzrJenj0cw4lgE3itHgp9aGk72InfsQwQvTW2BqLy5gD8jxxquA3OAJ0XyTfKSAsYBXF8C3Ker37h26aFOM1IAVSItd5oaXq5T1WkzDE2A5PEEIIBSMdVG~nqT0P994bBw8blPKuObL0GdNaaUZtg3wbu~iUgWmoNxpFy-VeKSU-gul9G9yTI0YQuFNQ4qyAk65wtkCeLd09otdAs~rPD-ekRwY~J4wAqd8ZdPgItk9NqWyLXDs7teB-hkVNqSC1SZOf7IovGEaZBzuEXJ6QYKv7-O3JskpCPVMPVX9~IAg9A4vcUgp9i2cVnrFZSTaErUnIP8a6HAJoi0DqQ__',
      alt: 'غرفة طعام فاخرة',
    },
    {
      url: 'https://private-us-east-1.manuscdn.com/sessionFile/blZ6vdiJqnPXZVxyjgMITG/sandbox/rDXGOplrFrGuMxSQOHKu5c-img-2_1771329029000_na1fn_bHV4dXJ5LWN1cnRhaW5z.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYmxaNnZkaUpxblBYWlZ4eWpnTUlURy9zYW5kYm94L3JEWEdPcGxyRnJHdU14U1FPSEt1NWMtaW1nLTJfMTc3MTMyOTAyOTAwMF9uYTFmbl9iSFY0ZFhKNUxXTjFjblJoYVc1ei5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HkjxGQYlQcvEF6EO8hO1e56LTkCBFjyUiJOG7UiHnPhVVAjuzPwAVeyb2FTQEHxD6nkISsjvinLNVAZXxvtdX0NCrjVV77u6YmNMYO-YdbKX3E0nmSxh3JiSe33doqynBB4v-GQcjLzneNU5YAU0FbV8zDFDzZURfkrtK2ztRzqDc5NFDZZEeayqKZhtK2T4HCx2VOjWno~XYPeg74Og2pOi73isgjhoKIXDo7r1OjmlFAE7rhXDZuvKf7V-ic97IwFX0ACZTRVqSlQ4YfOeHfRnFuli-w5J-aTs~WR~M-rwUs168~26TMZZRgkdO9X~CdqWq9m3jQvnyZtRuFM-9g__',
      alt: 'ستائر فاخرة بتطريز ذهبي',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.7), rgba(5, 5, 5, 0.7)), url('https://private-us-east-1.manuscdn.com/sessionFile/blZ6vdiJqnPXZVxyjgMITG/sandbox/rDXGOplrFrGuMxSQOHKu5c-img-1_1771329031000_na1fn_aGVyby1jaGFuZGVsaWVy.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYmxaNnZkaUpxblBYWlZ4eWpnTUlURy9zYW5kYm94L3JEWEdPcGxyRnJHdU14U1FPSEt1NWMtaW1nLTFfMTc3MTMyOTAzMTAwMF9uYTFmbl9hR1Z5YnkxamFHRnVaR1ZzYVdWeS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=PdzrCAp8yfnyZM2mD~1-dEr5o4426HpaZa0AXp79GpLFn7Y-R1QhVWkXWfGNze7Y5w0rYjW3buNPFxQ3DDdWCTUqK0q6k1RDAQ6I2WYise8xtRpCaCP~Gcnpi31eaNPkjMsGpJMtQ3ejcMgOlMVN8cGXEDfE69BcwVnpM6D75fKytqKu2AvAkzgBBvzaFvdO6OlHnbQcglpfSTRPSa0lDa3BJHo5v8Rs52ee2wBKxgQNycNq7pikTOrB2ewEx14Bkb9Xa8DC8XI4zw5Lp0Evk~a~r7V-1E5sUTyHu0nsBivCLqGJS~pgPq-fN5uzkCqeTmjk~h6vhr8IEsr1GamkJA__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Art Deco Geometric Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/blZ6vdiJqnPXZVxyjgMITG/sandbox/rDXGOplrFrGuMxSQOHKu5c-img-5_1771329033000_na1fn_c2VydmljZXMtYmFja2dyb3VuZA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYmxaNnZkaUpxblBYWlZ4eWpnTUlURy9zYW5kYm94L3JEWEdPcGxyRnJHdU14U1FPSEt1NWMtaW1nLTVfMTc3MTMyOTAzMzAwMF9uYTFmbl9jMlZ5ZG1salpYTXRZbUZqYTJkeWIzVnVaQS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=nZ0y7G2EjB0N1hnSHEOGhWLzkCj-k~oLMWo1UOcbryRGtnl--qGxSxdqrrVEBHhjKG6yKNjiXPQSmLwH9eMnaldZX5gdXYfdlUyClxNlM1k2hy~dm~4YvNS97IULYLEs3Vy~YrN~n-6o2CbdnbHcArNLNmI9G2e-MeiVW~9TWsZ5g~PRFohmgdwNr7bacsoSZVeO7ycY5hPQg98qgHFaOvTWAg-Q3iSDBwSI~4NCJPGN79n1bsqQ-wXwFAof1PHTka2Jc1HITfdUDhwt5G6wWF9C~0C4Ve2da0Qjf9R9Tb-npx-Ft4oMQQ0l-8QPLxou9F6WuFqqSpLoEiWHTO4Z1Q__')`,
              backgroundSize: '400px',
              backgroundRepeat: 'repeat',
            }}
          />
        </div>

        <div className="container relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Art Deco Top Border */}
            <div className="w-32 h-1 bg-accent mx-auto mb-8" />

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 font-['Playfair_Display'] leading-tight">
              مؤسسة الرماح الماسية
              <br />
              <span className="text-accent">للنجف الفاخر والستائر الراقية</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              نصنع الفخامة في تفاصيل الإضاءة والديكور، ونقدم تصاميم نجف وستائر تضيف لمسة راقية لكل مساحة.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-accent text-primary-foreground hover:bg-accent/90 font-['Montserrat'] font-semibold px-8 py-6 text-lg gold-shimmer"
              >
                طلب تصميم خاص
              </Button>
              <Button
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-primary-foreground font-['Montserrat'] font-semibold px-8 py-6 text-lg"
              >
                معرض الأعمال
              </Button>
            </div>

            {/* Art Deco Bottom Border */}
            <div className="w-32 h-1 bg-accent mx-auto mt-8" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-accent rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-card relative overflow-hidden">
        {/* Art Deco Corner Decorations */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-accent/20" />
        <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-accent/20" />

        <div className="container">
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Playfair_Display']">
              من نحن
            </h2>
            <p className="text-accent text-lg font-['Montserrat']">نبذة عن مؤسسة الرماح الماسية</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-background border border-accent/30 p-8 lg:p-12 art-deco-border">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                مؤسسة الرماح الماسية متخصصة في توفير النجف الفاخر والستائر الراقية بتصاميم تجمع بين الكلاسيكية والعصرية. نحرص على اختيار أجود الخامات وتنفيذ أدق التفاصيل لنقدم منتجات تضيف لمسة فخامة لأي منزل أو مشروع.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                نسعى دائمًا إلى تقديم جودة عالية وأسعار مناسبة مع خدمة عملاء مميزة. فريقنا المتخصص يعمل على تحقيق رؤيتك وتحويل مساحتك إلى تحفة فنية تعكس ذوقك الرفيع.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-accent/30">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2 font-['Playfair_Display']">500+</div>
                  <div className="text-sm text-muted-foreground">مشروع منجز</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2 font-['Playfair_Display']">100%</div>
                  <div className="text-sm text-muted-foreground">رضا العملاء</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2 font-['Playfair_Display']">15+</div>
                  <div className="text-sm text-muted-foreground">سنة خبرة</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2 font-['Playfair_Display']">24/7</div>
                  <div className="text-sm text-muted-foreground">دعم فني</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 lg:py-32 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.95), rgba(5, 5, 5, 0.95)), url('https://private-us-east-1.manuscdn.com/sessionFile/blZ6vdiJqnPXZVxyjgMITG/sandbox/rDXGOplrFrGuMxSQOHKu5c-img-5_1771329033000_na1fn_c2VydmljZXMtYmFja2dyb3VuZA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYmxaNnZkaUpxblBYWlZ4eWpnTUlURy9zYW5kYm94L3JEWEdPcGxyRnJHdU14U1FPSEt1NWMtaW1nLTVfMTc3MTMyOTAzMzAwMF9uYTFmbl9jMlZ5ZG1salpYTXRZbUZqYTJkeWIzVnVaQS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=nZ0y7G2EjB0N1hnSHEOGhWLzkCj-k~oLMWo1UOcbryRGtnl--qGxSxdqrrVEBHhjKG6yKNjiXPQSmLwH9eMnaldZX5gdXYfdlUyClxNlM1k2hy~dm~4YvNS97IULYLEs3Vy~YrN~n-6o2CbdnbHcArNLNmI9G2e-MeiVW~9TWsZ5g~PRFohmgdwNr7bacsoSZVeO7ycY5hPQg98qgHFaOvTWAg-Q3iSDBwSI~4NCJPGN79n1bsqQ-wXwFAof1PHTka2Jc1HITfdUDhwt5G6wWF9C~0C4Ve2da0Qjf9R9Tb-npx-Ft4oMQQ0l-8QPLxou9F6WuFqqSpLoEiWHTO4Z1Q__')`,
          backgroundSize: '300px',
          backgroundRepeat: 'repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="container">
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Playfair_Display']">
              خدماتنا
            </h2>
            <p className="text-accent text-lg font-['Montserrat']">ما نقدمه لعملائنا الكرام</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-card border-accent/30 p-6 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group"
              >
                <div className="w-16 h-16 bg-accent/10 border border-accent flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-['Montserrat']">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 lg:py-32 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Playfair_Display']">
              معرض الصور
            </h2>
            <p className="text-accent text-lg font-['Montserrat']">نماذج من أعمالنا الفاخرة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden group art-deco-border bg-background aspect-[4/3]"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <p className="text-foreground font-['Montserrat'] font-semibold text-lg">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Playfair_Display']">
              تواصل معنا
            </h2>
            <p className="text-accent text-lg font-['Montserrat']">نسعد بخدمتكم والإجابة على استفساراتكم</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-card border border-accent/30 p-8 lg:p-12 art-deco-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-foreground mb-2 font-['Montserrat']">الاسم الكامل</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background border-accent/30 focus:border-accent text-foreground"
                    placeholder="أدخل اسمك"
                  />
                </div>
                <div>
                  <label className="block text-foreground mb-2 font-['Montserrat']">رقم الجوال</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-background border-accent/30 focus:border-accent text-foreground"
                    placeholder="05xxxxxxxx"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-foreground mb-2 font-['Montserrat']">البريد الإلكتروني</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-accent/30 focus:border-accent text-foreground"
                  placeholder="example@email.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-foreground mb-2 font-['Montserrat']">رسالتك</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background border-accent/30 focus:border-accent text-foreground resize-none"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent text-primary-foreground hover:bg-accent/90 font-['Montserrat'] font-semibold py-6 text-lg gold-shimmer"
              >
                إرسال الرسالة
              </Button>
            </form>

            {/* Contact Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-card border border-accent/30 p-6">
                <div className="w-12 h-12 bg-accent/10 border border-accent flex items-center justify-center mx-auto mb-3">
                  <MapPin className="text-accent" />
                </div>
                <h4 className="text-foreground font-semibold mb-2 font-['Montserrat']">الموقع</h4>
                <p className="text-muted-foreground text-sm">جدة - المملكة العربية السعودية</p>
              </div>

              <div className="bg-card border border-accent/30 p-6">
                <div className="w-12 h-12 bg-accent/10 border border-accent flex items-center justify-center mx-auto mb-3">
                  <Phone className="text-accent" />
                </div>
                <h4 className="text-foreground font-semibold mb-2 font-['Montserrat']">الهاتف</h4>
                <p className="text-muted-foreground text-sm">سيتم إضافة الرقم لاحقاً</p>
              </div>

              <div className="bg-card border border-accent/30 p-6">
                <div className="w-12 h-12 bg-accent/10 border border-accent flex items-center justify-center mx-auto mb-3">
                  <Mail className="text-accent" />
                </div>
                <h4 className="text-foreground font-semibold mb-2 font-['Montserrat']">البريد</h4>
                <p className="text-muted-foreground text-sm">info@alrimah.sa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
