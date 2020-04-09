import React from 'react';
import { Platform } from 'react-native';
import { Header, Body, Title } from 'native-base';

// static app header
const AppHeader = () => (
    <Header style={{ backgroundColor: '#5067FF', height: 75 }}>
        <Body
            style={{
                flex: 1,
                flexDirection: 'row',
            }}
        >
            <Title
                style={{
                    color: 'white',
                    paddingLeft: 7,
                    paddingTop: 20,
                }}
            >
                Reactive Todos
            </Title>
        </Body>
    </Header>
);

export default AppHeader;