import React, { useContext } from 'react';
import SearchInput from './SearchInput';
import { DispatchContext, ImageContext } from '../containers/Queue';

function ImageSearchInput() {
  const dispatch = useContext(DispatchContext);
  const { lastSearch } = useContext(ImageContext);


  return (
    <SearchInput
      placeholder={"Search..."}
      disabled={lastSearch.fetching}
      searching={lastSearch.fetching}
      defaultValue={lastSearch.query}
      borderColor="lightgray"
      onSubmit={value => dispatch({
        type: 'INIT_IMAGE_SEARCH', 
        dispatch, 
        query: value,
        userProvided: true,
      })}
    />
  )


}

export default ImageSearchInput;