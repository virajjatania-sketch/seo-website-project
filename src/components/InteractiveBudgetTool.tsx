import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export const InteractiveBudgetTool: React.FC = () => {
  const [monthlyIncome, setMonthlyIncome] = useState<number>(3000);
  const [essentialExpenses, setEssentialExpenses] = useState<number>(1800);

  // 50/30/20 Calculations
  const needs50 = monthlyIncome * 0.5;
  const wants30 = monthlyIncome * 0.3;
  const savings20 = monthlyIncome * 0.2;

  // Emergency Fund Calculations
  const starterFund = 1000;
  const threeMonths = essentialExpenses * 3;
  const sixMonths = essentialExpenses * 6;

  return (
    <div className="bg-white border border-stone-200/90 rounded-xl p-6 sm:p-8 shadow-xs font-modern-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#143826]">
            Interactive Student & Beginner Tool
          </span>
          <h3 className="font-editorial-serif text-2xl font-bold text-stone-900 mt-1">
            Personal Finance Baseline Calculator
          </h3>
          <p className="text-sm text-stone-600 mt-1">
            Test the 50/30/20 budgeting rule and compute your personalized emergency fund benchmarks in real-time.
          </p>
        </div>
        <div className="p-3 bg-[#EBF1EA] text-[#143826] rounded-lg shrink-0 self-start sm:self-center">
          <Calculator className="w-6 h-6" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
        {/* Input Column */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-stone-900 mb-2">
              Monthly Net (Take-Home) Income: <span className="font-mono text-[#143826] text-base">${monthlyIncome.toLocaleString()}</span>
            </label>
            <input
              type="range"
              min="1000"
              max="10000"
              step="100"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(Number(e.target.value))}
              className="w-full accent-[#143826] cursor-pointer"
            />
            <div className="flex justify-between text-xs text-stone-500 mt-1 font-mono">
              <span>$1,000/mo</span>
              <span>$5,000/mo</span>
              <span>$10,000/mo</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-stone-900 mb-2">
              Estimated Monthly Survival Needs (Rent, Food, Utilities): <span className="font-mono text-[#143826] text-base">${essentialExpenses.toLocaleString()}</span>
            </label>
            <input
              type="range"
              min="800"
              max="7000"
              step="50"
              value={essentialExpenses}
              onChange={(e) => setEssentialExpenses(Number(e.target.value))}
              className="w-full accent-[#143826] cursor-pointer"
            />
            <div className="flex justify-between text-xs text-stone-500 mt-1 font-mono">
              <span>$800/mo</span>
              <span>$3,500/mo</span>
              <span>$7,000/mo</span>
            </div>
          </div>

          <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-600 leading-relaxed">
            <span className="font-bold text-stone-800">Quick Academic Tip:</span> The 50/30/20 model was popularized by bankruptcy scholar and Harvard professor Elizabeth Warren. In high-cost-of-living metropolitan areas, beginners often modify this to 60/20/20 until income increases.
          </div>
        </div>

        {/* Calculated Results Column */}
        <div className="space-y-5">
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-3">
              50/30/20 Monthly Allocation
            </h4>
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-[#FAF8F5] border border-stone-200 rounded-lg text-center">
                <span className="text-[11px] text-stone-500 uppercase block font-medium">50% Needs</span>
                <span className="text-lg font-bold font-mono text-[#143826] block mt-1 tabular-nums">
                  ${Math.round(needs50).toLocaleString()}
                </span>
                <span className="text-[10px] text-stone-500">Rent & Bills</span>
              </div>
              <div className="p-3 bg-[#FAF8F5] border border-stone-200 rounded-lg text-center">
                <span className="text-[11px] text-stone-500 uppercase block font-medium">30% Wants</span>
                <span className="text-lg font-bold font-mono text-stone-800 block mt-1 tabular-nums">
                  ${Math.round(wants30).toLocaleString()}
                </span>
                <span className="text-[10px] text-stone-500">Dining & Fun</span>
              </div>
              <div className="p-3 bg-[#FAF8F5] border border-stone-200 rounded-lg text-center">
                <span className="text-[11px] text-stone-500 uppercase block font-medium">20% Savings</span>
                <span className="text-lg font-bold font-mono text-[#143826] block mt-1 tabular-nums">
                  ${Math.round(savings20).toLocaleString()}
                </span>
                <span className="text-[10px] text-stone-500">Debt & Future</span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-3">
              Emergency Fund Milestones (Based on ${essentialExpenses.toLocaleString()}/mo Essentials)
            </h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2.5 bg-stone-50 border border-stone-200/80 rounded-md text-xs">
                <span className="font-medium text-stone-800">Tier 1: Starter Emergency Buffer</span>
                <span className="font-mono font-bold text-stone-900 tabular-nums">${starterFund.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-stone-50 border border-stone-200/80 rounded-md text-xs">
                <span className="font-medium text-stone-800">Tier 2: 3-Month Essential Survival Fund</span>
                <span className="font-mono font-bold text-[#143826] tabular-nums">${threeMonths.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-stone-50 border border-stone-200/80 rounded-md text-xs">
                <span className="font-medium text-stone-800">Tier 3: 6-Month Full Safety Fortress</span>
                <span className="font-mono font-bold text-[#143826] tabular-nums">${sixMonths.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
