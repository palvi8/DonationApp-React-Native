import React from 'react';
import {Image, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';
import style from './SingleDonationItem.style';

const SingleDonationItem = ({uri, badgeTitle, donationTitle, price}) => {
  return (
    <View>
      <View>
        <View style={style.badge}>
          <Badge title={badgeTitle} style={style.adgeTitle} />
        </View>
        <Image resizeMode="contain" source={{uri: uri}} style={style.image} />
      </View>
      <View style={style.donationInformation}>
        <View style={style.price}>
          <Header title={donationTitle} color="#0A043C" type={3} />
        </View>
        <Header title={'$' + price.toFixed(2)} color="#156CF7" type={3} />
      </View>
    </View>
  );
};

SingleDonationItem.propTypes = {
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default SingleDonationItem;
