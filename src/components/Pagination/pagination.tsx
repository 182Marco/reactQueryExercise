import { IPostData } from '../BasicWithCustomHook/models';
import { usePagination } from './pagination.hook';
import './style.scss';

export const Pagination: React.FC = () => {
  const u = usePagination();

  if (u.isLoading) return <h1>...loading</h1>;
  if (u.isError) <pre>{JSON.stringify(u.error)}</pre>;

  return (
    <div className="Pagination">
      <main>
        <h1>I post dei nostri utenti</h1>
        {u?.data?.map((e: IPostData) => (
          <article key={e.id}>
            <h2>{e.title}</h2>
            <div>{e.body}</div>
          </article>
        ))}
      </main>
      <section>
        <button
          disabled={u.currentPage < 2}
          onClick={() => u.setCurrentPage(pv => pv - 1)}
        >
          pagina precedente
        </button>
        <p>
          pagina {u.currentPage} di {u.maxPage}
        </p>
        <button
          disabled={u.currentPage == u.maxPage}
          onClick={() => u.setCurrentPage(pv => pv + 1)}
        >
          prossima pagina
        </button>
      </section>
    </div>
  );
};
