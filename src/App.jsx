import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ProgramsView from './components/ProgramsView';
import CSRView from './components/CSRView';
import ActivitiesView from './components/ActivitiesView';
import ResourcesView from './components/ResourcesView';
import ContactView from './components/ContactView';

import QuickSearchModal from './components/QuickSearchModal';
import DonationModal from './components/DonationModal';
import DesignAptitudeQuizModal from './components/DesignAptitudeQuizModal';
import CSRCalculatorModal from './components/CSRCalculatorModal';

export default function App() {
  const [activeView, setActiveView] = useState('home');
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenDonate, setIsOpenDonate] = useState(false);
  const [isOpenQuiz, setIsOpenQuiz] = useState(false);
  const [isOpenCSR, setIsOpenCSR] = useState(false);

  const renderView = () => {
    if (activeView === 'home') {
      return (
        <HomeView
          onNavigate={setActiveView}
          onOpenSearch={() => setIsOpenSearch(true)}
          onOpenDonate={() => setIsOpenDonate(true)}
          onOpenQuiz={() => setIsOpenQuiz(true)}
          onOpenCSR={() => setIsOpenCSR(true)}
        />
      );
    }

    if (activeView.startsWith('about')) {
      return <AboutView activeSub={activeView} onNavigate={setActiveView} />;
    }

    if (activeView.startsWith('prog')) {
      return (
        <ProgramsView
          activeSub={activeView}
          onNavigate={setActiveView}
          onOpenDonate={() => setIsOpenDonate(true)}
          onOpenQuiz={() => setIsOpenQuiz(true)}
        />
      );
    }

    if (activeView.startsWith('csr')) {
      return (
        <CSRView
          onNavigate={setActiveView}
          onOpenCSR={() => setIsOpenCSR(true)}
        />
      );
    }

    if (activeView.startsWith('act')) {
      return <ActivitiesView activeSub={activeView} onNavigate={setActiveView} />;
    }

    if (activeView === 'resources') {
      return <ResourcesView />;
    }

    if (activeView === 'contact') {
      return <ContactView />;
    }

    return (
      <HomeView
        onNavigate={setActiveView}
        onOpenSearch={() => setIsOpenSearch(true)}
        onOpenDonate={() => setIsOpenDonate(true)}
        onOpenQuiz={() => setIsOpenQuiz(true)}
        onOpenCSR={() => setIsOpenCSR(true)}
      />
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-amber-500 selection:text-white">
      
      {/* Sticky Header Navigation */}
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenSearch={() => setIsOpenSearch(true)}
        onOpenDonate={() => setIsOpenDonate(true)}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-1">
        {renderView()}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={setActiveView}
        onOpenDonate={() => setIsOpenDonate(true)}
      />

      {/* Global Interactive Modals */}
      <QuickSearchModal
        isOpen={isOpenSearch}
        onClose={() => setIsOpenSearch(false)}
        onSelectResult={(viewId) => {
          setActiveView(viewId);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <DonationModal
        isOpen={isOpenDonate}
        onClose={() => setIsOpenDonate(false)}
      />

      <DesignAptitudeQuizModal
        isOpen={isOpenQuiz}
        onClose={() => setIsOpenQuiz(false)}
        onNavigateToDesign={() => {
          setActiveView('prog-design');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <CSRCalculatorModal
        isOpen={isOpenCSR}
        onClose={() => setIsOpenCSR(false)}
        onNavigateToContact={() => {
          setActiveView('contact');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

    </div>
  );
}
