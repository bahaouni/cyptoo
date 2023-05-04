
import React from 'react'; import myImage from 'file:///C:/Users/msi/Desktop/crypto/crypto-app/src/img/blog/1.jpg'; import myImage1 from 'file:///C:/Users/msi/Desktop/crypto/crypto-app/src/img/blog/2.jpg'; import myImage2 from 'file:///C:/Users/msi/Desktop/crypto/crypto-app/src/img/blog/3.jpg';




import './News.css';
import { Link } from 'react-router-dom';

function News() {
  return (
    <section className="bj">
      <div className="container">
        <div className="section-title text-center">
          <h2>Latest News</h2>
          <p>Bitcoin is the simplest way to exchange money at very low cost.</p>
        </div>
        <div className="row">
<Link to="/new">
<div className="col-md-4">
            <div className="blog-item">
              <figure className="blog-thumb">
                <img className='igig' src={myImage} alt="My Image" style={{ width: '100%', height: 'auto' }} />
              </figure>
              <div className="blog-text">
                <div className="post-date">03 jan 2018</div>
                <h4 className="blog-title"><a href="">Coinbase to Reopen the GDAX Bitcoin Cash-Euro Order Book</a></h4>
                <div className="post-meta">
                  <a href=""><span>by</span> Admin</a>
                  <a href=""><i className="fa fa-heart-o"></i> 234 Likes</a>
                  <a href=""><i className="fa fa-comments-o"></i> 08 comments</a>
                </div>
              </div>
            </div>
          </div>
</Link>
<Link to="/new">

          <div className="col-md-4">
            <div className="blog-item">
              <figure className="blog-thumb">
                <img className='igig' src={myImage1} alt="My Image" style={{ width: '100%', height: 'auto' }} />
              </figure>
              <div className="blog-text">
                <div className="post-date">28 dec 2018</div>
                <h4 className="blog-title"><a href="">Blockchain Rolls Out Trading Feature for 22 States in the U.S</a></h4>
                <div className="post-meta">
                  <a href=""><span>by</span> Admin</a>
                  <a href=""><i className="fa fa-heart-o"></i> 234 Likes</a>
                  <a href=""><i className="fa fa-comments-o"></i> 08 comments</a>
                </div>
              </div>
            </div>
          </div>
          </Link>
<Link to="/new">

          <div className="col-md-4">
            <div className="blog-item">
              <figure className="blog-thumb">
                <img className='igig' src={myImage2} alt="My Image" style={{ width: '100%', height: 'auto' }} />
              </figure>
              <div className="blog-text">
                <div className="post-date">28 aug 2018</div>
                <h4 className="blog-title"><a href="">This Week in Bitcoin: Up, Down and Sideways</a></h4>
                <div className="post-meta">
                  <a href=""><span>by</span> Admin</a>
                  <a href=""><i className="fa fa-heart-o"></i> 234 Likes</a>
                  <a href=""><i className="fa fa-comments-o"></i> 08 comments</a>
                </div>
              </div>
            </div>
          </div>
          </Link>

        </div>
      </div>
    </section>
  );
}

export default News;
