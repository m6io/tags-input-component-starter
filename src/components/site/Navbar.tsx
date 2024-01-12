import { HiMiniSun, HiMiniMoon } from "react-icons/hi2"
import { SiYoutube, SiGithub } from "react-icons/si"
import { useTheme } from "@/hooks/useTheme"
import { SiNpm } from "react-icons/si"

// A navbar component that will be used to house app-wide navigation and settings
export function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background dark:border-stone-700">
			<div className="flex h-16 items-center px-10 sm:px-16 lg:px-44">
				<div className="mx-auto w-full max-w-3xl space-y-20">
					<div className="flex justify-between">
						<div className="flex flex-1 items-center justify-start">
							{/* Link and site name/icon */}
							<a
								className="inline-flex h-10 items-center justify-center text-nowrap text-lg font-bold"
								href="/"
							>
								<SiNpm className="size-full" />
								<span className="ml-5 max-sm:hidden">npm package search</span>
							</a>
						</div>
						<div className="flex flex-1 items-center justify-end">
							<nav className="flex items-center space-x-1">
								<ThemeToggle />
								<a
									href="https://www.youtube.com/@m6io"
									target="_blank"
									className="size-10 p-2  hover:text-[#ff0000] dark:hover:text-[#ff0000]" // Brand color from https://brandcolors.net/b/youtube
								>
									<SiYoutube className="size-full" />
								</a>
								<a
									href="https://www.github.com/m6io"
									target="_blank"
									className="size-10 p-2 hover:text-[#4078c0] dark:hover:text-[#4078c0]" // Brand color from https://brandcolors.net/b/github
								>
									<SiGithub className="size-full" />
								</a>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

function ThemeToggle() {
	const { isDarkMode, toggleDarkMode } = useTheme()

	return (
		<button
			className="size-10 p-2 hover:text-amber-500 dark:hover:text-amber-400"
			onClick={() => toggleDarkMode()}
		>
			{isDarkMode ? (
				<HiMiniMoon className="size-full" />
			) : (
				<HiMiniSun className="size-full" />
			)}
		</button>
	)
}
