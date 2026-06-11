import '../assets/Footer.css';
import { COPYRIGHT_START_YEAR, SITE_LAST_UPDATED } from '../siteMeta';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightYear =
    currentYear === COPYRIGHT_START_YEAR
      ? `${COPYRIGHT_START_YEAR}`
      : `${COPYRIGHT_START_YEAR}-${currentYear}`;
  const lastUpdated = new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Tokyo',
  }).format(new Date(`${SITE_LAST_UPDATED}T00:00:00+09:00`));

  return (
    <footer className="footer">
      <p>&copy; {copyrightYear} Utsugi0101</p>
      <p>最終更新日：{lastUpdated}</p>
    </footer>
  );
}
