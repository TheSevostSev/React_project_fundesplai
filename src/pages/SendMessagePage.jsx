import { useQuery } from "@tanstack/react-query";
import { listUsers } from "../api/user";
import { Typography } from "antd";
import { useState } from "react";
import { sendMessage } from "../api/message";
import { useUserContext } from "../provider/UserProvider";
const { Title } = Typography;

const SendMessagePage = () => {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: listUsers,
    staleTime: 12000,
    cacheTime: 12000,
  });

  const { user } = useUserContext();

  const [message, setMessage] = useState();
  const [destinationUserIds, setDestinationUserIds] = useState([]);

  const filterDestinationUserIds = (value) => {
    const tempDestinationUserIds = destinationUserIds;
    const valueIndex = tempDestinationUserIds.indexOf(value);

    if (valueIndex != -1) {
      tempDestinationUserIds.splice(valueIndex, 1);
    } else {
      tempDestinationUserIds.push(value);
    }

    setDestinationUserIds(tempDestinationUserIds);
  };

  return (
    <>
      <Title>Send Message Page</Title>
      <table>
        <tr>
          <th>Username</th>
          <th>Send to it?</th>
        </tr>

        {users?.map((user) => (
          <tr key={user.id}>
            <td>{user.username}</td>
            <td>
              <input
                type="checkbox"
                value={user.id}
                onChange={(e) => filterDestinationUserIds(e.target.value)}
              />
            </td>
          </tr>
        ))}
      </table>
      <textarea
        onChange={(e) => setMessage(e.target.value)}
        id="message"
        name="message"
        rows="5"
        cols="33"
      />
      <div>
        <button
          onClick={() =>
            sendMessage({
              message: message,
              submitUserID: user.id,
              destinationUserIds: destinationUserIds,
            })
          }
        >
          Submit message
        </button>
      </div>
    </>
  );
};

export default SendMessagePage;
