import Link from 'next/link';
import { ReactComponent as ShapeIcon } from '../assets/SHAPE_ICON.svg';
import styles from './sidebar.module.scss';

export const SidebarIcon: React.FC<{ onNavHome?: () => void }> = (props) => {
  const pageLink = (
    <Link href="/">
      <ShapeIcon className={styles.timeline__home} />
    </Link>
  );

  const anchorLink = (
    <div onClick={props.onNavHome}>
      <ShapeIcon className={styles.timeline__home} />
    </div>
  );

  const link = props.onNavHome ? anchorLink : pageLink;

  return link;
};
