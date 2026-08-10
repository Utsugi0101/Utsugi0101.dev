export type Language = 'ja' | 'en'

export type LocalizedText = Record<Language, string>

export type NavigationItem = {
  label: LocalizedText
  to: string
}

export type ActivityCategoryKey =
  | 'education'
  | 'work'
  | 'qualification'
  | 'programs'
  | 'recognition'
  | 'other'

export type ActivityItem = {
  category: ActivityCategoryKey
  date: LocalizedText
  href?: string
  title: LocalizedText
}

export type ProfileFact = {
  href?: string
  label: LocalizedText
  value: LocalizedText
}

export type Affiliation = {
  href?: string
  label: LocalizedText
}

export type ContactLink = {
  href: string
  label: string
  value: string
}

export function selectText(text: LocalizedText, language: Language) {
  return text[language]
}

export const externalSites = {
  degreeProgram: 'https://informatics.tsukuba.ac.jp/about/',
  irGroup: 'https://ir-tsukuba.github.io/',
  kasys: 'https://kasys.slis.tsukuba.ac.jp/',
  klis: 'https://klis.tsukuba.ac.jp/',
}

export const navigationItems: NavigationItem[] = [
  { label: { ja: 'ホーム', en: 'Home' }, to: '/' },
  { label: { ja: 'About me', en: 'About me' }, to: '/about' },
  { label: { ja: '活動', en: 'Activities' }, to: '/activities' },
  { label: { ja: '写真', en: 'Photos' }, to: '/photos' },
  { label: { ja: 'リンク', en: 'Links' }, to: '/links' },
]

export const profileFacts: ProfileFact[] = [
  {
    label: { ja: '名前', en: 'Name' },
    value: { ja: '高橋空希', en: '高橋空希' },
  },
  {
    href: externalSites.klis,
    label: { ja: '所属', en: 'Affiliation' },
    value: {
      ja: '筑波大学情報学群知識情報・図書館学類',
      en: 'College of Knowledge and Library Sciences, University of Tsukuba',
    },
  },
  {
    label: { ja: '学年', en: 'Year' },
    value: { ja: '4年', en: 'Fourth year' },
  },
  {
    label: { ja: '出身', en: 'Hometown' },
    value: { ja: '北海道', en: 'Hokkaido' },
  },
  {
    label: { ja: '誕生日', en: 'Birthday' },
    value: { ja: '2005年1月1日', en: 'January 1, 2005' },
  },
]

export const affiliations: Affiliation[] = [
  {
    href: externalSites.kasys,
    label: {
      ja: '知識獲得システム研究室',
      en: 'Knowledge Acquisition System Laboratory',
    },
  },
  {
    href: externalSites.irGroup,
    label: {
      ja: '筑波大学情報検索リサーチグループ',
      en: 'Information Retrieval Group at the University of Tsukuba',
    },
  },
  {
    label: {
      ja: '筑波大学ケルト音楽愛好会',
      en: 'University of Tsukuba Celtic Music Club',
    },
  },
]

export const activityCategories: Array<{
  key: ActivityCategoryKey
  label: LocalizedText
}> = [
  { key: 'education', label: { ja: '学歴', en: 'Education' } },
  { key: 'work', label: { ja: '職歴', en: 'Work Experience' } },
  { key: 'qualification', label: { ja: '資格', en: 'Certifications' } },
  { key: 'programs', label: { ja: '参加プログラム', en: 'Programs' } },
  { key: 'recognition', label: { ja: '登壇・受賞', en: 'Talks & Awards' } },
  { key: 'other', label: { ja: 'その他の活動', en: 'Other Activities' } },
]

export const activityItems: ActivityItem[] = [
  {
    category: 'education',
    date: { ja: '2027/4〜', en: 'Apr 2027–' },
    href: externalSites.degreeProgram,
    title: {
      ja: '筑波大学大学院 人間総合科学学術院 人間総合科学研究群 情報学学位プログラム 進学予定',
      en: "Planned enrollment in the Master's Program in Informatics, University of Tsukuba",
    },
  },
  {
    category: 'programs',
    date: { ja: '2026/8', en: 'Aug 2026' },
    title: {
      ja: 'セキュリティ・キャンプ2026全国大会「AIセキュリティクラス」',
      en: 'Security Camp 2026 National Conference — AI Security Class',
    },
  },
  {
    category: 'recognition',
    date: { ja: '2026/5', en: 'May 2026' },
    href: 'https://sigirtokyo.github.io/post/2026-05-30-irreading_2026spring/',
    title: { ja: 'IR Reading 2026春 登壇', en: 'Speaker at IR Reading Spring 2026' },
  },
  {
    category: 'programs',
    date: { ja: '2026/3', en: 'Mar 2026' },
    href: 'https://lab.ntvhd.co.jp/topics/2026/04/post-24.html',
    title: {
      ja: '日テレクリエイティブメディアハッカソン 参加',
      en: 'Participant, Nippon TV Creative Media Hackathon',
    },
  },
  {
    category: 'qualification',
    date: { ja: '2025/11', en: 'Nov 2025' },
    title: { ja: '認定スクラムマスター 取得', en: 'Certified ScrumMaster' },
  },
  {
    category: 'work',
    date: { ja: '2025/10〜現在', en: 'Oct 2025–Present' },
    title: { ja: '株式会社 ChillStack インターンシップ', en: 'Intern, ChillStack Inc.' },
  },
  {
    category: 'programs',
    date: { ja: '2025/9', en: 'Sep 2025' },
    title: {
      ja: 'セキュリティ・キャンプ2025コネクト「AIレッドチーミング・クラス」',
      en: 'Security Camp 2025 Connect — AI Red Teaming Class',
    },
  },
  {
    category: 'programs',
    date: { ja: '2025/6〜2026/2', en: 'Jun 2025–Feb 2026' },
    title: { ja: 'SecHack365 思索駆動コース', en: 'SecHack365 Thought-Driven Course' },
  },
  {
    category: 'work',
    date: { ja: '2025/6〜現在', en: 'Jun 2025–Present' },
    title: { ja: '株式会社 TOKIUM インターンシップ', en: 'Intern, TOKIUM Inc.' },
  },
  {
    category: 'programs',
    date: { ja: '2025/5〜2026/3', en: 'May 2025–Mar 2026' },
    title: {
      ja: '筑波大学 先導的研究者体験プログラム（ARE）',
      en: 'Advanced Researcher Experience Program (ARE), University of Tsukuba',
    },
  },
  {
    category: 'recognition',
    date: { ja: '2025/3', en: 'Mar 2025' },
    title: { ja: 'Agile PBL祭り2025 登壇', en: 'Speaker at Agile PBL Festival 2025' },
  },
  {
    category: 'recognition',
    date: { ja: '2025/1', en: 'Jan 2025' },
    title: {
      ja: '筑波大学enPit 優秀賞',
      en: 'University of Tsukuba enPit Excellence Award',
    },
  },
  {
    category: 'work',
    date: { ja: '2024/11〜2025/2', en: 'Nov 2024–Feb 2025' },
    title: {
      ja: 'デロイト トーマツ コンサルティング合同会社 インターンシップ',
      en: 'Intern, Deloitte Tohmatsu Consulting LLC',
    },
  },
  {
    category: 'recognition',
    date: { ja: '2024/11', en: 'Nov 2024' },
    title: { ja: 'Education-JAWS #0 登壇', en: 'Speaker at Education-JAWS #0' },
  },
  {
    category: 'recognition',
    date: { ja: '2024/7', en: 'Jul 2024' },
    title: {
      ja: '知識情報演習I 最優秀作品賞 受賞',
      en: 'Best Project Award, Knowledge and Library Sciences Practice I',
    },
  },
  {
    category: 'education',
    date: { ja: '2024/4〜2027/3', en: 'Apr 2024–Mar 2027' },
    href: externalSites.klis,
    title: {
      ja: '筑波大学情報学群知識情報・図書館学類',
      en: 'College of Knowledge and Library Sciences, University of Tsukuba',
    },
  },
  {
    category: 'other',
    date: { ja: '2023/10', en: 'Oct 2023' },
    href: 'https://www.tsukuba.ac.jp/news/20231018090251.html',
    title: {
      ja: 'T-ACT企画「筑波大学お掃除大作戦!」主催',
      en: 'Organizer, T-ACT “University of Tsukuba Cleanup Campaign!”',
    },
  },
  {
    category: 'education',
    date: { ja: '2023/4〜2024/3', en: 'Apr 2023–Mar 2024' },
    title: {
      ja: '筑波大学総合学域群3類',
      en: 'General Academic Group, Cluster 3, University of Tsukuba',
    },
  },
]

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    value: 's2310355@klis.tsukuba.ac.jp',
    href: 'mailto:s2310355@klis.tsukuba.ac.jp',
  },
  {
    label: 'GitHub',
    value: 'Utsugi0101',
    href: 'https://github.com/Utsugi0101',
  },
  {
    label: 'X',
    value: '@Utsugi0101',
    href: 'https://x.com/Utsugi0101',
  },
  {
    label: 'note',
    value: 'うつぎ',
    href: 'https://note.com/utsugi_studio',
  },
]
