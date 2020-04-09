import React, { Component } from 'react'
import { TextiInput, TouchableOpacity} from 'react-native'
import { View, Body, CheckBox } from 'native-base';
import { CheckBox } from 'native-base';

export default class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title,
            done
        }
    }
    render() {
        const {title, done} = this.state;
        const { onBlur } = this.props;
        return (
            <View style={styles.container}>
                <CheckBox checked={completed}/>
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
        paddingBotton: 5,
        paddingTop: 5,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
  });