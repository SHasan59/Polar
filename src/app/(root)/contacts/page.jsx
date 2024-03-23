import Contacts from '../../components/Contacts';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const ContactsPage = () => {
  return (
    <>
      <Navigation />
      <div className="px-10 py-6 mb-20">
        <Contacts />
      </div>
      <Footer />
    </>
  );
};

export default ContactsPage;
