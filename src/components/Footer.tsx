import '../assets/Footer.css';

export default function Footer() {
  const lastUpdated = new Date(document.lastModified).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <footer className="footer">
      <p>&copy; 2025 Utsugi0101</p>
      <p>最終更新日：{lastUpdated}</p>
    </footer>
  );
}
