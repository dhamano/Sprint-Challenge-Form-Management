//////////////////////////////////////
//                                  //
//  See if Local Storage has Token  //
//                                  //
//////////////////////////////////////

export const hasLocalVar = ( key ) => {
  let storageExists = localStorage.getItem( key );
  return storageExists && (storageExists !== 'undefined') ? true : false
};


/////////////////////////
//                     //
//  Set Local Storage  //
//                     //
/////////////////////////

export const setLocalStorage = ( key, value ) => {
  localStorage.setItem( key, value );
};


/////////////////////////
//                     //
//  Get Local Storage  //
//                     //
/////////////////////////

export const getLocalStorage = ( key ) => {
  return localStorage.getItem( key );
};

//////////////////////////////////
//                              //
//  Clear Local Storage of key  //
//                              //
//////////////////////////////////

export const clearLocalStorageOf = ( key ) => {
  localStorage.removeItem(key);
};

///////////////////////////////
//                           //
//  Clear All Local Storage  //
//                           //
///////////////////////////////

export const clearAllLocalStorage = () => {
  localStorage.clear();
};