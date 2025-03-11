import React, { Fragment, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Mail } from 'lucide-react'
import '../styles/Contact.css'

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('dquaye@hmc.edu')
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <Fragment>
        <Navbar/>
          <main className='contact'>
            <section className='contact_hero'>
              <h1 className='contact_header'>Contact Us!</h1>
              <p className='contact_paragraph'>We’re always looking for passionate individuals to support our mission of developing affordable accessibility devices. Right now, we’re seeking new funding opportunities and expanding our network of Blind and Visually Impaired contacts.</p>
              <p className='contact_paragraph'><i>If you’re interested in receiving a device</i> as part of our development feedback program, we’d love to hear from you! Your insights are invaluable in shaping our technology. Feel free to reach out by clicking the email below to get involved!</p>
              <div className='contact_link' onClick={handleCopyEmail} title="Click to copy email" aria-label="Click to copy email">
                <Mail className='contact_mail_icon' size={30}/>
                <p className='contact_mail_address'>dquaye@hmc.edu</p>
              </div>
              <br/>
              <br/>
              {copied && <p className='contact_copied_notification'>Email address copied to clipboard!</p>}
            </section>
          </main>
          <br/>
          <br/>
          <br/>
        <Footer/>
    </Fragment>
  )
}

export default Contact

