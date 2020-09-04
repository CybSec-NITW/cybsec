import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import anime from 'animejs';

import { Link } from '../Link';

class Component extends React.PureComponent {
  static displayName = 'SocialLinks';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired,
    audio: PropTypes.object.isRequired,
    sounds: PropTypes.object.isRequired,
    className: PropTypes.any,
    itemClassName: PropTypes.string,
    animateY: PropTypes.bool,
    onEnter: PropTypes.func,
    onExit: PropTypes.func,
    onLinkStart: PropTypes.func,
    onLinkEnd: PropTypes.func
  };

  static defaultProps = {
    animateY: true
  };

  enter () {
    const { energy, sounds, animateY, onEnter } = this.props;
    const { duration } = energy;

    sounds.fade.play();

    anime({
      targets: this.element,
      easing: 'easeOutCubic',
      keyframes: [
        { opacity: 1, duration: duration.enter / 3 },
        { opacity: 0, duration: duration.enter / 5 },
        { opacity: 1, duration: duration.enter / 2 }
      ],
      complete: () => onEnter && onEnter()
    });

    if (animateY) {
      anime({
        targets: this.element,
        easing: 'easeOutCubic',
        translateY: [-10, 0],
        duration: duration.enter
      });
    }
  }

  exit () {
    const { energy, sounds, onExit } = this.props;
    const { duration } = energy;

    sounds.fade.play();

    anime({
      targets: this.element,
      easing: 'easeOutCubic',
      keyframes: [
        { opacity: 0, duration: duration.exit / 3 },
        { opacity: 1, duration: duration.exit / 5 },
        { opacity: 0, duration: duration.exit / 2 }
      ],
      complete: () => onExit && onExit()
    });
  }

  render () {
    const {
      theme,
      classes,
      energy,
      audio,
      sounds,
      className,
      itemClassName,
      animateY,
      onEnter,
      onExit,
      onLinkStart,
      onLinkEnd,
      ...etc
    } = this.props;

    const A = elprops => (
      <Link
        className={cx(classes.item, itemClassName)}
        onLinkStart={onLinkStart}
        onLinkEnd={onLinkEnd}
        onMouseEnter={() => sounds.hover.play()}
        {...elprops}
      />
    );

    return (
      <div
        className={cx(classes.root, className)}
        ref={ref => (this.element = ref)}
        {...etc}
      >

        <A href='https://www.facebook.com/CybSecNITW' title='Facebook' target='facebook'>
          <span className='mdi mdi-facebook' />
        </A>
        
        <A href='https://www.instagram.com/nitw_cybsec' title='Instagram' target='instagram'>
          <span className='mdi mdi-instagram' />
        </A>
            <A href='https://twitter.com/CybsecNITW' title='Twitter' target='twitter'>
            <span className='mdi mdi-twitter' />
            </A>
            <A href='https://github.com/CybSec-NITW' title='Github' target='github'>
            <span className='mdi mdi-github-circle' />
            </A>
        <A href='https://www.youtube.com/CybSecNITW' title='YouTube' target='youtube'>
            <span className='mdi mdi-youtube' />
        </A>
            <A href='https://t.me/CybSecNITW' title='Telegram' target='telegram'>
            <span className='mdi mdi-telegram' />
            </A>
            <A href='https://invite.gg/cybsecnitw' title='Discord' target='discord'>
            <span className='mdi mdi-discord' />
            </A>
            <A href='https://cybsecnitw.blogspot.com/' title='Blog' target='blog'>
            <span className='mdi mdi-blogger' />
            </A>

      </div>
    );
  }
}

export { Component };
