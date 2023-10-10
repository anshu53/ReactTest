import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addtodo,
  removetodo,
  resettodo,
  checkboxtodo,
  editing,
  submitediting,
  setInputfield,
  setTooglesubmit,
  cancelEdit,
} from "./TodoSlice";
const Todo = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.todo.inputfield);
  const todoslist = useSelector((state) => state.todo.todos);
  const editingvalue = useSelector((state) => state.todo.isediting);
  const tooglesubmit = useSelector((state) => state.todo.tooglesubmit);

  const addtodohandler = () => {
    if (inputValue === "") {
      return;
    } else if (editingvalue !== "" && !tooglesubmit) {
      dispatch(submitediting(inputValue));
    } else {
      dispatch(addtodo(inputValue));
    }
  };

  const removehandler = (item) => {
    dispatch(removetodo(item.id));
  };

  const resethandler = () => {
    dispatch(resettodo());
  };

  const handleedit = (elem) => {
    dispatch(editing(elem.id));
    const editingtext = todoslist.find((element) => element.id === elem.id);
    dispatch(setInputfield(editingtext.text));
    dispatch(setTooglesubmit(false));
  };

  const handleCancelEdit = () => {
    dispatch(cancelEdit());
  };

  return (
    <>
      <div className="list">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => dispatch(setInputfield(e.target.value))}
        />
        {tooglesubmit ? (
          <button onClick={() => addtodohandler()}>Add todo</button>
        ) : (
          <>
            <button onClick={() => addtodohandler()}>Update todo</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </>
        )}

        <button onClick={resethandler}>Reset</button>
      </div>
      <section>
        {todoslist.map((data) => {
          return (
            !data.ischecked && (
              <p key={data.id}>
                <input
                  type="checkbox"
                  checked={data.ischecked}
                  onChange={() => dispatch(checkboxtodo(data.id))}
                />

                {data.text}
                <button onClick={() => removehandler(data)}>delet</button>
                <button
                  disabled={data.ischecked}
                  onClick={() => handleedit(data)}
                >
                  Edit
                </button>
              </p>
            )
          );
        })}
        {todoslist.map((data) => {
          return (
            data.ischecked && (
              <p className={data.ischecked ? "addstyle" : ""} key={data.id}>
                <input
                  type="checkbox"
                  checked={data.ischecked}
                  onChange={() => dispatch(checkboxtodo(data.id))}
                />

                {data.text}
                <button onClick={() => removehandler(data)}>delet</button>
                <button
                  disabled={data.ischecked}
                  onClick={() => handleedit(data)}
                >
                  Edit
                </button>
              </p>
            )
          );
        })}
      </section>
    </>
  );
};

export default Todo;
