import React, {useState, useEffect} from 'react';
import Name from './Name';

function App() {

  // const [state, setState] = useState(null);
  const [names, setNames] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  const url = "https://thronesapi.com/api/v2/Characters";

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      // console.log(typeof data);
      let arr1 = [];
      let arr2 = [];
      data.forEach(element => {
        arr1.push(element.fullName);
        arr2.push(element.imageUrl);
      });
      console.log(arr1);
      setNames(arr1);
      console.log(arr2);
      setImgUrl(arr2);
    });
  }, []);

  
  return (
    <div>
      <Name namesList={names} imgList={imgUrl} />
    </div>
  );
}


export default App;
