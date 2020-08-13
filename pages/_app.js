import Router from 'next/router';
import { useEffect } from 'react';
import { DefaultSeo } from 'next-seo';
import { PageTransition } from 'next-page-transitions';

import { Loader, Theme } from '@components';
import wrapper from '@redux/store';
import SEO from '@root/next-seo.config';
import { appWithTranslation } from '@root/i18n';
import { pageview } from '@utils/gtag';

const MyApp = ({ Component, pageProps, router: { route } }) => {
  useEffect(() => {
    const handleRouteChange = url => pageview(url);

    Router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Theme>
        <PageTransition
          timeout={300}
          classNames="page-transition"
          loadingComponent={<Loader />}
          loadingDelay={500}
          loadingTimeout={{
            enter: 400,
            exit: 0,
          }}
          loadingClassNames="loading-indicator"
        >
          <Component {...pageProps} key={route} />
        </PageTransition>

        <style jsx global>
          {`
            .page-transition-enter {
              opacity: 0;
            }
            .page-transition-enter-active {
              opacity: 1;
              transition: opacity 300ms;
            }
            .page-transition-exit {
              opacity: 1;
            }
            .page-transition-exit-active {
              opacity: 0;
              transition: opacity 300ms;
            }
          `}
        </style>
      </Theme>
    </>
  );
};

export default wrapper.withRedux(appWithTranslation(MyApp));
