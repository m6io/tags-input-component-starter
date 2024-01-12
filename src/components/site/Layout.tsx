import { Navbar } from "./Navbar"

export const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="bg-background relative min-h-screen">
			<Navbar />
			<main className="p-10 sm:px-16 lg:px-44">
				<div className="mx-auto max-w-3xl space-y-20">{children}</div>
			</main>
		</div>
	)
}
