import React from 'react';
import { Article } from '../../data/articles';

interface ArticleContentProps {
  article: Article;
  onNavigate: (path: string) => void;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ article, onNavigate }) => {
  switch (article.slug) {
    case 'budgeting-for-beginners':
      return <BudgetingArticle onNavigate={onNavigate} />;
    case 'save-money-on-low-income':
      return <SavingLowIncomeArticle onNavigate={onNavigate} />;
    case 'emergency-fund-guide':
      return <EmergencyFundArticle onNavigate={onNavigate} />;
    case 'credit-score-basics':
      return <CreditScoreArticle onNavigate={onNavigate} />;
    case 'investing-for-beginners':
      return <InvestingArticle onNavigate={onNavigate} />;
    default:
      return <div>Article content not found.</div>;
  }
};

/* -------------------------------------------------------------------------- */
/* ARTICLE 1: BUDGETING FOR BEGINNERS (~1,050 words)                           */
/* -------------------------------------------------------------------------- */
const BudgetingArticle: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="prose prose-stone max-w-none text-stone-800 leading-relaxed font-modern-sans">
      <div className="bg-[#F7F4EE] border border-stone-200/80 p-6 rounded-lg mb-8 not-prose">
        <p className="text-xs uppercase tracking-widest font-semibold text-stone-500 mb-2">Editorial Executive Summary</p>
        <p className="text-stone-700 text-sm leading-relaxed">
          Budgeting for beginners is not about living on cold beans or depriving yourself of everyday comfort. Rather, a personal budget is simply a deliberate monthly spending plan designed to track incoming cash, control baseline obligations, and direct whatever surplus you have toward your goals. This comprehensive guide breaks down how to calculate net income, separate fixed from variable expenses, and execute a sustainable monthly budget.
        </p>
      </div>

      <h2 className="text-2xl sm:text-3xl font-editorial-serif font-bold text-stone-900 mt-10 mb-4 pt-2 border-t border-stone-200">
        How Do Beginners Create a Monthly Budget?
      </h2>
      <p className="text-base sm:text-lg leading-relaxed text-stone-800 font-medium bg-[#FAF7F0] p-4 rounded-md border border-[#EBE3D3] mb-6">
        Beginners can create a monthly budget in five foundational steps: first, calculate your total monthly net (after-tax) take-home income; second, track all monthly expenditures over the past 30 to 60 days; third, categorize costs into non-negotiable fixed expenses and flexible variable expenses; fourth, assign every dollar a specific purpose using an allocation framework such as the 50/30/20 rule; and fifth, review and calibrate your spending totals on a weekly basis to adjust for unexpected variations.
      </p>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        What Budgeting Really Means in Personal Finance
      </h3>
      <p>
        At its core, a budget is an intentional blueprint for your money. Far too often, newcomers approach budgeting with feelings of dread or guilt, assuming it represents financial punishment. In reality, a budget provides financial clarity. Instead of wondering where your paycheck vanished at the end of each month, your budget tells your money where to go beforehand.
      </p>
      <p>
        In personal finance education, financial planners emphasize that budgeting is descriptive and forward-looking, not judgmental. It reflects your personal values, whether that means{' '}
        <button
          onClick={() => onNavigate('/debt-management/')}
          className="text-[#143826] font-semibold underline hover:text-[#0D261A] transition-colors cursor-pointer"
        >
          prioritizing debt management and elimination
        </button>
        , establishing a{' '}
        <button
          onClick={() => onNavigate('/emergency-fund-guide/')}
          className="text-[#143826] font-semibold underline hover:text-[#0D261A] transition-colors cursor-pointer"
        >
          starter emergency fund for beginners
        </button>
        , or eventually learning how to{' '}
        <button
          onClick={() => onNavigate('/investing-for-beginners/')}
          className="text-[#143826] font-semibold underline hover:text-[#0D261A] transition-colors cursor-pointer"
        >
          start investing in broad index funds
        </button>
        .
      </p>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        Why Beginners Urgently Need a Budget
      </h3>
      <p>
        Entering adulthood or starting a career without a spending plan is like setting off on a long road trip without a fuel gauge. Unmonitored spending inevitably leads to lifestyle inflation—a phenomenon where spending expands automatically to match whatever income is earned. 
      </p>
      <p>
        For beginners, establishing a functional monthly budget provides three decisive advantages:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4 text-stone-700">
        <li><strong>Reduces daily financial anxiety:</strong> Knowing your rent, utilities, and grocery bills are accounted for eliminates late-night financial stress.</li>
        <li><strong>Prevents toxic revolving debt:</strong> By assigning an emergency allocation, you avoid leaning on high-interest credit cards for routine surprises and preserve your{' '}
        <button
          onClick={() => onNavigate('/credit-score-basics/')}
          className="text-[#143826] font-semibold underline hover:text-[#0D261A] transition-colors cursor-pointer"
        >
          credit score rating and payment history
        </button>.</li>
        <li><strong>Accelerates personal goals:</strong> Whether you want to travel, buy a vehicle, or build long-term wealth, deliberate budgeting turns distant dreams into line items with clear timelines.</li>
      </ul>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        Step 1: Calculating Your Net Income (Take-Home Pay)
      </h3>
      <p>
        A frequent rookie mistake is calculating a budget using your annual gross salary. If your offer letter states $48,000 per year, you do not receive $4,000 per month. Federal and regional taxes, Social Security, Medicare, health insurance premiums, and retirement contributions reduce that figure significantly.
      </p>
      <p>
        Always base your monthly budget exclusively on <strong>net income</strong>—the exact dollar figure deposited directly into your bank account. If your income varies due to freelance contracts, hourly shifts, or commission structures, base your monthly baseline on the lowest monthly earnings recorded over the preceding six months. Any surplus earned during peak months should be treated as an unexpected bonus and funneled toward savings.
      </p>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        Step 2: Differentiating Fixed Versus Variable Expenses
      </h3>
      <p>
        Effective personal budgeting tips always insist on separating your expenditures into two distinct buckets: fixed expenses and variable expenses. If your variable costs are straining your paycheck, explore our actionable strategies on{' '}
        <button
          onClick={() => onNavigate('/save-money-on-low-income/')}
          className="text-[#143826] font-semibold underline hover:text-[#0D261A] transition-colors cursor-pointer"
        >
          how to save money on a low income
        </button>{' '}
        to audit food, mobile phone, and utility subscriptions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
        <div className="bg-white p-5 rounded-lg border border-stone-200">
          <h4 className="font-editorial-serif text-lg font-bold text-stone-900 mb-2">Fixed Expenses (Inflexible)</h4>
          <p className="text-xs text-stone-600 mb-3">Costs that remain identical or virtually unchanged each month. Non-negotiable for basic survival and credit standing.</p>
          <ul className="text-sm space-y-1.5 text-stone-700">
            <li>• Rent or mortgage payment</li>
            <li>• Fixed vehicle loan or transit pass</li>
            <li>• Health and automotive insurance</li>
            <li>• Baseline internet and cellular plans</li>
            <li>• Minimum student loan obligations</li>
          </ul>
        </div>
        <div className="bg-white p-5 rounded-lg border border-stone-200">
          <h4 className="font-editorial-serif text-lg font-bold text-stone-900 mb-2">Variable Expenses (Flexible)</h4>
          <p className="text-xs text-stone-600 mb-3">Costs that fluctuate weekly based on lifestyle choices, seasons, and discretionary behavior.</p>
          <ul className="text-sm space-y-1.5 text-stone-700">
            <li>• Groceries and household supplies</li>
            <li>• Electric and heating utility bills</li>
            <li>• Dining out, coffee runs, and takeout</li>
            <li>• Entertainment and streaming subscriptions</li>
            <li>• Personal clothing and leisure spending</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        Sample Monthly Budget for a Beginner ($3,200 Net Income)
      </h3>
      <p>
        To visualize how numbers align in practice, consider this realistic monthly budget for a beginner earning $3,200 net take-home pay per month, structured using the time-tested 50/30/20 guideline (50% Needs, 30% Wants, 20% Financial Priorities):
      </p>

      <div className="overflow-x-auto my-6 not-prose">
        <table className="w-full text-left text-sm border-collapse bg-white border border-stone-200 rounded-lg">
          <thead>
            <tr className="bg-stone-100 text-stone-900 border-b border-stone-200">
              <th className="py-3 px-4 font-semibold">Budget Category</th>
              <th className="py-3 px-4 font-semibold">Type</th>
              <th className="py-3 px-4 font-semibold">Monthly Amount</th>
              <th className="py-3 px-4 font-semibold">% of Income</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-150 text-stone-700">
            <tr>
              <td className="py-2.5 px-4 font-medium">Rent & Tenants Insurance</td>
              <td className="py-2.5 px-4">Fixed Need</td>
              <td className="py-2.5 px-4 font-mono tabular-nums">$1,050.00</td>
              <td className="py-2.5 px-4 font-mono tabular-nums">32.8%</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-medium">Groceries & Basic Toiletries</td>
              <td className="py-2.5 px-4">Variable Need</td>
              <td className="py-2.5 px-4 font-mono tabular-nums">$320.00</td>
              <td className="py-2.5 px-4 font-mono tabular-nums">10.0%</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-medium">Public Transit / Fuel</td>
              <td className="py-2.5 px-4">Variable Need</td>
              <td className="py-2.5 px-4 font-mono tabular-nums">$130.00</td>
              <td className="py-2.5 px-4 font-mono tabular-nums">4.1%</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-medium">Utilities & High-Speed Web</td>
              <td className="py-2.5 px-4">Fixed Need</td>
              <td className="py-2.5 px-4 font-mono tabular-nums">$100.00</td>
              <td className="py-2.5 px-4 font-mono tabular-nums">3.1%</td>
            </tr>
            <tr className="bg-stone-50/70 font-medium text-stone-900">
              <td className="py-2.5 px-4">Total Essential Needs</td>
              <td className="py-2.5 px-4">Subtotal</td>
              <td className="py-2.5 px-4 font-mono tabular-nums">$1,600.00</td>
              <td className="py-2.5 px-4 font-mono tabular-nums">50.0%</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-medium">Dining Out & Socializing</td>
              <td className="py-2.5 px-4">Variable Want</td>
              <td className="py-2.5 px-4 font-mono tabular-nums">$350.00</td>
              <td className="py-2.5 px-4 font-mono tabular-nums">10.9%</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-medium">Subscriptions & Hobbies</td>
              <td className="py-2.5 px-4">Variable Want</td>
              <td className="py-2.5 px-4 font-mono tabular-nums">$200.00</td>
              <td className="py-2.5 px-4 font-mono tabular-nums">6.3%</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-medium">Personal Shopping & Misc.</td>
              <td className="py-2.5 px-4">Variable Want</td>
              <td className="py-2.5 px-4 font-mono tabular-nums">$250.00</td>
              <td className="py-2.5 px-4 font-mono tabular-nums">7.8%</td>
            </tr>
            <tr className="bg-stone-50/70 font-medium text-stone-900">
              <td className="py-2.5 px-4">Total Flexible Wants</td>
              <td className="py-2.5 px-4">Subtotal</td>
              <td className="py-2.5 px-4 font-mono tabular-nums">$800.00</td>
              <td className="py-2.5 px-4 font-mono tabular-nums">25.0%</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-medium">Emergency Fund Contribution</td>
              <td className="py-2.5 px-4">Savings</td>
              <td className="py-2.5 px-4 font-mono tabular-nums">$500.00</td>
              <td className="py-2.5 px-4 font-mono tabular-nums">15.6%</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-medium">Accelerated Debt Paydown</td>
              <td className="py-2.5 px-4">Debt Principal</td>
              <td className="py-2.5 px-4 font-mono tabular-nums">$300.00</td>
              <td className="py-2.5 px-4 font-mono tabular-nums">9.4%</td>
            </tr>
            <tr className="bg-[#EBF1EA] font-semibold text-[#143826]">
              <td className="py-3 px-4">Total Budget Balanced</td>
              <td className="py-3 px-4">Net Zero</td>
              <td className="py-3 px-4 font-mono tabular-nums">$3,200.00</td>
              <td className="py-3 px-4 font-mono tabular-nums">100.0%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        Common Budgeting Mistakes Beginners Must Avoid
      </h3>
      <p>
        Building a budget is simple, but sticking with it during your first quarter requires vigilance. Steer clear of these four widespread pitfalls:
      </p>
      <ol className="list-decimal pl-6 space-y-3 my-4 text-stone-700">
        <li>
          <strong>Setting an unrealistically frugal target:</strong> Slashing your entertainment budget to zero overnight is the financial equivalent of a crash diet. You will burn out within two weeks. Leave room for small comforts.
        </li>
        <li>
          <strong>Forgetting irregular and annual expenses:</strong> Car registration, annual software renewals, dentist visits, and holiday gifts occur every year. If you fail to account for them, they will demolish your monthly budget. Divide annual expenses by 12 and set aside that fraction each month in a designated savings account.
        </li>
        <li>
          <strong>Abandoning the budget after one slip-up:</strong> Overspending by $40 on weekend brunch does not mean your budget failed. Adjust your dining budget for the remainder of the month and continue forward.
        </li>
        <li>
          <strong>Failing to fund a cash buffer first:</strong> If you throw every dollar of surplus toward investing before building a modest emergency reserve, the first unexpected car repair will force you into credit card borrowing. Learn more in our dedicated{' '}
          <button
            onClick={() => onNavigate('/emergency-fund-guide/')}
            className="text-[#143826] font-semibold underline hover:text-[#0D261A] transition-colors cursor-pointer"
          >
            Emergency Fund Guide
          </button>.
        </li>
      </ol>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        Practical Steps to Start Your Budget Today
      </h3>
      <p>
        You do not need complex paid software to start today. A simple three-ring paper notebook, an Excel spreadsheet, or Google Sheets works reliably. Follow these practical personal budgeting tips to initiate your plan:
      </p>
      <div className="bg-stone-50 border border-stone-200 p-6 rounded-lg my-6 not-prose space-y-4">
        <div className="flex items-start gap-3">
          <span className="w-6 h-6 rounded-full bg-[#143826] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
          <div>
            <h5 className="font-semibold text-stone-900 text-sm">Download your last 60 days of bank statements</h5>
            <p className="text-xs text-stone-600 mt-1">Review where your money went rather than guessing. Highlight your recurring recurring subscriptions and grocery averages.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="w-6 h-6 rounded-full bg-[#143826] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
          <div>
            <h5 className="font-semibold text-stone-900 text-sm">Choose an allocation model</h5>
            <p className="text-xs text-stone-600 mt-1">Adopt the 50/30/20 guideline or the zero-based budgeting method where every dollar is deliberately allocated to an expense, debt, or savings category.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="w-6 h-6 rounded-full bg-[#143826] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
          <div>
            <h5 className="font-semibold text-stone-900 text-sm">Automate your savings deposit on payday</h5>
            <p className="text-xs text-stone-600 mt-1">Treat savings like your most important non-negotiable monthly bill. Read our guide on{' '}
            <button
              onClick={() => onNavigate('/save-money-on-low-income/')}
              className="text-[#143826] font-semibold underline hover:text-[#0D261A] cursor-pointer"
            >
              how to save money on a low income
            </button>{' '}
            for automated micro-saving strategies.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="w-6 h-6 rounded-full bg-[#143826] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
          <div>
            <h5 className="font-semibold text-stone-900 text-sm">Perform a 10-minute Sunday evening reconciliation</h5>
            <p className="text-xs text-stone-600 mt-1">Log into your bank app, record what you spent across the week, and verify that you have enough allocated for the remaining days of the month.</p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        Conclusion & Next Steps
      </h3>
      <p>
        Mastering how to create a monthly budget is the single most transformative habit in personal finance. A budget does not restrict your freedom—it protects your future. Once you have stabilized your monthly cash flow, the next natural step is to safeguard yourself against life&apos;s surprises by learning how to build an emergency buffer.
      </p>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* ARTICLE 2: HOW TO SAVE MONEY ON A LOW INCOME (~1,080 words)                */
/* -------------------------------------------------------------------------- */
const SavingLowIncomeArticle: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="prose prose-stone max-w-none text-stone-800 leading-relaxed font-modern-sans">
      <div className="bg-[#F7F4EE] border border-stone-200/80 p-6 rounded-lg mb-8 not-prose">
        <p className="text-xs uppercase tracking-widest font-semibold text-stone-500 mb-2">Editorial Executive Summary</p>
        <p className="text-stone-700 text-sm leading-relaxed">
          When everyday living expenses consume nearly every dollar of your paycheck, traditional financial advice like &quot;just cut out coffee&quot; feels out of touch. Saving money on a modest income is not about extreme deprivation; it is about auditing structural recurring expenses, capturing micro-savings through automation, and building steady financial momentum one modest milestone at a time.
        </p>
      </div>

      <h2 className="text-2xl sm:text-3xl font-editorial-serif font-bold text-stone-900 mt-10 mb-4 pt-2 border-t border-stone-200">
        How Can You Save Money When Your Income Is Low?
      </h2>
      <p className="text-base sm:text-lg leading-relaxed text-stone-800 font-medium bg-[#FAF7F0] p-4 rounded-md border border-[#EBE3D3] mb-6">
        You can save money on a low income by focusing on three realistic levers: first, audit and renegotiate your largest recurring fixed bills (such as mobile carrier plans, broadband tariffs, and utility tariffs); second, establish micro-saving habits where modest amounts ($5 to $20) are automatically transferred to a separate savings account immediately on payday; and third, reduce variable food and transport costs through weekly batch meal planning, grocery unit-price comparisons, and public transit passes.
      </p>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        The Myth of the Big Income Requirement
      </h3>
      <p>
        A widespread misconception is that savings only become possible once you land a six-figure salary. While a higher income undoubtedly expands your financial margin, saving is primarily a behavioral skill rather than an income threshold. Individuals earning generous salaries frequently spend every penny they make through unmonitored lifestyle creep.
      </p>
      <p>
        Conversely, building the habit of setting aside $15 each week instills the discipline, vigilance, and psychological resilience needed to manage larger sums later in life. That modest $15 weekly transfer amounts to $780 in a single year—acting as your initial{' '}
        <button
          onClick={() => onNavigate('/emergency-fund-guide/')}
          className="text-[#143826] font-semibold underline hover:text-[#0D261A] transition-colors cursor-pointer"
        >
          starter emergency fund reserve
        </button>{' '}
        to repair a blown automobile alternator or replace a broken appliance without descending into{' '}
        <button
          onClick={() => onNavigate('/credit-score-basics/')}
          className="text-[#143826] font-semibold underline hover:text-[#0D261A] transition-colors cursor-pointer"
        >
          high-interest credit card debt and credit score damage
        </button>.
      </p>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        Identifying and Eliminating Invisible Budget Leaks
      </h3>
      <p>
        When money is tight, you cannot afford &quot;invisible leaks&quot;—small, automated fees that drip from your checking account without delivering tangible value. Conduct an honest line-by-line audit using our{' '}
        <button
          onClick={() => onNavigate('/budgeting-for-beginners/')}
          className="text-[#143826] font-semibold underline hover:text-[#0D261A] transition-colors cursor-pointer"
        >
          step-by-step monthly budgeting framework
        </button>:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4 text-stone-700">
        <li><strong>Zombie subscriptions:</strong> Streaming services, gym memberships, app subscriptions, or magazine trials you have not used in the past 30 days should be canceled immediately. You can always re-subscribe later if genuinely missed.</li>
        <li><strong>Checking account maintenance fees:</strong> High-street banks frequently charge $10–$15 monthly account maintenance fees if balances dip below a threshold. Switch to an online fee-free checking account or a local credit union that guarantees zero maintenance minimums.</li>
        <li><strong>Overdraft protection traps:</strong> Opt out of standard overdraft &quot;courtesy&quot; programs that charge $35 per transaction. Having a debit card decline at the register is vastly preferable to paying a 1,000% annualized penalty for a $4 sandwich.</li>
      </ul>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        Setting Bite-Sized, Realistic Savings Goals
      </h3>
      <p>
        Telling someone who makes $1,800 a month that they need a $10,000 emergency fund is demoralizing. Psychological research in behavioral economics proves that insurmountable goals cause people to abandon their efforts entirely.
      </p>
      <p>
        Instead, structure your savings targets into discrete, achievable milestones:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose">
        <div className="p-4 bg-white border border-stone-200 rounded-lg">
          <div className="text-xs uppercase tracking-wider font-bold text-stone-500 mb-1">Milestone 1</div>
          <div className="text-xl font-editorial-serif font-bold text-[#143826]">$250 Buffer</div>
          <p className="text-xs text-stone-600 mt-2">Absorbs sudden prescription refills, flat tires, or school supply fees without panic.</p>
        </div>
        <div className="p-4 bg-white border border-stone-200 rounded-lg">
          <div className="text-xs uppercase tracking-wider font-bold text-stone-500 mb-1">Milestone 2</div>
          <div className="text-xl font-editorial-serif font-bold text-[#143826]">$500 Buffer</div>
          <p className="text-xs text-stone-600 mt-2">Covers routine plumbing calls, urgent travel to a sick family member, or basic veterinary care.</p>
        </div>
        <div className="p-4 bg-white border border-stone-200 rounded-lg">
          <div className="text-xs uppercase tracking-wider font-bold text-stone-500 mb-1">Milestone 3</div>
          <div className="text-xl font-editorial-serif font-bold text-[#143826]">$1,000 Starter Reserve</div>
          <p className="text-xs text-stone-600 mt-2">The classic beginner safety cushion that prevents payday loans or balance carryover on credit cards.</p>
        </div>
      </div>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        Actionable Money-Saving Tips for Core Living Costs
      </h3>
      <p>
        Food, utilities, and transportation constitute the vast bulk of non-rent expenses. Here is how to reduce monthly expenses in these categories without degrading your health or quality of life:
      </p>
      
      <div className="space-y-4 my-6 not-prose">
        <div className="bg-white p-5 rounded-lg border border-stone-200">
          <h4 className="font-editorial-serif text-lg font-bold text-stone-900 mb-2">1. The Strategic Grocery Plan</h4>
          <p className="text-sm text-stone-700 leading-relaxed">
            Never walk into a grocery store without an inventory-based shopping list. Plan 3 to 4 core meals featuring versatile, cost-effective staples such as dried lentils, black beans, whole oats, brown rice, frozen vegetables, and eggs. Check the &quot;unit price&quot; (price per ounce or gram) on shelf tags rather than the overall sticker price. Buying private store brands rather than branded packaging typically slashes your receipt by 20% to 30% with identical nutritional value.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg border border-stone-200">
          <h4 className="font-editorial-serif text-lg font-bold text-stone-900 mb-2">2. Mobile Phone and Internet Renegotiation</h4>
          <p className="text-sm text-stone-700 leading-relaxed">
            Major telecom carriers charge $70 to $90 per month for unlimited plans. Mobile Virtual Network Operators (MVNOs) like Mint Mobile, Visible, or Cricket utilize the exact same physical cell towers and nationwide coverage for $15 to $30 monthly. Transitioning saves $500 to $700 per person annually. For home broadband, call customer retention annually to request existing promotional discounts or qualify for affordable connectivity subsidies.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg border border-stone-200">
          <h4 className="font-editorial-serif text-lg font-bold text-stone-900 mb-2">3. Energy and Utility Efficiency</h4>
          <p className="text-sm text-stone-700 leading-relaxed">
            Adjusting your thermostat by 2 degrees in summer and winter lowers your monthly electric or gas heating bill by up to 10%. Wash laundry in cold water—up to 90% of a washing machine&apos;s energy consumption goes toward heating water. Request a &quot;budget billing plan&quot; from your power company to average seasonal winter/summer spikes into a predictable, identical monthly payment.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        Automating Savings Where Possible
      </h3>
      <p>
        Relying on willpower to save money is a losing strategy. By the end of the month, unexpected demands on your cash inevitably appear. The most successful saving technique is the <strong>&quot;Pay Yourself First&quot;</strong> rule.
      </p>
      <p>
        Establish an automatic transfer through your online banking portal to trigger the exact morning your paycheck lands. Transferring even $15 or $25 directly into an isolated{' '}
        <button
          onClick={() => onNavigate('/emergency-fund-guide/')}
          className="text-[#143826] font-semibold underline hover:text-[#0D261A] transition-colors cursor-pointer"
        >
          High-Yield Savings Account (HYSA)
        </button>{' '}
        ensures the money is removed from your everyday checking account before you make discretionary decisions. Once you accumulate a comfortable buffer and eliminate consumer debt, you can channel those recurring automated transfers into{' '}
        <button
          onClick={() => onNavigate('/investing-for-beginners/')}
          className="text-[#143826] font-semibold underline hover:text-[#0D261A] transition-colors cursor-pointer"
        >
          investing for beginners in low-cost index funds
        </button>.
      </p>
      <p>
        If your checking and savings accounts are housed at the same bank and tempting to tap with a debit card, open your emergency savings at a completely separate online banking institution. The 24-to-48 hour ACH transfer delay acts as a built-in mental firewall that prevents impulsive spending.
      </p>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        Sustainable Habits Over Drastic Sacrifices
      </h3>
      <p>
        Extreme frugality often leads to &quot;frugal fatigue&quot;—a state of emotional exhaustion that triggers revenge spending sprees. Personal finance is not about never enjoying a coffee with a friend or never seeing a movie. It is about ruthlessly cutting costs on things you do not care about so you can comfortably afford the essentials and protect your future.
      </p>
      <p>
        Practice the <strong>72-Hour Rule</strong> for any non-essential purchase over $30. When you see something you want, wait three full days before buying it. In over 70% of cases, the impulsive emotional urge subsides, keeping your hard-earned cash safely in your account.
      </p>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        Summary and Next Steps
      </h3>
      <p>
        Saving money on a modest income is challenging, but every small deposit builds autonomy and peace of mind. Combine these money-saving tips with a solid understanding of your monthly cash flow in our{' '}
        <button
          onClick={() => onNavigate('/budgeting-for-beginners/')}
          className="text-[#143826] font-semibold underline hover:text-[#0D261A] cursor-pointer"
        >
          Budgeting for Beginners
        </button>{' '}
        guide, or explore our{' '}
        <button
          onClick={() => onNavigate('/emergency-fund-guide/')}
          className="text-[#143826] font-semibold underline hover:text-[#0D261A] cursor-pointer"
        >
          Emergency Fund Guide
        </button>{' '}
        to learn where your reserves should be parked.
      </p>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* ARTICLE 3: EMERGENCY FUND GUIDE (~1,025 words)                             */
/* -------------------------------------------------------------------------- */
const EmergencyFundArticle: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="prose prose-stone max-w-none text-stone-800 leading-relaxed font-modern-sans">
      <div className="bg-[#F7F4EE] border border-stone-200/80 p-6 rounded-lg mb-8 not-prose">
        <p className="text-xs uppercase tracking-widest font-semibold text-stone-500 mb-2">Editorial Executive Summary</p>
        <p className="text-stone-700 text-sm leading-relaxed">
          An emergency fund is the bedrock of personal financial security. Without cash reserves set aside in a secure, liquid account, any unforeseen medical copay, car breakdown, or temporary income reduction turns into an expensive spiral of high-interest credit card debt. This comprehensive emergency fund guide explains how to calculate your essential survival number, where to store your cash safely, and how to build your safety net step by step.
        </p>
      </div>

      <h2 className="text-2xl sm:text-3xl font-editorial-serif font-bold text-stone-900 mt-10 mb-4 pt-2 border-t border-stone-200">
        How Much Should a Beginner Save in an Emergency Fund?
      </h2>
      <p className="text-base sm:text-lg leading-relaxed text-stone-800 font-medium bg-[#FAF7F0] p-4 rounded-md border border-[#EBE3D3] mb-6">
        A beginner should aim for a two-stage emergency savings target: first, build an immediate starter emergency fund of $500 to $1,000 as quickly as possible to buffer against routine unexpected bills; second, once high-interest debts are stabilized, expand that reserve to cover 3 to 6 months of essential baseline living expenses (such as rent, utilities, groceries, and insurance).
      </p>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        What an Emergency Fund Is (and What It Isn&apos;t)
      </h3>
      <p>
        An emergency fund is a dedicated pool of cash reserved exclusively for sudden, urgent, and necessary life events. It is financial insurance, not an investment instrument. Its primary mission is not to earn high returns or beat the stock market, but to provide immediate liquidity and capital preservation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
        <div className="p-4 bg-emerald-50/60 border border-emerald-200/70 rounded-lg">
          <h4 className="font-semibold text-emerald-950 text-sm mb-1.5 flex items-center gap-2">
            <span>✓ Genuine Emergencies</span>
          </h4>
          <ul className="text-xs space-y-1.5 text-stone-700">
            <li>• Urgent medical or dental treatment</li>
            <li>• Essential vehicle repair needed to get to work</li>
            <li>• Sudden job loss or temporary layoff</li>
            <li>• Critical home plumbing or heating failure</li>
          </ul>
        </div>
        <div className="p-4 bg-amber-50/60 border border-amber-200/70 rounded-lg">
          <h4 className="font-semibold text-amber-950 text-sm mb-1.5 flex items-center gap-2">
            <span>✕ Not Emergencies</span>
          </h4>
          <ul className="text-xs space-y-1.5 text-stone-700">
            <li>• Flash sales on electronics or designer clothes</li>
            <li>• Impromptu weekend road trips with friends</li>
            <li>• Annual holiday gifts or predictable car maintenance</li>
            <li>• Buying speculative cryptocurrencies or stocks</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        How to Estimate Your Essential Monthly Expenses
      </h3>
      <p>
        When determining how much emergency savings do I need, beginners frequently make the error of multiplying their total monthly paycheck by 6. This leads to an unnecessarily bloated savings target that can delay other important financial goals like{' '}
        <button
          onClick={() => onNavigate('/debt-management/')}
          className="text-[#143826] font-semibold underline hover:text-[#0D261A] transition-colors cursor-pointer"
        >
          paying off high-interest debt
        </button>{' '}
        or{' '}
        <button
          onClick={() => onNavigate('/investing-for-beginners/')}
          className="text-[#143826] font-semibold underline hover:text-[#0D261A] transition-colors cursor-pointer"
        >
          investing in index funds
        </button>
        .
      </p>
      <p>
        An emergency fund only needs to cover <strong>essential baseline expenses</strong>—the absolute bare minimum required to maintain shelter, health, and basic nourishment during a crisis. To find your number, calculate your fixed survival costs using our{' '}
        <button
          onClick={() => onNavigate('/budgeting-for-beginners/')}
          className="text-[#143826] font-semibold underline hover:text-[#0D261A] transition-colors cursor-pointer"
        >
          beginner monthly budget framework
        </button>
        :
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4 text-stone-700">
        <li><strong>Housing:</strong> Rent or mortgage payment, plus property tax and renters insurance.</li>
        <li><strong>Utilities:</strong> Electricity, water, basic heating fuel, and home internet.</li>
        <li><strong>Food:</strong> Modest grocery bills (excluding dining out, takeout, or alcohol).</li>
        <li><strong>Health:</strong> Essential health insurance premiums and vital prescription medications.</li>
        <li><strong>Transportation:</strong> Fuel or public transit passes needed for essential mobility.</li>
        <li><strong>Minimum debt service:</strong> The bare legal minimum payments on student loans or credit cards to protect your{' '}
        <button
          onClick={() => onNavigate('/credit-score-basics/')}
          className="text-[#143826] font-semibold underline hover:text-[#0D261A] transition-colors cursor-pointer"
        >
          credit score from delinquency marks
        </button>.</li>
      </ul>
      <p>
        If your total monthly income is $3,500, but your essential survival expenses total $2,100, your 3-month target is $6,300, and your 6-month target is $12,600.
      </p>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        Where to Keep Your Emergency Savings
      </h3>
      <p>
        The location of your emergency fund matters as much as the amount. Your money must meet two strict criteria: <strong>safety</strong> and <strong>liquidity</strong>.
      </p>
      <div className="space-y-4 my-6 not-prose">
        <div className="bg-white p-5 rounded-lg border border-stone-200">
          <h4 className="font-editorial-serif text-lg font-bold text-stone-900 mb-1">The Gold Standard: High-Yield Savings Accounts (HYSA)</h4>
          <p className="text-sm text-stone-700 leading-relaxed">
            Unlike traditional brick-and-mortar savings accounts that pay a negligible 0.01% annual percentage yield (APY), online HYSAs typically pay competitive rates (often 3.5% to 5.0% depending on central bank benchmark rates). Most importantly, ensure the financial institution is backed by government deposit insurance—such as{' '}
            <a
              href="https://www.fdic.gov/resources/consumers/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#143826] font-semibold underline hover:text-[#0D261A]"
            >
              FDIC deposit insurance (Federal Deposit Insurance Corporation)
            </a>{' '}
            in the United States (insuring deposits up to $250,000 per depositor), the <strong>FSCS</strong> in the United Kingdom (up to £85,000), or the <strong>CDIC</strong> in Canada.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg border border-stone-200">
          <h4 className="font-editorial-serif text-lg font-bold text-stone-900 mb-1">Where NOT to Keep It</h4>
          <p className="text-sm text-stone-700 leading-relaxed">
            Never invest your emergency fund in stocks, mutual funds, certificates of deposit (CDs) with stiff early withdrawal penalties, or volatile digital assets. If a recession hits, you might lose your job at the exact moment the stock market drops 30%, forcing you to liquidate shares at an enormous loss just to pay rent. Learn more about market volatility in our{' '}
            <button
              onClick={() => onNavigate('/investing-for-beginners/')}
              className="text-[#143826] font-semibold underline hover:text-[#0D261A] transition-colors cursor-pointer"
            >
              investing for beginners guide
            </button>.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        Staged Strategy: How to Build the Fund Gradually
      </h3>
      <p>
        Do not let a multi-thousand-dollar target paralyze you. Build your emergency fund using this structured sequence:
      </p>

      <div className="overflow-x-auto my-6 not-prose">
        <table className="w-full text-left text-sm border-collapse bg-white border border-stone-200 rounded-lg">
          <thead>
            <tr className="bg-stone-100 text-stone-900 border-b border-stone-200">
              <th className="py-3 px-4 font-semibold">Tier</th>
              <th className="py-3 px-4 font-semibold">Target Size</th>
              <th className="py-3 px-4 font-semibold">Primary Purpose</th>
              <th className="py-3 px-4 font-semibold">When to Focus On It</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-150 text-stone-700">
            <tr>
              <td className="py-2.5 px-4 font-medium text-stone-900">Tier 1: Starter Buffer</td>
              <td className="py-2.5 px-4 font-mono tabular-nums">$500 – $1,000</td>
              <td className="py-2.5 px-4">Stop relying on credit cards for routine mishaps</td>
              <td className="py-2.5 px-4">Immediate priority before aggressive debt payoff</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-medium text-stone-900">Tier 2: Core Safety Cushion</td>
              <td className="py-2.5 px-4 font-mono tabular-nums">3 Months of Essentials</td>
              <td className="py-2.5 px-4">Weather a job transition or medical recovery</td>
              <td className="py-2.5 px-4">After eliminating high-interest revolving credit</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-medium text-stone-900">Tier 3: Full Fortress</td>
              <td className="py-2.5 px-4 font-mono tabular-nums">6 Months of Essentials</td>
              <td className="py-2.5 px-4">Maximum peace of mind for freelancers or single earners</td>
              <td className="py-2.5 px-4">Maintained continuously alongside long-term investing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        When to Use the Fund and How to Replenish It
      </h3>
      <p>
        When a true crisis occurs, do not feel guilty about spending your emergency savings. That is precisely why you built the fund! Tapping your cash prevents you from paying 24% interest to a credit card company.
      </p>
      <p>
        However, the moment the emergency is resolved, treat the replenishment of your fund as an urgent budget priority. Temporarily pause extra discretionary spending and divert any available surplus back into your high-yield account until your baseline reserve is fully restored.
      </p>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        Conclusion & Next Steps
      </h3>
      <p>
        An emergency fund provides sleep-at-night peace that no stock return or luxury purchase can rival. To see how your emergency fund fits into your overall monthly plan, explore our{' '}
        <button
          onClick={() => onNavigate('/budgeting-for-beginners/')}
          className="text-[#143826] font-semibold underline hover:text-[#0D261A] cursor-pointer"
        >
          Budgeting for Beginners
        </button>{' '}
        guide, or review our guide on{' '}
        <button
          onClick={() => onNavigate('/investing-for-beginners/')}
          className="text-[#143826] font-semibold underline hover:text-[#0D261A] cursor-pointer"
        >
          Investing for Beginners
        </button>{' '}
        to learn how to deploy capital once your security fortress is established.
      </p>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* ARTICLE 4: CREDIT SCORE BASICS (~1,115 words)                              */
/* -------------------------------------------------------------------------- */
const CreditScoreArticle: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="prose prose-stone max-w-none text-stone-800 leading-relaxed font-modern-sans">
      <div className="bg-[#F7F4EE] border border-stone-200/80 p-6 rounded-lg mb-8 not-prose">
        <p className="text-xs uppercase tracking-widest font-semibold text-stone-500 mb-2">Editorial Executive Summary</p>
        <p className="text-stone-700 text-sm leading-relaxed">
          Few personal finance metrics are as surrounded by mythology and confusion as the credit score. Understanding credit score basics is vital: your credit profile determines whether landlords will rent you an apartment, what interest rate you will pay on a mortgage, and in some jurisdictions, even job or insurance eligibility. This guide covers how credit scores work, the primary factors that influence them, common misconceptions, and international differences.
        </p>
      </div>

      <h2 className="text-2xl sm:text-3xl font-editorial-serif font-bold text-stone-900 mt-10 mb-4 pt-2 border-t border-stone-200">
        What Factors Affect Your Credit Score?
      </h2>
      <p className="text-base sm:text-lg leading-relaxed text-stone-800 font-medium bg-[#FAF7F0] p-4 rounded-md border border-[#EBE3D3] mb-6">
        In standard credit scoring models such as FICO and VantageScore, your credit score is primarily determined by five weighted factors: first, payment history (whether you pay on time, making up approximately 35% of the score); second, credit utilization ratio (how much of your revolving credit limit you use, accounting for roughly 30%); third, length of credit history (the age of your accounts, representing about 15%); fourth, credit mix (handling different types of credit like installment loans and revolving cards, about 10%); and fifth, new credit inquiries (recent applications for credit lines, making up the remaining 10%).
      </p>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        What a Credit Score Truly Represents
      </h3>
      <p>
        A credit score is a three-digit numerical representation of your creditworthiness. It tells lenders, banks, and landlords how reliably you have managed borrowed money in the past. It is essentially an actuarial risk assessment tool: the higher your score, the lower the statistical likelihood that you will default on your repayment obligations.
      </p>
      <p>
        Importantly, a credit score does not measure your personal character, wealth, or salary. A millionaire with zero borrowing history can have a thin credit file, while an entry-level worker who pays a student loan and a modest credit card on time each month can maintain an exceptional score.
      </p>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        The Core Factors That Affect Credit Scores in Detail
      </h3>
      <p>
        While proprietary mathematical algorithms vary between credit rating agencies, the foundational pillars of credit scoring remain consistent:
      </p>

      <div className="space-y-4 my-6 not-prose">
        <div className="bg-white p-5 rounded-lg border border-stone-200">
          <div className="flex justify-between items-center mb-1">
            <h4 className="font-editorial-serif text-lg font-bold text-stone-900">1. Payment History (Approx. 35% Weight)</h4>
            <span className="text-xs font-mono font-semibold text-[#143826] bg-[#EBF1EA] px-2 py-0.5 rounded">Highest Impact</span>
          </div>
          <p className="text-sm text-stone-700 leading-relaxed">
            This is the single most critical factor. Scoring models look at whether you paid past credit accounts on time. Late payments (especially those reported 30, 60, or 90 days past due), charge-offs, collections, and bankruptcies severely damage your credit standing and can remain on your credit report for up to seven years. Setting up automatic minimum payments is the best defensive move.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg border border-stone-200">
          <div className="flex justify-between items-center mb-1">
            <h4 className="font-editorial-serif text-lg font-bold text-stone-900">2. Amounts Owed & Utilization Ratio (Approx. 30% Weight)</h4>
            <span className="text-xs font-mono font-semibold text-[#143826] bg-[#EBF1EA] px-2 py-0.5 rounded">High Impact</span>
          </div>
          <p className="text-sm text-stone-700 leading-relaxed">
            Credit utilization refers to the percentage of your total available revolving credit that you are actively using. For instance, if you have a credit card with a $2,000 credit limit and a balance of $1,000, your utilization ratio is 50%. Financial educators recommend keeping your overall utilization below 30%, with under 10% considered optimal for top credit health. If revolving balances are currently elevated, apply our{' '}
            <button
              onClick={() => onNavigate('/debt-management/')}
              className="text-[#143826] font-semibold underline hover:text-[#0D261A] transition-colors cursor-pointer"
            >
              debt management and elimination frameworks
            </button>{' '}
            to rapidly drive utilization downward.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg border border-stone-200">
          <div className="flex justify-between items-center mb-1">
            <h4 className="font-editorial-serif text-lg font-bold text-stone-900">3. Length of Credit History (Approx. 15% Weight)</h4>
            <span className="text-xs font-mono font-semibold text-stone-600 bg-stone-100 px-2 py-0.5 rounded">Moderate Impact</span>
          </div>
          <p className="text-sm text-stone-700 leading-relaxed">
            Scoring algorithms calculate the average age of all your accounts, the age of your oldest account, and the age of your newest account. A longer history provides lenders with a deeper track record. This is why financial educators advise keeping your oldest no-annual-fee credit card open, even if you only use it for a small subscription once every few months.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg border border-stone-200">
          <div className="flex justify-between items-center mb-1">
            <h4 className="font-editorial-serif text-lg font-bold text-stone-900">4. Credit Mix & New Inquiries (Approx. 10% Each)</h4>
            <span className="text-xs font-mono font-semibold text-stone-600 bg-stone-100 px-2 py-0.5 rounded">Lower Impact</span>
          </div>
          <p className="text-sm text-stone-700 leading-relaxed">
            Managing both revolving credit (credit cards) and installment loans (auto loans, mortgages, student loans) shows well-rounded borrowing capability. However, applying for several new credit cards in a short window triggers multiple &quot;hard inquiries,&quot; signaling potential financial distress to lenders and temporarily suppressing your score.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        Why Credit Reports Should Be Checked Regularly
      </h3>
      <p>
        Your credit score is calculated directly from the raw data contained in your credit reports. If a credit bureau has incorrect information—such as an erroneous late payment, a misspelled name linking you to someone else&apos;s debt, or fraudulent accounts opened by identity thieves—your score will plummet unfairly.
      </p>
      <p>
        Under U.S. Federal Law, consumers are legally entitled to obtain free copies of their credit reports from the three nationwide credit bureaus (Equifax, Experian, and TransUnion) via{' '}
        <a
          href="https://www.annualcreditreport.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#143826] font-semibold underline hover:text-[#0D261A]"
        >
          AnnualCreditReport.com (Official Federal Credit Portal)
        </a>
        . Checking your own credit report is a &quot;soft inquiry&quot; and will never hurt your score. Scrutinize your report annually for unrecognized addresses, delinquent balances you do not owe, or unfamiliar account openings. You can also consult the{' '}
        <a
          href="https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#143826] font-semibold underline hover:text-[#0D261A]"
        >
          CFPB Credit Reports and Scores educational portal
        </a>{' '}
        for dispute guides.
      </p>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        Common Credit Score Myths Beginners Must Stop Believing
      </h3>
      <ul className="list-disc pl-6 space-y-3 my-4 text-stone-700">
        <li>
          <strong>Myth: &quot;You need to carry a balance and pay interest to build credit.&quot;</strong><br />
          This is completely false and costs beginners hundreds of dollars in unnecessary interest. You should pay your statement balance in full every single month before the due date. Managing your cash flow with a{' '}
          <button
            onClick={() => onNavigate('/budgeting-for-beginners/')}
            className="text-[#143826] font-semibold underline hover:text-[#0D261A] transition-colors cursor-pointer"
          >
            simple monthly budget
          </button>{' '}
          guarantees that you never charge more than you can immediately pay off.
        </li>
        <li>
          <strong>Myth: &quot;Closing an old unused card immediately improves your score.&quot;</strong><br />
          Closing an account reduces your total available credit limit (which instantly spikes your credit utilization ratio) and may shorten your credit history over time. Unless a card charges an expensive annual fee, keeping it open is usually smarter.
        </li>
        <li>
          <strong>Myth: &quot;Checking your score lowers it.&quot;</strong><br />
          Checking your own score through your banking app or credit monitoring tool is a soft inquiry. Only formal applications for credit initiated by lenders (hard inquiries) cause temporary minor dips. Maintaining an{' '}
          <button
            onClick={() => onNavigate('/emergency-fund-guide/')}
            className="text-[#143826] font-semibold underline hover:text-[#0D261A] transition-colors cursor-pointer"
          >
            emergency fund buffer
          </button>{' '}
          ensures unexpected life shocks do not force you into emergency credit applications.
        </li>
      </ul>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        Global Differences: Credit Scoring Is Not Universal
      </h3>
      <p>
        It is essential to understand that credit systems differ substantially across international borders. While the United States relies heavily on the 300–850 FICO and VantageScore models, other nations employ different frameworks:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4 text-stone-700">
        <li><strong>United Kingdom:</strong> Scores are calculated independently by bureaus like Experian (up to 999), Equifax (up to 1,000), and TransUnion (up to 710). Being on the official local Electoral Roll is a significant positive scoring factor in the UK.</li>
        <li><strong>Canada:</strong> Utilizes Equifax and TransUnion Canada, operating on a 300–900 scale, closely resembling US models.</li>
        <li><strong>Continental Europe:</strong> Many European countries (such as Germany with SCHUFA or France with the Banque de France) operate central negative registers rather than commercial gamified scores. They primarily track whether you have defaulted on bills rather than rewarding continuous credit card borrowing.</li>
      </ul>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        Conclusion & Next Steps
      </h3>
      <p>
        A healthy credit score is built through quiet, boring consistency: pay every bill on time, keep balances low, and avoid applying for credit you do not need. To ensure you always have cash on hand to pay your credit statements in full, review our{' '}
        <button
          onClick={() => onNavigate('/budgeting-for-beginners/')}
          className="text-[#143826] font-semibold underline hover:text-[#0D261A] cursor-pointer"
        >
          Budgeting for Beginners
        </button>{' '}
        guide, or check our{' '}
        <button
          onClick={() => onNavigate('/save-money-on-low-income/')}
          className="text-[#143826] font-semibold underline hover:text-[#0D261A] cursor-pointer"
        >
          How to Save Money on a Low Income
        </button>{' '}
        guide for strategies on keeping your living expenses manageable.
      </p>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* ARTICLE 5: INVESTING FOR BEGINNERS (~1,160 words)                          */
/* -------------------------------------------------------------------------- */
const InvestingArticle: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="prose prose-stone max-w-none text-stone-800 leading-relaxed font-modern-sans">
      <div className="bg-[#F7F4EE] border border-stone-200/80 p-6 rounded-lg mb-8 not-prose">
        <p className="text-xs uppercase tracking-widest font-semibold text-stone-500 mb-2">Editorial Executive Summary</p>
        <p className="text-stone-700 text-sm leading-relaxed">
          Investing is often portrayed by popular media as a high-stakes trading floor or a secret get-rich-quick formula. In reality, genuine long-term investing is a patient, systematic discipline focused on asset allocation, low costs, and compound interest. This beginner guide unpacks the critical difference between saving and investing, basic asset classes, risk versus return, fee sensitivity, and the prerequisites you must meet before putting your first dollar into the market.
        </p>
      </div>

      <h2 className="text-2xl sm:text-3xl font-editorial-serif font-bold text-stone-900 mt-10 mb-4 pt-2 border-t border-stone-200">
        How Should Beginners Learn About Investing?
      </h2>
      <p className="text-base sm:text-lg leading-relaxed text-stone-800 font-medium bg-[#FAF7F0] p-4 rounded-md border border-[#EBE3D3] mb-6">
        Beginners should learn about investing by understanding the core mechanics of risk and return before committing real money: first, differentiate between cash preservation (saving) and wealth expansion (investing); second, learn how broad asset classes such as stocks, bonds, and broad-market index funds function; third, prioritize broad diversification over picking individual speculative stocks; fourth, understand the heavy mathematical toll of management fees; and fifth, always verify that your high-interest debts are repaid and your emergency fund is fully funded before investing.
      </p>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        Saving Versus Investing: Key Differences
      </h3>
      <p>
        While people often use the terms interchangeably, saving and investing serve two completely different financial purposes:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
        <div className="bg-white p-5 rounded-lg border border-stone-200">
          <h4 className="font-editorial-serif text-lg font-bold text-stone-900 mb-2">Saving (Capital Preservation)</h4>
          <p className="text-sm text-stone-700 leading-relaxed">
            Putting money into risk-free, government-insured deposit accounts (like checking accounts or high-yield savings accounts). Your principal is protected against loss, but interest rates often barely match or trail inflation. Best for short-term goals (0 to 3 years) and safety nets. Learn how to build your cash reserve in our{' '}
            <button
              onClick={() => onNavigate('/emergency-fund-guide/')}
              className="text-[#143826] font-semibold underline hover:text-[#0D261A] transition-colors cursor-pointer"
            >
              beginner emergency fund guide
            </button>.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg border border-stone-200">
          <h4 className="font-editorial-serif text-lg font-bold text-stone-900 mb-2">Investing (Wealth Accumulation)</h4>
          <p className="text-sm text-stone-700 leading-relaxed">
            Purchasing productive assets (like shares of corporations, real estate, or government debt) with the expectation that they will generate income and appreciate over time. Involves market risk and price fluctuations, but historically delivers returns that comfortably outpace inflation over 5 to 10+ year horizons.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        Core Asset Classes Explained for Beginners
      </h3>
      <p>
        When you invest, your capital is deployed across one or more asset classes. Here is what each major asset represents:
      </p>
      <div className="space-y-4 my-6 not-prose">
        <div className="bg-white p-5 rounded-lg border border-stone-200">
          <h4 className="font-editorial-serif text-lg font-bold text-stone-900 mb-1">1. Equities (Stocks)</h4>
          <p className="text-sm text-stone-700 leading-relaxed">
            When you buy a share of stock, you are purchasing fractional ownership in an actual corporation. If the company prospers, innovates, and earns greater profits, the value of your shares increases, and you may receive dividends (cash distributions of earnings). However, if the company struggles or broad economic conditions deteriorate, stock prices fall. Stocks carry higher volatility but historically offer higher long-term returns.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg border border-stone-200">
          <h4 className="font-editorial-serif text-lg font-bold text-stone-900 mb-1">2. Fixed Income (Bonds)</h4>
          <p className="text-sm text-stone-700 leading-relaxed">
            A bond is essentially an IOU. When you buy a bond, you are lending money to an entity—such as a government (e.g. U.S. Treasury bonds) or a corporation. In return, the issuer promises to pay you periodic interest payments (coupon payments) and return the full principal amount on a specified maturity date. Bonds generally carry lower volatility than stocks and help cushion portfolio swings during market downturns.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg border border-stone-200">
          <h4 className="font-editorial-serif text-lg font-bold text-stone-900 mb-1">3. Mutual Funds & Exchange-Traded Funds (ETFs)</h4>
          <p className="text-sm text-stone-700 leading-relaxed">
            Instead of buying shares of one or two individual companies, a mutual fund or ETF bundles hundreds or thousands of stocks and bonds into a single basket. When you buy one share of an ETF that tracks an index like the S&amp;P 500 or the Total World Stock Index, you instantly own a tiny sliver of hundreds of global businesses across technology, healthcare, finance, consumer goods, and energy.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        The Power of Diversification and Compound Interest
      </h3>
      <p>
        The legendary Nobel-laureate economist Harry Markowitz famously described <strong>diversification</strong> as &quot;the only free lunch in finance.&quot; If you invest your life savings in a single technology company and that company encounters scandal, bankruptcy, or obsolescence, you can lose 100% of your capital. By spreading investments across diversified index funds, the failure of any single company will barely register in your overall wealth.
      </p>
      <p>
        Paired with diversification is the mathematical engine of <strong>compound interest</strong>. In early years, growth appears modest. But over decades, the returns generated by your investments begin generating their own returns, creating an exponential growth curve. Starting to invest $150 per month in your twenties often yields significantly greater retirement security than starting with $500 per month in your forties.
      </p>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        Risk, Potential Return, and Time Horizons
      </h3>
      <p>
        In finance, risk and potential return are inextricably linked. There is no such thing as an investment that offers high returns with zero risk; anyone promising guaranteed 15% annual gains is likely promoting an unregistered scam.
      </p>
      
      <div className="overflow-x-auto my-6 not-prose">
        <table className="w-full text-left text-sm border-collapse bg-white border border-stone-200 rounded-lg">
          <thead>
            <tr className="bg-stone-100 text-stone-900 border-b border-stone-200">
              <th className="py-3 px-4 font-semibold">Asset Class</th>
              <th className="py-3 px-4 font-semibold">Relative Risk</th>
              <th className="py-3 px-4 font-semibold">Historical Return Profile</th>
              <th className="py-3 px-4 font-semibold">Ideal Time Horizon</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-150 text-stone-700">
            <tr>
              <td className="py-2.5 px-4 font-medium text-stone-900">Cash / High-Yield Savings</td>
              <td className="py-2.5 px-4">Very Low</td>
              <td className="py-2.5 px-4">Low (often matches inflation)</td>
              <td className="py-2.5 px-4">0 – 2 Years</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-medium text-stone-900">Government & Corp. Bonds</td>
              <td className="py-2.5 px-4">Low to Moderate</td>
              <td className="py-2.5 px-4">Moderate income generation</td>
              <td className="py-2.5 px-4">3 – 5+ Years</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-medium text-stone-900">Broad-Market Index Funds</td>
              <td className="py-2.5 px-4">Moderate to High</td>
              <td className="py-2.5 px-4">Higher long-term growth potential</td>
              <td className="py-2.5 px-4">7 – 10+ Years</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-medium text-stone-900">Individual Speculative Stocks</td>
              <td className="py-2.5 px-4">Very High</td>
              <td className="py-2.5 px-4">Extremely volatile; risk of total loss</td>
              <td className="py-2.5 px-4">Discretionary capital only</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        The Hidden Killer: Why Researching Investment Fees Matters
      </h3>
      <p>
        Every fund charges an annual management fee known as an <strong>Expense Ratio</strong>. An expense ratio of 1.00% might sound tiny, but it means that the fund manager extracts 1% of your entire portfolio value every single year, regardless of whether your investments made or lost money.
      </p>
      <p>
        Over a 30-year investing horizon, an active mutual fund charging a 1.00% expense ratio will consume up to 25% to 30% of your total potential terminal portfolio in fees, compared to an ultra-low-cost index fund charging 0.03% to 0.08%. When choosing funds, always check the expense ratio—keeping fees near rock bottom is one of the few guaranteed ways to boost your net returns.
      </p>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        Crucial Prerequisites Before Putting Money in the Market
      </h3>
      <p>
        Before you open an investment brokerage account or transfer capital into stock index funds, make sure you have addressed these two vital financial hurdles:
      </p>
      <ol className="list-decimal pl-6 space-y-3 my-4 text-stone-700">
        <li>
          <strong>Eliminate high-interest consumer debt:</strong> If you are carrying a credit card balance with an interest rate of 22% APR, paying off that card delivers a guaranteed, risk-free 22% return on your money. No investment in the world can sustainably beat that. Consult our comprehensive guide on{' '}
          <button
            onClick={() => onNavigate('/debt-management/')}
            className="text-[#143826] font-semibold underline hover:text-[#0D261A] transition-colors cursor-pointer"
          >
            debt management and elimination strategies
          </button>{' '}
          to prioritize credit card payoff before investing.
        </li>
        <li>
          <strong>Fund your emergency cash reserve:</strong> Having at least 3 months of essential expenses tucked safely inside an insured high-yield savings account ensures that an unexpected medical emergency or auto repair will never force you to sell your investments at an inopportune market low. Review our{' '}
          <button
            onClick={() => onNavigate('/emergency-fund-guide/')}
            className="text-[#143826] font-semibold underline hover:text-[#0D261A] transition-colors cursor-pointer"
          >
            Emergency Fund Guide for Beginners
          </button>{' '}
          to calculate and verify your emergency cushion.
        </li>
      </ol>

      <h3 className="text-xl font-editorial-serif font-bold text-stone-900 mt-8 mb-3">
        Conclusion & Next Steps
      </h3>
      <p>
        Successful investing is rarely exciting; it is disciplined, automated, and long-term. By avoiding emotional panic during market drops, prioritizing broad diversification, keeping expense ratios low, and giving compound interest decades to work, beginners can harness the global economy to build lasting financial independence. To establish the monthly cash surplus needed to fund your investments, master our{' '}
        <button
          onClick={() => onNavigate('/budgeting-for-beginners/')}
          className="text-[#143826] font-semibold underline hover:text-[#0D261A] transition-colors cursor-pointer"
        >
          step-by-step beginner budgeting guide
        </button>.
      </p>
    </div>
  );
};
