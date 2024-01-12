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
			<body className={`${beVietnamPro.className} antialiased h-screen`}>
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

				<main className="h-3/5 bg-dark-200">{children}</main>
			</body>
		</html>
	);
}
