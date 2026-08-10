import { COPYRIGHT_START_YEAR, SITE_LAST_UPDATED } from '../siteMeta'
import type { Language } from '../data/portfolio'

type FooterProps = {
  language: Language
}

export default function Footer({ language }: FooterProps) {
  const currentYear = new Date().getFullYear()
  const copyrightYear =
    currentYear === COPYRIGHT_START_YEAR
      ? `${COPYRIGHT_START_YEAR}`
      : `${COPYRIGHT_START_YEAR}-${currentYear}`
  const lastUpdated = new Intl.DateTimeFormat(language === 'ja' ? 'ja-JP' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Tokyo',
  }).format(new Date(`${SITE_LAST_UPDATED}T00:00:00+09:00`))

  return (
    <footer className="site-footer">
      <div className="site-shell site-footer__inner">
        <div>
          <p className="site-footer__name">Utsugi0101</p>
        </div>
        <div className="site-footer__meta">
          <p>&copy; {copyrightYear} Utsugi0101</p>
          <p>
            {language === 'ja' ? '最終更新日：' : 'Last updated: '}
            {lastUpdated}
          </p>
        </div>
      </div>
    </footer>
  )
}
