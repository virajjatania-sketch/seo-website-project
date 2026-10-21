import React, { useState } from 'react';
import { SEO_MATRIX_DATA, SEOMatrixRow } from '../data/articles';
import { SEOHead } from './SEOHead';
import { Download, Copy, Check, Search, ExternalLink, HelpCircle } from 'lucide-react';

interface SEOMatrixPageProps {
  onNavigate: (path: string) => void;
}

export const SEOMatrixPage: React.FC<SEOMatrixPageProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copied, setCopied] = useState(false);
  const [editableRows, setEditableRows] = useState<SEOMatrixRow[]>(SEO_MATRIX_DATA);

  const filteredRows = editableRows.filter((row) =>
    row.pageName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.mainKeyword.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.relatedKeywords.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.questionAnswered.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCopyTable = () => {
    const header = ['Page', 'Main Keyword', 'Two Related Keywords', 'Search Intent', 'Search Volume', 'Question It Answers'].join('\t');
    const rows = editableRows.map((r) =>
      [r.pageName, r.mainKeyword, r.relatedKeywords, r.searchIntent, r.searchVolume, r.questionAnswered].join('\t')
    );
    const tsv = [header, ...rows].join('\n');
    navigator.clipboard.writeText(tsv);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleExportCSV = () => {
    const csvContent = [
      ['"Page"', '"Main Keyword"', '"Two Related Keywords"', '"Search Intent"', '"Search Volume"', '"Question It Answers"'].join(','),
      ...editableRows.map((r) =>
        [
          `"${r.pageName.replace(/"/g, '""')}"`,
          `"${r.mainKeyword.replace(/"/g, '""')}"`,
          `"${r.relatedKeywords.replace(/"/g, '""')}"`,
          `"${r.searchIntent.replace(/"/g, '""')}"`,
          `"${r.searchVolume.replace(/"/g, '""')}"`,
          `"${r.questionAnswered.replace(/"/g, '""')}"`
        ].join(',')
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'MoneyWise_Starter_SEO_Project_Matrix.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Structured Data for SEO Matrix
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemPage',
    'name': 'SEO Project Matrix – MoneyWise Starter',
    'description': 'Academic SEO and AEO project matrix detailing target keywords, search intent, verified volume guidelines, and question-based headings.',
    'url': 'https://moneywisestarter.edu/seo-matrix/'
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] py-12 lg:py-16 font-modern-sans">
      <SEOHead
        title="SEO Project Matrix – MoneyWise Starter Keyword Strategy"
        description="Comprehensive SEO & AEO Project Matrix for MoneyWise Starter, featuring exact 6-page keyword mappings, search intent, search volume notes, and target questions."
        canonicalUrl="https://moneywisestarter.edu/seo-matrix/"
        structuredData={structuredData}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="border-b border-stone-200 pb-8 mb-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-stone-500 mb-2">
            <span>Academic Project</span>
            <span aria-hidden="true">·</span>
            <span>SEO & AEO Architecture</span>
            <span aria-hidden="true">·</span>
            <span>College Curriculum Matrix</span>
          </div>

          <h1 className="font-editorial-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            SEO Project Matrix
          </h1>
          <p className="mt-3 text-base sm:text-lg text-stone-600 max-w-3xl leading-relaxed">
            This project-planning matrix documents the keyword architecture, user search intent, search volume verification standards, and question-based Answer Engine Optimization (AEO) strategies implemented across the MoneyWise Starter educational portal.
          </p>

          {/* Academic Search Volume Notice */}
          <div className="mt-6 p-4 bg-[#F7F4EE] border border-stone-300/80 rounded-lg flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-stone-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              <strong className="text-stone-900">Academic Note on Search Volume:</strong> In strict compliance with research and SEO integrity guidelines, search volume displays <em>&ldquo;Verify in keyword research tool&rdquo;</em> because real-time search volumes fluctuate monthly and must be verified using empirical keyword research software such as Ubersuggest, Ahrefs, or Google Keyword Planner. We strictly never fabricate search volumes or keyword difficulty figures.
            </div>
          </div>
        </div>

        {/* Action Bar: Search, Copy, Download */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by page, keyword, or question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-stone-300 rounded-md text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#143826] focus:border-[#143826]"
            />
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleCopyTable}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white border border-stone-300 hover:bg-stone-50 text-stone-700 rounded-md text-xs font-medium transition-colors shadow-xs cursor-pointer"
              title="Copy table data to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Matrix TSV'}</span>
            </button>
            <button
              onClick={handleExportCSV}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#143826] hover:bg-[#0D261A] text-white rounded-md text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
              title="Download CSV for academic submission"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* The Mandatory 6-Column Table */}
        <div className="bg-white border border-stone-200 rounded-xl shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-900 border-b border-stone-200">
                  <th className="py-3.5 px-4 font-semibold whitespace-nowrap min-w-[200px]">1. Page</th>
                  <th className="py-3.5 px-4 font-semibold whitespace-nowrap min-w-[190px]">2. Main Keyword</th>
                  <th className="py-3.5 px-4 font-semibold min-w-[260px]">3. Two Related Keywords</th>
                  <th className="py-3.5 px-4 font-semibold whitespace-nowrap min-w-[120px]">4. Search Intent</th>
                  <th className="py-3.5 px-4 font-semibold min-w-[190px]">5. Search Volume</th>
                  <th className="py-3.5 px-4 font-semibold min-w-[260px]">6. Question It Answers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-150 text-stone-800">
                {filteredRows.map((row, index) => {
                  return (
                    <tr
                      key={row.pageUrl}
                      className="hover:bg-stone-50/80 transition-colors group"
                    >
                      {/* Column 1: Page */}
                      <td className="py-4 px-4 align-top">
                        <button
                          onClick={() => onNavigate(row.pageUrl)}
                          className="font-semibold text-stone-900 group-hover:text-[#143826] transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                        >
                          <span>{row.pageName}</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 shrink-0" />
                        </button>
                        <span className="font-mono text-[11px] text-stone-600 block mt-1">
                          {row.pageUrl}
                        </span>
                      </td>

                      {/* Column 2: Main Keyword */}
                      <td className="py-4 px-4 align-top">
                        <span className="font-semibold text-[#143826]">
                          {row.mainKeyword}
                        </span>
                      </td>

                      {/* Column 3: Two Related Keywords */}
                      <td className="py-4 px-4 align-top text-stone-700">
                        {row.relatedKeywords}
                      </td>

                      {/* Column 4: Search Intent */}
                      <td className="py-4 px-4 align-top">
                        <span className="font-medium text-stone-700">
                          {row.searchIntent}
                        </span>
                      </td>

                      {/* Column 5: Search Volume */}
                      <td className="py-4 px-4 align-top">
                        <span className="text-stone-600 italic">
                          {row.searchVolume}
                        </span>
                      </td>

                      {/* Column 6: Question It Answers */}
                      <td className="py-4 px-4 align-top text-stone-800 font-medium">
                        {row.questionAnswered}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Curriculum Strategy & Answer Engine Optimization (AEO) Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-stone-200 p-6 rounded-xl">
            <h3 className="font-editorial-serif text-xl font-bold text-stone-900 mb-2">
              On-Page AEO Strategy Rationale
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Modern search engines utilize generative models (such as Google AI Overviews and Perplexity). Each article in this project features an exact <strong>question-based H2 heading</strong> followed by a <strong>direct, high-density 50-to-75 word answer in the immediate first paragraph</strong>. This provides immediate structural alignment with conversational and voice search indexing algorithms.
            </p>
          </div>

          <div className="bg-white border border-stone-200 p-6 rounded-xl">
            <h3 className="font-editorial-serif text-xl font-bold text-stone-900 mb-2">
              Technical On-Page Best Practices Applied
            </h3>
            <ul className="text-sm text-stone-600 space-y-1.5 list-disc pl-5">
              <li>Unique title tags (50–60 characters) and meta descriptions (150–160 characters).</li>
              <li>Exactly one clear H1 heading per page embedding the primary target keyword.</li>
              <li>Self-referencing canonical links and OpenGraph sharing tags.</li>
              <li>Valid JSON-LD structured data (<code>WebSite</code> for home, <code>BlogPosting</code> for articles).</li>
              <li>Accessible local image assets with descriptive alt text for search crawlers.</li>
            </ul>
          </div>
        </div>

        {/* Back to Home CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
          >
            <span>Return to Homepage</span>
          </button>
        </div>
      </div>
    </main>
  );
};
