import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { Row, Col, Typography, Card, Button } from "antd";
import { ModuleConn } from "ui/types/ModuleConn";
import "./App.css";

function App() {
  const [moduleConns, setModuleConns] = useState<ModuleConn[]>();
  const [loading, setLoading] = useState<boolean>(false);

  const toggleVisibleModule = async (currItem: ModuleConn) => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:8000/api/page-node-connectors",
        {
          method: "PUT", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify({
            id: currItem.id,
            isActive: !currItem.isActive,
          }), // body data type must match "Content-Type" header
        }
      );
      const resResult: { data: ModuleConn } = await response.json();
      const newModuleConn: ModuleConn = resResult.data;
      const moduleConnsTemp: ModuleConn[] = [];
      if (Array.isArray(moduleConns)) {
        moduleConns.forEach((item) => {
          if (item.id === newModuleConn.id) {
            moduleConnsTemp.push(newModuleConn);
          } else {
            moduleConnsTemp.push({ ...item });
          }
        });
        setModuleConns(moduleConnsTemp);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const pageNodeConnRes = await fetch(
        "http://localhost:8000/api/page-node-connectors?ModulePageId=1"
      );
      const pageNodeConn: { data: ModuleConn[] } = await pageNodeConnRes.json();
      setModuleConns(pageNodeConn.data);
    };
    getData();
  }, []);

  return (
    <>
      <Typography.Title>Homepage Modules</Typography.Title>
      {Array.isArray(moduleConns) ? (
        <div>
          <Row gutter={16}>
            {moduleConns.map((item) => (
              <Col key={item.id}>
                <Card title={item.ModuleNode.name}>
                  <p>Page: {item.ModulePage.code}</p>
                  <p>Visible: {"" + item.isActive}</p>
                  <Button
                    disabled={loading}
                    onClick={() => toggleVisibleModule(item)}
                  >
                    {item.isActive ? "Hide" : "Show"}
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
