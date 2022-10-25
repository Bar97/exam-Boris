import React, { useState } from "react";
import close from "../constans/close.svg";
import edit from "../constans/edit.svg";

export default function Todo({
  id,
  title,
  isDone,
  deleteTodo,
  handleEdit,
  isEdit,
  handleEdited,
  succes,
  closeInput,
}) {
  const [firstTitle] = useState(title);

  return (
    <div className="todo">
      {isEdit ? (
        <div>
          <input onChange={(e) => handleEdited(e, id)} type="text" />
          <button onClick={() => succes(id)}>V</button>
          <button onClick={() => closeInput(id, firstTitle)}>X</button>
        </div>
      ) : (
        <div>
          {title}
          <img className="edit" onClick={() => handleEdit(id)} src={edit} />
          <img onClick={() => deleteTodo(id)} className="close" src={close} />
        </div>
      )}
    </div>
  );
}
