import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Main } from '../components/Main';
import { Link } from '../components/Link';
import { Text } from '../components/Text';
import { Fader } from '../components/Fader';
import { Secuence } from '../components/Secuence';
import joshMullisFamilyURL from '../images/phantomCTF.jpg';
import newDayFosterHomeURL from '../images/new-day-foster-home.jpg';
import newDayFosterHomeLogoURL from '../images/new-day-foster-home-logo.jpg';

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
            </Fader>
            <p><Fader>First time a hacking competition was conducted in National Institute of Technology, Warangal by Team CybSec with the name PhantomCTF on the intranet accessible to NITW students only.
</Fader></p>
              <p>Second part i.e, phantomCTF 2.O is coming soon. Just Stay Tuned 🙃🙂</p>
          
          </article>
        </Secuence>
      </Main>
    );
  }
}

export default withStyles(styles)(phantomCTF);
