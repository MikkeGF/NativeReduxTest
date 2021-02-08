import React from 'react'
import { Button } from 'react-native'
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export default function Counter() {
    return (
        <Container>
            <Button title='+' />
            <Button title='-' />
        </Container>
    )
}
