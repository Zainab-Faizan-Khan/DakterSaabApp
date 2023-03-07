import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import TokenDisplay from './TokenDisplay';

const TokenFetch = () => {
  const [userToken, setUserToken] = useState(0);
  const [currentToken, setCurrentToken] = useState(0);
  const [ProcessedToken, setProcessedToken] = useState(0);


  const fetchTokenData = () => {
    // Make an API call or use some other method to retrieve the token data.
    // Then update the state with the new values:
    setUserToken(10);
    setCurrentToken(7);
    setProcessedToken(0);
  };

  useEffect(() => {
    fetchTokenData();
  }, []);

  return (
    <View>
      <TokenDisplay userToken={userToken} currentToken={currentToken} ProcessedToken={currentToken-1}/>
    </View>
  );
};

export default TokenFetch;
