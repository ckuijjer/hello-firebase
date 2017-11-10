import React, { Component } from 'react';

const TextField = ({ title, value, onChange }) => {
  const styles = {
    container: {
      fontSize: 20,
      color: '#666',
      display: 'flex',
      alignItems: 'center',
      marginBottom: 16,
    },
    title: {
      flex: 1,
      textAlign: 'right',
      marginRight: 8,
    },
    input: {
      fontSize: 20,
      flex: 1,
      padding: 8,
    },
  };

  return (
    <label style={styles.container}>
      <span style={styles.title}>{title}</span>
      <input style={styles.input} value={value} />
    </label>
  );
};

export default TextField;
