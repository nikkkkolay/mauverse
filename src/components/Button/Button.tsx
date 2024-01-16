import { PropsWithChildren } from 'react';
import { ParallaxElement } from '..';
import classnames from 'classnames';
import styles from './Button.module.css';

interface Props {
  className?: string;
  onClick?: () => void;
  isInView?: boolean;
}

export const Button = ({ className, isInView, children, ...props }: PropsWithChildren<Props>): JSX.Element => {
  return (
    <ParallaxElement {...props} as="button" isInView={isInView} className={classnames(styles.button, className)}>
      {children}
    </ParallaxElement>
  );
};
