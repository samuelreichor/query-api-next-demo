import Link from "next/link";

export default function Nav() {
  return (
    <ul>
      <li>
        <Link href="/">Home EN</Link>
      </li>
      <li>
        <Link href="/de">Home DE</Link>
      </li>
      <li>
        <Link href="/es">Home ES</Link>
      </li>
      <li>
        <Link href="/news-article-1">News Article 1</Link>
      </li>
    </ul>
  )
}
