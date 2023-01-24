/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { ReactComponent as AmazonButton } from './images/amazonButton.svg';
import { ReactComponent as CalmLogo } from './images/calmLogo.svg';

// import { ReactComponent as CalmTheMind } from './images/calmTheMind.svg';

const headerStyle = css`
height: 75px
  padding-top: 20px;
`;

const headerContentStyle = css`
  display: flex;
  justify-content: space-between;
  padding: 0px 1rem;
  position: relative;
`;

const amazonButtonStyle = css`
  color: #ffffff;
  background: #4a90e2;
  align-items: center;
  border-radius: 100px;
  border: none;
  min-height: 48px;
  min-width: 48px;
`;

const mainImageStyle = css`
  width: 100;
  height: 725px;
`;

const paragraphDescriptionStyle = css`
  font-size: 18px;
`;

function App() {
  return (
    <>
      <header>
        <section css={headerContentStyle}>
          <div>
            <a href="/">
              <CalmLogo />
            </a>
          </div>
          <div>
            <button css={amazonButtonStyle}>
              <AmazonButton />
              Purchase
            </button>
          </div>
        </section>
      </header>
      <main>
        <section>
          <div>
            <img
              css={mainImageStyle}
              src="https://res.cloudinary.com/calm-com/image/upload/v1656359615/www-next/book/hero.png"
              alt="Calm Book"
            />
          </div>
        </section>
        <section>
          <div>
            <div>
              {/* this needs fixing, don't think it's an svg  */}
              {/* <CalmTheMind /> */}
            </div>
            <div>
              <p css={paragraphDescriptionStyle}>
                Modern life is hectic and relentless: trains delayed, endless
                emails filling the inbox, kids squabbling before bedtime… There
                has never been a more important time to rediscover your pause
                button. Calm is the book that will show you how to take back a
                little bit of peace, space and all-important calm. This book
                contains the simple tools, tricks and habits that will change
                the rest of your life. It is a practical and pleasurable guide
                to twenty-first century mindfulness.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>picture montage</div>
        </section>
        <section>
          <div>
            <p>review 1</p>
            <p>review 2</p>
          </div>
        </section>
        <section>
          <div>svg on amazon</div>
          <a href="/#">amazon button</a>
        </section>
        <section>
          <div>
            svg meet authors
            <div>
              <div> replace this with img of author 1 pic</div>
              <p>Michael Acton Smith</p>
              <a href="/#">@ Smith</a>
            </div>
            <div> replace this with img of author 2 pic</div>
            <p>Alex Tew</p>
            <a href="/#">@ Tew</a>
          </div>
        </section>
      </main>
      <footer>
        <section>
          <h2>Company</h2>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
            <li>Meet our Instructor</li>
            <li>Calm Science</li>
          </ul>
        </section>
        <section>
          <h2>Offers</h2>
          <ul>
            <li>Buy a Gift</li>
            <li>Redeem a Gift</li>
            <li>Family Plan</li>
            <li>Calm Health</li>
            <li>Calm for Business</li>
          </ul>
        </section>
        <section>
          <h2>Help</h2>
          <ul>
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>CCPA Notice</li>
            <li>Accessibility Statement</li>
            <li>Opt Out of Targeted Ads</li>
            <li>Cookies</li>
          </ul>
        </section>
        <ul>
          <li>
            <a href="/#">fb</a>
          </li>
          <li>
            <a href="/#">insta</a>
          </li>
          <li>
            <a href="/#">twitter</a>
          </li>
        </ul>
        <div>copyright</div>
      </footer>
    </>
  );
}

export default App;
