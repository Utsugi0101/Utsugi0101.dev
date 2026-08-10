import PageIntro from '../components/PageIntro'
import { contactLinks, type Language } from '../data/portfolio'
import { friendLinks } from '../data/friends'

export default function LinksPage({ language }: { language: Language }) {
  return (
    <>
      <PageIntro
        title={language === 'ja' ? '連絡先とリンク' : 'Contact & Links'}
        description={
          language === 'ja'
            ? '連絡先、SNSと、友人のサイトへのリンクです。'
            : "Contact details, social accounts, and links to friends' websites."
        }
      />

      <section className="content-section content-section--page" aria-labelledby="contact-heading">
        <div className="section-heading">
          <h2 id="contact-heading">
            {language === 'ja' ? '連絡先' : 'Contact'}
          </h2>
        </div>
        <ul className="link-list">
          {contactLinks.map((contact) => {
            const external = contact.href.startsWith('http')

            return (
              <li key={contact.href}>
                <a
                  href={contact.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                >
                  <span>{contact.label}</span>
                  <strong>{contact.value}</strong>
                  <span aria-hidden="true">{external ? '↗' : '→'}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="content-section content-section--page" aria-labelledby="friends-heading">
        <div className="section-heading">
          <h2 id="friends-heading">
            {language === 'ja' ? '友人のサイト' : "Friends' Websites"}
          </h2>
        </div>
        <ul className="friend-list">
          {friendLinks.map((friend) => (
            <li key={friend.url}>
              <a href={friend.url} target="_blank" rel="noreferrer">
                <span>{friend.name}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
