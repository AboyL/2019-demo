import styles from './index.less';
import { Select } from 'antd';
const { Option } = Select;
export default function () {
  return (
    <div className={styles.normal}>
      {/* <Select className="select" defaultValue="lucy" style={{ width: 120 }}> */}
      <Select className={styles.select} defaultValue="lucy" style={{ width: 120 }}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
      </Select>
    </div>
  );
}
