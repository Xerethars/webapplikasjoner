import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Link href="/oblig">
      <a style={{border: "solid 1px"}}>Click to see oblig solution</a>
    </Link>
    </>
  )
}
