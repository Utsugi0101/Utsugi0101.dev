import PageIntro from '../components/PageIntro'
import type { Language } from '../data/portfolio'

export default function PhotosPage({ language }: { language: Language }) {
  return (
    <>
      <PageIntro
        title={language === 'ja' ? '撮った写真' : 'Photos I Have Taken'}
        description={
          language === 'ja'
            ? '最近、写真を撮ることが趣味に加わりました。ここに少しずつ記録していきます。'
            : 'Photography recently became one of my hobbies. I will gradually add photos here.'
        }
      />

      <section className="photo-empty" aria-labelledby="photo-empty-heading">
        <h2 id="photo-empty-heading">
          {language === 'ja' ? 'まだ写真はありません' : 'No photos yet'}
        </h2>
        <p>
          {language === 'ja'
            ? 'このページは、写真を簡単に追加できる仕組みと一緒に育てていく予定です。'
            : 'I plan to grow this page alongside a simple way to add photos.'}
        </p>
      </section>
    </>
  )
}
