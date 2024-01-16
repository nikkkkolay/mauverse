import { useEffect } from 'react';
import classnames from 'classnames';
import { ParallaxText } from '..';
// import { ArrowIcon } from './ArrowIcon';
import { LabelIcon } from './LabelIcon';
import { CutIcon } from './CutIcon';
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
              <p>Москва </p>
              <p>Санкт-Петербург</p>
              <p>Мурманск </p>
            </div>
            <LabelIcon className={styles.labelIcon} />
          </div>
          <div className={styles.col}>
            {/* <ArrowIcon className={styles.arrow} /> */}
            <CutIcon className={styles.cut} />
            <h1>
              <span>Стилист</span>
              <span> – </span>
              <span>парикмахер</span>
            </h1>
          </div>
        </div>
        <div className={classnames(styles.row, styles.name)}>
          <ParallaxText baseVelocity={5}>Дарья Яблукова</ParallaxText>
          <ParallaxText baseVelocity={-5}>Дарья Яблукова</ParallaxText>
        </div>
      </div>
    </div>
  );
};
