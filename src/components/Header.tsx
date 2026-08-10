import { Link, NavLink } from 'react-router'
import {
  navigationItems,
  selectText,
  type Language,
} from '../data/portfolio'

type HeaderProps = {
  language: Language
  onLanguageChange: (language: Language) => void
}

export default function Header({ language, onLanguageChange }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="site-shell site-header__inner">
        <Link
          className="site-brand"
          to="/"
          aria-label={language === 'ja' ? 'Utsugi0101 ホーム' : 'Utsugi0101 Home'}
        >
          <img src="/utsugi.png" alt="" />
          <span>Utsugi0101</span>
        </Link>

        <div className="site-header__actions">
          <nav
            className="site-nav"
            aria-label={language === 'ja' ? 'メインナビゲーション' : 'Main navigation'}
          >
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `site-nav__link${isActive ? ' site-nav__link--active' : ''}`
                }
              >
                {selectText(item.label, language)}
              </NavLink>
            ))}
          </nav>

          <div
            className="language-switch"
            role="group"
            aria-label={language === 'ja' ? '表示言語' : 'Display language'}
          >
            {(['ja', 'en'] as const).map((option) => (
              <button
                type="button"
                key={option}
                className={`language-switch__button${
                  language === option ? ' language-switch__button--active' : ''
                }`}
                aria-pressed={language === option}
                onClick={() => onLanguageChange(option)}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
