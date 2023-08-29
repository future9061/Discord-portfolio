import { RiReactjsLine } from "react-icons/ri";
import { SiPwa } from "react-icons/si";
import { BiLogoVuejs, BiLogoJavascript } from "react-icons/bi";
import { BsFiletypeCss } from "react-icons/bs";
import { FaCss3Alt } from "react-icons/fa";

const projectData = [
  {
    title: "Discord",
    keyword: "React",
    color: "#61DAFB",
    icon: <RiReactjsLine />,
    secondIcon: <BsFiletypeCss />,
    secondkeyword: "CSS module",
    secondColor: "#F5F5F5",
    src: "basic-mode.webp",
    content: "React 첫 프로젝트로 포트폴리오를 만들었습니다. SPA에 최적화 된 리액트의 특징을 보여주기 위해 한 페이지 내에서 모든 컨텐츠를 담아내는 디자인을 고려하여 프로젝트를 만들었습니다.",
    git: 'https://github.com/future9061/portfolio',
    demo: "https://discord-mirae.netlify.app"
  },
  {
    title: "오늘의 집",
    keyword: "Javascript",
    color: "#F7DF1E",
    icon: <BiLogoJavascript />,
    secondIcon: <FaCss3Alt />,
    secondkeyword: "CSS",
    secondColor: "#1572B6",
    src: "ohu.webp",
    content: "바닐라 자바스크립트로 오늘의 집 클론 코딩입니다. json 파일에서 상품 데이터를 가져와 사용자에게 보여줍니다.",
    git: 'https://github.com/future9061/ohou_future',
    demo: "https://future9061.github.io/ohou_future"
  },
  {
    title: "TO DO List",
    keyword: "Vue",
    color: "#4FC08D",
    icon: <BiLogoVuejs />,
    secondIcon: <FaCss3Alt />,
    secondkeyword: "CSS",
    secondColor: "#1572B6",
    src: "todo.webp",
    content: "Vue.js로 처음 만든 프로젝트입니다. 토이로 To Do List를 만들었습니다.",
    git: 'https://github.com/future9061/todolist_vue',
    demo: "https://todolist-future.netlify.app/"
  },
  {
    title: "Apple-Mac",
    keyword: "Javascript",
    color: "#F7DF1E",
    icon: <BiLogoJavascript />,
    secondIcon: <FaCss3Alt />,
    secondkeyword: "CSS",
    secondColor: "#1572B6",
    src: "apple.webp",
    content: "코딩을 시작하며 만든 첫 프로젝트입니다. 바닐라 자바스크립트로 슬라이드를 구현하였습니다. ",
    git: 'https://github.com/future9061/apple_mac_shopping',
    demo: "https://future9061.github.io/apple_mac_shopping"
  },
  {
    title: "coffeeBean-mobile",
    keyword: "PWA",
    color: "#5A0FC8",
    icon: <SiPwa />,
    secondIcon: <FaCss3Alt />,
    secondkeyword: "CSS",
    secondColor: "#1572B6",
    src: "coffeebean.webp",
    content: "단순히 UI만 모바일로 만들어놨던 프로젝트를 PWA로 변환하여 사용자가 앱 스토어없이 설치하여 사용할 수 있게 하였습니다.",
    git: 'https://github.com/future9061/coffeebean-mobile',
    demo: "https://musical-daifuku-70205f.netlify.app"
  },
  {
    title: "Apple-display",
    keyword: "Javascript",
    color: "#F7DF1E",
    icon: <BiLogoJavascript />,
    secondIcon: <FaCss3Alt />,
    secondkeyword: "CSS",
    secondColor: "#1572B6",
    src: "apple-display.webp",
    content: "좀 더 시각화 된 디자인으로 사용자의 흥미를 이끌 수 있는 UI를 직접 설계하여 만들어본 apple display 웹입니다. ",
    git: 'https://github.com/future9061/apple-display',
    demo: "https://future9061.github.io/apple-display"
  },
];

const copyData = [...projectData];

export default copyData;
