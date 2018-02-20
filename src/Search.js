//@flow
import React, {Component} from 'react';
import {View, TextInput, TouchableWithoutFeedback, Text} from 'react-native';
import styles from './style/Styles';

type Props = {
  onSearch: (string) => void,
  onSubmit: () => Promise<*>,
};

type State = {
  searchValue: string,
};
class Search extends Component<Props, State> {
  state = {
    searchValue: '',
  };

  onChange = (text: string) => {
    this.setState({searchValue: text});
    this.props.onSearch(text);
  };

  render() {
    let {onSubmit} = this.props;
    return (
      <View>
        <TextInput
          style={styles.searchBar}
          onChangeText={this.onChange}
          value={this.state.searchValue}
        />

        <TouchableWithoutFeedback onPress={onSubmit}>
          <View style={styles.button}>
            <Text>test</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default Search;
