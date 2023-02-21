import Image from 'next/image';
import styles from './footer.module.css';

export interface SiteFooter {}

const FooterMain: React.FC<SiteFooter> = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.fcaDisclaimer}>
        <p>
          Representative Example: Borrowing £6,500 over 48 months with a
          representative APR of 20.3%, the amount payable would be £193 a month,
          with a total cost of credit of £2,767 and a total amount payable of
          £9,267
        </p>

        <p>We work with a panel of lenders to provide car finance.</p>

        <p>
          Really Easy Car Credit is a trading style of The Really Easy Group
          Limited. Registered Address: Newcastle Motorworld, Indigo Park East,
          Sandy Lane, Gosforth, Newcastle Upon Tyne, England, NE3 5HE. We act as
          a credit broker and not a lender and are authorised and regulated by
          the Financial Conduct Authority for consumer credit FCA no. 689921. We
          can introduce customers to a limited number of finance providers based
          on overall credit profile and may receive a commission for such
          introductions, this will not impact the rate you are provided. We do
          not charge a fee to the customer for arranging the finance. Written
          quotations on request. All finance subject to terms and status.
        </p>

        <p>
          *The Acceptance & Option fees that may apply can vary from time to
          time and from lender to lender, fees are already accounted for within
          the payments displayed and are also included within the total amount
          payable.
        </p>

        <p>
          By introducing your details, we may receive a commission from our
          finance partners/lenders. This is a fixed percentage or figure and may
          vary by lender/partner, however this will never impact the rate or
          acceptance you are provided. Further information can be supplied on
          request. We will not charge you a fee for our service.
        </p>
      </div>
      <div className={styles.footerDisclaimer}>
        <a
          href="https://www.clickdealer.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLogo}
        >
          Powered by
          <span className={styles.logo}>
            <Image
              src="/cd-logo.png"
              alt="ClickDealer Logo"
              width={204}
              height={44}
            />
          </span>
        </a>
      </div>
    </footer>
  );
};

export default FooterMain;
