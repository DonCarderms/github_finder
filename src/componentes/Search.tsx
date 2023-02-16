import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";

import classes from "./Search.module.css";
type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      console.log("opaaa");
      loadUser(userName);
    }
  };

  return (
    <div className={classes.search}>
      <h2>Busque por um usúario</h2>
      <p>Conheça seus melhores repositórios</p>
      <div className={classes.search_container}>
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
