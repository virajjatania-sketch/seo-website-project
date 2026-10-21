/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ArticlePage } from './components/ArticlePage';
import { SEOMatrixPage } from './components/SEOMatrixPage';
import { DebtManagementPage } from './components/DebtManagementPage';
import { ARTICLES } from './data/articles';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Normalize path for matching (handle trailing slashes)
  const normalizedPath = currentPath.endsWith('/') ? currentPath : `${currentPath}/`;

  // Find matching article
  const currentArticle = ARTICLES.find((a) => {
    const normalizedArticlePath = a.path.endsWith('/') ? a.path : `${a.path}/`;
    return normalizedArticlePath === normalizedPath;
  });

  // Render view
  let content = <HomePage onNavigate={navigate} />;

  if (currentArticle) {
    content = <ArticlePage article={currentArticle} onNavigate={navigate} />;
  } else if (normalizedPath === '/seo-matrix/' || normalizedPath.startsWith('/seo-matrix')) {
    content = <SEOMatrixPage onNavigate={navigate} />;
  } else if (normalizedPath === '/debt-management/' || normalizedPath.startsWith('/debt-management')) {
    content = <DebtManagementPage onNavigate={navigate} />;
  } else {
    // Default home
    content = <HomePage onNavigate={navigate} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-[#E8DFC9] selection:text-[#143826]">
      <Header currentPath={normalizedPath} onNavigate={navigate} />
      <div className="flex-1">
        {content}
      </div>
      <Footer onNavigate={navigate} />
    </div>
  );
}
