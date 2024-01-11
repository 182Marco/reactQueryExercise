import { useSecondComp } from "./secondComp.hook";
import "./style.scss";

export const SecondComp: React.FC = () => {
  const u = useSecondComp();

  if (u.postQuery.isLoading) return <h1>...loading</h1>;
  if (u.postQuery.isError) <pre>{JSON.stringify(u.postQuery.error)}</pre>;

  return (
    <div className="SecondComp">
      <h1> I post dei nostri utenti</h1>

      {u.postQuery?.data?.map((e) => (
        <article key={e.id}>
          <h2>
            {e.title} di <i>{e.auth}</i>
          </h2>
          <div>{e.abstract}</div>
          <button onClick={() => u.setPickedAuth(e.auth)}>
            Di più sull'autore
          </button>
          {u.ShowBio(e.auth) && <div>{u.bio}</div>}
        </article>
      ))}
    </div>
  );
};
