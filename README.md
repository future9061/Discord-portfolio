# 🎇목차

1. [💻 프로젝트 소개](#-프로젝트-소개)
2. [📁 directory 구조](#-directory-구조)
3. [⏲ 개발 기간](#-개발-기간)
4. [❗ 개발 환경](#-개발-환경)
5. [📌 주요 기능](#-주요-기능)
6. [🧾 code review](#-code-review)
   - [splash Screen](#splash-screen)
   - [Theme mode](#theme-mode)
   - [Back Btn](#back-btn)
   - [Skills chat bot](#skills-chat-bot)
   - [component 스타일 변경](#component-스타일-변경)
   - [Item filter 효과](#item-filter-효과)
7. [💾 업그레이드 및 버전관리](#-업그레이드-및-버전관리)
   - [ver 2. 최적화 : 코드 분할과 폰트, 이미지 관리](#-ver-2-최적화--코드-분할과-폰트-이미지-관리)
   - [ver 3. 최적화 : redux 라이브러리](#-ver-3-최적화--redux-라이브러리)
8. [📢 Project review](#-project-review)

<br>

## 💻 프로젝트 소개

<br>

![image](https://github.com/future9061/portfolio/assets/132829711/30ba018e-7153-434c-87c4-4f10c1852873)

<br>

- `URL` : https://discord-mirae.netlify.app
- 나를 소개하는 Portfolio 목적의 웹으로 React 프레임워크로 완성한 웹입니다.
- 페이지 이동 시 content만 부드럽게 바뀌는 SPA의 특성이 두드러지는 UI입니다.
- 테마로 Blue, Basic을 구성 해 사용자의 취향에 따라 테마를 선택할 수 있습니다.
- Ux를 고려하여 상단에 메뉴바와 좌측에 뒤로가기 버튼, 다이렉트 메뉴를 계속 노출시켜 페이지 이동이 용이한 사용자 친화적인 웹입니다.

<br>

## 📁 directory 구조

<br>

```javascript

📦src
 ┣ 📂components
 ┃ ┣ 📂li
 ┃ ┣ 📂ui
 ┣ 📂pages
 ┣ 📂store
 ┃ ┣ 📜Project.js //로컬 목업 데이터
 ┃ ┣ 📜SkillData.js //로컬 목업 데이터
 ┃ ┗ 📜store.js //redux로 state 관리
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜index.css
 ┗ 📜index.js

```

<br>

## ⏲ 개발 기간

- 23.06.26 - 2023.07.28

<br>

## ❗ 개발 환경

- **Editor** : `vs code 1.77`
- **Framework** : `react(18.2.0)`
- **library** : `reduxjs/toolkit(1.9.5)` `react-redux(8.1.2)` `react-router-dom(6.14.0)` `react-copy-to-clipboard(5.1.0)`

<br>

## 📌 주요 기능

#### splash Screen - [코드 보기](#splash-screen)

> ver.2에서 React.lazy와 Suspanse로 Code Splitting

- setTimeout 활용
- Session Storage에 toggle 형태로 저장 -> 브라우저를 새로 열 때만 보인다.

<br >

#### theme mode - [코드 보기](#dark-mode)

> ver.3에서 redux로 state 관리하도록 변경

- 테마 모드의 state를 context에서 관리하여 모든 컴포넌트에서 theme mode를 구독하게 하였다.
- Local Storage에 mode 저장하여 새로고침해도 mode가 유지된다.

<br >

#### Back Btn - [코드 보기](#back-btn)

- location으로 이전 경로를 가져와 Local Storage에 저장.
- Back 버튼 클릭 시 Local Storage의 배열 마지막을 꺼내 와 navigate로 이동 후 pop으로 삭제한다.

<br >

#### Skills chat bot - [코드 보기](#skills-chat-bot)

- data를 import 해 클릭 요소와 data를 비교
- 일치하는 data를 setInterval로 타이핑 효과를 넣어 보여준다.

<br >

#### 클릭 시 특정 component style 변경 - [코드 보기](#component-스타일-변경)

- databinding한 여러 개의 목록 component를 map으로 생성해 index 번호를 부여
- 클릭 요소와 data의 index 번호를 비교 후 해당 컴포넌트만 className 남긴다.

<br >

#### Item filter 효과 - [코드 보기](#item-filter-효과)

- 클릭한 btn의 id와 item의 title을 비교해, 일치하지 않을 시 hide 클라스를 부착한다.

<br>

## 🧾 code review

- ### splash Screen

  1.Loding component 생성 및 컴포넌트 상태 관리 isLoading useState 생성 <br /> 2. isLoading는 sesstionStorage의 date로 상태 업데이트. splash screen은 웹을 열 때 한번만 보여야 함으로 브라우저를 열 때마다 reset되는 sessionStorage가 적합하다. <br />
  3.App.js에 조건문으로 <Loading /> 넣기 <br />
  4.setTimeOut으로 2000ms 뒤에 isLoading이 false로 바뀜 <br />

  ```javascript
  function App() {
    const sessionVal = window.sessionStorage.getItem("isLoading"); //초기값은 true

    const [isLoading, setIsLoading] = useState(
      sessionVal ? JSON.parse(sessionVal) : true
    );

    //App component가 mount 되면 시행
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2500);

      return () => clearTimeout(timer);
    }, []);

    //isLoading의 값이 바뀌면 sesstionStorage에 저장
    useEffect(() => {
      window.sessionStorage.setItem("isLoading", JSON.stringify(isLoading));
    }, [isLoading]);

    return (
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <ThemeProvider>
            <Main />
          </ThemeProvider>
        )}
      </>
    );
  }

  export default App;
  ```

- ### Theme mode

1. 모든 component에 적용 되어야 하기 때문에 context 사용
2. dark 상태를 담아 둘 useState 생성
3. 새로 고침 시 다크 모드가 풀림(초기값이 basic이기 때문) 때문에 localStorage에 저장

```javascript
//1. context 생성

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const LocalTheme = window.localStorage.getItem("theme") || "basic"; //local에 data가 없으면 basic이 들어감
  const [themeMode, setThemeMode] = useState(LocalTheme); //theme 모드의 값을localStorage에서 가져와서 할당

  const chooseTheme = useCallback(() => {
    if (themeMode === "basic") {
      window.localStorage.setItem("theme", "basic");
    } else {
      window.localStorage.setItem("theme", "dark");
    }
  }, [themeMode]); //themeMode를 의존성 배열로 넣었다.

  return (
    <ThemeContext.Provider
      value={{ themeMode, setThemeMode, chooseTheme, atCircle, setAtcircle }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
```

<br />

```javascript
//povider로 가장 최상단인 app.js를 감싸 모든 component가 구독 가능하게 함
import ThemeProvider from "./store/Context";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <outlet />
    </ThemeProvider>
  );
}

export default App;
```

<br />

```javascript
//context 사용할 setting component에서 useContext 생성
 const { themeMode, setThemeMode, chooseTheme } = useContext(ThemeContext);

  let dark = themeMode === "dark" ? classes.dark : "";

 useEffect(() => {
    chooseTheme();
  }, [themeMode]);

  <button onClick={(e) => {
                e.stopPropagation(); //이벤트 버블링 현상
                setThemeMode("basic");
              }>Basic</button>

 <button onClick={(e) => {
                e.stopPropagation();
                setThemeMode("dark");
              }>dark</button>

//버튼 클릭 시 themeMode가 바뀌면서 Dark class가 생김.

 <div className={`${classes.setting_wrap} ${dark}`}>
```

- ### Back Btn
  > 기존에는 navigate(-1)로 어렵지 않던 기능이지만 **이전 페이지로 이동하면서 이전 페이지의 버튼이 활성화 되지 않는 문제** 를 발견. 버튼의 상태관리 데이터와 Back버튼이 무관하기 때문..  
  > 이전 경로를 가져와 조건문을 걸어야 해서 useLocation과 useNavigate Hook으로 코드를 수정했다

1.  navigate로 페이지 이동 시 두 번째 인자로 location의 state 객체의 from을 지정(그래야 이전 경로 사용 가능) <br />
2.  Back btn component에서 이전 경로를 sessionStorage에 배열로 저장 <br />
3.  버튼을 클릭하면 sessionStorage에서 get 해온 후 마지막 배열로 navigate 한 후 마지막 배열 삭제 및 새로운 배열을 다시 sessionStorage에 넣어줌 <br />
4.  이전 경로와 버튼 State가 바르면 버튼 상태 업데이트 하는 조건문 추가하여 이전 페이지로 이동하면 해당 버튼이 활성화 됨

```javascript
//context.js
const movePage = useCallback(() => {
  navigate(`/${atCircle}`, { state: { from: location.pathname } }); //페이지 이동할 때 이전경로를 저장해두기!
}, [location.pathname]);

//back.jsx - sesstionStorage에 이전 경로 배열로 넣기
useEffect(() => {
  if (location.state && location.state.from) {
    //원래 조건문에 from만 넣으려 했으나 state가 있어야 from을 쓸 수 있었음
    const preUrls = JSON.parse(
      window.sessionStorage.getItem("preUrls") || "[]"
    );
    //초기값은 빈 배열

    const updatedUrls = [...preUrls, location.state.from];
    //preUrls 배열에 pathname이 바뀔때마다 계속해서 이전 경로 추가

    window.sessionStorage.setItem("preUrls", JSON.stringify(updatedUrls));
    //pathname이 바뀔때마다 update된 배열을 sessionStorage에 넣음
  }
}, [location.pathname]);

//back.jsx - click 시 sesstionStorage에서 마지막 데이터를 꺼내와 이동, pop으로 삭제,버튼 활성화
const handleClick = () => {
  const moveUrl = JSON.parse(window.sessionStorage.getItem("preUrls") || "[]");

  //마지막 배열만 꺼내기, 조건은 이전 경로가 0개 초과라는 전제
  if (moveUrl.length > 0) {
    const lastUrl = moveUrl[moveUrl.length - 1];
    navigate(lastUrl);

    //버튼 활성화
    const btnOn = lastUrl.replace("/", "");

    if (btnOn !== atCircle) {
      setMenuTxt(btnOn);
    }

    //마지막 경로 삭제
    moveUrl.pop();

    //배열 변경됐으니 문자열로 변환해서 다시 session에 저장
    window.sessionStorage.setItem("preUrls", JSON.stringify(moveUrl));
  }
};
```

<br />

- ### Skills chat bot

1.  skills에 대한 data import <br />
2.  요소를 클릭하면 e.target과 data.title 비교 후 useState에 담음<br />
3.  interval로 타이핑 효과 <br />

```javascript

//context.js

const SkillData = [...data];  // data의 독립적인 카피본 생성
const [select, setSelect] = useState(SkillData[0].content); //초기값 지정, 클릭 시 select state에 상태 업데이트됨
const [talk, setTalk] = useState(select); //최종적으로 클릭한 요소를 업데이트
const [talkCount, setTalkCount] = useState(0); //타이핑 효과에서 length 관리를 위해 count state 생성
const [talkWrap, settalkWrap] = useState(""); // 타이핑 효과를 위한 wrap, 한 글자씩 talk state에 전달

  useEffect(() => {
    if (talk !== select) {
      setTalkCount(0);
      settalkWrap(""); // 초기화 코드, onclick으로 select의 상태가 업데이트 되면  이전 값 초기화하고 선택한 select을 talk에 담음
      setTalk(select);
    }
  }, [select]);


//SkillsBox.js  (component)

  const handleClick = (e) => {
    const selectItem = SkillData.find((item) => item.title === e.target.alt);
    if (selectItem) {
      setSelect(selectItem.content);  //반환한 데이터를 select useState에 담았다.
    }
  };

  return (
       <div onClick={(e)=>handleClick(e)} value={alt} >
      );


//Skills.js  (page)

  useEffect(() => {
    const talkInterval = setInterval(() => {
      setTalkCount((prevTalkCount) => prevTalkCount + 1); 
      settalkWrap(talkWrap + select[talkCount]);talkWrap의 이전값에 select을 한 글자씩 넣음
    }, 40);

    if (talkCount >= talk.length) {
      clearInterval(talkInterval);
    }

    return () => clearInterval(talkInterval);
  }, [selectItem]);

```

<br />

- ### component 스타일 변경
  (여러 개의 componenet 중 클릭한 component만 style 변경)

1. map으로 MeLi 컴포넌트 생성
2. 각 MeLi component에 map의 두 번째 인자 index를 value로 전달
3. 클릭 시, UseState에 e.target.value 값 업데이트
4. 삼항연산으로 index === e.target.value 라면 className 남김
5. MeLi component를 사용하는 project 페이지가 아니라면, 초기화 해서 버튼의 스타일을 없앰

```javascript

//MeLi.jsx


const btnData = ["All", "Javascript", "React", "Vue", "PWA"]; //컴포넌트 데이터를 배열로 생성
const [clickBtn, setClickBtn] = useState(""); // 클릭한 컴포넌트의 value를 담을 useState

  const handleClick = (e) => {
    e.preventDefault();
    setClickBtn(() => e.target.value);   //클릭한 요소의 value를 업데이트
  };



//초기화 코드
 useEffect(() => {
    if (pathName !== "Project") {
      setClickBtn(() => "");
    }
  }, [pathName]);    //pathName은 context에서 가져온 것으로 location.pathname을 변수에 담은 것이다.



//map으로 component 생성
  return btnData.map((elem, index) => {
    return (
      <li
        key={index}
        onClick={(e)=>handleClick(e)}
        value={index}
        className={index === clickBtn ? classes.active : ""}   //classname을 남김
      >
          <img style={{ pointerEvents: "none" }} //이벤트 캡처링을 막기 위해 style로 pointer 이벤트를 막음/>
           <p style={{ pointerEvents: "none" }}></p>
       </li>
    );
  });
}

```

<br />

- ### Item filter 효과
  (클릭한 버튼에 해당되는 item만 보이게 함)

1. 클릭한 버튼의 id값과 item의 keyword를 비교해 클라스 명 부착
2. 페이지 전환 시 초기화

```javascript

//context.js
const [projectBtn, setProjectBtn] = useState(""); //클릭한 버튼의 id가 업데이트 됨

// 버튼 컴포넌트
const handleClick = (e) => {
    setProjectBtn(() => e.target.id);
  }

  useEffect(() => {
    if (pathName !== "Project") {  //초기화 코드, 페이지 이동 시 초기화 됨
      setProjectBtn(() => "");
    }
  }, [pathName]);



//PtojectItem.jsx
 return copyData.map((elem, index) => {
    return (
      <div
        key={index}
        className={
          projectBtn !== elem.keyword &&  // btn.id와 item.keyword가 다른 요소 .hide 클라스 추가
          projectBtn !== "All" && // 버튼이 All인 경우 모든 item이 보여야 함
          projectBtn !== "" // 버튼을 누르지 않은 상태면 모든 아이템이 보여야 함
            ? classes.hide
            : ""
        }
      >
          ....생략
      </div>

```

<br />

## 💾 업그레이드 및 버전관리

### ✔ ver 2. 최적화 : 코드 분할과 폰트, 이미지 관리

<br />

첫 배포 후 웹의 load 시간이 너무 오래 걸리는 걸 확인했다.

  <img src="https://velog.velcdn.com/images/416homin/post/0c754ea3-31f0-47cc-a4f1-af6e6d7a13e4/image.png">

**해결해야 할 부분은 bundle과 font, img 였다.** <br />

- 이미지 최적화
- web font를 css에서 import 하지 않고 html Link로 변경.
- 번들은 코드 분할이 필요하므로 기존에 setTimeout 으로 2.5s간 보이던 splash screen을 React.lazy와 Suspense로 변경

<br />

```javascript
//<App> 컴포넌트가 랜더링 되는 동안 <Loadind> 컴포넌트를 보여준다.
const LazyApp = lazy(() => import("./App"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyApp />
      </Suspense>
    ),
    children: [
      { path: "/Home", element: <Home /> },
      생략...
    ],
  },
]);

```

최종 load 시간은 거의 변함이 없지만 app이 로딩 되는 동안 사용자에게 Loading 컴포넌트를 보여주어 사용자가 대기하는 시간동안 UI를 노출시킬 수 있었다.
<img src="https://velog.velcdn.com/images/416homin/post/9d870eba-6fbc-40c0-a202-4a82da47336c/image.png">

### ✔ ver 3. 최적화 : redux 라이브러리

- 기존의 state를 관리하던 context를 없애고 redux 라이브러리로 상태관리를 함으로써 context를 구독하는 하위 컴포넌트의 불필요한 재랜더링을 멈춘다.

```javascript
//store.js

import { configureStore, createSlice } from "@reduxjs/toolkit";

const themSlice = createSlice({
  name: "theme",
  initialState: "basic", //초기값은 basic
  reducers: {
    changeTheme: (state, action) => {
      return action.payload;
    }, // 함수의 파라미터 값으로 state를 변경한다.
  },
});

export const { changeTheme } = themSlice.actions;

export default configureStore({
  reducer: {
    themSlice: themSlice.reducer,
  },
});
```

```javascript
//index.js

import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    //...생략
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    //provider로 감싼 후 state를 보관하는 store를 전달
    <RouterProvider router={router} />
  </Provider>
);
```

```javascript
//setting.jsx

//state 가져오기 위해 useSelector import
//함수 사용 위해 useDispatch import
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../store/store";

export function Setting() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themSlice);
  let dark = theme === "dark" ? classes.dark : "";

  const handleTheme = (theme) => {
    dispatch(changeTheme(theme));
    localStorage.setItem("theme", theme);
  };  //버튼 클릭시 테마가 전달됨, 새로 고침 이후에도 적용 위해 localStorage에 저장함

  <button onClick={()=> handleTheme("dark")}
  >테마</buttin>

```

<br>

## 📢 Project review

> 이번 프로젝트는 나를 보여주는 포트폴리오 이기 때문에 시간과 정성을 많이 쏟은 프로젝트였다. 때문에 얻어가는 게 많은 프로젝트이기도 했다. <br />
> 리액트로 처음 만들어 본 프로젝트여서 배포 뒤에 코드를 수정해야 할 일이 많았고 코드를 여러 번 뜯어보며 좀 더 나은 방향을 찾아가는 과정을 거치면 리액트의 매력을 알 수 있었던 것 같다. 덕분에 지금 가장 좋아하는 프레임워크로 리액트가 자리 잡았다.
