import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$primaryBackgroundColor',
  },
  itemWrapper: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    borderRadius: 8,
    backgroundColor: '$primaryBackgroundColor',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemWrapperGray: {
    backgroundColor: '$primaryLightBackground',
  },
  username: {
    marginLeft: 10,
    color: '$primaryBlack',
  },
});
