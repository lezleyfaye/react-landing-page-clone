/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactComponent as AmazonButton } from './images/amazonButton.svg';
import { ReactComponent as CalmLogo } from './images/calmLogo.svg';
import { ReactComponent as StarReview } from './images/starReview.svg';

// import { ReactComponent as CalmTheMind } from './images/calmTheMind.svg';

// why did I do this one?
const headerStyle = css`
height: 4.7rem
padding-top: 1.25rem;
`;

const headerContentStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
  padding: 2.5rem 1.3rem;
  position: relative;
  max-width: 1200px;
  height: 100%;
`;

const logoStyle = css`
  align-items: center;
`;

const amazonButtonStyle = css`
  color: #ffffff;
  background: #4a90e2;
  align-items: center;
  border-radius: 100px;
  border: none;
  min-height: 48px;
  min-width: 48px;
  padding: 1rem 0.5rem;
  font-weight: 500px;
  font-size: 18px;
  /* display: flex;
  justify-content: space-between; */
`;

const mainImageStyle = css`
  display: block;
  width: 1200px;
  max-width: 100%;
  height: auto;
  padding-top: 120px;
  padding-bottom: 100px;
  margin: 0px auto;
`;

const textGradientStyle = css`
  text-align: center;
  font-weight: 400;
  font-size: 45px;
  letter-spacing: 0.05rem;
  background: rgb(59, 189, 236);
  background-image: linear-gradient(
    180deg,
    rgba(59, 189, 236, 1) 0%,
    rgba(88, 88, 228, 1) 100%
  );
  background-clip: text;
  color: transparent;
  width: 100%;
  height: 3.25rem;
  padding-bottom: 85px;
`;

const paragraphDescriptionStyle = css`
  font-size: 26px;
  font-weight: 375;
  color: #333333;
  letter-spacing: 0.05rem;
  width: 100%;
  max-width: 755px;
  margin: 0px auto;
  text-align: center;
`;

const calmBookSplashStyle = css`
  width: 1500px;
  height: 750px;
`;

const reviewSectionStyle = css`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  margin: 0px auto;
  width: 850px;
  height: 420px;
  gap: 200px;
`;

const blurbReviewStyle = css`
  font-size: 26px;
  font-weight: 375;
  color: #333333;
  letter-spacing: 0.05rem;
  padding: 20px 0px 50px 0px;
`;

const centerButton = css`
  display: flex;
  justify-content: center;
  padding-bottom: 150px;
`;

const authorContentStyle = css`
  /* border: 1px solid black; */
  margin: 0px auto;
  padding: 2rem 2rem;
  text-align: center;
`;

const authorChildStyle = css`
  display: inline-block;
  /* border: 1px solid red; */
  padding: 1rem 1rem;
  vertical-align: middle;
  margin-left: 30px;
  margin-bottom: 300px;
`;

const authorPhotoStyle = css`
  width: 310px;
  height: 310px;
`;

const twitterLinkStyle = css`
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 0.05rem;
`;

const mainFooterStyle = css`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 650px;
`;

const footerH2ListStyle = css`
  font-size: 18px;
  font-weight: 500;
  color: #555555;
  letter-spacing: 0.05rem;
`;

const footerContentStyle = css`
  font-size: 16px;
  font-weight: 400;
  color: #555555;
  letter-spacing: 0.05rem;
`;

const copyrightStyle = css`
  font-size: 15px;
  font-weight: 400;
  color: #555555;
  letter-spacing: 0.05rem;
  text-align: center;
`;

function App() {
  return (
    <>
      <header css={headerStyle}>
        <div css={headerContentStyle}>
          {/* 2 div's - 1 w/logo, 1 w/ button */}
          <div>
            <a css={logoStyle} href="https://www.calm.com/?ref=landingfolio">
              <CalmLogo />
            </a>
          </div>
          <div>
            <button css={amazonButtonStyle}>
              <AmazonButton />
              <a>Purchase</a>
            </button>
          </div>
        </div>
      </header>

      {/* main body */}
      <main>
        {/* div containing main book image */}
        <div>
          <img
            css={mainImageStyle}
            src="https://res.cloudinary.com/calm-com/image/upload/v1656359615/www-next/book/hero.png"
            alt="Calm Book"
          />
        </div>
        {/* this div has the gradient text and paragraph */}
        <div>
          <div css={textGradientStyle}>
            <p>Calm the mind. Change the world</p>
          </div>
          <div>
            <p css={paragraphDescriptionStyle}>
              Modern life is hectic and relentless: trains delayed, endless
              emails filling the inbox, kids squabbling before bedtime… There
              has never been a more important time to rediscover your pause
              button. Calm is the book that will show you how to take back a
              little bit of peace, space and all-important calm. This book
              contains the simple tools, tricks and habits that will change the
              rest of your life. It is a practical and pleasurable guide to
              twenty-first century mindfulness.
            </p>
          </div>
        </div>
        {/* this div has the book splash image */}
        <div>
          <img
            css={calmBookSplashStyle}
            src="https://res.cloudinary.com/calm-com/image/upload/v1656359615/www-next/book/benefits-splash-desktop.png"
            alt="Calm Book Preview"
          />
        </div>
        {/* this div contains both reviews */}
        <div css={reviewSectionStyle}>
          {/* this div contains a review with stars */}
          <div>
            <p css={blurbReviewStyle}>
              “Great collage of ideas and practical advice of how to reduce
              stress in this fast paced world. A beautifully presented book
              which even calms you down when you pick it up. I would recommend
              it to everyone.”
            </p>
            <StarReview />
          </div>
          {/* this div contains a review with stars */}
          <div>
            <p css={blurbReviewStyle}>
              “A beautifully presented book that is as lovely to look at as it
              is to read. Simple tips and inspiration on how to bring calm into
              your life. Highly recommend.”
            </p>
            <StarReview />
          </div>
        </div>
        {/* this div contains the text gradient and button */}
        <div>
          <div css={textGradientStyle}>Now available on Amazon</div>
          <div css={centerButton}>
            <button css={amazonButtonStyle}>
              <AmazonButton />
              Purchase
            </button>
          </div>
        </div>
        {/* this dov contains both author blurbs */}
        <div css={textGradientStyle}>
          Meet the Authors
          {/* this div contains one author info */}
          <div css={authorContentStyle}>
            <div css={authorChildStyle}>
              <img
                css={authorPhotoStyle}
                src="https://www.calm.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcalm-com%2Fimage%2Fupload%2Fv1656359614%2Fwww-next%2Fbook%2Fwatercolor-acton.png&w=384&q=75"
                alt="Michael Acton Smith profile pic"
              />
              <p css={paragraphDescriptionStyle}>Michael Acton Smith</p>
              <a css={twitterLinkStyle} href="https://twitter.com/acton">
                @smith
              </a>
            </div>
            {/* this div contains one author info */}
            <div css={authorChildStyle}>
              <img
                css={authorPhotoStyle}
                src="https://www.calm.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcalm-com%2Fimage%2Fupload%2Fv1656359615%2Fwww-next%2Fbook%2Fwatercolor-tewy.png&w=384&q=75"
                alt="Alex Tew profile pic"
              />
              <p css={paragraphDescriptionStyle}>Alex Tew</p>
              <a css={twitterLinkStyle} href="https://twitter.com/tew">
                @tewy
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer>
        {/* div containing the ul's */}
        <div css={mainFooterStyle}>
          <div>
            <h2 css={footerH2ListStyle}>Company</h2>
            <ul css={footerContentStyle}>
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Blog</li>
              <li>Meet our Instructor</li>
              <li>Calm Science</li>
            </ul>
          </div>
          <div>
            <h2 css={footerH2ListStyle}>Offers</h2>
            <ul css={footerContentStyle}>
              <li>Buy a Gift</li>
              <li>Redeem a Gift</li>
              <li>Family Plan</li>
              <li>Calm Health</li>
              <li>Calm for Business</li>
            </ul>
          </div>
          <div>
            <h2 css={footerH2ListStyle}>Help</h2>
            <ul css={footerContentStyle}>
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>CCPA Notice</li>
              <li>Accessibility Statement</li>
              <li>Opt Out of Targeted Ads</li>
              <li>Cookies</li>
            </ul>
          </div>
          <ul css={footerContentStyle}>
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
        </div>

        {/* div with copyright only */}
        <div css={copyrightStyle}>
          Copyright © 2023 Calm. All rights reserved
        </div>
      </footer>
    </>
  );
}

export default App;
