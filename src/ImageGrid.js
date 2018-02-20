//@flow

import React from 'react';
import {Image, View, Text, TouchableHighlight} from 'react-native';
import styles from './style/Styles';

type Props = {
  id: string,
  description: string,
  uri: string,
  onClick: (string) => void,
  selected: boolean,
};

function ImageGrid(props: Props) {
  let {id, description, uri, onClick, selected} = props;
  let style = selected ? styles.favImage : null;
  return (
    <View style={styles.imageRow} key={id}>
      <TouchableHighlight onPress={() => onClick(id)}>
        <Image key={id} style={styles.images} source={{uri: uri}} />
      </TouchableHighlight>
      <View style={style} />
      <Text>{description}</Text>
    </View>
  );
}

export default ImageGrid;
