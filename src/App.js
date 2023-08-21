import { FlatList, StyleSheet, Text, View } from "react-native";
import music_data from "./music-data.json";
import SongCard from "./companents/SongCard/SongCard";
import SearchBar from "./companents/SearchBar/SearchBar";
import React, { useState } from "react";

export default function App() {
  const [list, setlist] = useState(music_data);

  const renderSong = ({ item }) => <SongCard song={item} />;
  const renderSeperator = () => <View style={styles.seperator} />;
  const handleSearch = (text) => {
    const filteredList = music_data.filter((song) => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.startsWith(searchedText);
    });
    setlist(filteredList);
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
  },
  seperator: {
    borderWidth: 1,
    borderColor: "#eceff1",
  },
});
