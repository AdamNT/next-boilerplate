import PropTypes from 'prop-types';
import { withTranslation } from '@root/i18n';

const Footer = ({ t }) => (
  <footer>
    <p>{t('description')}</p>
  </footer>
);

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('footer')(Footer);
