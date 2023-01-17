import React from "react";
import { Input, Button, List, Typography } from "antd";

function App() {
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];

  return (
    <div style={{ marginTop: "20px", marginLeft: "10px" }}>
      <div>
        <Input
          placeholder="input info"
          style={{ width: "300px", marginRight: "5px" }}
        />
        <Button type="primary">提交</Button>
      </div>

      <List
        style={{ width: "350px", marginTop: "10px" }}
        size="small"
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  );
}

export default App;
