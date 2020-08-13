import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';

import { withTranslation, Link } from '@root/i18n';
import { Footer } from '@components';

const AboutPage = ({ t }) => (
  <div>
    <NextSeo title="O nas" description="O nas bez prawie żadnej zawartości" />

    <Link href="/">{t('back-to-home')}</Link>

    <Footer />
  </div>
);

AboutPage.getInitialProps = async () => ({
  namespacesRequired: ['about-page', 'footer'],
});

AboutPage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('about-page')(AboutPage);
