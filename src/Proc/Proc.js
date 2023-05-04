import React from 'react';
import './Proc.css';
import icon1 from 'file:///C:/Users/msi/Desktop/crypto/crypto-app/src/img/process-icons/1.png';
import icon2 from 'file:///C:/Users/msi/Desktop/crypto/crypto-app/src/img/process-icons/2.png';
import icon3 from 'file:///C:/Users/msi/Desktop/crypto/crypto-app/src/img/process-icons/3.png';



const Proc = () => {
  return (
    <div>
      <section className="process-section spad">
        <div className="container">
          <div className="section-title text-center">
            <h2>Get Started With Bitcoin</h2>
            <p>Start learning about Bitcoin with interactive tutorials. It’s fun, easy, and takes only a few minutes! </p>
          </div>
          <div className="row">
            <div className="col-md-1 ">
              <div className="process-step">
                <figure className="process-icon">
                  <img src={icon1} alt="#" />
                </figure>
                <h4>Create Your Wallet</h4>
                <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              </div>
            </div>
            <div className="col-md-2 process">
              <div className="process-step">
                <figure className="process-icon">
                  <img src={icon2} alt="#" />
                </figure>
                <h4>Create Your Wallet</h4>
                <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              </div>
            </div>
            <div className="col-md-3 process">
              <div className="process-step">
                <figure className="process-icon">
                  <img src={icon3} alt="#" />
                </figure>
                <h4>Create Your Wallet</h4>
                <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Proc;
