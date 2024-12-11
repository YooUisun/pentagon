import React, { useState, useEffect } from 'react';
import '../../assets/SigninPage.css';
import { useNavigate } from 'react-router-dom';

function SigninPage() {
    let navigate = useNavigate();
    let [year, setYear] = useState('');
    let [month, setMonth] = useState('');
    let [day, setDay] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [passwordRetype, setPasswordRetype] = useState('');
    let [emailValid, setEmailValid] = useState('');
    let [passwordValid, setPasswordValid] = useState('');
    let [passwordMatch, setPasswordMatch] = useState(true);
    let [nickName, setNickName] = useState('');
    let [phonePrefix, setPhonePrefix] = useState('010');  // 전화번호 앞자리
    let [phoneSuffix, setPhoneSuffix] = useState('');     // 전화번호 뒷자리
    let [nickNameError, setNickNameError] = useState('');

    //이메일 형식 유효성검증
    function isValidEmail(str) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|co)$/.test(str);
    }   //  ^abc 문자열이 abc로 시작하는데 확인
    //  ^\\d 문자열이 숫자로 시작하는지 확인

    //비밀번호 8글자이상, 영문, 숫자, 특수문자 사용
    function strongPassword(str) {
        return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
    }
    //비밀번호와 비밀번호 확인 일치
    function isMatch(password1, password2) {
        return password1 === password2;
    }
    function isValidNickName(str) {
        // 한글, 영어, 숫자만 허용하며, 최대 10자까지
        const validPattern = /^[a-zA-Z0-9가-힣]{1,10}$/;
        // 한글 자음이나 모음만 입력된 경우를 방지하는 패턴 (자음 + 모음만을 허용하지 않음)
        const noConsonantVowelOnly = /[ㄱ-ㅎㅏ-ㅣ]/; // 자음, 모음만 포함된 경우

        if (!validPattern.test(str)) {
            return '영어, 숫자, 한글만 사용 가능하고, 10자 이내로 입력해주세요.';
        }

        if (noConsonantVowelOnly.test(str)) {
            return '자음이나 모음만 포함된 닉네임은 사용할 수 없습니다.';
        }

        return null; // 유효하면 null 반환
    }
    //이메일 중복 확인 함수
    const checkEmailDuplicate = (email) => {
        // 로컬 스토리지에서 모든 사용자 이메일을 확인
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i); // 로컬스토리지에서 이메일을 키로 사용
            const userData = JSON.parse(localStorage.getItem(key)); // 해당 이메일에 대한 사용자 정보 가져오기

            // 이메일이 이미 존재하는 경우
            if (userData && userData.email === email) {
                alert('이미 사용 중인 이메일입니다.');
                return;
            }
        }
        // 이메일이 중복되지 않으면 사용 가능
        alert('사용 가능한 이메일입니다.');
    };
    //닉네임 중복 확인 함수
    const checkNickNameDuplicate = (nickName) => {
        let isDuplicate = false;
        // 로컬 스토리지에서 'users' 키로 저장된 사용자 목록을 가져옵니다.
        for (let i = 0; i < localStorage.length; i++) {
            const email = localStorage.key(i); // 각 키(이메일)를 가져옴
            const userData = JSON.parse(localStorage.getItem(email)); // 해당 이메일에 대한 사용자 정보

            // 중복 닉네임 확인
            if (userData && userData.nickName === nickName) {
                isDuplicate = true;
                break; // 중복된 닉네임이 있으면 루프 종료
            }
        }
        if (isDuplicate) {
            alert('이미 사용 중인 닉네임입니다.');
        } else {
            alert('사용 가능한 닉네임입니다.');
        }
    };
    //이메일, 비밀번호, 비밀번호확인에 입력할때마다 상태 업데이트, 유효성 검증
    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (isValidEmail(value)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        if (strongPassword(value)) {
            setPasswordValid(true);
        } else {
            setPasswordValid(false);
        }
    };

    const handlePasswordRetypeChange = (e) => {
        const value = e.target.value;
        setPasswordRetype(value);  //비밀번호 확인 입력값 저장
        if (value.length === 0) {
            setPasswordMatch(true); //값이 없으면 메시지 숨김
        }
        else if (isMatch(password, value)) {
            setPasswordMatch(true); //비밀번호와 확인이 일치하면 업데이트
        } else {
            setPasswordMatch(false); //일치하지 않을때 업데이트
        }
    };

    const handleNickNameChange = (e) => {
        const value = e.target.value;
        setNickName(value);
        const error = isValidNickName(value);
        if (error) {
            setNickNameError(error);
        } else {
            setNickNameError('');
        }
    };
    let handleSignin = (event) => {
        event.preventDefault();

        if (email == '') {
            alert('이메일을 입력해주세요');
            return;
        } else if (!isValidEmail(email)) {
            alert('이메일 형식이 올바르지 않습니다');
            return;
        }
        if (localStorage.getItem(email)) {
            alert('이미 가입된 이메일입니다');
            return;
        }
        if (password == '') {
            alert('비밀번호를 입력해주세요');
            return;
        } else if (!strongPassword(password)) {
            alert('패스워드 형식이 올바르지 않습니다.');
            return;
        }
        if (passwordRetype === '') {
            alert('비밀번호 확인을 입력해주세요');
            return;
        } else if (!isMatch(password, passwordRetype)) {
            alert('비밀번호가 일치하지 않습니다');
            return;
        }
        if (nickName == '') {
            alert('닉네임을 입력해주세요');
            return;
        } else {
            const nickNameError = isValidNickName(nickName); // 닉네임 유효성 검사
            if (nickNameError) {
                alert(nickNameError); // 유효하지 않으면 에러 메시지 출력
                return;
            }
        }

        let fullPhoneNumber = `${phonePrefix}${phoneSuffix}`;
        let newUser = {
            email: email,
            password: password,
            nickName: nickName,
            phone: fullPhoneNumber || '', //선택사항, 값이 없으면 빈 문자열로
            birthdate: { year, month, day } || {} //선택사항, 값이 없으면 빈 객체
        };
        //유저데이터 로컬스토리지에 저장
        localStorage.setItem(newUser.email, JSON.stringify(newUser));
        //setItem은 데이터 저장 메서드(key,value) newUser.email이 key  newUser가 value
        //newUser.email 이렇게 써야 이메일을 키로 사용하여 이메일별로 각자 저장됨
        //JSON.stringify 객체나 배열을 JSON문자열로 변환하는 메서드
        //로컬 스토리지는 문자열만 저장 가능 하기때문에 JSON.stringify으로 변환

        window.scrollTo(0, 0);
        alert('회원가입이 완료되었습니다');
        navigate('/Login');
    };

    // 현재 년도와 월을 기준으로 선택 가능한 년,월,일을 설정
    let currentYear = new Date().getFullYear();
    let years = Array.from({ length: 100 }, (_, i) => currentYear - i); //100년전부터
    //Array.from 배열생성 메서드, 첫번째인수=배열로변환할 객체, 두번째 인수= 배열을 만드는데 사용되는 맵 함수
    //길이가 100인 배열을 생성. 배열의 각 항목에 대해 (_, i) => currentYear - i 함수를 적용.
    //(_, i) => currentYear - i는 배열의 각항목을 변환하는 함수
    //첫번째 인자는 배열의 값이지만 사용하지 않으므로 _로 표기, 두번째인자 i는 인덱스
    //i = 0 일때 currentYear -0 -> 현재연도
    //i = 1 일때 currentYear -1 -> 작년연도
    let months = Array.from({ length: 12 }, (_, i) => i + 1);
    // i가 0부터 11이므로 +1 해야 1~12월

    let daysInMonth = (year, month) => {
        let date = new Date(year, month, 0); //0은 1월 11은 12월, 이전월의 마지막 날짜 반환
        return Array.from({ length: date.getDate() }, (_, i) => i + 1);
        // date.getDate() = 월의 마지막날짜 반환, 배열에 1부터 마지막일까지 저장
    };
    //선택한 년, 월에 따라 일수 업데이트
    useEffect(() => {
        if (year) {
            setDay(''); //년을 변경하면 월, 일은 초기화
            setMonth('');
        }
    }, [year]); //year가 변경될때마다 실행
    useEffect(() => {
        if (month) {
            setDay(''); //월을 변경하면 일은 초기화            
        }
    }, [month]);

    return (
        <div className='signContainer'>
            <div className='signinBox'>
                <h1>회원가입</h1>
                <form className='formStyle' onSubmit={handleSignin}>
                    <br></br>
                    <div className='info'>
                        <div className='infoText'>
                            <h4>기본정보</h4><span style={{ color: 'red' }}>필수사항</span>
                        </div>
                        <label>이메일</label>

                        <input
                            type="text"
                            id='email'
                            value={email}
                            placeholder='honggildong@naver.com'
                            onChange={handleEmailChange}
                        />
                        <div className={emailValid ? "success" : "hide"}>
                            사용할 수 있는 이메일 형식입니다
                        </div>
                        <div className={!emailValid && email.length > 0 ? "failure" : "hide"}>
                            이메일 형식이어야 합니다
                        </div>
                        <button
                            className="signupInputField"
                            type='button'
                            onClick={(event) => {
                                event.preventDefault();
                                if (email === '') {
                                    alert('이메일을 입력해주세요');
                                    return;
                                }
                                checkEmailDuplicate(email); // 이메일 중복 확인 함수 호출
                            }}
                        >
                            이메일 중복 확인
                        </button>

                        <label>비밀번호</label>
                        <input
                            type="password"
                            id='password'
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder='******'
                        />
                        <div className={!passwordValid && password.length > 0 ? "strongPassword" : "hide"}>
                            8글자 이상, 영문, 숫자, 특수문자를 사용하세요
                        </div>

                        <label>비밀번호 확인</label>
                        <input
                            type="password"
                            id='password-retype'
                            value={passwordRetype}
                            onChange={handlePasswordRetypeChange}
                            placeholder='******'
                        />
                        <div className={`mismatch ${!passwordMatch ? 'show' : ''}`}>
                            비밀번호가 일치하지 않습니다
                        </div>
                    </div>
                    <br></br>
                    <div className='info'>
                        <div className='infoText'>
                            <h4>닉네임</h4><span style={{ color: 'red' }}>필수사항</span>
                        </div>

                        <input
                            type="text"
                            className="signupInputField"
                            value={nickName}
                            onChange={handleNickNameChange}
                            placeholder='닉네임'
                        />
                        <div className="error">
                            {nickNameError && <span>{nickNameError}</span>}
                        </div>
                        <button
                            className="signupInputField"
                            type='button'
                            onClick={(event) => {
                                event.preventDefault();
                                const error = isValidNickName(nickName); // isValidNickName 함수 호출
                                if (error) {
                                    alert(error); // 유효하지 않으면 에러 메시지 출력
                                    return; // 유효하지 않으면 중복 확인을 진행하지 않음
                                }
                                checkNickNameDuplicate(nickName)
                            }}>닉네임 중복 확인</button>
                    </div>
                    <br></br>
                    <div className='info'>
                        <div className='infoText'>
                            <h4>전화번호</h4><span style={{ color: 'blue' }}>선택사항</span>
                        </div>
                        <div className='phone'>
                            <select onChange={(e) => setPhonePrefix(e.target.value)} value={phonePrefix}>
                                <option value='010'>010</option>
                                <option value='011'>011</option>
                                <option value='016'>016</option>
                                <option value='017'>017</option>
                            </select>
                            <input
                                type="text"
                                className="signupInputField"
                                placeholder='휴대폰번호를 입력해주세요'
                                onChange={(e) => setPhoneSuffix(e.target.value)}
                                value={phoneSuffix}
                            />
                        </div>
                    </div>
                    <br></br>
                    <div className='info'>
                        <div>
                            <div className='infoText'>
                                <h4>생년월일</h4><span style={{ color: 'blue' }}>선택사항</span>
                            </div>
                            <div>
                                {/* 년도 선택 */}
                                <select
                                    className='sigupSelectBox'
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}>
                                    {/* e는 이벤트객체, e요소를 setYear로 전달하여 year 업데이트 */}
                                    <option value="">년도 선택</option>
                                    {years.map((yearOption, index) => (
                                        <option key={index} value={yearOption}>
                                            {yearOption}
                                        </option>
                                    ))}
                                </select>

                                {/* 월 선택 */}
                                <select
                                    className='sigupSelectBox'
                                    value={month}
                                    onChange={(e) => setMonth(e.target.value)}
                                    disabled={!year}
                                >
                                    <option value="">월 선택</option>
                                    {months.map((monthOption, index) => (
                                        <option key={index} value={monthOption}>
                                            {monthOption}
                                        </option>
                                    ))}
                                </select>

                                {/* 일 선택 */}
                                <select
                                    className='sigupSelectBox'
                                    value={day}
                                    onChange={(e) => setDay(e.target.value)}
                                    disabled={!month}
                                >
                                    <option value="">일 선택</option>
                                    {year && month &&
                                        daysInMonth(year, month).map((dayOption, index) => (
                                            <option key={index} value={dayOption}>
                                                {dayOption}
                                            </option>
                                        ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <button className="signupInputField" type='submit'>회원가입</button>

                </form>
            </div>

        </div>
    )
}

export default SigninPage;