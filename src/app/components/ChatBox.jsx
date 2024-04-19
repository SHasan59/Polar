import { format } from 'date-fns';
import { useRouter } from 'next/navigation';

const ChatBox = ({ chat, currentUser, currentChatId }) => {
  const otherMembers = chat?.members?.filter(
    (member) => member._id !== currentUser._id
  );

  const lastMessage =
    chat?.messages?.length > 0 && chat?.messages[chat?.messages.length - 1];

  const seen = lastMessage?.seenBy?.find(
    (member) => member._id === currentUser._id
  );

  const router = useRouter();

  return (
    <div
      className={`flex items-start justify-between p-2 rounded-2xl cursor-pointer hover:bg-grey-200 ${
        chat._id === currentChatId ? 'bg-blue-200' : ''
      }`}
      onClick={() => router.push(`/chats/${chat._id}`)}
    >
      <div className=" flex gap-3 text-black">
        {chat?.isGroup ? (
          <img
            src={chat?.groupPhoto || '/group2.jpg'}
            alt="group-photo"
            className=" w-11 h-11 rounded-full object-cover object-center"
          />
        ) : (
          <img
            src={otherMembers[0].profileImage || '/polarpfp2.png'}
            alt="profile-photo"
            className=" w-11 h-11 rounded-full object-cover object-center"
          />
        )}

        <div className="flex flex-col gap-1">
          {chat?.isGroup ? (
            <p className="text-base-bold">{chat?.name}</p>
          ) : (
            <p className="text-base-bold">{otherMembers[0]?.username}</p>
          )}

          {!lastMessage && <p className="text-small-bold">Started a chat</p>}

          {lastMessage?.photo ? (
            lastMessage?.sender?._id === currentUser._id ? (
              <p className="text-small-medium text-grey-3">You sent a photo</p>
            ) : (
              <p
                className={`${
                  seen ? 'text-small-medium text-grey-3' : 'text-small-bold'
                }`}
              >
                Received a photo
              </p>
            )
          ) : (
            <p
              className={` w-[120px] sm:w-[250px] truncate ${
                seen ? 'text-small-medium text-grey-3' : 'text-small-bold'
              }`}
            >
              {lastMessage?.text}
            </p>
          )}
        </div>
      </div>

      <div>
        <p className="text-base-light text-black">
          {!lastMessage
            ? format(new Date(chat?.createdAt), 'p')
            : format(new Date(chat?.lastMessageAt), 'p')}
        </p>
      </div>
    </div>
  );
};

export default ChatBox;
