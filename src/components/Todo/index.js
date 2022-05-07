import { Checkbox, Row, Tag } from "antd";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({
  name,
  prioriry,
  key,
  completed,
  handleToggleStatus,
  id,
}) {
  const toggleCheckbox = () => {
    handleToggleStatus && handleToggleStatus(id);
  };

  return (
    <Row
      key={key}
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(completed ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={completed} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
}
