import { Button, Col, Input, Row, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo, TODO_LIST_TYPE } from "../../redux/actions";
import { getToDoListBySearchText } from "../../redux/selectors";
import Todo from "../Todo";

export default function TodoList() {
  const todoList = useSelector(getToDoListBySearchText);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleClickAddTodo = () => {
    const newTodo = {
      id: uuidv4(),
      name,
      priority,
      completed: false,
    };

    dispatch(
      addTodo({
        type: TODO_LIST_TYPE.ADD_TODO,
        data: newTodo,
      })
    );

    setName("");
    setPriority("Medium");
  };

  const handleOnSelectPriority = (valueChange) => {
    setPriority(valueChange);
  };

  const handleOnChangeName = (valueChange) => {
    setName(valueChange?.target?.value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {(todoList || []).map((todo) => {
          return (
            <Todo
              name={todo.name}
              prioriry={todo.priority}
              id={todo.id}
              completed={todo.completed}
            />
          );
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input onChange={handleOnChangeName} value={name} />
          <Select
            defaultValue="Medium"
            onChange={handleOnSelectPriority}
            value={priority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleClickAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
