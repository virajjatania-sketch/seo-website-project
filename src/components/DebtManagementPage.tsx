import React from 'react';
import { SEOHead } from './SEOHead';
import { ArrowLeft, Clock, Calendar, BookOpen, ArrowRight, ShieldAlert, Award } from 'lucide-react';

interface DebtManagementPageProps {
  onNavigate: (path: string) => void;
}

export const DebtManagementPage: React.FC<DebtManagementPageProps> = ({ onNavigate }) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Debt Management for Beginners: Proven Strategies to Pay Off Debt',
    'description': 'Master debt management with beginner strategies. Compare the Debt Avalanche vs. Debt Snowball, tackle high-interest credit cards, and protect your cash flow.',
    'url': 'https://moneywisestarter.edu/debt-management/'
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] py-10 lg:py-16 font-modern-sans">
      <SEOHead
        title="Debt Management for Beginners – Avalanche vs Snowball Strategies"
        description="Master debt management for beginners. Learn how to compare the Debt Avalanche vs. Debt Snowball, negotiate APRs, and become debt-free sustainably."
        canonicalUrl="https://moneywisestarter.edu/debt-management/"
        type="article"
        structuredData={structuredData}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <li>
              <button onClick={() => onNavigate('/')} className="hover:text-stone-900 cursor-pointer">
                Home
              </button>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-stone-900 font-semibold">
              Debt Management
            </li>
          </ol>
        </nav>

        <div className="mb-6">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Homepage</span>
          </button>
        </div>

        <header className="mb-8">
          <div className="flex items-center flex-wrap gap-2 text-xs text-stone-500 mb-4">
            <span className="font-semibold text-[#143826]">Debt Management</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> October 20, 2026</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 6 min read</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> 980 words</span>
          </div>

          <h1 className="font-editorial-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-[1.15] text-balance">
            Debt Management for Beginners: Proven Frameworks to Eliminate High-Interest Debt
          </h1>
          <p className="mt-4 text-lg text-stone-600 leading-relaxed">
            Not all debt is equal, but toxic high-interest consumer debt is the single greatest obstacle between beginners and financial independence. Learn how to prioritize liabilities, compare payoff methodologies, and regain control over your cash flow.
          </p>
        </header>

        <div className="bg-[#FAF7F0] border border-[#E8DEC9] rounded-xl p-6 mb-10 shadow-xs">
          <h2 className="font-editorial-serif text-xl font-bold text-[#143826] mb-3">
            Core Principles of Beginner Debt Management
          </h2>
          <ul className="space-y-2 text-sm text-stone-700">
            <li>• <strong>Distinguish toxic debt from manageable debt:</strong> Any credit card or personal loan with an APR over 10%-15% is an urgent financial emergency.</li>
            <li>• <strong>Keep making minimum payments on everything:</strong> Missing a minimum payment destroys your credit score and triggers expensive penalty APRs.</li>
            <li>• <strong>Choose either Avalanche or Snowball:</strong> The Debt Avalanche saves the most mathematically; the Debt Snowball provides the quickest psychological wins.</li>
            <li>• <strong>Build a modest $500–$1,000 cash cushion first:</strong> Without a starter buffer, an unexpected bill forces you back onto the credit card.</li>
          </ul>
        </div>

        <div className="prose prose-stone max-w-none text-stone-800 leading-relaxed font-modern-sans">
          <h2 className="text-2xl sm:text-3xl font-editorial-serif font-bold text-stone-900 mt-10 mb-4 pt-2 border-t border-stone-200">
            How Should Beginners Choose a Debt Payoff Strategy?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-stone-800 font-medium bg-[#FAF7F0] p-4 rounded-md border border-[#EBE3D3] mb-6">
            Beginners should choose between the two established debt payoff frameworks based on their personal psychology: the Debt Avalanche method (which targets the balance with the highest interest rate first to minimize total interest paid) or the Debt Snowball method (which targets the smallest balance first to build rapid motivational momentum). Both require paying minimums on all other accounts while channeling every surplus dollar to the primary target.
          </p>

          <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
            Debt Avalanche vs. Debt Snowball: Side-by-Side Comparison
          </h3>
          <p>
            Here is how the two dominant debt elimination strategies compare in real-world application:
          </p>

          <div className="overflow-x-auto my-6 not-prose">
            <table className="w-full text-left text-sm border-collapse bg-white border border-stone-200 rounded-lg">
              <thead>
                <tr className="bg-stone-100 text-stone-900 border-b border-stone-200">
                  <th className="py-3 px-4 font-semibold">Factor</th>
                  <th className="py-3 px-4 font-semibold">Debt Avalanche Method</th>
                  <th className="py-3 px-4 font-semibold">Debt Snowball Method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-150 text-stone-700">
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">Primary Focus</td>
                  <td className="py-3 px-4">Account with the highest interest rate (APR)</td>
                  <td className="py-3 px-4">Account with the smallest total dollar balance</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">Mathematical Efficiency</td>
                  <td className="py-3 px-4 font-semibold text-[#143826]">Maximum (saves the most total interest)</td>
                  <td className="py-3 px-4">Slightly lower (pays more interest over time)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">Psychological Benefit</td>
                  <td className="py-3 px-4">Requires patience; first account may take months to eliminate</td>
                  <td className="py-3 px-4 font-semibold text-[#143826]">High; rapid initial account elimination builds confidence</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">Ideal For</td>
                  <td className="py-3 px-4">Analytical savers focused strictly on the math</td>
                  <td className="py-3 px-4">Savers who need quick wins to maintain motivation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
            Step-by-Step Action Plan to Eliminate Consumer Debt
          </h3>
          <ol className="list-decimal pl-6 space-y-3 my-4 text-stone-700">
            <li>
              <strong>List every outstanding debt:</strong> Record the lender name, total balance, minimum monthly payment, and exact APR interest rate.
            </li>
            <li>
              <strong>Negotiate lower interest rates:</strong> Call your card issuers. If you have made on-time payments for six months, ask politely for a temporary hardship rate or promotional APR reduction. Many issuers will lower a 24% APR to 16%–18% upon request.
            </li>
            <li>
              <strong>Freeze credit card usage:</strong> Remove saved card numbers from Amazon and food delivery apps. Switch exclusively to cash or your debit card while in payoff mode. Build an accurate spending plan using our{' '}
              <button
                onClick={() => onNavigate('/budgeting-for-beginners/')}
                className="text-[#143826] font-semibold underline hover:text-[#0D261A] transition-colors cursor-pointer"
              >
                beginner monthly budgeting guide
              </button>{' '}
              to uncover additional margin.
            </li>
            <li>
              <strong>Roll freed-up cash into the next target:</strong> When your first card is paid off, take the full amount you were paying toward it and add it to the minimum of the next card in line. This creates an accelerating debt payoff snowball.
            </li>
          </ol>

          <div className="bg-amber-50 border border-amber-200/80 p-5 rounded-lg my-6 not-prose flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              <strong className="text-amber-900">Avoid Predatory Debt Traps:</strong> Never turn to payday loans, auto title loans, or predatory high-fee debt settlement companies that tell you to stop paying your creditors. If overwhelmed, reach out to an accredited nonprofit credit counseling agency via the{' '}
              <a
                href="https://www.nfcc.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#143826] font-semibold underline hover:text-[#0D261A]"
              >
                National Foundation for Credit Counseling (NFCC.org)
              </a>{' '}
              for a free, confidential Debt Management Plan (DMP).
            </div>
          </div>

          <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
            Connecting Debt Elimination to Your Long-Term Wealth
          </h3>
          <p>
            Eliminating high-interest debt is equivalent to locking in an extraordinary, risk-free rate of return. If you pay off a $3,000 credit card balance charging 22% APR, you are effectively earning a guaranteed 22% after-tax return on that money—something the stock market can never guarantee.
          </p>
          <p>
            Once your consumer debt is eliminated, redirect that monthly payment power into your{' '}
            <button
              onClick={() => onNavigate('/emergency-fund-guide/')}
              className="text-[#143826] font-semibold underline hover:text-[#0D261A] transition-colors cursor-pointer"
            >
              3-to-6 month emergency fund
            </button>{' '}
            and{' '}
            <button
              onClick={() => onNavigate('/investing-for-beginners/')}
              className="text-[#143826] font-semibold underline hover:text-[#0D261A] transition-colors cursor-pointer"
            >
              long-term low-cost index funds
            </button>{' '}
            to build generational security and preserve your{' '}
            <button
              onClick={() => onNavigate('/credit-score-basics/')}
              className="text-[#143826] font-semibold underline hover:text-[#0D261A] transition-colors cursor-pointer"
            >
              positive credit history
            </button>.
          </p>
        </div>

        {/* Navigation CTAs */}
        <section className="mt-12 p-8 bg-[#EBF1EA] rounded-xl border border-[#D5E2D3] text-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#143826]">
            Related Foundations
          </span>
          <h3 className="font-editorial-serif text-2xl font-bold text-stone-900 mt-1 mb-3">
            Build Your Debt-Free Foundation
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
            <button
              onClick={() => onNavigate('/budgeting-for-beginners/')}
              className="px-4 py-2 bg-[#143826] hover:bg-[#0D261A] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
            >
              Budgeting for Beginners →
            </button>
            <button
              onClick={() => onNavigate('/credit-score-basics/')}
              className="px-4 py-2 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
            >
              Credit Score Basics →
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};
