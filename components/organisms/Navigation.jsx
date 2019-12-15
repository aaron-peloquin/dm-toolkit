import Link from 'next/link'

const Navigation = () => {
  return <div>
    <h2>Navigation</h2>
    <ul>
      <li><Link href="/"><a>Home (useQuery)</a></Link></li>
      <li><Link href="/"><a>About <em>(static)</em></a></Link></li>
    </ul>
  </div>
}

export default Navigation