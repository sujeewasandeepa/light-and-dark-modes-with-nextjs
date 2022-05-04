import Link from "next/link"
import Button from "../components/Button";

const Header = () => {

  const navigations = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
  ];

  const renderThemeChanger = () => {
    return (
      <Button className="bg-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </Button>
    )
  }

  return (
    <header className="h-16 flex items-center justify-between">
      <ul className="flex gap-4">
        { navigations.map (nav => (
          <Link href={nav.path}><a
            className="font-semibold text-gray-400 hover:text-gray-500"
          >{nav.label}</a></Link>
        ))}
      </ul>
      { renderThemeChanger() }
    </header>
  )
}

export default Header