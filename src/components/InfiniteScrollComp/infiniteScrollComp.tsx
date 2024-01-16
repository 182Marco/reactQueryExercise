import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteScroll } from './infiniteScrollComp.hook';
import './style.scss';
import { AtomLoader } from '../../atoms';
import { IPostData } from '../../utils';

export const InfiniteScrollComp: React.FC = () => {
  const u = useInfiniteScroll();

  if (u.isLoading)
    return (
      <h1>
        <AtomLoader />
      </h1>
    );
  if (u.isError) <pre>{u.error?.toString()}</pre>;

  return (
    <div className="InfiniteScroll">
      <h1>Esempio di infinite Query</h1>
      <InfiniteScroll
        loadMore={() => {
          if (!u.isFetching) u.fetchNextPage();
        }}
        hasMore={u.hasNextPage}
        loader={<AtomLoader />}
      >
        {u.data?.pages[0].map((e: IPostData) => (
          <section key={e.id}>
            <h3>{e.title}</h3>
            <p>{e.body}</p>
          </section>
        ))}
      </InfiniteScroll>
      <button onClick={() => u.fetchNextPage()}>fetch next page</button>
    </div>
  );
};
