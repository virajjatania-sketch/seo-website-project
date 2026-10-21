import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Budgeting', path: '/budgeting-for-beginners/' },
    { label: 'Saving Money', path: '/save-money-on-low-income/' },
    { label: 'Credit Basics', path: '/credit-score-basics/' },
    { label: 'Debt Management', path: '/debt-management/' },
    { label: 'Investing Basics', path: '/investing-for-beginners/' },
    { label: 'SEO Matrix', path: '/seo-matrix/' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Brand Wordmark (Single text element wordmark in display face) */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-2 text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143826] rounded py-1 shrink-0"
            aria-label="MoneyWise Starter Homepage"
          >
            <span className="font-editorial-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#143826] group-hover:text-[#0D261A] transition-colors whitespace-nowrap">
              MoneyWise Starter
            </span>
          </button>

          {/* Zone 2: Navigation Links (Single-line text links with subtle hover underlines) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-stone-700 font-modern-sans">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`relative py-1.5 whitespace-nowrap shrink-0 transition-colors cursor-pointer text-sm font-medium ${
                    isActive
                      ? 'text-[#143826] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#143826]'
                      : 'text-stone-600 hover:text-stone-900 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-stone-300'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleLinkClick('/budgeting-for-beginners/')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide uppercase text-white bg-[#143826] hover:bg-[#0D261A] rounded-md transition-colors shadow-xs whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#143826]"
            >
              <span>Start Learning</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#143826] rounded-md"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-stone-200 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`w-full text-left px-3 py-2.5 rounded-md text-base font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#EBF1EA] text-[#143826] font-semibold'
                    : 'text-stone-700 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-4 border-t border-stone-200">
            <button
              onClick={() => handleLinkClick('/budgeting-for-beginners/')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#143826] hover:bg-[#0D261A] rounded-md"
            >
              <span>Start First Guide</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
