import React from 'react';
import { Article, ARTICLES } from '../data/articles';
import { SEOHead } from './SEOHead';
import { ArticleContent } from './articles/ArticleContent';
import { ArrowLeft, Clock, Calendar, BookOpen, ExternalLink, ArrowRight, Share2, Check } from 'lucide-react';

interface ArticlePageProps {
  article: Article;
  onNavigate: (path: string) => void;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({ article, onNavigate }) => {
  const [copiedLink, setCopiedLink] = React.useState(false);

  // Compute related articles (excluding the current one)
  const relatedArticles = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  // Build JSON-LD BlogPosting Schema
  const jsonLdStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': article.h1,
    'description': article.metaDescription,
    'image': [
      `https://moneywisestarter.edu${article.featuredImage}`
    ],
    'datePublished': '2026-10-20T08:00:00+00:00',
    'dateModified': '2026-10-20T08:00:00+00:00',
    'author': {
      '@type': 'Organization',
      'name': 'MoneyWise Starter Editorial Board',
      'url': 'https://moneywisestarter.edu'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'MoneyWise Starter',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://moneywisestarter.edu/logo.png'
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://moneywisestarter.edu${article.path}`
    },
    'keywords': [article.primaryKeyword, ...article.relatedKeywords].join(', '),
    'wordCount': article.wordCount,
    'articleSection': article.category
  };

  return (
    <article className="min-h-screen bg-[#FAF8F5] py-10 lg:py-16 font-modern-sans">
      <SEOHead
        title={article.title}
        description={article.metaDescription}
        canonicalUrl={`https://moneywisestarter.edu${article.path}`}
        type="article"
        image={`https://moneywisestarter.edu${article.featuredImage}`}
        structuredData={jsonLdStructuredData}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center flex-wrap gap-2 text-xs text-stone-500 font-medium">
            <li>
              <button
                onClick={() => onNavigate('/')}
                className="hover:text-stone-900 transition-colors cursor-pointer"
              >
                Home
              </button>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span className="text-stone-600">{article.category}</span>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-stone-900 font-semibold truncate max-w-[200px] sm:max-w-xs">
              {article.title}
            </li>
          </ol>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </button>
        </div>

        {/* Header Block */}
        <header className="mb-8">
          {/* Unboxed Metadata Discipline */}
          <div className="flex items-center flex-wrap gap-2 text-xs text-stone-500 mb-4">
            <span className="font-semibold text-[#143826]">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.publishDate}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readingTime}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{article.wordCount} words</span>
            </span>
          </div>

          {/* Primary H1 Heading */}
          <h1 className="font-editorial-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-[1.15] text-balance">
            {article.h1}
          </h1>

          {/* Editorial Excerpt */}
          <p className="mt-4 text-lg text-stone-600 leading-relaxed font-normal">
            {article.excerpt}
          </p>

          {/* Social Share / Copy Link utility */}
          <div className="mt-5 flex items-center justify-between border-y border-stone-200 py-3">
            <div className="flex items-center gap-2 text-xs text-stone-500">
              <span>Primary Keyword:</span>
              <span className="font-semibold text-stone-800 bg-stone-100 px-2 py-0.5 rounded font-mono text-[11px]">
                {article.primaryKeyword}
              </span>
            </div>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs text-stone-600 hover:text-stone-900 font-medium cursor-pointer"
              title="Copy link to article"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Link Copied' : 'Share Article'}</span>
            </button>
          </div>
        </header>

        {/* Featured Image with Fallback Container & Caption */}
        <figure className="mb-10">
          <div className="overflow-hidden rounded-xl border border-stone-200 bg-stone-100 shadow-xs relative aspect-[4/3] sm:aspect-[16/9]">
            <img
              src={article.featuredImage}
              alt={article.imageAlt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.01]"
              referrerPolicy="no-referrer"
              loading="eager"
              onError={(e) => {
                // Graceful fallback to styled neutral background if network stalls
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <figcaption className="text-xs text-stone-500 mt-2.5 text-center italic font-editorial-serif">
            Fig. 1 — {article.imageAlt}
          </figcaption>
        </figure>

        {/* Key Takeaways Box */}
        <div className="bg-[#FAF7F0] border border-[#E8DEC9] rounded-xl p-6 sm:p-7 mb-10 shadow-xs">
          <h2 className="font-editorial-serif text-xl font-bold text-[#143826] mb-3 flex items-center gap-2">
            <span>Key Takeaways for Beginners</span>
          </h2>
          <ul className="space-y-2 text-sm text-stone-700 leading-relaxed">
            {article.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-[#143826] font-bold text-base leading-none mt-0.5">•</span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Full Rich Article Content (Headings, Tables, Calculations) */}
        <ArticleContent article={article} onNavigate={onNavigate} />

        {/* Reputable External Sources Citations */}
        <section className="mt-12 pt-8 border-t border-stone-200">
          <h3 className="font-editorial-serif text-xl font-bold text-stone-900 mb-2">
            Verified Educational Sources & Regulatory References
          </h3>
          <p className="text-xs text-stone-500 mb-4">
            In accordance with high financial literacy standards, this educational guide references official publications from government bodies and accredited consumer advocacy organizations:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {article.externalSources.map((source, index) => (
              <a
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-white border border-stone-200 rounded-lg hover:border-stone-400 transition-colors flex items-start justify-between gap-3 group"
              >
                <div>
                  <h4 className="text-sm font-semibold text-stone-900 group-hover:text-[#143826] transition-colors">
                    {source.name}
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5">
                    {source.organization}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-stone-700 shrink-0 mt-0.5" />
              </a>
            ))}
          </div>
        </section>

        {/* Next Educational Steps CTA */}
        <section className="mt-12 p-8 bg-[#EBF1EA] rounded-xl border border-[#D5E2D3] text-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#143826]">
            Continue Your Financial Education
          </span>
          <h3 className="font-editorial-serif text-2xl font-bold text-stone-900 mt-1 mb-3">
            Ready to Explore the Next Money Lesson?
          </h3>
          <p className="text-sm text-stone-700 max-w-xl mx-auto mb-6 leading-relaxed">
            Personal finance is interconnected. A budget leads to savings, savings fund emergency reserves, emergency buffers prevent debt, and disciplined habits enable long-term investing.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {article.internalLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate(link.path)}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#143826] hover:bg-[#0D261A] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-xs cursor-pointer"
              >
                <span>Read {link.text}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ))}
          </div>
        </section>

        {/* Related Articles Section */}
        <section className="mt-14 pt-10 border-t border-stone-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-editorial-serif text-2xl font-bold text-stone-900">
              Related Beginner Guides
            </h3>
            <button
              onClick={() => onNavigate('/')}
              className="text-xs font-semibold text-[#143826] hover:underline cursor-pointer"
            >
              View All 5 Guides →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.slug}
                onClick={() => onNavigate(rel.path)}
                className="bg-white border border-stone-200 rounded-lg p-4 hover:border-stone-400 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] rounded-md overflow-hidden bg-stone-100 mb-3">
                    <img
                      src={rel.featuredImage}
                      alt={rel.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-[#143826] uppercase tracking-wide block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="font-editorial-serif text-base font-bold text-stone-900 group-hover:text-[#143826] transition-colors line-clamp-2">
                    {rel.h1}
                  </h4>
                  <p className="text-xs text-stone-600 mt-2 line-clamp-2">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                  <span>{rel.readingTime}</span>
                  <span className="text-[#143826] font-semibold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-0.5">
                    Read {rel.category} Guide →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};
