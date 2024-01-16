import { PropsWithChildren } from 'react';
import classnames from 'classnames';
import styles from './Container.module.css';

interface Props {
  className?: string;
}

export const Container = ({ children, className }: PropsWithChildren<Props>): JSX.Element => {
  return <div className={classnames(className, styles.container)}>{children}</div>;
};
