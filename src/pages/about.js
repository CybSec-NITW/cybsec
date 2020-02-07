import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Link } from '../components/Link';
import { Main } from '../components/Main';
import { Text } from '../components/Text';
import { Fader } from '../components/Fader';
import { Secuence } from '../components/Secuence';

const styles = theme => ({
  root: {}
});

class About extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  render () {
    const { classes } = this.props;

    return (
      <Main className={classes.root}>
        <article>
          <Secuence stagger>
            <header>
              <h1><Text>About CybSec</Text></h1>
            </header>
            <p><Text style={{ fontWeight: 'bold' }}>Who We Are?</Text></p>
            <p><Text>
            CybSecNITW is a group of information security enthusiasts from National Institute of Technology, Warangal. We are a bunch of self-motivated security enthusiasts who love learning and sharing their knowledge with everyone genuinely interested in information security.</Text></p>
            
            <p><Text style={{ fontWeight: 'bold' }}>What We Do?</Text></p>
            <p><Text>Meetings : We have weekly meetups where we have information security-related discussions and participate in CTFs. Everyone is invited to our meetings. </Text></p>
            <p><Text>Capture The Flag : We actively participate in CTFs. These are security competitions which require practical knowledge of topics like binary exploitation, reverse engineering, cryptography, web security, forensics, steganography, etc. We also organise our own Capture The Flag competitions PhantomCTF.</Text></p>
            
            <p><Text style={{ fontWeight: 'bold' }}>How To Join?</Text></p>
            <p><Text>CybSecNITW is an open group. Everyone (from NITW) can join in our meetings and participate with us in CTFs (subject to rules on team size in CTFs, of course). If you come regularly to the meetings, you get added to the internal team.
</Text></p>
            <p><Text style={{ fontWeight: 'bold' }}>Where We Work?</Text></p>
            <p><Text>Innovation Garage - the Hogwarts of innovative souls. The working hub for brilliant minds with the coolest projects - It’s a place to hack. It’s a room to innovate. Most importantly, it’s a space where you challenge yourself to break the boundaries.
            
            The working space is packed with devout and enthusiastic students, each showing off their creative best in their fields of passion. The synergy of the atmosphere further inspires the individuals to commit to their work.
            
            Ever since its inception in 2015, it has given rise to lots of projects, friendships, mentors, startups and reasons for many to work harder than ever before.
            </Text></p>
            
            
          </Secuence>
        </article>
      </Main>
    );
  }
}

export default withStyles(styles)(About);
