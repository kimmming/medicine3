/*global kakao */
import React, { useEffect } from "react";
import { markerdata } from "../data/markerData";
import p_r from "../components/pick/pick_red.png";
import p_y from "../components/pick/pick_yellow.png";
import p_g from "../components/pick/pick_green.png";
import p_b from "../components/pick/pick_blue.png";

export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  const imageSrc1= p_r;
  const imageSrc2= p_y;
  const imageSrc3= p_g;
  const imageSrc4= p_b;

  const imageSize = new kakao.maps.Size(55,55);

  //마커 이미지 생성
  const markerImage1 = new kakao.maps.MarkerImage(imageSrc1, imageSize);
  const markerImage2 = new kakao.maps.MarkerImage(imageSrc2, imageSize);
  const markerImage3 = new kakao.maps.MarkerImage(imageSrc3, imageSize);
  const markerImage4 = new kakao.maps.MarkerImage(imageSrc4, imageSize);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center : new kakao.maps.LatLng(37.456265566265984, 126.70591532575489),
      level: 5
    };

    //map
    const map = new kakao.maps.Map(container, options);
    var mapTypeControl = new kakao.maps.MapTypeControl();
    
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    
    markerdata.forEach((el) => {
    
      if(el.per>75){

        //마커 생성
        const marker1 = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(el.lat, el.lng),
          image: markerImage1,
          clickable: true ,
         
        });
        var iwContent = '<b>'+el.title+'</b>'+'<br>'+'<a style="color:red;">'+ el.per+' % 차있음</a>';
        var iwRemoveable = true; 

        var infowindow = new kakao.maps.InfoWindow({
          position:  new kakao.maps.LatLng(el.lat, el.lng),
          content: iwContent,
          removable : iwRemoveable,
        });
        kakao.maps.event.addListener(marker1, 'click', function() {
          // 마커 위에 인포윈도우를 표시합니다
          infowindow.open(map,marker1); 
        });
        
      } else if((el.per<=75)&&(el.per>50)){
        

        const marker2 = new kakao.maps.Marker({
          map:map,
          position: new kakao.maps.LatLng(el.lat, el.lng),
          image: markerImage2,
          clickable: true 
        });
        var iwContent = '<b>'+el.title+'</b>'+'<br>'+'<a style="color:orange">'+ el.per+' % 차있음</a>';
        var iwRemoveable = true; 

        var infowindow = new kakao.maps.InfoWindow({
          position:  new kakao.maps.LatLng(el.lat, el.lng),
          content: iwContent,
          removable : iwRemoveable,
          disableAutoPan : true
        });
        kakao.maps.event.addListener(marker2, 'click', function() {
          // 마커 위에 인포윈도우를 표시합니다
          infowindow.open(map,marker2); 
        });
        

      } else if((el.per<=50)&&(el.per>25)){
        
        const marker3 = new kakao.maps.Marker({
          map:map,
          position: new kakao.maps.LatLng(el.lat, el.lng),
          image: markerImage3,
          clickable: true 
        });
        var iwContent = '<b>'+el.title+'</b>'+'<br>'+'<a style="color:green">'+ el.per+' % 차있음</a>';
        var iwRemoveable = true; 

        var infowindow = new kakao.maps.InfoWindow({
          position:  new kakao.maps.LatLng(el.lat, el.lng),
          content: iwContent,
          removable : iwRemoveable
        });
        kakao.maps.event.addListener(marker3, 'click', function() {
          // 마커 위에 인포윈도우를 표시합니다
          infowindow.open(map,marker3); 
        });
      } else {
        const marker4 = new kakao.maps.Marker({
          map:map,
          position: new kakao.maps.LatLng(el.lat, el.lng),
          image: markerImage4,
          clickable: true 
        });
        var iwContent = '<b>'+el.title+'</b>'+'<br>'+'<a style="color:blue">'+ el.per+' % 차있음</a>';
        var iwRemoveable = true; 

        var infowindow = new kakao.maps.InfoWindow({
          position:  new kakao.maps.LatLng(el.lat, el.lng),
          content: iwContent,
          removable : iwRemoveable
        });
        kakao.maps.event.addListener(marker4, 'click', function() {
          // 마커 위에 인포윈도우를 표시합니다
          infowindow.open(map,marker4); 
          
        });
      }
    
    });
  };

  return <div id="map" style={{ width: "80vw", height: "100vh" }}></div>;
}
