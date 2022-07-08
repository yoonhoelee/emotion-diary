import {useContext, useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import MyHeader from "./MyHeader";
import MyButton from "./MyButton";
import EmotionItem from "./EmotionItem";
import {DiaryDispatchContext} from "../App";
import {getStringDate} from "../util/Date.js"
import {emotionList} from "../util/Emotion";

const DiaryEditor = ({isEdit,originData}) => {
    const [content, setContent] = useState("");
    const contentRef = useRef()
    const [emotion, setEmotion] = useState(3);
    const [date, setDate] = useState(getStringDate(new Date()));
    const {onCreate, onEdit} =useContext(DiaryDispatchContext)
    const hanleClickEmote = (emotion) => {
        setEmotion(emotion);
    }
    const navigate = useNavigate();
    const handleSubmit =()=>{
        if(content.length<1){
            contentRef.current.focus();
            return;
        }
        if(window.confirm(isEdit?"일기를 수정하시겠습니까?": "새로운 일기를 작성하시겠습니까?")){
            if(!isEdit){
                onCreate(date, content, emotion);
            }else{
                onEdit(originData.id, date, content,emotion);
            }
        }

        navigate('/',{replace: true})
    }
    useEffect(()=>{
        // edit 로직일때만 실행
        if(isEdit){
            setDate(getStringDate(new Date(parseInt(originData.date))));
            setEmotion(originData.emotion);
            setContent(originData.content);
        }
    }, [isEdit,originData])

    return <div className="DiaryEditor">
        <MyHeader headText={isEdit ? "일기 수정하기" : "새 일기 쓰기"}
                  leftChild={<MyButton text={'< 뒤로 가기'} onClick={() => navigate(-1)}/>}
        />
        <div>
            <section>
                <h4>오늘은 언제인가요?</h4>
                <div className="input_box">
                    <input
                        className="input_date"
                        value={date}
                        onchange={(e) => setDate(e.target.value)}
                        type="date"
                    />
                </div>
            </section>
            <section>
                <h4>오늘의 감정</h4>
                <div className="input_box emotion_list_wrapper">
                    {emotionList.map((it) => (
                        <EmotionItem
                            key={it.emotion_id} {...it}
                            onClick={hanleClickEmote}
                            isSelected={it.emotion_id==emotion}
                        />
                    ))}
                </div>
            </section>
            <section>
                <h4>오늘의 일기</h4>
                <div className='input_box_text_wrapper'>
                    <textarea
                        placeholder="오늘은 어땠나요?"
                        ref={contentRef}
                        value={content}
                        onChange={(e)=>setContent(e.target.value)}/>
                </div>
            </section>
            <section>
                <div className="control_box">
                    <MyButton text={"취소하기"} onClick={()=>navigate(-1)}/>
                    <MyButton text={"작성 왼료"} type={'positive'} onClick={handleSubmit}/>
                </div>
            </section>
        </div>
    </div>
}
export default DiaryEditor;
