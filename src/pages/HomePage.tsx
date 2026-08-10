import { Link } from 'react-router'
import { FaGithub, FaXTwitter } from 'react-icons/fa6'
import { PiNotePencil } from 'react-icons/pi'
import {
  activityItems,
  contactLinks,
  selectText,
  type ContactLink,
  type Language,
} from '../data/portfolio'

const featuredActivities = activityItems.slice(0, 4)

const homeSocialLinks = ['X', 'GitHub', 'note']
  .map((label) => contactLinks.find((contact) => contact.label === label))
  .filter((contact): contact is ContactLink => contact !== undefined)

function SocialIcon({ label }: { label: string }) {
  if (label === 'X') return <FaXTwitter aria-hidden="true" />
  if (label === 'GitHub') return <FaGithub aria-hidden="true" />
  return <PiNotePencil aria-hidden="true" />
}

export default function HomePage({ language }: { language: Language }) {
  return (
    <>
      <section className="home-intro" aria-labelledby="home-title">
        <div>
          <h1 id="home-title">
            <span>Soraki Takahashi</span>
            <span className="home-intro__handle">Utsugi0101</span>
          </h1>
          <p className="home-intro__lead">
            {language === 'ja' ? (
              <>
                <span>筑波大学 知識情報・図書館学類4年</span>
                <span>知識獲得システム研究室所属</span>
                <span>情報検索・認知科学に関心があります</span>
              </>
            ) : (
              <>
                <span>Fourth-year student at the University of Tsukuba</span>
                <span>Member of the Knowledge Acquisition System Laboratory</span>
                <span>Interested in information retrieval and cognitive science</span>
              </>
            )}
          </p>
          <nav
            className="home-socials"
            aria-label={language === 'ja' ? 'ソーシャルリンク' : 'Social links'}
          >
            {homeSocialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={
                  language === 'ja'
                    ? `${social.label}を開く`
                    : `Open ${social.label}`
                }
                title={social.label}
              >
                <SocialIcon label={social.label} />
              </a>
            ))}
          </nav>
        </div>

        <figure className="home-intro__mark">
          <img
            src="/utsugi.png"
            alt={
              language === 'ja'
                ? '白いうつぎの花のイラスト'
                : 'Illustration of white Deutzia flowers'
            }
          />
        </figure>
      </section>

      <section className="content-section" aria-labelledby="recent-heading">
        <div className="section-heading section-heading--with-link">
          <div>
            <h2 id="recent-heading">
              {language === 'ja' ? '最近の活動' : 'Recent Activities'}
            </h2>
          </div>
          <Link className="text-link text-link--quiet" to="/activities">
            {language === 'ja' ? 'すべて見る' : 'View all'}
          </Link>
        </div>
        <ul className="activity-preview">
          {featuredActivities.map((item) => (
            <li key={`${item.date.ja}-${item.title.ja}`}>
              <time>{item.date.ja.slice(0, 4)}</time>
              <span>{selectText(item.title, language)}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
