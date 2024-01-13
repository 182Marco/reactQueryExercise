import { useBasicWithCustomHook } from './basicWithCustomHook.hook';
import './style.scss';

export const BasicWithCustomHook: React.FC = () => {
  const u = useBasicWithCustomHook();

  if (u.isLoading) return <h1>...loading</h1>;
  if (u.isError) <pre>{JSON.stringify(u.error)}</pre>;

  return (
    <div className="BasicWithCustomHook">
      <h1>I post dei nostri utenti</h1>
      {u?.data?.map(e => (
        <article key={e.id}>
          <h2>{e.title}</h2>
          <div>{e.body}</div>
        </article>
      ))}
    </div>
  );
};
