/* -*- mode: react -*- */
import PageWrapper from 'components/PageWrapper';
import Header from 'components/Header';
import Content from 'components/Content';
import Footer from 'components/Footer';

export default PageWrapper(() => (
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
));
