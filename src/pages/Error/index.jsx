import './style.css';
import 'antd/dist/reset.css';
import { Link } from 'react-router-dom';
import { Button, Result } from 'antd';

const Error = () => {
  return (
    <Result
    status="404"
    title="ERROR!!!"
    subTitle="Sehife tapilmadi."
    extra={<Link to='/'><Button type="primary">Home Sehife</Button></Link>}
  />
  )
}

export default Error;
