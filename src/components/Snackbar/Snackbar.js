import React, { Component } from 'react';
import { View, Animated, Text, Easing } from 'react-native';

import styles from './Snackbar.styles';

export default class Snackbar extends Component {

  state = {
    animatedFrom: new Animated.Value(0),
  }

  // To flag if this snackbar has started animating
  active = false;

  // Start position initialized to zero (updated at container's onLayout)
  start = 0;

  // Do Snackbar animations with delay and callbacks
  display = () => {
    const { duration, position, onWillShow, onShow, onWillHide, onHide } = this.props;

    // TODO: may be defined in app constants
    // Predefined values specific for this component
    const durations = {
      short: 3000,
      mid: 5000,
      long: 7000,
    };

    // Do showing animation
    Animated.timing(this.state.animatedFrom, {
      toValue: 0,
      duration: 500,
      easing: Easing.out(Easing.exp),
    }).start((showingAnimation) => {

      // if animation finished
      if (showingAnimation.finished) {

        // Callback onShow if given
        onShow && onShow();

        // Perform an animation delay
        Animated.delay(duration ? durations[duration] : durations.mid).start((delaying) => {

          // if animation finished
          if (delaying.finished) {

            // Check prop signal to know if animation should be interrupted
            const { interrupt } = this.props;

            // If signal to interrupt animation is on
            if( interrupt === true ) {
              // Callback onHide
              onHide && onHide();

              // Do early exit
              return;
            }

            // Do hiding animation
            Animated.timing(this.state.animatedFrom, {
              toValue: this.start,
              duration: 500,
              easing: Easing.out(Easing.exp),
            }).start((hidingAnimation) => {

              // if animation finished
              if (hidingAnimation.finished) {

                // Callback onHie if given
                onHide && onHide();
              }
            });
          }
        });
      }
    });
  }

  handleLayout = event => {
    // If its not currently animating
    if (!this.active) {
      const { height } = event.nativeEvent.layout;
      const { position } = this.props;
      const offset = height + 20;
      const start = (position === 'bottom' ? offset : -offset);

      // Update state with Animated value for snackbar start position
      this.setState({ animatedFrom: new Animated.Value(start) }, () => {

        // Update start position for reuse
        this.start = start;
        // Flag as animating
        this.active = true;

        // Display snackbar
        this.display();
      });
    }
  };

  render() {
    const { children, position, type } = this.props;
    const { animatedFrom } = this.state;

    const animationStyle = {
      transform: [{ translateY: animatedFrom }],
    };

    return (
      <Animated.View
        onLayout={this.handleLayout}
        style={
          type
          ? [ styles.container, styles[position], animationStyle, styles[type]]
          : [ styles.container, styles[position], animationStyle]
        } >
        <Text style={ type ? [styles.text, styles[`${type}Text`]] : styles.text } >
          {children}
        </Text>
      </Animated.View>
    );
  }
}