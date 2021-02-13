import React from 'react';
import PropTypes from 'prop-types';

import { Post } from '../components/Post';
import projects from '../data/projects'
import { withStyles } from '../tools/withStyles';
import { Main } from '../components/Main';
import { Secuence } from '../components/Secuence';

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
        {projects.map((post, index) => (
            <Post
              key={index}
              audio={{ silent: index > 4 }}
              data={{ ...post, id: 'post' + index }}
            />
          ))}
        </Secuence>
      </Main>
    );
  }
}

export default withStyles(styles)(Download);
