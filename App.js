import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class Sample extends React.Component {

  state = {
    name: "hoge",
    age: 33
  }

  changeName = () => {
    this.setState({
      name: "foo"
    });
  }

  render() {
    return (
      <View style={styles.sample1}>
        <Text>こんにちは。{this.state.name}さん。</Text>
        <Button
          title="change Name"
          onPress={this.changeName}></Button>
        <Hello to="Bob"></Hello>
        <Hello to="Tom"></Hello>
      </View>
    );
  }
}

  const Hello = (props) => {
    return (
      <Text>Hello, {props.to}!</Text>
    );
  }

const styles = StyleSheet.create({
  sample1: {
    flex: 1,
    paddingVertical: 80,
    alignItems:"center",
  },
});
