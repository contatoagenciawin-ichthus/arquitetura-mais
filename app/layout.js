import './globals.css';
import { League_Spartan, Manrope } from 'next/font/google';

const league = League_Spartan({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'Arquitetura Mais | Projetos Residenciais, Corporativos e Comerciais',
  description:
    'Arquitetura Mais: projetos residenciais, corporativos e comerciais com estética, funcionalidade e identidade. São Caetano do Sul, SP.',
  metadataBase: new URL('https://arquiteturamais.com.br'),
  openGraph: {
    title: 'Arquitetura Mais',
    description: 'Arquitetura que traduz identidade, rotina e propósito em espaços.',
    url: 'https://arquiteturamais.com.br',
    siteName: 'Arquitetura Mais',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${league.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
