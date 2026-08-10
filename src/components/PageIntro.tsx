type PageIntroProps = {
  description: string
  title: string
}

export default function PageIntro({
  description,
  title,
}: PageIntroProps) {
  return (
    <header className="page-intro">
      <h1>{title}</h1>
      <p className="page-intro__description">{description}</p>
    </header>
  )
}
