import { useEffect, useState } from "react";
import { IUser } from "./user.type";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        res.json().then(users => {
          setUsers(users);
        });
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <p>{user.id}</p>
              <p>{user.email}</p>
              <p>{user.username}</p>
              <p>{user.name}</p>
              <p>
                {user.address.zipcode}, {user.address.city},
                {user.address.street}
              </p>
              <p>{user.phone}</p>
              <p>{user.website}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
