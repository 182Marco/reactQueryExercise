import { useFirstComp } from "./firstComp.hook";
import "./style.scss";

export const FirstComp: React.FC = () => {
  const u = useFirstComp();

  if (u.isLoading) return <h1>...loading</h1>;
  if (u.isError) <pre>{JSON.stringify(u.error)}</pre>;

  return (
    <div className="FirstComp">
      <h1>I post dei nostri utenti</h1>
      <button onClick={() => u.newPostMutation.mutate("!! NEW ONE !!")}>
        Aggiungi post
      </button>
      {u?.data?.map((e) => (
        <article key={e.id}>
          <h2>
            {e.title} di <i>{e.auth}</i>
          </h2>
          <div>{e.abstract}</div>
        </article>
      ))}
    </div>
  );
};
