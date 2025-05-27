import clsx from 'clsx';
import Grid from 'components/grid';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import Script from 'next/script';
// @ts-ignore
const ImageLink = ({ src, href }) => {
  return (
    <a href={href}>
      <img src={src} alt="Sugar Snap Pea Farm" height={300} width={300} />
    </a>
  );
};

export default async function Header({ isInternalPage }: { isInternalPage?: boolean }) {
  // Get menu from shopify
  const { MAIN_MENU_NAME } = process.env;
  const menu = await getMenu(MAIN_MENU_NAME || '');

  return (
    <header className={clsx('relative z-10 mx-auto', !isInternalPage && 'lg:pt-12')}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WKK2Z264LX"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WKK2Z264LX');
        `}
      </Script>
      <div
        className={clsx(
          'flex flex-col items-center justify-center px-4 pb-10',
          isInternalPage && 'mb-[70px]'
        )}
      >
        <ImageLink src="https://i.postimg.cc/W1FybQdQ/SSP-Farm-Logo-dark.png" href="/" />
        {menu.length ? (
          <Grid
            className={clsx(
              'mt-5 hidden gap-x-8 rounded-full bg-dark-teal bg-opacity-20 px-5 py-2.5 text-xl font-medium uppercase text-main-red-barn lg:flex',
              isInternalPage && 'bg-transparent pt-0'
            )}
          >
            {menu.map((item: Menu) => (
              <Grid.Item key={item.title} className="cursor-pointer">
                <Link href={item.path}>{item.title}</Link>
              </Grid.Item>
            ))}
          </Grid>
        ) : null}
      </div>
    </header>
  );
}
