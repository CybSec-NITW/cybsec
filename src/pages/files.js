import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Main } from '../components/Main';
import { Secuence } from '../components/Secuence';
import { Text } from '../components/Text';
import { Fader } from '../components/Fader';
import { Link } from '../components/Link';

const styles = theme => ({
  root: {},
  albums: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  album: {
    padding: [0, 0, 20],
    width: '100%'
  },
  albumCover: {
    display: 'block',
    margin: [0, 0, 20],
    width: '100%',

    '& img': {
      margin: 0,
      width: '100%',
      maxWidth: '100%'
    }
  },
  albumFrame: {
    display: 'block',
    width: '100%'
  },

  '@media screen and (min-width: 768px)': {
    album: {
      padding: 10,
      width: '50%'
    }
  }
});

class Download extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  render () {
    const { classes } = this.props;

    return (
      <Main className={classes.root}>
        <Secuence stagger>
          <h1><Text>Download</Text></h1>
          <div className={classes.albums}>
            <div className={classes.album}>
              <Fader className={classes.albumCover}>
                <Link href='https://www.kali.org/' target='kalilinux'>
                  <img
                    alt='Kali Linux'
                    src='/images/kalilinux.jpg'
                  />
                </Link>
              </Fader>
            <Fader className={classes.albumCover}>
            <Link href='https://www.kali.org/' target='kalilinux'>
            <center>Kali Linux </center>
            </Link>
            </Fader>
            </div>
            <div className={classes.album}>
              <Fader className={classes.albumCover}>
                <Link href='https://parrotlinux.org/' target='parrotos'>
                  <img
                    alt='Parrot Security'
                    src='/images/parrot.jpg'
                  />
                </Link>
              </Fader>
            <Fader className={classes.albumCover}>
            <Link href='https://parrotlinux.org/' target='parrotos'>
            <center>Parrot Security </center>
            </Link>
            </Fader>
            </div>
          </div>
        </Secuence>
      </Main>
    );
  }
}

export default withStyles(styles)(Download);
