// import { Typography } from "antd/lib"; // ❌ Uncaught ReferenceError: import_react$1235 is not defined on PROD
import { Typography } from "antd"; // ✅ Work as expected

const { Paragraph } = Typography;

function App() {
  return <Paragraph>ABC</Paragraph>;
}

export default App;
