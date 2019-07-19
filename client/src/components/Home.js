import React, { useState, useEffect } from 'react';
import { getList } from '../utilities/services';
import Loader from 'react-loader-spinner';

import DisplayCard from './DisplayCard';

const Home = props => {
  const [ theList, setTheList ] = useState(null);

  useEffect(() => {
    getList().then( res => setTheList(res) );
  }, []);

  console.log(theList);

  if(!theList) {
    return <Loader type="Ball-Triangle" color="#000000" height="200" width="200" />
  }

  return(
    <main>
      {
        theList.map( (item, i) => {
          return <DisplayCard {...props} itemInfo={item} key={'card'+i.toString().padStart(2,'0')} />
        })
      }
    </main>
  )
}

export default Home;