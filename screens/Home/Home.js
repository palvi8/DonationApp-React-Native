import React from 'react';
import {SafeAreaView, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyles';
import Badge from '../../components/Badge/Badge';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Tab from '../../components/Tab/Tab';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMugSaucer} from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import Search from '../../components/Search/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import {verticalScale} from '../../assets/styles/scaling';

const Home = () => (
  <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
    <Header title="new header" type={1} />
    <Button title="Donate" onPress={() => console.log('pressed from home')} />
    <Button title="Donate" isDisbaled />
    <Tab title="highlight" />
    <Tab title="highlight" inActive />
    <Badge title="Environment" />
    <FontAwesomeIcon icon={faMugSaucer} />
    <Search onSearch={value => console.log('value==', value)} />
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: verticalScale(24),
      }}>
      <SingleDonationItem
        uri={
          '/Users/palvidhawan/Documents/ReactNative/DonationApp/assets/images/stickers-cactus-cartoon-illustration.jpg'
        }
        donationTitle="donation"
        price={44}
        badgeTitle="Environment"
      />
      <SingleDonationItem
        uri={
          '/Users/palvidhawan/Documents/ReactNative/DonationApp/assets/images/stickers-cactus-cartoon-illustration.jpg'
        }
        donationTitle="donation"
        price={44}
        badgeTitle="Environment"
      />
    </View>
  </SafeAreaView>
);

export default Home;
