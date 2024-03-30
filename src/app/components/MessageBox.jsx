import { format } from 'date-fns';

const MessageBox = ({ message, currentUser }) => {
  return message?.sender?._id !== currentUser._id ? (
    <div className="flex gap-3 items-start">
      <img
        src={message?.sender?.profileImage || '/person.jpg'}
        alt="profile photo"
        className="w-8 h-8 rounded-full"
      />
      <div className="flex flex-col gap-2">

        <p className="text-small-bold">
          {message?.sender?.username} &#160; &#183; &#160;{' '}
          {format(new Date(message?.createdAt), 'p')}
        </p>

        {message?.text ? (
          <p className="w-fit bg-purple-800 p-3 rounded-lg text-base-medium">
            {message?.text}
          </p>
        ) : (
          <img
            src={message?.photo}
            alt="message"
            className="w-40 h-auto rounded-lg"
          />

        )}
      </div>
    </div>
  ) : (

    <div className="flex gap-3 items-start justify-end">
      <div className="flex flex-col gap-2 items-end">

        <p className="text-small-bold">
          {format(new Date(message?.createdAt), 'p')}
        </p>

        {message?.text ? (
          <p className="w-fit bg-blue-800 text-white p-3 rounded-lg text-base-medium">
            {message?.text}
          </p>
        ) : (
          <img
            src={message?.photo}
            alt="message"
            className="w-40 h-auto rounded-lg"
          />

        )}
      </div>
    </div>
  );
};

export default MessageBox;
