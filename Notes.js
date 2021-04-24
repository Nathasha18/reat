import * as React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Image, TextInput, ScrollView, TouchableWithoutFeedback, multiline, Alert, AppRegistry, TouchableOpacity, ActivityIndicator, Platform,  Keyboard} from 'react-native';
import bg from './assets/bg.jpeg';
import logo from './assets/logo.jpeg';

class NotesScreen extends React.Component {
    constructor() {
        super();

        this.state = { description: '', type: '', orderID: '', added_By: '', loading: false, disabled: false }
    }

    saveData = () => {
        this.setState({ loading: true, disabled: true }, () => {
            fetch('http://192.168.43.233/note.php',
                {
                    method: 'POST',
                    headers:
                    {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(
                        {
                            description: this.state.description,

                            type: this.state.type,

                            orderID: this.state.orderID,

                            added_By: this.state.added_By
                        })

                }).then((response) => response.json()).then((responseJson) => {
                    alert(responseJson);
                    this.setState({ loading: false, disabled: false });
                }).catch((error) => {
                    console.error(error);
                    this.setState({ loading: false, disabled: false });
                });
        });
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
                console.log('dismissed');
              }}>
            <View style={styles.MainContainer}>
                  <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed');
    }}>
                <View style={{ marginTop: 20, padding: 3 }} >

                    <TextInput underlineColorAndroid="transparent" placeholder="Description" style={styles.inputs} onChangeText={(text) => this.setState({ description: text })} />
                </View>
                </TouchableWithoutFeedback>
                
            
                <View style={{ marginTop: 20, padding: 3 }} >
                    <TextInput underlineColorAndroid="transparent" placeholder="Type" style={styles.inputs} onChangeText={(text) => this.setState({ type: text })} />
                </View>
            
                <View style={{ marginTop: 20, padding: 3 }} >
                    <TextInput underlineColorAndroid="transparent" placeholder="OrderId" style={styles.inputs} onChangeText={(text) => this.setState({ orderID: text })} />
                </View>
                <View style={{ marginTop: 20, padding: 3 }} >

                    <TextInput underlineColorAndroid="transparent" placeholder="Added By" style={styles.inputs} onChangeText={(text) => this.setState({ added_By: text })} />
                </View>
                
                <View style={styles.fixToText}>
                    <Button title="Submit"
                        color="#233554"
                        onPress={this.saveData} />




                    <Button
                        color='#233554'
                        title="View"
                        onPress={() =>
                            this.props.navigation.navigate('ViewNotes')
                        }
                    />
                </View>

                {
                    (this.state.loading)
                        ?
                        (<ActivityIndicator size="large" />)
                        :
                        null
                }

            </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#eee',
            paddingHorizontal: 25,
            paddingTop: (Platform.OS == 'ios') ? 20 : 0
        },

        MainContainer: {

            justifyContent: 'center',
            flex: 1,
            margin: 10
        },


        textInput:
        {
            height: 40,
            borderWidth: 1,
            borderColor: 'grey',
            marginVertical: 5,
            alignSelf: 'stretch',
            padding: 8,
            fontSize: 16
        },

        Btn:
        {
            backgroundColor: '#233554',
            alignSelf: 'stretch',
            padding: 10,
            marginTop: 10,
            marginBottom: 25
        },

        inputs: {

            marginTop: 5,
            paddingVertical: 4,
            borderWidth: 2,
            borderColor: "#233554",
            borderRadius: 6,
            // backgroundColor: "#61dafb",
            color: "#233554",
            paddingHorizontal: 4,

            fontSize: 15,
            fontWeight: "bold",
            marginBottom: 10,
        },

        btnText:
        {
            textAlign: 'center',
            color: 'white',
            fontSize: 16
        },
        fixToText: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding:3,
           
            
          },
    });

AppRegistry.registerComponent('NotesScreen', () => NotesScreen);
export default NotesScreen;
