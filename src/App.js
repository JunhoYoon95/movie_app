import React from "react";



// object의 list를 가졍는거 볼거야. 오직 javascript의 object들만.
// function component, food component를 동적으로 rendering 할 것이다.
const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:
    "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id:2,
    name: "Samgyeopsal",
    image:
    "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    id:3,
    name: "Bibimbap",
    image:
    "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    id:4,
    name: "Doncasu",
    image:
    "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    id:5,
    name: "Kimbap",
    image:
    "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];
// react의 모든 요소들은 다르게 보일 필요가 있어. 다 unique 해야 된다.

// application 에서 food component로 정보를 보내고 그런 다음에 food component에서 그 정보를 어떻게 사용하지에 대해서 한다
function Food({name, picture}) {
  return(
    <div>
      <h2> Junmannn Like {name}</h2>
      <img src={picture} alt = {name} />
    </div>
  );
}

// component 안에 넣게 되는 것, 그걸 props라고 한다. 그 props가 Food의 첫 argument로 들어가는거지
function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name = {dish.name} picture={dish.image} />
        ))}
    </div>
  );
}
/* 
  map은 array 의 각 item 에서 function을 실행하는 array를 가지는 javascript finction이며 
  그 function의 result를 갖는 array를 나에게 준다
*/
// 누군가가 food component로 정보를 보내려고 하면, react는 이 모든 속성을 가져올 것이다

export default App;
