import React from 'react';
import { ARTICLES, Article } from '../data/articles';
import { SEOHead } from './SEOHead';
import { InteractiveBudgetTool } from './InteractiveBudgetTool';
import { ArrowRight, BookOpen, Clock, ShieldCheck, Compass, Sparkles, HelpCircle } from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Schema.org WebSite structured data
  const websiteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'MoneyWise Starter',
    'url': 'https://moneywisestarter.edu/',
    'description': 'Simple Money Lessons for a Smarter Financial Future. An educational website designed for personal finance beginners.',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': 'https://moneywisestarter.edu/seo-matrix/?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    },
    'about': {
      '@type': 'Thing',
      'name': 'Personal Finance for Beginners'
    }
  };

  const learningPillars = [
    {
      number: '01',
      title: 'Intentional Budgeting',
      description: 'Master how to calculate net take-home pay, differentiate fixed vs. variable obligations, and allocate cash intentionally with the 50/30/20 framework.'
    },
    {
      number: '02',
      title: 'Sustainable Micro-Saving',
      description: 'Learn realistic ways to audit subscriptions, lower recurring grocery and utility bills, and automate small weekly transfers without extreme deprivation.'
    },
    {
      number: '03',
      title: 'Liquid Emergency Reserves',
      description: 'Calculate your true essential survival number and establish a safe 3-to-6 month cash cushion housed in an insured High-Yield Savings Account (HYSA).'
    },
    {
      number: '04',
      title: 'Credit Score Foundations',
      description: 'Deconstruct the 5 credit factors, understand payment history and utilization ratio, debunk dangerous credit myths, and avoid costly mistakes.'
    },
    {
      number: '05',
      title: 'Patient Long-Term Investing',
      description: 'Understand the difference between saving and investing, harness low-cost index funds and diversification, and let compound growth build lasting wealth.'
    }
  ];

  return (
    <main className="min-h-screen bg-[#FAF8F5] font-modern-sans">
      <SEOHead
        title="MoneyWise Starter – Personal Finance for Beginners"
        description="Simple Money Lessons for a Smarter Financial Future. Discover clear, comprehensive beginner guides on budgeting, saving on a low income, emergency funds, credit scores, and investing."
        canonicalUrl="https://moneywisestarter.edu/"
        type="website"
        image="https://moneywisestarter.edu/images/hero_finance_desk.jpg"
        structuredData={websiteStructuredData}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-18 lg:pb-22 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Mission & Headline */}
            <div className="lg:col-span-7 space-y-6">
              {/* Unboxed Editorial Kicker */}
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 uppercase tracking-widest">
                <span>Personal Finance Education</span>
                <span aria-hidden="true">·</span>
                <span>Beginner Curriculum</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#143826]">AEO Grounded</span>
              </div>

              <h1 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight leading-[1.1] text-balance">
                Simple Money Lessons for a Smarter Financial Future.
              </h1>

              <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl font-normal">
                Personal finance does not require Wall Street jargon or high-stress trading apps. <strong className="font-semibold text-stone-900">MoneyWise Starter</strong> delivers calm, honest, step-by-step financial literacy lessons designed for college students, young professionals, and anyone starting from scratch.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => onNavigate('/budgeting-for-beginners/')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#143826] hover:bg-[#0D261A] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-xs cursor-pointer"
                >
                  <span>Start with Article 1: Budgeting</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('/seo-matrix/')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-xs cursor-pointer"
                >
                  <Compass className="w-4 h-4 text-stone-500" />
                  <span>View SEO Project Matrix</span>
                </button>
              </div>

              {/* Trust & Educational Badges */}
              <div className="pt-4 border-t border-stone-200/80 flex flex-wrap items-center gap-6 text-xs text-stone-500">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#143826]" />
                  <span>Zero Commercial Sponsorships</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#143826]" />
                  <span>5 Comprehensive In-Depth Guides</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-[#143826]" />
                  <span>Direct Answer AEO Optimized</span>
                </div>
              </div>
            </div>

            {/* Right Column: Featured Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 shadow-sm aspect-[16/9] sm:aspect-[4/3] lg:aspect-square">
                <img
                  src="/images/hero_finance_desk.jpg"
                  alt="Warm natural-lit desk with open budget ledger, coffee, brass lamp, and fountain pen"
                  className="w-full h-full object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent flex items-end p-5 sm:p-6">
                  <div className="text-white">
                    <span className="text-[11px] uppercase tracking-wider text-stone-200 font-semibold block">Editorial Principle</span>
                    <p className="font-editorial-serif text-lg sm:text-xl font-bold mt-0.5">Clarity over complexity. Habits over hype.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: "What You Will Learn" (5 Pillars) */}
      <section className="py-16 lg:py-20 border-b border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#143826] block mb-2">
              Curriculum Architecture
            </span>
            <h2 className="font-editorial-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              What You Will Learn: The Five Pillars of Beginner Financial Health
            </h2>
            <p className="mt-3 text-stone-600 text-base leading-relaxed">
              Every healthy financial life is constructed upon five interconnected disciplines. Master them step by step to move from financial anxiety to lasting security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPillars.map((pillar) => (
              <div
                key={pillar.number}
                className="p-6 rounded-xl border border-stone-200 bg-[#FAF8F5] hover:border-stone-400 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="font-editorial-serif text-2xl font-bold text-[#143826]/60 block mb-3">
                    {pillar.number}
                  </span>
                  <h3 className="font-editorial-serif text-xl font-bold text-stone-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
            
            {/* 6th Card: Academic Mission & Matrix CTA */}
            <div className="p-6 rounded-xl border border-stone-200 bg-[#FAF7F0] flex flex-col justify-between">
              <div>
                <span className="font-editorial-serif text-2xl font-bold text-[#C5A869] block mb-3">
                  06
                </span>
                <h3 className="font-editorial-serif text-xl font-bold text-stone-900 mb-2">
                  SEO & AEO Architecture
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Explore how this entire educational repository was architected for Answer Engine Optimization, targeted search intent, and university SEO standards.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-stone-200/80">
                <button
                  onClick={() => onNavigate('/seo-matrix/')}
                  className="text-xs font-semibold text-[#143826] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Keyword Matrix</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Articles Section (Contains ALL 5 Articles) */}
      <section className="py-16 lg:py-22 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#143826] block mb-2">
                Core Publication
              </span>
              <h2 className="font-editorial-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
                Featured Beginner Educational Guides
              </h2>
              <p className="mt-2 text-stone-600 text-base max-w-2xl">
                Five individual, fully written articles with original lessons, practical calculations, and question-based answers.
              </p>
            </div>
            <div className="text-xs text-stone-500 font-mono">
              Showing all 5 comprehensive guides
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map((article, index) => (
              <article
                key={article.slug}
                onClick={() => onNavigate(article.path)}
                className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-xs hover:border-stone-400 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  {/* Article Card Featured Image */}
                  <div className="aspect-[4/3] bg-stone-100 overflow-hidden relative">
                    <img
                      src={article.featuredImage}
                      alt={article.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-semibold text-[#143826] uppercase tracking-wider">
                      Article {index + 1}
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Unboxed Metadata */}
                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                      <span className="font-semibold text-[#143826]">{article.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readingTime}</span>
                      </span>
                    </div>

                    {/* Article Card Title */}
                    <h3 className="font-editorial-serif text-xl font-bold text-stone-900 group-hover:text-[#143826] transition-colors leading-snug line-clamp-2">
                      {article.h1}
                    </h3>

                    {/* Excerpt */}
                    <p className="mt-3 text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[11px] text-stone-500 font-mono">
                      {article.wordCount} words
                    </span>
                    <span className="text-xs font-semibold text-[#143826] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}

            {/* Dedicated Debt Management Card */}
            <article
              onClick={() => onNavigate('/debt-management/')}
              className="bg-[#FAF7F0] border border-[#E8DEC9] rounded-xl p-6 hover:border-[#143826] transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-3">
                  <span className="font-semibold text-[#143826]">Debt Elimination</span>
                  <span aria-hidden="true">·</span>
                  <span>Special Strategy Guide</span>
                </div>
                <h3 className="font-editorial-serif text-xl font-bold text-stone-900 group-hover:text-[#143826] transition-colors leading-snug">
                  Debt Management for Beginners: Avalanche vs. Snowball
                </h3>
                <p className="mt-3 text-stone-600 text-xs sm:text-sm leading-relaxed">
                  Eliminating toxic high-interest credit card debt is the highest guaranteed return in personal finance. Discover which payoff methodology matches your personal psychology.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center justify-between">
                <span className="text-[11px] text-stone-500 font-mono">980 words</span>
                <span className="text-xs font-semibold text-[#143826] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  <span>Read Strategy Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Section 4: Interactive Student & Beginner Tool */}
      <section className="py-16 lg:py-20 border-b border-stone-200 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveBudgetTool />
        </div>
      </section>

      {/* Section 5: Reputable Educational Resources Directory */}
      <section className="py-16 lg:py-20 border-b border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#143826] block mb-2">
              Financial Literacy Alliances
            </span>
            <h2 className="font-editorial-serif text-3xl font-bold text-stone-900 tracking-tight">
              Trusted Public Financial Education Resources
            </h2>
            <p className="mt-2 text-stone-600 text-sm leading-relaxed">
              We encourage all learners to verify financial laws and consumer rights through recognized public and nonprofit agencies:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-4 rounded-lg border border-stone-200 bg-[#FAF8F5]">
              <h4 className="font-bold text-sm text-stone-900 mb-1">CFPB Consumer Tools</h4>
              <p className="text-xs text-stone-600 leading-relaxed mb-3">Consumer Financial Protection Bureau guides on credit scores, loan disputes, and budgeting.</p>
              <a href="https://www.consumerfinance.gov" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#143826] hover:underline">
                consumerfinance.gov →
              </a>
            </div>

            <div className="p-4 rounded-lg border border-stone-200 bg-[#FAF8F5]">
              <h4 className="font-bold text-sm text-stone-900 mb-1">SEC Investor.gov</h4>
              <p className="text-xs text-stone-600 leading-relaxed mb-3">Official beginner investing education and compound interest calculators from the SEC.</p>
              <a href="https://www.investor.gov" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#143826] hover:underline">
                investor.gov →
              </a>
            </div>

            <div className="p-4 rounded-lg border border-stone-200 bg-[#FAF8F5]">
              <h4 className="font-bold text-sm text-stone-900 mb-1">AnnualCreditReport.com</h4>
              <p className="text-xs text-stone-600 leading-relaxed mb-3">The only federally authorized portal for checking your official credit reports for free.</p>
              <a href="https://www.annualcreditreport.com" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#143826] hover:underline">
                annualcreditreport.com →
              </a>
            </div>

            <div className="p-4 rounded-lg border border-stone-200 bg-[#FAF8F5]">
              <h4 className="font-bold text-sm text-stone-900 mb-1">MyMoney.gov</h4>
              <p className="text-xs text-stone-600 leading-relaxed mb-3">Federal interagency financial education hub coordinated by the U.S. Department of the Treasury.</p>
              <a href="https://www.mymoney.gov" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#143826] hover:underline">
                mymoney.gov →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Educational Disclaimer Callout */}
      <section className="py-12 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 bg-white border border-stone-300/80 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1 max-w-3xl">
              <span className="text-xs uppercase tracking-widest font-bold text-stone-500">
                Educational Disclaimer
              </span>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                MoneyWise Starter is an educational publication developed for academic, financial literacy, and SEO curriculum study. All guides, budget examples, and tables are strictly for general educational purposes and do not constitute individualized legal, tax, or investment advice.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/seo-matrix/')}
              className="px-4 py-2 bg-[#143826] hover:bg-[#0D261A] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shrink-0 whitespace-nowrap cursor-pointer"
            >
              Review SEO Matrix
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
