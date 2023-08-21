import React from "react";
import styles from './SearchBar.style';
import { TextInput, View } from "react-native";

const SearchBar = (props) => {

  return (
    <View style={styles.container}>
      <TextInput placeholder="Ara..."  onChangeText={props.onSearch}/>
    </View>
  );
};

export default SearchBar;
