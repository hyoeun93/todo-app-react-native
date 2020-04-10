import React from 'react';
import { Icon, Fab } from 'native-base';


// renders the add todo floating button
const AddTodoButton = ({ onPress }) => (
    <Fab
        direction="up"
        containerStyle={{}}
        style={{backgroundColor: '#5067FF'}}
        position="bottomRight"
        onPress={onPress}
    >
        <Icon name="add" />
    </Fab>
);


export default AddTodoButton;