import { FiSettings } from 'react-icons/fi'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Header({ href, Icon }) {
  const router = useRouter()

  const handleNavigate = () => {
    router.push(href)
  }

  return (
    <header className="flex flex-row justify-between">
      <div className="flex flex-row items-center">
        <img src="/favicon.png" alt="App icon" className="h-12 w-12" />
        <img src="/paypal-logo.png" alt="PayPal logo" className="h-8 ml-2" />
      </div>
      <div className="flex flex-row items-center cursor-pointer">
        <div onClick={handleNavigate}>
          <Icon className="text-3xl text-primary" />
        </div>
      </div>
    </header>
  )
}

export { Header }
