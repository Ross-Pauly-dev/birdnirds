import React from 'react';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator
} from "@aws-amplify/ui-react";
import Card from './Components/Card';
import {useTheme} from 'styled-components'
import CardContainer from './Components/CardContainer';

function App() {
  const theme = useTheme()
  return (
    <CardContainer theme={theme}>
      <Card theme={theme} title={'Test'}>
        Hello there friend
      </Card>

      <Card theme={theme} title={'Test2'}>
        Hello there enemy
      </Card>

      <Card theme={theme} title={'Test2'}>
        Hello there enemy
      </Card>
    </CardContainer>
  );
}

export default withAuthenticator(App);
