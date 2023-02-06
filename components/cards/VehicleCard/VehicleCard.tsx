import Image from 'next/image';
import styles from './VehicleCard.module.css';

export interface IVehicleCard {
  tag: string;
  title: string;
  body: string;
  author: string;
  time: string;
}

const VehicleCard: React.FC<IVehicleCard> = ({
  tag,
  title,
  body,
  author,
  time,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <Image
            src="/williams-fw45-1.jpg"
            alt="card__image"
            className={styles.card__image}
            width="600"
            height="200"
          />
        </div>
        <div className={styles.card__body}>
          <span className={`${styles.tag} ${styles['tag-blue']}`}>{tag}</span>
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
        <div className={styles.card__footer}>
          <div className={styles.user}>
            <Image
              src="https://i.pravatar.cc/40?img=3"
              alt="user__image"
              className={styles.user__image}
              width="40"
              height="40"
            />
            <div className={styles.user__info}>
              <h5>{author}</h5>
              <small>{time}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
