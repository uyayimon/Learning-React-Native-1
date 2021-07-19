import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default class Sample extends React.Component {

  state = {
    text1: "placeholder"
  }

  render() {
    return (
      <View style={styles.sample1}>
        <Text>入力してください</Text>
        <TextInput
          value={this.state.text1}
          onChangeText = {(t)=>this.setState({text1:t})}
        />
        <Button
          title="Entry"
          onPress={this.entry}></Button>
      </View>
    );
  }

  entry = () => {
    alert(this.state.text1);
  }
}

const styles = StyleSheet.create({
  sample1: {
    flex: 1,
    paddingVertical: 80,
    alignItems: "center",
  },
});
