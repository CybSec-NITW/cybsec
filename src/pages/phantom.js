import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Main } from '../components/Main';
import { Link } from '../components/Link';
import { Text } from '../components/Text';
import { Fader } from '../components/Fader';
import { Secuence } from '../components/Secuence';
import gspons from '../images/gcloud.jpg';
import ig from '../images/ig.png'
import phantom4 from '../images/sectf.mp4';

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
              <h1><Text>SECTF</Text></h1>
            </header>
            <Fader>
            <img src={ig} alt="IG" />
            </Fader>
          
              <p>"Hey bro?"
              "Yea?"
              "Done with the assignment?"
              "No bro, still working on it.. Exams are coming up and we are stuck with these annoying assignments." 😭
              "AAAh!!" That's it! 
              L37s pu7 4n 3nd 70 7h15 m153ry!"
              "What do u mean bro?"😮
              "m150n_7@k3_d0wn_w3bc3ll"😎</p> 
               
              <p>If you've cracked the code, then here's a chance to experience that adrenaline rush in our upcoming Social Engineering based CTF event - "Attack on Webcell" brought to you by CYBSEC NITW🔥.</p>
              <p>The event consists of a series of mind-blowing challenges aimed at promoting awareness among youth by giving them a taste of what it feels to hack people, and not just systems. 😁</p>
              <p> Just grab up your team and Register NOW at <a href="https://sectf.in">sectf.in </a> . Open to all! A stable internet connection and a laptop is all you will need. NO OTHER PREREQUISTES NEEDED! </p>
              <p>|| NOTE || <br></br> Open to all! A stable internet connection and a laptop is all you will need. NO OTHER PREREQUISTES NEEDED! </p>
              <p>Date: 19th February 2022<br />
                Time: 5:00 to 8:00 pm</p>

              <Fader>
              <video controls autostart autoPlay src={phantom4} type="video/mp4" height={"100%"} width="100%" />
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
