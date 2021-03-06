// @author Dmitry Patsura <talk@dmtry.me> https://github.com/ovr
// @flow

import React, { PureComponent } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { UIText } from 'components';

type Props = {
    title: string,
    active: boolean,
    onPress: () => any,
};

export default class FilterTabType extends PureComponent<Props> {
    render() {
        const { active, title, onPress } = this.props;

        if (active) {
            return (
                <View style={[styles.accountIssuesType, styles.accountIssuesTypeActive]}>
                    <UIText style={[styles.accountIssuesTypeText, styles.accountIssuesTypeTextActive]}>
                        {title.replace(/\s\s/g, '\n')}
                    </UIText>
                </View>
            );
        }

        return (
            <TouchableOpacity
                style={styles.accountIssuesType}
                onPress={onPress}
            >
                <UIText style={styles.accountIssuesTypeText}>
                    {title.replace(/\s\s/g, '\n')}
                </UIText>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    accountIssuesTypeActive: {
        backgroundColor: '#0366d6',
        borderColor: '#0366d6',
    },
    accountIssuesType: {
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: '#e1e4e8',
        flex: 1,
        justifyContent: 'center',
    },
    accountIssuesTypeTextActive: {
        color: '#fff',
    },
    accountIssuesTypeText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#586069',
        textAlign: 'center',
    },
});
