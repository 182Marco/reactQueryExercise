import { useContextExample } from './contextExample.hook';
import './style.scss';

export const ContextExample: React.FC = () => {
  const u = useContextExample();

  return (
    <div className="ContextExample">
      <button onClick={() => u.newPostMutation.mutate('!! NEW ONE !!')}>
        Fai partire la mutation
      </button>
      <h3>Questo e' il context:</h3>
      <pre>{JSON.stringify(u.mutationContext)}</pre>
    </div>
  );
};
