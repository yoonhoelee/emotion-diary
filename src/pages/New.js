import {useNavigate} from "react-router-dom";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";

const New = () =>{
    const navigate = useNavigate();
    return <div>
        <MyHeader headText={"새 일기 쓰기"}
                  leftChild={<MyButton text={'< 뒤로 가기'} onClick={() => navigate(-1)}/>}
        />
        <div>
            <section>
                <h4>오늘은 언제인가요?</h4>
                <div className="input-box">

                </div>
            </section>
        </div>
    </div>
}
export default New;
