import TextArea from 'antd/lib/input/TextArea';
import { useCreatePublication } from 'entities/Publications/api/publication.api.ts';
import { ChangeEvent, useEffect, useState } from 'react';
import { Button, Form, Typography } from 'antd';
import { PublicationCreateBody } from 'entities/Publications/model/types/types.ts';

const CreatePublication = () => {
  const [createPublication, { data, isLoading, isError }] =
    useCreatePublication();
  const [value, setValue] = useState<string>('');
  const [form] = Form.useForm();
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    return setValue(event.target.value);
  };

  const onFinish = (event: PublicationCreateBody) => {
    createPublication(event);
    form.resetFields();
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div style={{ width: '50%' }}>
      <Form onFinish={onFinish} form={form}>
        <Form.Item
          style={{ margin: 0 }}
          name='description'
          rules={[{ required: true, message: 'Поле не может быть пустым' }]}
        >
          <TextArea
            placeholder='Напишите, что думаете'
            style={{ height: 50, resize: 'none' }}
            value={value}
            onChange={handleChange}
          />
        </Form.Item>
        <Button
          loading={isLoading}
          style={{ marginTop: 10 }}
          type='primary'
          htmlType='submit'
        >
          Опубликовать
        </Button>
        {isError && (
          <Typography.Text type='danger'>
            При создании публиукации произошла ошибка, повторите попытку
          </Typography.Text>
        )}
      </Form>
    </div>
  );
};

export default CreatePublication;
