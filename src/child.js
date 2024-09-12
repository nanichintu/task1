import React, { useState } from "react";
import { Form, Input, Button, Card } from "antd";

const ChildComponent = ({ tasks, addTask }) => {
  const [newTask, setNewTask] = useState({
    id: "",
    title: "",
    description: "",
    status: "in-progress",
  });

  const handleChange = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
      id: tasks.length + 1,
    });
  };

  const handleSubmit = () => {
    addTask(newTask);
    setNewTask({ id: "", title: "", description: "", status: "in-progress" });
  };

  return (
    <Card title="Add New Task" bordered={false}>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Title">
          <Input
            name="title"
            value={newTask.title}
            onChange={handleChange}
            placeholder="Task Title"
          />
        </Form.Item>
        <Form.Item label="Description">
          <Input.TextArea
            name="description"
            value={newTask.description}
            onChange={handleChange}
            placeholder="Task Description"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Task
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ChildComponent;
