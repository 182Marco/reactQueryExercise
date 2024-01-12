import { useQueryAferAnOther } from './queryAferAnOther.hook';
import './style.scss';

export const QueryAferAnOther: React.FC = () => {
  const u = useQueryAferAnOther();

  if (u.postQuery.isLoading) return <h1>...loading</h1>;
  if (u.postQuery.isError) <pre>{JSON.stringify(u.postQuery.error)}</pre>;

  return (
    <div className="QueryAferAnOther">
      <h1> I post dei nostri utenti</h1>

      {u.postQuery?.data?.map(e => (
        <article key={e.id}>
          <h2>
            {e.title} di <i>{e.auth}</i>
          </h2>
          <div>{e.abstract}</div>
          <button onClick={() => u.setPickedAuth(e.auth)}>
            Di più sull'autore
          </button>
          {u.showBio(e.auth) && <div>{u.bio}</div>}
        </article>
      ))}
    </div>
  );
};
