import React from "react";
import "./calendar.scss";
import { Calendar, Select, Radio, Col, Row } from "antd";

const { Group, Button } = Radio;

function onPanelChange(value, mode) {
  console.log(value, mode);
}

function Index() {
  return (
    <div className='site-calendar-customize-header-wrapper'>
      <Calendar
        fullscreen={false}
        headerRender={({ value, type, onChange, onTypeChange }) => {
          const start = 0;
          const end = 12;
          const monthOptions = [];

          const current = value.clone();
          const localeData = value.localeData();
          const months = [];
          for (let i = 0; i < 12; i++) {
            current.month(i);
            months.push(localeData.monthsShort(current));
          }

          for (let index = start; index < end; index++) {
            monthOptions.push(
              <Select.Option className='month-item' key={`${index}`}>
                {months[index]}
              </Select.Option>
            );
          }
          const month = value.month();

          const year = value.year();
          const options = [];
          for (let i = year - 10; i < year + 10; i += 1) {
            options.push(
              <Select.Option key={i} value={i} className='year-item'>
                {i}
              </Select.Option>
            );
          }
          return (
            <div style={{ padding: 10, backgroundColor: "white" }}>
              <div style={{ marginBottom: "10px", backgroundColor: "white" }}>
                Custom header{" "}
              </div>
              <Row style={{ flexWrap: "nowrap" }} gutter={8}>
                <Col style={{ flex: "none", backgroundColor: "white" }}>
                  <Group
                    size='small'
                    onChange={e => onTypeChange(e.target.value)}
                    value={type}
                    style={{ backgroundColor: "white" }}
                  >
                    <Button style={{ backgroundColor: "white" }} value='month'>
                      Month
                    </Button>
                    <Button value='year'>Year</Button>
                  </Group>
                </Col>
                <Col style={{ flex: "auto", backgroundColor: "white" }}>
                  <Select
                    style={{ backgroundColor: "white", color: "black" }}
                    size='small'
                    dropdownMatchSelectWidth={false}
                    className='my-year-select'
                    onChange={newYear => {
                      const now = value.clone().year(newYear);
                      onChange(now);
                    }}
                    value={String(year)}
                  >
                    {options}
                  </Select>
                </Col>
                <Col style={{ flex: "auto", backgroundColor: "white" }}>
                  <Select
                    style={{ backgroundColor: "white" }}
                    size='small'
                    dropdownMatchSelectWidth={false}
                    value={String(month)}
                    onChange={selectedMonth => {
                      const newValue = value.clone();
                      newValue.month(parseInt(selectedMonth, 10));
                      onChange(newValue);
                    }}
                  >
                    {monthOptions}
                  </Select>
                </Col>
              </Row>
            </div>
          );
        }}
        onPanelChange={onPanelChange}
      />
    </div>
  );
}

export default Index;
