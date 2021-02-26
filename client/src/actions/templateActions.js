//this is an action creator and it returns an object
export const increment = (n) => {
  return {
    type: "INCREMENT",
    data: n,
  };
};

//This is not a named export. When we import into our component we have to import like this..
/*

import { increment } from './path'

*/

//Different from named export..
/*

export default increment

import increment from './path'

*/
