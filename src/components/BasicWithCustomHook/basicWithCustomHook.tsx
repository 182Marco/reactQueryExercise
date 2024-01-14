import { useGetPostsHook } from '../../cutomQueryHooks';
import { IPostData } from './models';
import './style.scss';

export const BasicWithCustomHook: React.FC = () => {
  const { data, error, isLoading, isError } = useGetPostsHook();

  if (isLoading) return <h1>...loading</h1>;
  if (isError) <pre>{JSON.stringify(error)}</pre>;

  return (
    <div className="BasicWithCustomHook">
      <h1>I post dei nostri utenti</h1>
      {data.map((e: IPostData) => (
        <article key={e.id}>
          <h2>{e.title}</h2>
          <div>{e.body}</div>
        </article>
      ))}
    </div>
  );
};
