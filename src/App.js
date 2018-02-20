// @flow
import React, {Component} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  FlatList,
  Image,
} from 'react-native';

type Props = {};

type State = {
  colorValue: Object,
  scaleValue: Object,
  isActive: string,
};

export default class App extends Component<Props, State> {
  state = {
    colorValue: new Animated.Value(0),
    scaleValue: new Animated.Value(1),
    isActive: '',
  };

  _isActive = (button: string) => {
    this.setState({isActive: button});
  };

  _buttonScaleUp = () => {
    let {scaleValue} = this.state;
    Animated.spring(scaleValue, {toValue: 2, friction: 3, tension: 40}).start();
    console.log('pressed', this.state.isActive);
  };
  _buttonNotPressed = () => {
    let {scaleValue} = this.state;
    Animated.spring(scaleValue, {toValue: 1}).start();
    console.log('notpressed', this.state.isActive);
  };
  render() {
    let {scaleValue, isActive} = this.state;
    let scaleStyle = {
      transform: [{scale: scaleValue}],
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPressIn={() => {
            this._isActive('pause');
            this._buttonScaleUp();
          }}
          onPressOut={() => {
            isActive !== 'pause' ? this._buttonNotPressed() : null;
          }}
        >
          <Animated.View
            id="pause"
            style={
              isActive === 'pause' ? [styles.pause, scaleStyle] : styles.pause
            }
          >
            <View style={styles.rectangle} />
            <View style={styles.rectangle} />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          id="play"
          onPressIn={() => {
            this._isActive('play');
            this._buttonScaleUp();
          }}
          onPressOut={() => {
            isActive !== 'play' ? this._buttonNotPressed() : null;
          }}
        >
          <Animated.View
            style={
              isActive === 'play' ? [styles.play, scaleStyle] : styles.play
            }
          />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          id="stop"
          onPressIn={() => {
            this._isActive('stop');
            this._buttonScaleUp();
          }}
          onPressOut={() => {
            isActive !== 'stop' ? this._buttonNotPressed() : null;
          }}
        >
          <Animated.View
            style={
              isActive === 'stop' ? [styles.stop, scaleStyle] : styles.stop
            }
          />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: 'gray',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  stop: {
    width: 60,
    height: 60,
    backgroundColor: 'red',
  },
  pause: {
    flexDirection: 'row',
  },
  rectangle: {
    height: 60,
    width: 20,
    backgroundColor: 'red',
    margin: 5,
    marginTop: 0,
  },
  play: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 60,
    borderTopWidth: 30,
    borderBottomWidth: 30,
    borderLeftColor: 'red',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
  },
});
