import { ReactNode, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SectionPage = ({ title, children }: { title: string; children: ReactNode }) => {
  useEffect(() => {
    document.title = `${title} | Splitfire Auto Repairs Mississauga`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 lg:pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default SectionPage;
