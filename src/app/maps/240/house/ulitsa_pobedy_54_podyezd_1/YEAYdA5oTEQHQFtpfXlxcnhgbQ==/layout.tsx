import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'БТА ТОРГ — Яндекс Карты',
  description: 'БТА ТОРГ, 445017, Самарская область, город Тольятти, ул. Победы, д. 54, подъезд 1, кв. 20 — отзывы, фото, время работы, телефон и адрес на карте',
  openGraph: {
    title: 'БТА ТОРГ — Яндекс Карты',
    description: 'БТА ТОРГ, 445017, Самарская область, город Тольятти, ул. Победы, д. 54, подъезд 1, кв. 20 — отзывы, фото, время работы, телефон и адрес на карте',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Яндекс Карты',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'БТА ТОРГ — Яндекс Карты',
    description: 'БТА ТОРГ, 445017, Самарская область, город Тольятти, ул. Победы, д. 54, подъезд 1, кв. 20 — отзывы, фото, время работы, телефон и адрес на карте',
  },
  icons: {
    icon: [
      { url: '/yandex-icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    shortcut: '/yandex-icon.svg',
    apple: '/apple-touch-icon.png',
  },
};
export default function MapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
