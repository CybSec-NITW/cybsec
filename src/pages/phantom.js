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
        
            <Fader>
            <img src={result} alt="Scoreboard" />
            </Fader>
            
        <p>After the CTF, top 7 winning teams were given prizes according to scoreboard.</p>
      <p>Writeups and walkthroughs are published on our blogs and YouTube channel.</p>
              <p>Stay tuned for phantomCTF 3.O</p>

            
          </article>
        </Secuence>
      </Main>
    );
  }
}

export default withStyles(styles)(phantomCTF);
