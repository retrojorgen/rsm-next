import Link from 'next/link'

const Header = () => (
    <header>
    <style jsx>{`
    nav {
        display: none;
      }
    `}
      
    </style>
      <nav>
        <ul>
          <li>
              <Link href="/">
              <a>Forside</a>
            </Link>
          </li>
          <li>
              <Link href="/om">
              <a>Om messen</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
)

export default Header