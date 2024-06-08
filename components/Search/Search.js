import React, {useRef, useState} from 'react';
import {Pressable, Text, TextInput} from 'react-native';
import style from './Search.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {scaleFontSize} from '../../assets/styles/scaling';
import PropTypes from 'prop-types';

const Search = ({onSearch}) => {
  const textInputRef = useRef();
  const [searchValue, setSearchValue] = useState();

  const handleOnFocus = () => textInputRef.current.focus();

  const handleOnChange = value => {
    setSearchValue(value);
    onSearch(value);
  };
  return (
    <Pressable style={style.searchContainer} onPress={handleOnFocus}>
      <FontAwesomeIcon
        icon={faSearch}
        color="#25C0FF"
        size={scaleFontSize(22)}
      />
      <TextInput
        ref={textInputRef}
        value={searchValue}
        style={style.searchInput}
        onChangeText={value => handleOnChange(value)}
      />
    </Pressable>
  );
};

Search.defaultPropTypes = {
  onSearch: () => {},
};

Search.propTypes = {
  onSearch: PropTypes.func,
};

export default Search;
