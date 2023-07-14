사진은 완성 후..
<br>


# portfolio
<br>


## 🖥️ 프로젝트 소개
react로 저의 portfolio를 만들어봤습니다. 
<br>

## 🕰️ 개발 기간
* 23.06.26일 - 미정
<br>


## ⚙️ 개발 환경
- `vs code 1.77`
- **Framework** : react(18.2.0)
- **Database** : json으로 데이터 가져오지 않을까? 
- **library** : react-router-dom(6.14.0)
<br>


## 📌 주요 기능
#### menu마다 route
- 


<br>


## 🧾code review
- ### Dark mode 

   
1. 모든 component에 저장되어야 하기 때문에 context 사용 
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
  }, [themeMode]);  //themeMode를 의존성 배열로 넣었다. useCallBack 사용하는 부분에서 시간을 많이 허비했는데 밑에 자세히 서술하겠습니다.!

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

## 🎇Upgrade

- Back btn 수정
  
```ruby

```
<br>


## 느낀점 📢

portfolio를 만들기 시작하며 사용하기 편하고, 한 눈에 잘 들어오는 UI를 고민해보았습니다.
SPA를 만들기에 최적화 된 react framework를 사용하기 때문에 한 페이지 내에서 모든 content를 보여주기 적합하다고 생각해서
discord를 고르게 됐습니다.

기능적인 면에서 기본적이지만 주요 기능인 route와 component를 많이 사용하려 노력했습니다.
각 메뉴마다 Link로 페이지를 넘어가며, 반복되는 li들은 component로 만들어 props로 data를 전달받는 작업도 해보았습니다.  
react-router-dom, react-icons 등 다양한 react library를 써보며 덕분에 react와 조금 친해진 느낌이 들었습니다.😀😀



