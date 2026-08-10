import { useEffect, useState } from 'react'
import { HashRouter, Route, Routes, useLocation } from 'react-router'
import Footer from './components/Footer'
import Header from './components/Header'
import AboutPage from './pages/AboutPage'
import ActivitiesPage from './pages/ActivitiesPage'
import HomePage from './pages/HomePage'
import LinksPage from './pages/LinksPage'
import NotFoundPage from './pages/NotFoundPage'
import PhotosPage from './pages/PhotosPage'
import type { Language } from './data/portfolio'
import './assets/site.css'

const LANGUAGE_STORAGE_KEY = 'utsugi0101-language'

const pageTitles: Record<Language, Record<string, string>> = {
  ja: {
    '/': 'Utsugi0101 — 高橋空希',
    '/about': 'About me — Utsugi0101',
    '/activities': '活動 — Utsugi0101',
    '/photos': '写真 — Utsugi0101',
    '/links': 'リンク — Utsugi0101',
  },
  en: {
    '/': 'Utsugi0101 — 高橋空希',
    '/about': 'About me — Utsugi0101',
    '/activities': 'Activities — Utsugi0101',
    '/photos': 'Photos — Utsugi0101',
    '/links': 'Links — Utsugi0101',
  },
}

function getInitialLanguage(): Language {
  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
  return savedLanguage === 'en' ? 'en' : 'ja'
}

function PageEffects({ language }: { language: Language }) {
  const location = useLocation()

  useEffect(() => {
    document.title =
      pageTitles[language][location.pathname] ??
      (language === 'ja'
        ? 'ページが見つかりません — Utsugi0101'
        : 'Page not found — Utsugi0101')
  }, [language, location.pathname])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return null
}

export default function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  }, [language])

  return (
    <HashRouter>
      <PageEffects language={language} />
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault()
          document.getElementById('main-content')?.focus()
        }}
      >
        {language === 'ja' ? '本文へ移動' : 'Skip to content'}
      </a>
      <div className="site-frame">
        <Header language={language} onLanguageChange={setLanguage} />
        <main
          id="main-content"
          className="site-shell site-main"
          tabIndex={-1}
        >
          <Routes>
            <Route index element={<HomePage language={language} />} />
            <Route path="about" element={<AboutPage language={language} />} />
            <Route
              path="activities"
              element={<ActivitiesPage language={language} />}
            />
            <Route path="photos" element={<PhotosPage language={language} />} />
            <Route path="links" element={<LinksPage language={language} />} />
            <Route path="*" element={<NotFoundPage language={language} />} />
          </Routes>
        </main>
        <Footer language={language} />
      </div>
    </HashRouter>
  )
}
