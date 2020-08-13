import { connect } from 'react-redux';
import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';

import { Footer } from '@components';
import { i18n, Link, withTranslation } from '@root/i18n';
import { decrementCounter, incrementCounter } from '@actions/counterAction';

const HomePage = ({ t, counter, incrementCounter, decrementCounter }) => (
  <div>
    <NextSeo
      title="Strona główna"
      description="Strona główna bez prawie żadnej zawartości"
    />

    <h1>{t('h1')}</h1>
    <button
      type="button"
      onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'pl' : 'en')}
    >
      {t('change-locale')}
    </button>

    <button type="button" onClick={incrementCounter}>
      Increment
    </button>
    <button type="button" onClick={decrementCounter}>
      Decrement
    </button>
    <h1>{counter}</h1>

    <Link href="/about">{t('to-about-page')}</Link>

    <Footer />
  </div>
);

HomePage.getInitialProps = async () => ({
  requiredNamespaces: ['common', 'footer'],
});

HomePage.propTypes = {
  t: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  incrementCounter: PropTypes.func.isRequired,
  decrementCounter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ counter: { value } }) => ({
  counter: value,
});

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation('common')(HomePage));
