import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";

const Editor= () => {
    const { onCreate } = useContext(TodoDispatchContext);
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e)=> {
        setContent(e.target.value);
    };

    // ENTER키 눌러도 추가하기 
    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    };

    const onSubmit = () => {
        // content 내용이 비어있을때 focus 주기 
        if (content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        // 추가한 뒤 빈 문자열로 초기화 
        setContent("");
    }

    return (
        <div className="Editor">
            <input 
                ref={contentRef}
                value={content}
                onKeyDown={onKeyDown}
                onChange={onChangeContent}
                placeholder="새로운 Todo..." 
            />
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default Editor;