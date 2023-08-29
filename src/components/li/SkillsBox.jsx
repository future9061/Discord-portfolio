import { useDispatch, useSelector } from "react-redux";
import skillData from "../../store/SkillData";
import { changeTalk } from "../../store/store";

export function SkillsBox({ img, alt }) {
  const dispatch = useDispatch();
  const chatData = [...skillData];

  function handleSkill(e) {
    const selectItem = chatData.find((item) => item.title === e.target.alt);
    if (selectItem) {
      dispatch(changeTalk(selectItem.content));
    }
  }

  return (
    <div id="image" onClick={handleSkill}>
      <img src={`${process.env.PUBLIC_URL}img/${img}`} alt={alt} />
    </div>
  );
}
