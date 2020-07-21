import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Main } from '../components/Main';
import { Link } from '../components/Link';
import { Text } from '../components/Text';
import { Fader } from '../components/Fader';
import { Secuence } from '../components/Secuence';
import joshMullisFamilyURL from '../images/phantomCTF.jpg';
import venue from '../images/venue.jpg';
import result from '../images/result.jpg';
import gspons from '../images/gcloud.jpg';

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

            <Fader>
              <img src={joshMullisFamilyURL} alt="phantomCTF" />
            
            <p>First time a hacking competition was conducted on 4th January, 2020 in National Institute of Technology, Warangal by Team CybSec with the name PhantomCTF on the intranet accessible to NITW students only.
</p></Fader>
              <p>Second part i.e, phantomCTF 2.O was also conducted on 1st March, 2020. A huge participation was seen in the college.</p>
          
            <Fader>
            <img src={venue} alt="phantomCTF" />
            </Fader>
            
     
              <p>It was a Jeopardy Style CTF having various types of challenges like web exploitation, forensics, cryptography, binary exploitation, reverse engineering and some miscellaneous.</p>
        
              <p>Phantom 3.0 is coming soon!! Pull up your gloves and get ready for Cybsec's biggest and best yet Capture The Flag.</p>

          <header>
              <h1><Text>Sponsors</Text></h1>
            </header>

            <Fader>
            <img src={gspons} alt="Google Cloud" />
            </Fader>
            <p>Infrastructure Sponsored by Google Cloud</p>

          </article>
        </Secuence>
      </Main>
    );
  }
}

export default withStyles(styles)(phantomCTF);
