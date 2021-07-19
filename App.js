import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Card, Button, Input } from "react-native-elements";

export default class Sample extends React.Component {

  state = {
    text1: "placeholder"
  }

  render() {
    return (
      <View style={styles.sample1}>
        <Card>
          入力してください
          <Input
            value={this.state.text1}
            label="text1"
            errorMessage="error"
            onChangeText={(t) => this.setState({ text1: t })}
          />
          <Button
            style={styles.btnStyle}
            title="Entry"
            onPress={this.entry}
          ></Button>
        </Card>
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
  btnStyle: {
    borderRadius: 20,
    marginTop: 30,
  }
});
