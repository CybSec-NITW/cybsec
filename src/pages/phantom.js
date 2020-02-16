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
            <p><Fader>First time a hacking competition was conducted on 4th January, 2020 in National Institute of Technology, Warangal by Team CybSec with the name PhantomCTF on the intranet accessible to NITW students only.
</Fader></p>
              <p>Second part i.e, phantomCTF 2.O is scheduled on 1st March, 2020. Click the below link to register while connecting to NITW college WiFi/LAN.</p>
          
              <p><Link href='https://172.20.41.245/' target='phantomCTF'>
            <center>Link to PhantomCTF 2.O</center>
            </Link></p>
              <p>If link is not opening, proceed to advanced settings and click to open anyway.</p>
        <p>Use no ad-blockers and prefer browsers other than google chrome. </p>
        <p>Make sure you are connected to NITW college LAN/WiFi, if still not working check on other college networks.</p>
        <p>If still not working message us or call us, we will register you. </p>
          </article>
        </Secuence>
      </Main>
    );
  }
}

export default withStyles(styles)(phantomCTF);
