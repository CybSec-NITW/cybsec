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
        
              <p>Due to technical issues, the CTF had been postponed. We are extremely sorry for the inconvenience caused.</p>
              <p>We promise this CTF will be conducted with better challenges and better management. Our sincere apologies once again.</p>

              <p>For NITW students registration Link to join CybSec Team - <Link href='http://registration.cybsec.in/'>registration.cybsec.in</Link></p>
              <p>(Selections will depend on performance in Phantom 3.0 and an interview round to be conducted afterwards)</p>
              <br></br>
              <p>For participating in CTF, register here -  http://ctfx.cybsec.in</p>
              <p>D-Day(s) - 21st Aug, 3.00pm to 22nd Aug, 11.00am       

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
