import { FiSettings } from 'react-icons/fi'
import Link from 'next/link'

function Header({ actionLink, Icon }) {
  return (
    <header className="flex flex-row justify-between">
      <div className="flex flex-row items-center">
        <img src="/favicon.png" alt="App icon" className="h-12 w-12" />
        <img src="/paypal-logo.png" alt="PayPal logo" className="h-8 ml-2" />
      </div>
      <div className="flex flex-row items-center cursor-pointer">
        <Link href={actionLink}>
          <a>
            <Icon className="text-3xl text-primary" />
          </a>
        </Link>
      </div>
    </header>
  )
}

export { Header }
