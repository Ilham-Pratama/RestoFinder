import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Linking, Pressable, StyleSheet, View } from 'react-native';
import Header from 'components/Header';
import ThemedText from 'components/ThemedText';
import DiamondTurnRightIcon from 'assets/svgs/DiamondTurnRightIcon';
import PhoneIcon from 'assets/svgs/PhoneIcon';
import ArrowUpRightFromSquareIcon from 'assets/svgs/ArrowUpRightFromSquareIcon';
import { Business } from 'types/Business';
import sharedStyles, { ON_PRESS_BACKGROUND_COLOR } from 'shared/styles';

interface BusinessInfoProps extends Business {
  onVisitYelpSite?: (value: string) => void;
}

const BusinessInfo = ({ onVisitYelpSite, ...data }: BusinessInfoProps) => {
  const theme = useTheme();

  return (
    <View
      style={[
        { backgroundColor: theme.colors.card },
        sharedStyles.paddingVertical4,
        sharedStyles.marginTop2
      ]}>
      <Header>Business Info</Header>
      <View
        style={[
          { borderBottomColor: theme.dark ? '#3a3a3a' : '#e0e0e0' },
          styles.businessInfo,
          sharedStyles.paddingVertical4,
          sharedStyles.marginHorizontal3
        ]}>
        <View>
          {data.location.address1 ? (
            <ThemedText accessibilityRole="text">
              {data.location.address1}
            </ThemedText>
          ) : null}
          {data.location.address2 ? (
            <ThemedText accessibilityRole="text">
              {data.location.address2}
            </ThemedText>
          ) : null}
          {data.location.address3 ? (
            <ThemedText accessibilityRole="text">
              {data.location.address3}
            </ThemedText>
          ) : null}
          <ThemedText accessibilityRole="text">
            {data.location.city}, {data.location.state} {data.location.zip_code}
          </ThemedText>
        </View>
        <DiamondTurnRightIcon width={20} height={20} fill={theme.colors.text} />
      </View>
      <View
        style={[
          { borderBottomColor: theme.dark ? '#3a3a3a' : '#e0e0e0' },
          styles.businessInfo,
          sharedStyles.paddingVertical4,
          sharedStyles.marginHorizontal3
        ]}>
        <ThemedText accessibilityRole="text">{data.display_phone}</ThemedText>
        <PhoneIcon width={20} height={20} fill={theme.colors.text} />
      </View>
      <Pressable
        accessibilityRole="button"
        style={[
          styles.businessInfo,
          sharedStyles.paddingVertical4,
          sharedStyles.paddingHorizontal3,
          { borderBottomWidth: 0 }
        ]}
        android_ripple={{
          color: ON_PRESS_BACKGROUND_COLOR
        }}
        onPress={() =>
          onVisitYelpSite
            ? onVisitYelpSite(data.url)
            : Linking.openURL(data.url)
        }>
        <ThemedText>Visit Yelp Site</ThemedText>
        <ArrowUpRightFromSquareIcon
          width={20}
          height={20}
          fill={theme.colors.text}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  businessInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1
  }
});

export default BusinessInfo;
