import { Link } from 'react-router'
import PageIntro from '../components/PageIntro'
import {
  affiliations,
  profileFacts,
  selectText,
  type Language,
  type LocalizedText,
} from '../data/portfolio'

const interests: Array<{ title: LocalizedText; description: LocalizedText }> = [
  {
    title: { ja: 'AIセキュリティ', en: 'AI Security' },
    description: {
      ja: 'セキュリティ・キャンプのAIセキュリティクラス、AIレッドチーミング・クラスなどに参加しています。',
      en: "I have participated in Security Camp's AI Security Class and AI Red Teaming Class.",
    },
  },
  {
    title: { ja: 'ケルト音楽', en: 'Celtic Music' },
    description: {
      ja: '筑波大学ケルト音楽愛好会に所属しています。',
      en: 'I am a member of the University of Tsukuba Celtic Music Club.',
    },
  },
  {
    title: { ja: '写真', en: 'Photography' },
    description: {
      ja: '最近始めた趣味です。写真のページも少しずつ更新していきます。',
      en: 'A hobby I recently started. I plan to gradually add photos to the Photos page.',
    },
  },
]

export default function AboutPage({ language }: { language: Language }) {
  return (
    <>
      <PageIntro
        title="About me"
        description={
          language === 'ja'
            ? 'プロフィール、所属、最近興味を持っていることをまとめています。'
            : 'A summary of my profile, affiliations, and current interests.'
        }
      />

      <div className="about-archive">
        <section className="about-category" aria-labelledby="profile-heading">
          <h2 id="profile-heading">
            {language === 'ja' ? '基本情報' : 'Basic Information'}
          </h2>
          <dl className="profile-list">
            {profileFacts.map((fact) => (
              <div key={fact.label.ja}>
                <dt>{selectText(fact.label, language)}</dt>
                <dd>
                  {fact.href ? (
                    <a href={fact.href} target="_blank" rel="noreferrer">
                      {selectText(fact.value, language)}
                    </a>
                  ) : (
                    selectText(fact.value, language)
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="about-category" aria-labelledby="affiliation-heading">
          <h2 id="affiliation-heading">
            {language === 'ja' ? '所属' : 'Affiliations'}
          </h2>
          <ul className="plain-list">
            {affiliations.map((affiliation) => (
              <li key={affiliation.label.ja}>
                {affiliation.href ? (
                  <a
                    href={affiliation.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {selectText(affiliation.label, language)}
                  </a>
                ) : (
                  selectText(affiliation.label, language)
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="about-category" aria-labelledby="interests-heading">
          <h2 id="interests-heading">
            {language === 'ja' ? '関心と趣味' : 'Interests & Hobbies'}
          </h2>
          <div className="interest-list">
            {interests.map((interest) => (
              <article key={interest.title.ja}>
                <h3>{selectText(interest.title, language)}</h3>
                <p>{selectText(interest.description, language)}</p>
              </article>
            ))}
          </div>
          <p className="section-followup">
            {language === 'ja' ? (
              <>
                これまでの活動は<Link to="/activities">Activities</Link>
                にまとめています。
              </>
            ) : (
              <>
                See <Link to="/activities">Activities</Link> for my past work and
                experiences.
              </>
            )}
          </p>
        </section>
      </div>
    </>
  )
}
