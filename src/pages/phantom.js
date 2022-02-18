import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Main } from '../components/Main';
import { Link } from '../components/Link';
import { Text } from '../components/Text';
import { Fader } from '../components/Fader';
import { Secuence } from '../components/Secuence';
import gspons from '../images/gcloud.jpg';
import phantom4 from '../images/sectf.mp4'

const styles = theme => ({
  root: {}
});

class phantomCTF extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  render () {
    const { classes } = this.props;

    return (
      <Main className={classes.root}>
        <Secuence stagger>
          <article>
            <header>
              <h1><Text>phantomCTF</Text></h1>
            </header>
          
              <p>After successfully conducting 3 CTFs , we are up with PHANTOM CTF 4.0 ( Beginner's Edition ).</p> 
               
              <p> This PHANTOM CTF is specifically focussed on "first-timers" or "beginners" to give you the basic understanding of "playing CTFs", and help you all to take "your first step in field of Cybersecurity and Hacking".</p>
              <p> Just grab up your team and Register NOW at <a href="ctf.cybsec.in">ctf.cybsec.in </a></p>
              <p>|| NOTE || <br></br> 1. MAXIMUM MEMBERS PER TEAM = 3<br></br>
              2. INDIVIDUAL registrations ARE ALSO ALLOWED. Each individual registration will be considered as a SEPARATE TEAM!</p>
             
              <Fader>
              <video controls autostart autoPlay src={phantom4} type="video/mp4" />
              </Fader>
  
      
              <br></br><br></br><br></br>
      
          <header>
              <h1><Text>Sponsors</Text></h1>
            </header>

            <Fader>
            <img src={gspons} alt="Google Cloud" />
            </Fader>
            <center><p>Infrastructure Sponsored by <Link href='https://g.co/cloud/'>Google Cloud</Link></p></center>

          </article>
        </Secuence>
      </Main>
    );
  }
}

export default withStyles(styles)(phantomCTF);
