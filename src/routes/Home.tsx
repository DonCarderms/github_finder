import { Outlet } from "react-router-dom";
import Search from "../componentes/Search";

import { useState } from "react";
import { UserProps } from "../types/user";
import User from "../componentes/user";
import Error from "../componentes/Error";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  const loadUser = async (userName: string) => {
    setError(false);
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    const { avatar_url, login, location, followers, following } = data;
    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    if (res.status === 404) {
      return setError(true);
    }

    setUser(userData);
  };

  return (
    <div>
      <Search loadUser={loadUser} />

      {user && <User {...user} />}
      {error && <Error />}
    </div>
  );
};

export default Home;
