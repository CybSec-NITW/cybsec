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
            
            <div className={classes.album}>
            <Fader className={classes.albumCover}>
            <Link href='https://ghidra-sre.org/' target='ghidra'>
            <img
            alt='GHIDRA'
            src='/images/ghidra.jpg'
            />
            </Link>
            </Fader>
            <Fader className={classes.albumCover}>
            <Link href='https://ghidra-sre.org/' target='ghidra'>
            <center>GHIDRA</center>
            </Link>
            </Fader>
            </div>
            
            <div className={classes.album}>
            <Fader className={classes.albumCover}>
            <Link href='https://www.wireshark.org/' target='wireshark'>
            <img
            alt='Wireshark'
            src='/images/wireshark.jpg'
            />
            </Link>
            </Fader>
            <Fader className={classes.albumCover}>
            <Link href='https://www.wireshark.org/' target='wireshark'>
            <center>Wireshark</center>
            </Link>
            </Fader>
            </div>
            
            <div className={classes.album}>
            <Fader className={classes.albumCover}>
            <Link href='https://nmap.org/' target='Nmap'>
            <img
            alt='Nmap'
            src='/images/nmap.jpeg'
            />
            </Link>
            </Fader>
            <Fader className={classes.albumCover}>
            <Link href='https://nmap.org/' target='nmap'>
            <center>Nmap</center>
            </Link>
            </Fader>
            </div>
            
            <div className={classes.album}>
            <Fader className={classes.albumCover}>
            <Link href='https://www.acunetix.com/' target='acunetix'>
            <img
            alt='Acunetix'
            src='/images/acunetix.jpg'
            />
            </Link>
            </Fader>
            <Fader className={classes.albumCover}>
            <Link href='https://www.acunetix.com/' target='acunetix'>
            <center>Acunetix </center>
            </Link>
            </Fader>
            </div>
          </div>
            
            <h1><Text>Practice Here</Text></h1>
            <div className={classes.albums}>
            <div className={classes.album}>
            <Fader className={classes.albumCover}>
            <Link href='https://www.hackthebox.eu/' target='htb'>
            <img
            alt='HTB'
            src='/images/htb.png'
            />
            </Link>
            </Fader>
            <Fader className={classes.albumCover}>
            <Link href='https://www.hackthebox.eu/' target='htb'>
            <center>Hack The Box</center>
            </Link>
            </Fader>
            </div>

            
            <div className={classes.album}>
            <Fader className={classes.albumCover}>
            <Link href='https://www.root-me.org/' target='root-me'>
            <img
            alt='root-me'
            src='/images/rootme.jpg'
            />
            </Link>
            </Fader>
            <Fader className={classes.albumCover}>
            <Link href='https://www.root-me.org/' target='root-me'>
            <center>Root Me</center>
            </Link>
            </Fader>
            </div>
            
            <div className={classes.album}>
            <Fader className={classes.albumCover}>
            <Link href='https://webgoat.github.io/WebGoat/' target='webgoat'>
            <img
            alt='webgoat'
            src='/images/webgoat.jpg'
            />
            </Link>
            </Fader>
            <Fader className={classes.albumCover}>
            <Link href='https://webgoat.github.io/WebGoat/' target='webgoat'>
            <center>Webgoat</center>
            </Link>
            </Fader>
            </div>

            <div className={classes.album}>
            <Fader className={classes.albumCover}>
            <Link href='https://ctftime.org/' target='ctftime'>
            <img
            alt='ctftime'
            src='/images/ctftime.jpg'
            />
            </Link>
            </Fader>
            <Fader className={classes.albumCover}>
            <Link href='https://ctftime.org/' target='ctftime'>
            <center>CTFtime</center>
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
