import React from 'react';
import { Header, Body, Title } from 'native-base';

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