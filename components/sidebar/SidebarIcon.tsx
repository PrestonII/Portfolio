import Link from 'next/link';
import { ReactComponent as ShapeIcon } from '../assets/SHAPE_ICON.svg';
import styles from './sidebar.module.scss';

export const SidebarIcon: React.FC = (props) => (
  <Link href="/">
    <ShapeIcon className={styles.timeline__home} />
  </Link>
  
)