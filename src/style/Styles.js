//@flow
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  favImage: {
    width: 10,
    height: 10,
    borderRadius: 5,
    position: 'absolute',
    bottom: 50,
    right: 8,
    backgroundColor: 'blue',
  },
  imageRow: {
    width: 200,
    height: 260,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  images: {
    width: 200,
    height: 200,
    margin: 5,
    backgroundColor: 'blue',
    paddingVertical: 10,
  },
  button: {
    borderWidth: 1,
    height: 20,
    width: 40,
    borderColor: 'green',
  },
  searchBar: {
    height: 30,
    width: 90,
    borderWidth: 1,
    borderColor: '#333',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    flex: 1,
    backgroundColor: '#fff',
  },
  introText: {
    color: 'red',
  },
});

export default styles;
