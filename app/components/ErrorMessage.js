import React from 'react';
import { StyleSheet } from 'react-native';
import AppText from "./AppText";

function ErrorMessages( {error, visible} ) {
    if (!visible || !error) return null;
    return (
        <div>
            <AppText style={styles.error} > {error} </AppText>
            
        </div>
    );
}

const styles = StyleSheet.create({
    error: {color: "red"}
})

export default ErrorMessages;