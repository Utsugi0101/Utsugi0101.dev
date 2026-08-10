import { Link } from 'react-router'
import type { Language } from '../data/portfolio'

export default function NotFoundPage({ language }: { language: Language }) {
  return (
    <section className="not-found">
      <p className="not-found__code">404</p>
      <h1>{language === 'ja' ? 'ページが見つかりません' : 'Page not found'}</h1>
      <p>
        {language === 'ja'
          ? 'URLを確認するか、ホームからページを選び直してください。'
          : 'Check the URL or return home to choose another page.'}
      </p>
      <Link className="text-link" to="/">
        {language === 'ja' ? 'ホームへ戻る' : 'Back to Home'}
      </Link>
    </section>
  )
}
