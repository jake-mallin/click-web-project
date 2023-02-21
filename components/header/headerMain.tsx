import Image from 'next/image';
import styles from './header.module.css';

export interface SiteHeader {}

const HeaderMain: React.FC<SiteHeader> = () => {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.siteHeader__wrapper}>
        <div className={styles.siteHeader__logo}>
          <Image
            src="/logo.png"
            alt="Really Easy Car Credit Logo"
            width={228}
            height={64}
          />
        </div>
        <nav className={styles.quickNav}>
          <ul>
            <li className={styles.quickNav__item}>
              <a>Used Cars</a>
            </li>
            <li className={styles.quickNav__item}>
              <a>Finance Application</a>
            </li>
            <li className={styles.quickNav__item}>
              <a>How It Works</a>
            </li>
          </ul>
        </nav>
        <div className={styles.siteHeader__cta}>
          <a href="" className={'btn btn--ghost'}>
            Apply Now
          </a>
        </div>
        <nav className={styles.mainNav}>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="21"
              viewBox="0 0 24 21"
            >
              <path
                id="Icon_awesome-bars"
                data-name="Icon awesome-bars"
                d="M.857,8.076H23.143A.857.857,0,0,0,24,7.219V5.076a.857.857,0,0,0-.857-.857H.857A.857.857,0,0,0,0,5.076V7.219A.857.857,0,0,0,.857,8.076Zm0,8.571H23.143A.857.857,0,0,0,24,15.79V13.647a.857.857,0,0,0-.857-.857H.857A.857.857,0,0,0,0,13.647V15.79A.857.857,0,0,0,.857,16.647Zm0,8.571H23.143A.857.857,0,0,0,24,24.362V22.219a.857.857,0,0,0-.857-.857H.857A.857.857,0,0,0,0,22.219v2.143A.857.857,0,0,0,.857,25.219Z"
                transform="translate(0 -4.219)"
                fill="#fff"
              />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default HeaderMain;
