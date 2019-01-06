import React, { PureComponent } from 'react';
import { View, FlatList, Text } from 'react-native';

// Constants

// Components
import { UserListItem } from '../../basicUIElements';

// Styles
import styles from './leaderboardStyles';

class LeaderboardView extends PureComponent {
  /* Props
   * ------------------------------------------------
   *   @prop { type }    name                - Description....
   */

  // Component Functions
  _renderItem = (item, index) => {
    const { handleOnUserPress } = this.props;

    return (
      <UserListItem
        handleOnUserPress={handleOnUserPress}
        avatar={`https://steemitimages.com/u/${item._id}/avatar/small`}
        index={index}
        username={item._id}
        description={item.created}
        isHasRightItem
        isBlackRightColor
        rightText={item.count}
        itemIndex={index + 1}
      />
    );
  };

  render() {
    const { users } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Daily Top User</Text>
        <FlatList
          data={users}
          keyExtractor={item => item.voter}
          removeClippedSubviews={false}
          renderItem={({ item, index }) => this._renderItem(item, index)}
        />
      </View>
    );
  }
}

export default LeaderboardView;
