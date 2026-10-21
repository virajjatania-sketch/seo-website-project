import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 font-modern-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Identity & Mission */}
          <div className="space-y-4">
            <span className="font-editorial-serif text-2xl font-bold tracking-tight text-white block">
              MoneyWise Starter
            </span>
            <p className="text-sm text-stone-400 leading-relaxed">
              Simple Money Lessons for a Smarter Financial Future. An educational publication dedicated to teaching practical money management, emergency resilience, and grounded investing fundamentals.
            </p>
            <p className="text-xs text-stone-500">
              Developed as an academic curriculum project in search engine optimization, answer engine optimization (AEO), and accessible consumer financial education.
            </p>
          </div>

          {/* Column 2: Educational Guides */}
          <div>
            <h4 className="font-editorial-serif text-base font-bold text-white uppercase tracking-wider mb-4">
              Beginner Guides
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/budgeting-for-beginners/')}
                  className="hover:text-white transition-colors text-stone-400 cursor-pointer"
                >
                  Budgeting for Beginners
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/save-money-on-low-income/')}
                  className="hover:text-white transition-colors text-stone-400 cursor-pointer"
                >
                  How to Save on a Low Income
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/emergency-fund-guide/')}
                  className="hover:text-white transition-colors text-stone-400 cursor-pointer"
                >
                  Emergency Fund Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/credit-score-basics/')}
                  className="hover:text-white transition-colors text-stone-400 cursor-pointer"
                >
                  Credit Score Basics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/investing-for-beginners/')}
                  className="hover:text-white transition-colors text-stone-400 cursor-pointer"
                >
                  Investing for Beginners
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/debt-management/')}
                  className="hover:text-white transition-colors text-stone-400 cursor-pointer"
                >
                  Debt Management Strategies
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Project & Academic Architecture */}
          <div>
            <h4 className="font-editorial-serif text-base font-bold text-white uppercase tracking-wider mb-4">
              Academic & SEO Matrix
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/seo-matrix/')}
                  className="hover:text-white transition-colors text-stone-400 flex items-center gap-1 cursor-pointer"
                >
                  <span>SEO Project Matrix</span>
                  <span className="text-xs bg-[#143826] text-white px-1.5 py-0.2 rounded font-mono">Curriculum</span>
                </button>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-stone-400 flex items-center gap-1"
                >
                  <span>XML Sitemap</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="/robots.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-stone-400 flex items-center gap-1"
                >
                  <span>Robots.txt</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Educational Resources */}
          <div>
            <h4 className="font-editorial-serif text-base font-bold text-white uppercase tracking-wider mb-4">
              Reputable External Resources
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>
                <a
                  href="https://www.consumerfinance.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>CFPB Consumer Tools</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.investor.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>SEC Investor.gov</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.annualcreditreport.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>AnnualCreditReport.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.mymoney.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>MyMoney.gov (US Treasury)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Educational Disclaimer Section */}
        <div className="pt-8 border-t border-stone-800 text-xs text-stone-400 leading-relaxed space-y-3">
          <p className="font-medium text-stone-300">
            Educational Disclaimer:
          </p>
          <p>
            MoneyWise Starter is an educational publication developed for academic research, digital publishing, and search engine optimization course demonstration. All content, sample calculations, and guides are provided solely for general informational and educational purposes and do not constitute legal, tax, accounting, or individualized investment advice. Financial laws, tax codes, and credit scoring algorithms vary by jurisdiction and credit reporting bureau. Readers should evaluate their own financial circumstances and consult licensed financial professionals or non-profit credit counseling agencies before making substantial financial commitments.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-stone-500 gap-4">
            <p>© 2026 MoneyWise Starter. Published for College SEO & AEO Assignment. All rights reserved.</p>
            <p className="text-[11px]">Clean Semantic HTML5 · Schema.org JSON-LD · Zero External Tracker Scripts</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
