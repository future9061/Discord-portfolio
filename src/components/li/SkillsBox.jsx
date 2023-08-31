import { useDispatch } from "react-redux";
import skillData from "../../store/SkillData";
import { changeTalk } from "../../store/store";

export function SkillsBox({ img, alt, settalkWrap, setTalkCount }) {
  const dispatch = useDispatch();
  const chatData = [...skillData];
  let selectItem;

  function handleSkill(e) {
    settalkWrap("");
    setTalkCount(0);
    selectItem = chatData.find((item) => item.title === e.target.alt);
    dispatch(changeTalk(selectItem.content));
  }

  return (
    <div id="image" onClick={handleSkill}>
      <img src={`${process.env.PUBLIC_URL}img/${img}`} alt={alt} />
    </div>
  );
}
