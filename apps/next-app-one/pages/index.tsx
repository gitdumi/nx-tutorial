import styles from './index.module.css';
import { SharedComponents } from '@nx-tutorial/shared-components';
import { MyType } from '@types';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  const myVar: MyType = {
    id: 10,
    name: 'test',
    brand: 'brand',
  }

  console.log({ myVar });

  return (
    <div className={styles.page}>
      <h1>Next App One</h1>
      <SharedComponents/>
    </div>
  );
}

export default Index;
