import React from 'react'

const Manage = () => {
    return(
        <div>
            <center>
                이 메뉴는 관리자 전용 메뉴입니다.<br/>
                수거함 번호를 입력해주십시오.<br/><br/>
                <input type="text" placeholder="수거함 번호"/>
                <button>로그인</button>
            </center>
        </div>
    );
};

export default Manage;