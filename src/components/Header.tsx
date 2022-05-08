import DarkModeSwitch from "./DarkModeSwitch"

const Header: React.FC = () => {
	return (
		<nav className="flex p-4 justify-between items-center">
			<h1 className="text-xl font-bold">
				Asci<span className="text-green-500">Img</span>
			</h1>
			<DarkModeSwitch />
		</nav>
	)
}

export default Header