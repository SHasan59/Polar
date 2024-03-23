'use client';
import ChatDetails from '../../../components/ChatDetails';
import ChatList from '../../../components/ChatList';
import { useSession, SessionProvider } from 'next-auth/react';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

const ChatPage = () => {
  const { chatId } = useParams();

  const { data: session } = useSession();
  const currentUser = session?.user;

  // Function to mark messages as seen
  const seenMessages = async () => {
    try {
      await fetch(`/api/chats/${chatId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentUserId: currentUser._id,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (currentUser && chatId) seenMessages();
  }, [currentUser, chatId]);

  return (
    <>
      <Navigation />
      <div className="main-container">
        <div className="w-1/3 max-lg:hidden">
          <ChatList currentChatId={chatId} />
        </div>
        <div className="w-2/3 max-lg:w-full">
          <ChatDetails chatId={chatId} />
        </div>
      </div>
      <Footer />
    </>
  );
};

const ChatPageWrapper = () => {
  return (
    <SessionProvider>
      <ChatPage />
    </SessionProvider>
  );
};

export default ChatPageWrapper;
