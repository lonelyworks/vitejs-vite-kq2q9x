import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface Translations {
  services: string;
  about: string;
  contact: string;
  trackRepair: string;
  trackRepairTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  contactUs: string;
  ourServices: string;
  computerRepair: string;
  computerRepairDesc: string;
  mobileRepair: string;
  mobileRepairDesc: string;
  consoleRepair: string;
  consoleRepairDesc: string;
  aboutTitle: string;
  aboutP1: string;
  aboutP2: string;
  contactTitle: string;
  getDirections: string;
  rights: string;
  comingSoon: string;
  comingSoonDesc: string;
  backToHome: string;
  buildPc: string;
  buildPcTitle: string;
  buildPcDesc: string;
  buildPcHero: string;
  buildPcSubtitle: string;
  buildPcComingSoon: string;
  notifyMe: string;
  email: string;
  enterEmail: string;
  whyBuildPc: string;
  reason1Title: string;
  reason1Desc: string;
  reason2Title: string;
  reason2Desc: string;
  reason3Title: string;
  reason3Desc: string;
  reason4Title: string;
  reason4Desc: string;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const translations: Record<Language, Translations> = {
  en: {
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    trackRepair: 'Track Repair',
    trackRepairTitle: 'Track Your Repair',
    heroTitle: 'Expert Computer and Mobile Device Repair',
    heroSubtitle: 'Fast, reliable, and professional service for all your tech needs',
    contactUs: 'Contact Us',
    ourServices: 'Our Services',
    computerRepair: 'Computer Repair',
    computerRepairDesc: 'We fix desktops, laptops, and all types of computers. From hardware issues to software problems, we\'ve got you covered.',
    mobileRepair: 'Mobile Device Repair',
    mobileRepairDesc: 'Cracked screens, battery issues, or software glitches? We repair all brands of smartphones and tablets.',
    consoleRepair: 'Gaming Console Repair',
    consoleRepairDesc: 'From classic to modern gaming consoles, we repair PlayStation, Xbox, Nintendo and more. Get back to gaming quickly!',
    aboutTitle: 'About Micro PC Plus',
    aboutP1: 'At Micro PC Plus, we\'re passionate about technology and dedicated to providing top-notch repair services for computers and mobile devices. With years of experience and a team of skilled technicians, we ensure that your devices are in good hands.',
    aboutP2: 'We pride ourselves on quick turnaround times, quality repairs, and excellent customer service. Whether you\'re a home user or a business, we\'re here to keep your tech running smoothly.',
    contactTitle: 'Contact Us',
    getDirections: 'Get Directions',
    rights: 'All rights reserved.',
    comingSoon: 'Coming Soon',
    comingSoonDesc: 'Our repair tracking system is currently under development. Check back soon!',
    backToHome: 'Back to Home',
    buildPc: 'Build Your PC',
    buildPcTitle: 'Custom PC Builder',
    buildPcDesc: 'Design your dream computer with our custom PC builder. Choose from a curated selection of high-quality components and let our experts assemble it for you.',
    buildPcHero: 'Build Your Dream Computer',
    buildPcSubtitle: 'Custom-built computers tailored to your needs',
    buildPcComingSoon: 'Our custom PC builder tool is coming soon! Leave your email to be notified when it launches.',
    notifyMe: 'Notify Me',
    email: 'Email',
    enterEmail: 'Enter your email',
    whyBuildPc: 'Why Build a Custom PC?',
    reason1Title: 'Perfect Performance',
    reason1Desc: 'Get exactly the performance you need for your specific use case, whether it\'s gaming, content creation, or work.',
    reason2Title: 'Quality Assurance',
    reason2Desc: 'We use only high-quality, tested components from reputable manufacturers.',
    reason3Title: 'Expert Assembly',
    reason3Desc: 'Our skilled technicians will professionally assemble and test your custom PC.',
    reason4Title: 'Better Value',
    reason4Desc: 'Get the best performance for your budget with optimized component selection.'
  },
  fr: {
    services: 'Services',
    about: 'À propos',
    contact: 'Contact',
    trackRepair: 'Suivre une réparation',
    trackRepairTitle: 'Suivre votre réparation',
    heroTitle: 'Réparation experte d\'ordinateurs et d\'appareils mobiles',
    heroSubtitle: 'Service rapide, fiable et professionnel pour tous vos besoins technologiques',
    contactUs: 'Contactez-nous',
    ourServices: 'Nos services',
    computerRepair: 'Réparation d\'ordinateurs',
    computerRepairDesc: 'Nous réparons les ordinateurs de bureau, portables et tous types d\'ordinateurs. Des problèmes matériels aux problèmes logiciels, nous avons la solution.',
    mobileRepair: 'Réparation d\'appareils mobiles',
    mobileRepairDesc: 'Écrans fissurés, problèmes de batterie ou bogues logiciels ? Nous réparons toutes les marques de smartphones et de tablettes.',
    consoleRepair: 'Réparation de consoles de jeux',
    consoleRepairDesc: 'Des consoles classiques aux modernes, nous réparons PlayStation, Xbox, Nintendo et plus. Reprenez le jeu rapidement !',
    aboutTitle: 'À propos de Micro PC Plus',
    aboutP1: 'Chez Micro PC Plus, nous sommes passionnés par la technologie et dédiés à fournir des services de réparation de haute qualité pour les ordinateurs et les appareils mobiles. Avec des années d\'expérience et une équipe de techniciens qualifiés, nous nous assurons que vos appareils sont entre de bonnes mains.',
    aboutP2: 'Nous sommes fiers de nos délais d\'exécution rapides, de nos réparations de qualité et de notre excellent service client. Que vous soyez un utilisateur domestique ou une entreprise, nous sommes là pour que votre technologie fonctionne sans problème.',
    contactTitle: 'Contactez-nous',
    getDirections: 'Obtenir l\'itinéraire',
    rights: 'Tous droits réservés.',
    comingSoon: 'Bientôt disponible',
    comingSoonDesc: 'Notre système de suivi des réparations est en cours de développement. Revenez bientôt !',
    backToHome: 'Retour à l\'accueil',
    buildPc: 'Construire votre PC',
    buildPcTitle: 'Constructeur de PC',
    buildPcDesc: 'Concevez l\'ordinateur de vos rêves avec notre constructeur de PC personnalisé. Choisissez parmi une sélection de composants de haute qualité et laissez nos experts l\'assembler pour vous.',
    buildPcHero: 'Construisez l\'Ordinateur de vos Rêves',
    buildPcSubtitle: 'Ordinateurs sur mesure adaptés à vos besoins',
    buildPcComingSoon: 'Notre outil de construction de PC personnalisé arrive bientôt ! Laissez votre email pour être notifié lors du lancement.',
    notifyMe: 'Me notifier',
    email: 'Email',
    enterEmail: 'Entrez votre email',
    whyBuildPc: 'Pourquoi construire un PC personnalisé ?',
    reason1Title: 'Performance Parfaite',
    reason1Desc: 'Obtenez exactement les performances dont vous avez besoin pour votre utilisation spécifique, que ce soit pour les jeux, la création de contenu ou le travail.',
    reason2Title: 'Assurance Qualité',
    reason2Desc: 'Nous utilisons uniquement des composants de haute qualité et testés provenant de fabricants réputés.',
    reason3Title: 'Assemblage Expert',
    reason3Desc: 'Nos techniciens qualifiés assembleront et testeront professionnellement votre PC personnalisé.',
    reason4Title: 'Meilleur Rapport Qualité-Prix',
    reason4Desc: 'Obtenez les meilleures performances pour votre budget avec une sélection optimisée des composants.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}