import type { Metadata } from 'next';
import './globals.css';
import { beVietnamPro } from './ui/fonts';
import Image from 'next/image';

export const metadata: Metadata = {
	title: 'World countries',
	description: "Get list and info of all world's countries",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${beVietnamPro.className} antialiased h-screen relative`}
			>
				<header className="h-2/5 block">
					<div className="w-full relative min-h-full bg-[url('../public/hero-image-wr.jpg')] bg-no-repeat bg-center flex justify-center items-center bg-cover">
						<Image
							src="/logo.svg"
							alt={'world countries image'}
							width={150}
							height={20}
							className="block md:hidden"
						/>

						<Image
							src="/logo.svg"
							alt={'world countries image'}
							width={200}
							height={30}
							className="hidden md:block"
						/>
					</div>
				</header>

				<main className="min-h-[60%] bg-dark-300">
					<div className="container px-5 py-5 bg-dark-300 md:border md:border-dark-200 md:rounded-xl md:absolute md:top-1/3  md:left-1/2 md:-translate-x-1/2">
						{children}
					</div>
				</main>
			</body>
		</html>
	);
}
