import React, { useEffect } from "react";
import { Modal, Descriptions, Form, Input, Button, Rate } from "antd";

export default function ViewApplicantModal(props) {
  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, [props.data]);

  return (
    <Modal
      visible={props.visible}
      title={props.data.name}
      onOk={props.close}
      onCancel={props.close}
      footer={null}
      // width="80vw"
      // bodyStyle={{ height: "80vh" }}
      centered
      forceRender
    >
      <Form form={form} name="edit-applicant" hideRequiredMark>
        <Descriptions bordered column={1}>
          <Descriptions.Item label="Stage">
            <Form.Item
              style={{ margin: 0 }}
              name="stage"
              initialValue={props.data.stage}
              required
            >
              <Input bordered={false} style={{ padding: 0, margin: 0 }} />
            </Form.Item>
          </Descriptions.Item>
          <Descriptions.Item label="Email">
            <a href={`mailto:${props.data.email}`}>{props.data.email}</a>
          </Descriptions.Item>
          <Descriptions.Item label="Phone">
            {props.data.phone ? (
              <a href={`tel:${props.data.phone}`}>{props.data.phone}</a>
            ) : (
              "-"
            )}
          </Descriptions.Item>
          <Descriptions.Item label="LinkedIn">
            {props.data.linkedin ? (
              <a href={props.data.linkedin} target="_blank" rel="noreferrer">
                {props.data.linkedin}
              </a>
            ) : (
              "-"
            )}
          </Descriptions.Item>
          <Descriptions.Item label="Website">
            {props.data.website ? (
              <a href={props.data.website} target="_blank" rel="noreferrer">
                {props.data.website}
              </a>
            ) : (
              "-"
            )}
          </Descriptions.Item>
          <Descriptions.Item label="Introduction">
            {props.data.introduction ? props.data.introduction : "-"}
          </Descriptions.Item>
          <Descriptions.Item label="Notes">
            <Form.Item style={{ margin: 0 }} name="notes">
              <Input.TextArea
                bordered={false}
                style={{ padding: 0, margin: 0 }}
              />
            </Form.Item>
          </Descriptions.Item>
          <Descriptions.Item label="Rating">
            <Form.Item style={{ margin: 0 }} name="rating">
              {/* add default value */}
              <Rate />
            </Form.Item>
          </Descriptions.Item>
        </Descriptions>
        <div style={{ textAlign: "end", marginTop: "1rem" }}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </div>
      </Form>
    </Modal>
  );
}