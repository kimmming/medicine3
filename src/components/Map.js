/*global kakao*/
import React from 'react' ;
//import './App.css';
import pick from './pick.png';
import Table from './Table';

const { kakao } = window;

class Map extends React.Component{
 

  componentDidMount() {
   
    const mapContainer = document.getElementById('myMap');
    const mapOption = {
      center : new kakao.maps.LatLng(35.146869223518685, 126.92022253067874),
      level: 5
    };

    const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    const pharmacy_positions = [
      {
          content: '동구종로약국', 
          latlng: new kakao.maps.LatLng(35.145489, 126.922149)
      },
      {
          content: '푸른약국', 
          latlng: new kakao.maps.LatLng(35.127969, 126.93093)
      },
      {
          content: '피엠약국', 
          latlng: new kakao.maps.LatLng(35.15874, 126.93523)
      },
      {
          content: '보림당약국',
          latlng: new kakao.maps.LatLng(35.13649, 126.92598)
      },
      {
          content: '팜약국', 
          latlng: new kakao.maps.LatLng(35.1468, 126.91796)
    },
    {
        content: '조은약국', 
        latlng: new kakao.maps.LatLng(35.1340194982549, 126.92634603283939)
  },
  {
      content: '광주약국', 
      latlng: new kakao.maps.LatLng(35.16553604820528, 126.91829830956627)
},
      
  ];
 
  const tray_position=[
    {
      content: '구월1동 행정복지센터', 
      latlng: new kakao.maps.LatLng(37.43448, 126.729272)
    },
    {
      content: '구월2동행정복지센터', 
      latlng: new kakao.maps.LatLng(37.456113, 126.713354)
    },
    {
      content: '구월3동행정복지센터', 
      latlng: new kakao.maps.LatLng(37.45269, 126.696945)
    },
    {
      content: '구월4동행정복지센터', 
      latlng: new kakao.maps.LatLng(37.449634, 126.724066)
    },
    {
      content: '간석1동행정복지센터', 
      latlng: new kakao.maps.LatLng(37.458611, 126.705286)
    },
    {
      content: '구월2동행정복지센터', 
      latlng: new kakao.maps.LatLng(37.456113, 126.713354)
    },


  ];

 const imageSrc= "https://cdn.icon-icons.com/icons2/1749/PNG/512/06_113688.png"; 

  for (var i = 0; i < pharmacy_positions.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
    const imageSize = new kakao.maps.Size(40, 40); 
    
    // 마커 이미지를 생성합니다    
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: pharmacy_positions[i].latlng,// 마커를 표시할 위치
        content : pharmacy_positions[i].content, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        
        image : markerImage, // 마커 이미지 
        clickable: true ,
       
    });

    var iwRemoveable = true;
    
 // 마커에 표시할 오버레이를 생성합니다 
  var infowindow = new kakao.maps.InfoWindow({
    content: pharmacy_positions[i].content,
    
    removable : iwRemoveable
    // 인포윈도우에 표시할 내용
  
  });

   
  kakao.maps.event.addListener(marker, 'click', makeOverListener(map, marker, infowindow));
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(map, marker, infowindow) {
  return function() {
      infowindow.open(map, marker);
  };
}





     
  }

  





  render()
  {
    return (
     
      <div id="myMap" style={{width: `80%`, height: '500px'}}></div>
     
    );
  }
}




export default Map;
