// ButtonComponent.js
import React from 'react';
import { Button, Text } from 'react-native';
import { Link } from 'expo-router';

const ButtonComponent = ({ dataToSend, label }:any) => {
  return (
    <Link href={`/details/${dataToSend}`}> // Pass data in the dynamic route
      <Button title={label} />
    </Link>
  );
};

export default ButtonComponent;
