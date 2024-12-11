import React from 'react';
import './ContentOne.css';
import backgroundvideo from '../../src/assets/video/MaintitleVideo.mp4';

function ContentOne(){
    return (
        <div id="introduce-page1">
            <div className="background">
                <video 
                    autoPlay
                    loop 
                    muted 
                    playsInline>
                    <source src={backgroundvideo} type='video/mp4'/>
                </video>
            </div>
            <div className="title-container">
                <h1 className="mainpage_title">
                운동에 관한 모든 것. <p style={ {fontFamily :'Franklin Gothic Medium', letterSpacing : '8px'  ,fontWeight : 'bold'}}>Pentagon</p>
                </h1>
                <h2 className="mainpage_title2">
                펜타곤은 각종 소요층이 요구하는 운동 정보와 운동 레코드 서비스를 제공합니다.<br></br>
                <br></br>
                펜타곤과 함께 당신의 새로운 하루들을 시작해보세요.
                </h2>
            </div>
        </div>
    )
}

export default ContentOne;