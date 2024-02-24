import { useEffect } from 'react';
import classnames from 'classnames';
import { ParallaxText } from '..';
import { LabelIcon } from './LabelIcon';
import { ArrowIcon } from './ArrowIcon';
import styles from './Overlay.module.css';

export const Overlay = (): JSX.Element => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  return (
    <div className={styles.overlay}>
      <img className={styles.banner} src="./DSC07033.jpg" />
      <div className={styles.container}>
        <div className={classnames(styles.row, styles.about)}>
          <div className={styles.label}>
            <div className={styles.wrapper}>
              <p>Мурманск </p>
            </div>
            <LabelIcon className={styles.labelIcon} />
          </div>
          <div className={styles.col}>
            <ArrowIcon className={styles.arrow} />
            <h1>
              <span>Test</span>
              <span>Test</span>
            </h1>
          </div>
        </div>
        <div className={classnames(styles.row, styles.name)}>
          <ParallaxText baseVelocity={5}>Test</ParallaxText>
        </div>
      </div>
    </div>
  );
};
