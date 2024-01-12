import { usePostExample } from './postExample.hook';
import './styles/style.scss';

export const PostExample: React.FC = () => {
  const u = usePostExample();

  return (
    <div className="PostExample">
      <form onSubmit={u.handleSubmit}>
        <h2>Crea il Nuovo post e poi invialo al server</h2>
        <input
          type="text"
          placeholder="title"
          value={u.title}
          onChange={e => u.setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="body"
          value={u.body}
          onChange={e => u.setBody(e.target.value)}
        />
        <button type="submit">Salva il post</button>
      </form>
      {u.postedPost && (
        <article>
          <h3>{u.postedPost.title}</h3>
          <p>{u.postedPost.body}</p>
          <span>ID: {u.postedPost.id}</span>
        </article>
      )}
    </div>
  );
};
