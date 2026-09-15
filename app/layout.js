import './globals.css';
import { Inter_Tight, Manrope } from 'next/font/google';

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const metadata = {
  title: 'Arquitetura Mais | Projetos Residenciais, Corporativos e Comerciais',
  description:
    'Arquitetura Mais: projetos residenciais, corporativos e comerciais com identidade, funcionalidade e acompanhamento próximo. São Caetano do Sul, SP.',
  metadataBase: new URL('https://arquiteturamais.com.br'),
  openGraph: {
    title: 'Arquitetura Mais',
    description: 'Arquitetura pensada a partir de pessoas, rotina e contexto.',
    url: 'https://arquiteturamais.com.br',
    siteName: 'Arquitetura Mais',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${interTight.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
