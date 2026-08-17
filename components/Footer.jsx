import Link from "next/link";
import { Wordmark, Icons } from "./shared";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer__grid">
        <div>
          <div className="footer__brand">
            <Wordmark compact />
          </div>
          <p className="footer__blurb">
            EHS training and consultancy helping Malaysian organisations comply with OSHA, FMA and EQA, and lead
            their people better. A wholly owned subsidiary of HIFOTAC.
          </p>
          <div className="footer__socials">
            <a
              href="https://www.facebook.com/p/High-Focus-Training-Consultancy-Sdn-Bhd-749381-M-100095358559682/"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
            >
              {Icons.facebook}
            </a>
            <a href="mailto:info@highfocus.com.my" aria-label="Email">
              {Icons.mail}
            </a>
          </div>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/programmes">Programmes</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Tools</h4>
          <ul>
            <li><Link href="/contact?type=booking">Book Training</Link></li>
            <li><Link href="/contact">Free Self-Assessment</Link></li>
            <li><Link href="/contact">HRD Corp Levy Calculator</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="footer__contact">
            <li>
              {Icons.pin}
              <span>
                No. A-10, Tingkat 1, Taman Kampian,
                <br />
                Jalan Sekerat, 08000 Sungai Petani,
                <br />
                Kedah, Malaysia
              </span>
            </li>
            <li>
              {Icons.phone}
              <span>+60 12-345 6789</span>
            </li>
            <li>
              {Icons.mail}
              <span>info@highfocus.com.my</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {new Date().getFullYear()} High Focus Training Consultancy (M) Sdn Bhd (749381-M). All rights reserved.
        </span>
        <div className="footer__badges">
          <span className="footer__badge">HRD Corp Registered Provider</span>
          <span className="footer__badge">SSM 749381-M</span>
          <span className="footer__badge">Since 2001</span>
        </div>
      </div>
    </footer>
  );
}
