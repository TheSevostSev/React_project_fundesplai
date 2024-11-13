import { useQuery } from "@tanstack/react-query";
import { Typography } from "antd";
import { listReceivedMessagesByUserId } from "../api/message";
import { useUserContext } from "../provider/UserProvider";
const { Title } = Typography;

const MyMessagesPage = () => {
  const { user } = useUserContext();

  const { data: messages } = useQuery({
    queryKey: ["messages", user.id],
    queryFn: () => listReceivedMessagesByUserId(user.id),
    staleTime: 12000,
    cacheTime: 12000,
  });

  return (
    <>
      <Title>My Received Message Page</Title>
      <table>
        <tr>
          <th>Id</th> <th>Message</th>
        </tr>
        {messages?.map((message) => (
          <tr key={message.id}>
            <td>{message.id}</td>
            <td>{message.text}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default MyMessagesPage;
