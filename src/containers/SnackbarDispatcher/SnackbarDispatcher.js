import React, { Component } from 'react';
import { View } from 'react-native';

import Snackbar from './../../components/Snackbar/Snackbar';

import styles from './SnackbarDispatcher.styles';

export default class SnackbarDispatcher extends Component {

  state = {
    snacks: [],
  }

  nextId = 0;

  static instance = null;

  static message(message, type, position, duration) {
    // Send message
    SnackbarDispatcher.instance.dispatchMessage(message, type, position, duration);
  }

  componentDidMount() {
    // Singleton pattern
    if (!SnackbarDispatcher.instance) {
      // Add this mounted Component as reference for static calls
      SnackbarDispatcher.instance = this;
    }
  }

  handleToastDisplayed = item => {
    const { snacks } = this.state;

    // Exit if there are no snackbars or is not the last one created
    if (item.uid < this.nextId - 1) return;

    // Get displayed item properties
    const { message, type, position, duration, uid}  = item;

    // Create a new copy without an interrupt signal
    const snackbar = {message, type, position, duration, uid};

    const interruptedSnacks = snacks.slice(0, -1).map(i => {
      const { message, type, position, duration, uid} = i;

      // Create a new copy but with an interrupt signal to stop animations
      return {message, type, position, duration, uid, interrupt: true};
    });

    // Create new array
    const newSnacks = [...interruptedSnacks, snackbar];

    // Update snackbars array
    this.setState({ snacks: newSnacks });
  };

  handleToastEnded = item => {
    const { snacks } = this.state;

    // Remove this snackbar since it has ended
    const newSnacks = snacks.filter(i => item.uid !== i.uid);

    // Update snackbars array
    this.setState({ snacks: newSnacks });
  };

  dispatchMessage = (message, type, position, duration) => {
    const { snacks } = this.state;

    // Get next unique ID and update static counter of uinque IDs
    const uid = this.nextId++;

    // Encapsulate snackbar properties
    const snackbar = {message, type, position, duration, uid};

    // Create a new array with snackbar properties
    const newSnacks = [...snacks, snackbar];

    // Update snackbars array and next unique id
    this.setState({ snacks: newSnacks });
  };

  renderSnackbars = () => {
    const { snacks } = this.state;

    // Map array of snackbars
    return snacks.map((item) => {
      const { message, type, position, duration, uid, interrupt } = item;

      // Return mapped item properties as a new snackbar object
      return (
        <Snackbar key={uid}
          position={position}
          duration={duration}
          type={type}
          interrupt={interrupt}
          onShow={() => this.handleToastDisplayed(item)}
          onHide={() => this.handleToastEnded(item)} >
          {message}
        </Snackbar>
      );
    });

  };

  render() {
    const { children } = this.props;

    // Render dispatcher's children and array of snackbars
    return (
      <View style={styles.container} >
        {children}
        {this.renderSnackbars()}
      </View>
    );
  }

}