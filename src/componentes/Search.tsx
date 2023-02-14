import { useState } from "react";
import { BsSearch } from "react-icons/bs";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  return (
    <div>
      <h2>Busque por um usúario</h2>
      <p>Conheça seus melhores repositórios</p>
      <div>
        <input
          type="text"
          placeholder="Digite o nome do usúario"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};
export default Search;
