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
import graph from '../images/Result.jpeg';
import score frome '../images/Scoreboard.jpeg';

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
          
              <p> Just like all good things... Phantom CTF 3.0 has come to an end. We saw an overwhelming response of over 500 participants.</p>
              <p> We hope you enjoyed and learned as much as we did. And if you didnt participate this time... well, see you next time!</p> 
      
              <br></br><br></br><br></br>
               
              <p> Here's how the leaderboard looked by the end of it... </p>
             
              <Fader>
              <img src={graph}>
              </Fader>
      
              <Fader>
              <img src={score}>
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
