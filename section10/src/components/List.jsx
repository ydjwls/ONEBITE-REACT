import "./List.css";
import TodoItem from "./TodoItem";
import { useState,useMemo } from "react";

const List= ({ todos, onUpdate, onDelete }) => {
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        if(search === "") {
            return todos;
        }
        return todos.filter((todo) =>
            todo.content
                .toLowerCase()
                .includes(search.toLowerCase())
        );
    };

    const filteredTodos = getFilteredData();

    // 의존성배열 : deps (deps의 변경이 있을 때 리렌더링 )
    const {totalCount, doneCount, notDoneCount} = 
        useMemo(() => {
            const totalCount = todos.length;
            const doneCount = todos.filter(
                (todo) => todo.isDone
            ).length;
            const notDoneCount = totalCount - doneCount;

            return {
                totalCount,
                doneCount,
                notDoneCount
            };
        }, [todos]);

    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
            <div>
                <div>total: {totalCount}</div>
                <div>done: {doneCount}</div>
                <div>notDone: {notDoneCount}</div>
            </div>
            <input 
                value={search}
                onChange={onChangeSearch}
                placeholder="검색어를 입력하세요" 
            />
            <div className="todos_wrapper">
                {filteredTodos.map((todo) => {
                    // [오류] 고유한 key 값을 전달해줘야 한다.
                    return <TodoItem 
                        key={todo.item} 
                        {...todo} 
                        onUpdate={onUpdate} 
                        onDelete={onDelete} 
                    />;
                })}
            </div>
        </div>
    );
};

export default List;