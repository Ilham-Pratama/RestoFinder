import { StyleSheet } from 'react-native';

export const ON_PRESS_BACKGROUND_COLOR = 'rgba(160, 160, 160, 0.2)';

const sharedStyles = StyleSheet.create({
  elevation: {
    shadowColor: 'black',
    shadowOffset: {
      height: 5,
      width: 5
    },
    elevation: 3,
    shadowOpacity: 0.1
  },

  flex1: {
    flex: 1
  },

  flexDirectionRow: {
    flexDirection: 'row'
  },

  alignItemsCenter: {
    alignItems: 'center'
  },

  justifyContentCenter: {
    justifyContent: 'center'
  },
  justifyContentSpaceBetween: {
    justifyContent: 'space-between'
  },

  padding1: {
    padding: 5
  },
  padding2: {
    padding: 10
  },
  padding3: {
    padding: 15
  },
  padding4: {
    padding: 20
  },

  paddingHorizontal1: {
    paddingHorizontal: 5
  },
  paddingHorizontal2: {
    paddingHorizontal: 10
  },
  paddingHorizontal3: {
    paddingHorizontal: 15
  },
  paddingHorizontal4: {
    paddingHorizontal: 20
  },

  paddingVertical1: {
    paddingVertical: 5
  },
  paddingVertical2: {
    paddingVertical: 10
  },
  paddingVertical3: {
    paddingVertical: 15
  },
  paddingVertical4: {
    paddingVertical: 20
  },

  marginTop1: {
    marginTop: 5
  },
  marginTop2: {
    marginTop: 10
  },
  marginTop3: {
    marginTop: 15
  },
  marginTop4: {
    marginTop: 20
  },

  marginBottom1: {
    marginBottom: 5
  },
  marginBottom2: {
    marginBottom: 10
  },
  marginBottom3: {
    marginBottom: 15
  },
  marginBottom4: {
    marginBottom: 20
  },

  marginRight1: {
    marginRight: 5
  },
  marginRight2: {
    marginRight: 10
  },
  marginRight3: {
    marginRight: 15
  },
  marginRight4: {
    marginRight: 20
  },

  marginHorizontal1: {
    marginHorizontal: 5
  },
  marginHorizontal2: {
    marginHorizontal: 10
  },
  marginHorizontal3: {
    marginHorizontal: 15
  },
  marginHorizontal4: {
    marginHorizontal: 20
  },

  marginVertical1: {
    marginVertical: 5
  },
  marginVertical2: {
    marginVertical: 10
  },
  marginVertical3: {
    marginVertical: 15
  },
  marginVertical4: {
    marginVertical: 20
  },

  textBold: {
    fontWeight: 'bold'
  },

  textSemiBold: {
    fontWeight: '700'
  }
});

export default sharedStyles;
