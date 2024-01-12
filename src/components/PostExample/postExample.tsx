import { usePostExample } from './postExample.hook';
import './style.scss';

export const PostExample: React.FC = () => {
  const u = usePostExample();

  return (
    <form className="PostExample">
      <input type="text" />
      <input type="text" />
      <button
        onClick={() =>
          u.newPostMutation.mutate({ title: u.title, abstract: u.abstract })
        }
      >
        Salva il post
      </button>
    </form>
  );
};
