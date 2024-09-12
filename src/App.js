import React, { useState } from "react";
import { Layout, Row, Col, Typography } from "antd";
import Child from "./child";

const { Header, Content } = Layout;
const { Title } = Typography;

const ParentComponent = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "Description 1",
      status: "in-progress",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description 2",
      status: "completed",
    },
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <Layout>
      <Header style={{ background: "#001529", padding: "0 20px" }}>
        <Title style={{ color: "#fff", margin: 0 }} level={2}>
          Task Manager
        </Title>
      </Header>
      <Content style={{ padding: "20px" }}>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Child tasks={tasks} addTask={addTask} />
          </Col>
          <Col span={16}>
            <Title level={3}>Task List</Title>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              {tasks.map((task) => (
                <li
                  key={task.id}
                  style={{
                    margin: "10px 0",
                    padding: "10px",
                    border: "1px solid #d9d9d9",
                    borderRadius: "5px",
                  }}
                >
                  <strong>{task.title}</strong> - {task.description} -{" "}
                  <em>{task.status}</em>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default ParentComponent;
