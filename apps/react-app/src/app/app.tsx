// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SharedComponents } from '@nx-tutorial/shared-components';
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <h1>React app</h1>
      <SharedComponents />
    </div>
  );
}

export default App;
