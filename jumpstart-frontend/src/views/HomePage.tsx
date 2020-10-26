import React from 'react';
import '../css/HomePage.css';

const HomePage: React.FC = () => {
  return (
      <div>
        <div id={'homePage'}>
          <div id={'navBar'}>
            <h1 id={'title'}>The Jumpstart Blog</h1>
            <div className={'cardBackground'}>
              <button>
                <p>Home 🏠</p>
              </button>
              <button>
                <p>Add a Post ➕</p>
              </button>
            </div>
          </div>
          <div id={'homeComponents'}>
            <div className={'welcomeMessage cardBackground'}>
              <h2>Welcome to the C4C Jumpstart Blog!</h2>
              <p>Feel free to check out the recent posts and contribut to our post collection.</p>
            </div>
            <div id={'postBox'}>
              <div id={'postColumn'}>
                <div className={'post'}>
                  <h3>A Pretty Good Title Here</h3>
                  <p>A short preview of what the blog is about. This should probably be two or three
                  sentences that take up no more than three lines.</p>
                  <div className={'postFooter'}>
                    <p>Written by: <span className={'authorName'}>Jack Blanc, Dash Master</span></p>
                    <div className={'commentsAndClaps'}>
                      <p>100000 <span role={'img'}>💬</span> 123456 <span role={'img'}>👏</span></p>
                    </div>
                  </div>
                </div>
                <div className={'post'}>
                  <h3>A Pretty Good Title Here</h3>
                  <p>A short preview of what the blog is about. This should probably be two or three
                    sentences that take up no more than three lines.</p>
                  <div className={'postFooter'}>
                    <p>Written by: <span className={'authorName'}>Jack Blanc, Dash Master</span></p>
                    <div className={'commentsAndClaps'}>
                      <p>100000 <span role={'img'}>💬</span> 123456 <span role={'img'}>👏</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HomePage;
