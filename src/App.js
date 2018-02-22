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

  // _isActive = (button: string) => {
  //   this.setState({isActive: button});
  // };

  _buttonScaleUp = (button: string) => {
    let {scaleValue, isActive} = this.state;
    console.log('!!!!!', button);
    if (isActive !== button) {
      console.log('pressed', button);
      this.setState({isActive: button}, () => {
        Animated.spring(scaleValue, {
          toValue: 2,
          friction: 30,
          stretch: 100,
          tension: 100,
        }).start(() => {
          this.setState({scaleValue: new Animated.Value(1)});
        });
      });
    } else {
      console.log('reset is active');
      this.setState({isActive: ''});
    }
  };

  render() {
    let {colorValue, scaleValue, isActive} = this.state;

    let scaleStyle = {
      transform: [{scale: scaleValue}],
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            this._buttonScaleUp('pause');
          }}
        >
          <Animated.View
            id="pause"
            style={isActive === 'pause' ? scaleStyle : null}
          >
            <View style={styles.pause}>
              <View style={styles.rectangle} />
              <View style={styles.rectangle} />
            </View>
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          id="play"
          onPress={() => {
            this._buttonScaleUp('play');
          }}
        >
          <Animated.View style={isActive === 'play' ? scaleStyle : null}>
            <Animated.View
              style={
                isActive === 'play'
                  ? [styles.play, {borderLeftColor: 'blue'}]
                  : styles.play
              }
            />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          id="stop"
          onPress={() => {
            this._buttonScaleUp('stop');
          }}
        >
          <Animated.View style={isActive === 'stop' ? scaleStyle : null}>
            <View style={styles.stop} />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
