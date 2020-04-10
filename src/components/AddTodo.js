import React, { Component } from 'react'
import { TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import { View, Body, CheckBox } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            done: null
        }
    }

    onSubmit = () => {
        if(this.state.title.length > 0) this.props.onAdd(this.state.title);
        return null;
    }

    setStateUtil = (property, value = undefined) => {
        this.setState({
            [property]: value
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Body style={styles.bodystyle}>
                    <TextInput 
                        style={{ width: '90%'}}
                        placeholder="What needs to be done?"
                        autoFocus 
                        underLineColorAndroid="transparent"
                        underlineColor="transparent"
                        blurOnSubmit
                        onSubmitEditing={this.onSubmit}
                        onChangeText={changedTitle => this.setStateUtil('title', changedTitle)}
                        value={this.state.title}
                        onBlur={this.props.onBlur}
                    />
                </Body>
                <TouchableOpacity
                    onPress={() => this.props.onCancelDelete}
                    style={{ paddingLeft: 25, paddingRight: 15 }}
                >                  
                    <Ionicons
                        name="ios-trash"
                        color={`${this.state.title.length > 0 ? 'black' : 'grey'}`}
                        size={23}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        paddingTop: 5,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodystyle: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 25,
    }
  });