import ChatList from '../../components/ChatList';
import Contacts from '../../components/Contacts';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import TopBar from '../../components/LogBar';
const Chats = () => {
  return (
    <>
      <Navigation />
      <div className="main-container bg-blue-900">
        <TopBar />
        <div className="w-1/3 max-lg:w-1/2 max-md:w-full">
          <ChatList />
        </div>
        <div className="w-1/3 max-lg:w-1/2 max-md:w-full">
          <Contacts />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Chats;
