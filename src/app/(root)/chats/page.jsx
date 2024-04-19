import ChatList from '../../components/ChatList';
import Contacts from '../../components/Contacts';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import TopBar from '../../components/LogBar';

const Chats = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen flex flex-col lg:flex-row bg-blue-900">
        <div className="lg:w-1/3 lg:mr-4 mb-4 lg:mb-0 mt-8">
          <TopBar />
          <div className="mt-4">
            <ChatList />
          </div>
        </div>
        <div className="lg:w-2/3 lg:ml-4">
          <div className="mt-4 lg:mt-8">
            <Contacts />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Chats;
