import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { View, CheckBox, Body } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default class TodoItem extends Component {

    todoItemToggle = (todo) => {
        this.props.onUpdate(!todo.done)
    }

    render() {
        const{todo, onDelete} = this.props;

        return (
            <View style={styles.row}>
                <View style={styles.subrow}>
                    <TouchableOpacity
                        style={styles.list}
                    >
                    <CheckBox
                        checked={todo.done}
                        onPress={() => this.todoItemToggle(todo)}
                    />
                    <Body
                        style={styles.title}
                    >
                    <Text
                        style={{
                            color: todo.done ? 'grey' : 'black',
                            textDecorationLine: todo.done ? 'line-through' : 'none',
                        }}
                    >
                        {todo.title}
                    </Text>
                    </Body>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onDelete(todo)}
                        style={{ paddingLeft: 25, paddingRight: 15 }}
                    >
                        <Ionicons 
                            name="ios-trash"
                            size={23}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        top: 15,
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    list: {
        flex: 1,
        width: '100%',
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft:25
    },
    subrow: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        paddingVertical: 5
    }
})