import React from 'react'
import './Newf.css';
import imgg from "file:///C:/Users/msi/Desktop/crypto/crypto-app/src/img/blog/1.jpg"; 
import imggg from "file:///C:/Users/msi/Desktop/crypto/crypto-app/src/img/blog/2.jpg";
 import cimg from "file:///C:/Users/msi/Desktop/crypto/crypto-app/src/img/blog/comment/1.jpg"



const Newf = () => {
  return (
    <div><section class="single-blog-page spad">
    <div class="container">
        <div class="row">
            <div class="col-lgg-8">
                <div class="blog-item bi-feature">
                    <figure class="blog-thumb">
                        <img src={imgg} alt=""/>
                    </figure>
                    <div class="blog-text">
                        <div class="post-date">22 dec 2018</div>
                        <h2 class="blog-title"><a href="">This Week in Bitcoin: Up, Down and Sideways</a></h2>
                        <div class="post-meta">
                            <a href=""><span>by</span> Admin</a>
                            <a href=""><i class="fa fa-heart-o"></i> 234 Likes</a>
                            <a href=""><i class="fa fa-comments-o"></i> 08 comments</a>
                        </div>
                        <p>Bitcoin is one of the most important inventions in all of human history. For the first time ever, anyone can send or receive any amount of money with anyone else, anywhere on the planet, conveniently and without restriction. It’s the dawn of a better, more free world.</p>
                        <p>Formerly known as Rootstock, the startup has long been lauded for its potential to pave the way for the implementation of ethereum-style smart contracts on bitcoin, something enthusiasts believe will keep the world's largest cryptocurrency competitive with the platform that arguably pioneered the idea that more complex self-executing code could be run on a blockchain.</p>
                        <p>But while it would be easy enough for bitcoin users that want more complex smart contracts to merely make the switch, some users believe that, as bitcoin is the largest and most secure cryptocurrency, more experimental features that debut on other networks will eventually make their way to its network. The idea is that in doing so, they can capitalize on bitcoin's impressive startup infrastructure and serve different users.</p>
                        <p>Yet, RSK's version of the functionality doesn't quite upgrade the bitcoin blockchain itself. The capability will rather be brought to bitcoin via a sidechain, which moves tokens from the main bitcoin blockchain to a compatible network operated with the help of 25 companies.</p>
                        <p>Still, RSK CEO Diego Gutierrez Zaldivar believes the advance will effectively provide the same level of utility to potential users.</p>
                        <blockquote>
                            "This is the first time that there's going to be a smart contract platform powered by the bitcoin network."
                            <span>Oliver Dale </span>
                        </blockquote>
                        <h4 class="mb-4">Starbucks Chairman Is Hot on Blockchain, Cold on Bitcoin</h4>
                        <p>You are not able to purchase POWR with “Fiat” currency so you will need to first purchase another currency – the easiest to buy are Bitcoin or Ethereum which you can do at Coinbase using a bank transfer or debit / credit card purchase and then swap that for POWR at an exchange such as Binance.</p>
                        <p>You will have to carry out some identity verification when signing up as they have to adhere to strict financial guidelines. Make sure you use our link to signup you will be credited with $10 in free bitcoin when you make your first purchase of $100</p>
                        <div class="row">
                            <div class="col-smg-7">
                                <div class="post-tags">
                                    <a href="#">Multipopuse</a>
                                    <a href="#">Fashion</a>
                                    <a href="#">Blogs</a>
                                </div>
                            </div>
                            <div class="col-smg-5">
                                <div class="social-men">
                                    <p>Share</p>
                                    <a href=""><i class="fa fa-facebook"></i></a>
                                    <a href=""><i class="fa fa-twitter"></i></a>
                                    <a href=""><i class="fa fa-google"></i></a>
                                    <a href=""><i class="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="releted-posts">
                            <h4>You May Also Like</h4>
                            <div class="row">
                                <div class="col-mdg-6">
                                    <div class="blog-item">
                                        <figure class="blog-thumb">
                                        <img src={imggg} alt=""/>                                        </figure>
                                        <div class="blog-text">
                                            <div class="post-date">22 dec 2018</div>
                                            <h4 class="blog-title"><a href="">Blockchain Rolls Out Trading Feature for 22 States in the U.S</a></h4>
                                            <div class="post-meta">
                                                <a href=""><span>by</span> Admin</a>
                                                <a href=""><i class="fa fa-heart-o"></i> 234 Likes</a>
                                                <a href=""><i class="fa fa-comments-o"></i> 08 comments</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="blog-item">
                                        <figure class="blog-thumb">
                                        <img src={imggg} alt=""/>                                        </figure>
                                        <div class="blog-text">
                                            <div class="post-date">22 dec 2018</div>
                                            <h4 class="blog-title"><a href="">Blockchain Rolls Out Trading Feature for 22 States in the U.S</a></h4>
                                            <div class="post-meta">
                                                <a href=""><span>by</span> Admin</a>
                                                <a href=""><i class="fa fa-heart-o"></i> 234 Likes</a>
                                                <a href=""><i class="fa fa-comments-o"></i> 08 comments</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="comment-form-area">
                            <form class="comment-form">
                                <div class="form-group">
                                    <input type="text" placeholder="Your name *:"/>
                                    <label></label>
                                </div>
                                <div class="form-group">
                                    <input type="email" placeholder="Your email *:"/>
                                    <label></label>
                                </div>
                                <div class="form-group">
                                    <input type="text" placeholder="Your Phone *:"/>
                                    <label></label>
                                </div>
                                <div class="form-group clearfix">
                                    <textarea placeholder="Your comment"></textarea>
                                    <label></label>
                                </div>
                                <button class="site-btn sb-gradients no-radius mt-3">Submit Now</button>
                            </form>
                            <div class="comment-area">
								<h4>03 Comments</h4>
								<ul class="comment-list">
									<li>
										<div class="comment">
                                        <div
               className="memberimg "
               data-setbg="img/member/1.jpg"
               style={{ backgroundImage: `url(${cimg})`}}
            ></div>
											<div class="comment-content">
												<h5>Kelly Richardson<span>, 24 Mar 2018</span></h5>
												<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.</p>
												<a href="" class="c-btn">Like</a>
												<a href="" class="c-btn">Reply</a>
											</div>
										</div>
										
									</li>
									<li>
										<div class="comment">
                                        <div style={{ backgroundImage: `url(${cimg})` }}></div>
											<div class="comment-content">
												<h5>Scott Langton<span>, 24 Mar 2018</span></h5>
												<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.</p>
												<a href="" class="c-btn">Like</a>
												<a href="" class="c-btn">Reply</a>
											</div>
										</div>
									</li>
                                    <li>
										<div class="comment">
                                        <div style={{ backgroundImage: `url(${cimg})` }}></div>


											<div class="comment-content">
												<h5>Scott Langton<span>, 24 Mar 2018</span></h5>
												<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.</p>
												<a href="" class="c-btn">Like</a>
												<a href="" class="c-btn">Reply</a>
											</div>
										</div>
									</li>
								</ul>
							</div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            <div className='hedhi' >
            <div class="col-lg-4 col-md-6 sideber pt-5 pt-lg-0">
                <div class="widget-area">
                    <h4 class="widget-title">News Letter</h4>
                    <p>Receive our newsletter to stay on top of the latest posts.</p>
                    <form class="widget-subscribe-from">
                        <input type="text" placeholder="Enter your email"/>
                        <button class="site-btn sb-full-- sb-gradients">Subscribe</button>
                    </form>
                </div>
                <div class="widget-area55">
                    <div class="widget">
                        <h4 class="widget-title">Categories</h4>
                        <ul>
                            <li><a href="#">Prediction markets</a></li>
                            <li><a href="#">Storage</a></li>
                            <li><a href="#">Token exchange</a></li>
                            <li><a href="#">Computation</a></li>
                            <li><a href="#">Identity</a></li>
                            <li><a href="#">ICOs</a></li>
                        </ul>
                    </div>
                    <div class="widget">
                        <h4 class="widget-title">Popular Posts</h4>
                        <ul class="popular-posts">
                            <li>
                                <span>22 dec 2018</span>
                                <h5><a href="">Lightning and Mainnet: A Look at the Protocol’s Hype, Trials, and Error</a></h5>
                            </li>
                            <li>
                                <span>22 dec 2018</span>
                                <h5><a href="">This Week in Bitcoin: Japan Gets Goxxed and Iota Gets Into a Tangle</a></h5>
                            </li>
                            <li>
                                <span>22 dec 2018</span>
                                <h5><a href="">Bitcoin Futures Report Shows Bullish Sentiment Is In the Air</a></h5>
                            </li>
                            <li>
                                <span>22 dec 2018</span>
                                <h5><a href="">Why Venezuela’s New National Cryptocurrency El Petro Will Fail</a></h5>
                            </li>
                        </ul>
                    </div>
                    </div>
            
                    <div class="widget">
                        <h4 class="widget-title">Recent Tweets</h4>
                        <ul class="twitter-widget">
                            <li>
                                <h5>Why Does The Bitcoin Price Move So Much?</h5>
                                <a href="https://t.co/MSQVkamNwa">https://t.co/MSQVkamNwa</a>
                                <span>4 days ago</span>
                            </li>
                            <li>
                                <h5>How Can I Trade Bitcoin without an Exchange?</h5>
                                <a href="https://t.co/MSQVkamNwa">https://t.co/MSQVkamNwa</a>
                                <span>4 days ago</span>
                            </li>
                        </ul>
                    </div>
                    <div class="widget">
                        <h4 class="widget-title">Follow Us</h4>
                        <div class="social-men">
                            <a href="" class="facebook"><i class="fa fa-facebook"></i></a>
                            <a href="" class="google"><i class="fa fa-google"></i></a>
                            <a href="" class="instagram"><i class="fa fa-instagram"></i></a>
                            <a href="" class="twitter"><i class="fa fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section></div>
  )
}

export default Newf