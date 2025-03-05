import { Steps, Breadcrumb, Input } from "antd";

function Process() {
  // const description = "this is a description"

  return (
    <div style={{ margin: "2%" }}>
      <div>
        <Breadcrumb
          items={[
            {
              title: "Home",
            },
            {
              title: "Process",
            },
          ]}
        />
      </div>
      <div style={{ margin: "2% 10% 0 10%" }}>
        <Steps
          size="small"
          current={1}
          items={[
            {
              title: "Product Information",
            },
            {
              title: "Measurements",
            },
            {
              title: "Payments",
            },
          ]}
        />
      </div>
      <div style={{ margin: "5% 20% 0 20%", border: "1px solid black", width:"50%" }}>
        <Input  style={{margin:"5%",overflow:"auto",width:"90%"}}  placeholder="Past your Link here..." />
        <Input style={{margin:"5%",overflow:"auto",width:"90%"}}  placeholder="Past your Link here..." />
        <Input style={{margin:"5%",overflow:"auto",width:"90%"}}  placeholder="Past your Link here..." />
      </div>
    </div>
  );
}

export default Process;
