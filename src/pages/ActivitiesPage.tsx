import PageIntro from '../components/PageIntro'
import {
  activityCategories,
  activityItems,
  selectText,
  type Language,
} from '../data/portfolio'

export default function ActivitiesPage({ language }: { language: Language }) {
  return (
    <>
      <PageIntro
        title={language === 'ja' ? 'これまでの活動' : 'Activities'}
        description={
          language === 'ja'
            ? '学歴、職歴、参加したプログラムなどを種類ごとに掲載しています。'
            : 'Education, work experience, programs, talks, and awards, organized by category.'
        }
      />

      <section
        className="activity-archive"
        aria-label={language === 'ja' ? '活動履歴' : 'Activity history'}
      >
        {activityCategories.map((category) => (
          <section
            className="activity-category"
            id={`activity-${category.key}`}
            key={category.key}
            aria-labelledby={`activity-${category.key}-heading`}
          >
            <h2 id={`activity-${category.key}-heading`}>
              {selectText(category.label, language)}
            </h2>
            <ul>
              {activityItems
                .filter((item) => item.category === category.key)
                .map((item) => (
                  <li key={`${item.date.ja}-${item.title.ja}`}>
                    <time>{selectText(item.date, language)}</time>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer">
                        {selectText(item.title, language)}
                      </a>
                    ) : (
                      <span>{selectText(item.title, language)}</span>
                    )}
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </section>
    </>
  )
}
