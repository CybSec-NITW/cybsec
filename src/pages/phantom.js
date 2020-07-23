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
          
              <p>It is a Jeopardy Style CTF having various types of challenges like web exploitation, forensics, cryptography, binary exploitation, reverse engineering and some miscellaneous.</p>
        
              <p>Phantom 3.0 is coming soon!! Pull up your gloves and get ready for Cybsec's biggest and best yet Capture The Flag.</p>
              <p>The D-Day(s) - 15th Aug 6:30pm to 16th Aug 2:30pm <br></br>
                 Venue - The comforts of your home <br></br>
                 Necessities - A brain and a laptop</p>

              <p>For NITW students registration Link - <Link href='http://registration.cybsec.in/'>registration.cybsec.in</Link></p>

              <p>For Non-NITW participants - Link will be provided soon.</p>
              <br>
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
