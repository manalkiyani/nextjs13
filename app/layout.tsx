import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next/types";
import "./globals.css";
import { text } from "express";

export const metadata: Metadata = {
	title: "DevFlow",
	description: "description here",
	icons: {
		icon: "/assets/images/site-logo.svg",
	},
};

const inter = Inter({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-spaceGrotesk",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider
			appearance={{
				elements: {
					formButtonPrimary: "primary-gradient",
					footerActionLink: `primary-text-gradient
				hover:text-primary-500`,
				},
			}}
		>
			<html lang="en">
				<body className={`${inter.variable} ${spaceGrotesk.variable}`}>
					<h1 className="h1-bold">This is a heading to check font</h1>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
