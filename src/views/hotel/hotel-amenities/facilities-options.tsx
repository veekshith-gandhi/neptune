import { Checkbox, Space } from 'antd';
import Card from 'antd/lib/card/Card';
import { FunctionComponent } from 'react';
import './facilities-amenities.scss';

export const FacilitesOptions: FunctionComponent = () => {
  return (
    <Card title="Hotel Facilities" bordered={true} style={{ width: 300 }}>
      <Space direction="vertical">
        <div className="amenities-child-container">
          <Space direction="vertical">
            <Checkbox>Card</Checkbox>
            <Checkbox>Card</Checkbox>
            <Checkbox>Card</Checkbox>
            <Checkbox>Card</Checkbox>
            <Checkbox>Card</Checkbox>
          </Space>
        </div>
      </Space>
    </Card>
  );
};
