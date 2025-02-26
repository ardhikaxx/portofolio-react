import React from 'react';
import './css/style.css';
import { Inter } from 'next/font/google';
import Header from '@/components/ui/header';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ToastContainer } from 'react-toastify';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap'
});

export const metadata = {
    title: 'Portofolio - ARDHIKA',
    description: 'Selamat datang di portofolio ARDHIKA. Jelajahi karya, pengalaman, dan proyek inovatif dalam pengembangan web, mobile, serta desain grafis yang kreatif dan solutif.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.variable} font-inter antialiased bg-gray-100 text-gray-900 tracking-tight`}>
                <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
                    <Header />
                    <ToastContainer />
                    {children}
                </div>
            </body>
        </html>
    );
}