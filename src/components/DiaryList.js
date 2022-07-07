import {useState} from "react";

const ControlMenu = ({value, onChange, optionList}) => {
    return <select></select>
}
const DiaryList = ({diaryList}) =>{
    const [sortType, setSortType] = useState('latest');

    return (<div>
        {diaryList.map((it)=><div key={it.id}>{it.content}</div>)}
    </div>)
}
DiaryList.defaultProps={
    diaryList: [],
}
export default DiaryList;
