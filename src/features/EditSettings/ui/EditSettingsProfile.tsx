import { Button, DatePicker, Form, Input, Space, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { getUserData } from 'entities/User/model/selectors/getUserData.ts';
import TextArea from 'antd/lib/input/TextArea';
import { UpdateProfileBody } from 'features/EditSettings/models/types/types.ts';
import { useEditInfo } from 'features/EditSettings/api/editSettings.api.ts';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch.ts';
import { usersActions } from 'entities/User/model/slices/user.slice.ts';
import { getRouteProfile } from 'shared/consts/router.ts';

const EditSettingsProfile = () => {
  const user = useSelector(getUserData);
  const [editInfo, { data, isLoading, isError }] = useEditInfo();
  const dispatch = useAppDispatch();
  const onFinish = (event: UpdateProfileBody) => {
    const updateBody: UpdateProfileBody = {
      firstName: event.firstName ?? user.firstName,
      lastName: event.lastName ?? user.lastName,
      email: event.email ?? user.email,
      phone: event.phone ?? user.phone,
      password: event.password ?? user.password,
      birthday: event.birthday ?? user.birthday,
      description: event.description ?? user.description,
      avatar: event.avatar ?? user.avatar,
    };
    console.log(updateBody);
    editInfo(updateBody);
  };

  useEffect(() => {
    if (data) {
      const userDispatch = dispatch(usersActions.setUserData(data));
      if (userDispatch) {
        window.location.href = getRouteProfile();
      }
    }
  }, [data, dispatch]);

  const dateChange = (event: any) => {
    console.log(event);
  };

  return (
    <div>
      <Form
        style={{ display: 'flex', flexWrap: 'wrap' }}
        layout='vertical'
        name='settingsProfile'
        onFinish={onFinish}
        autoComplete='off'
      >
        <Form.Item<UpdateProfileBody>
          label='Имя'
          name='firstName'
          style={{ margin: 5 }}
        >
          <Input defaultValue={user.firstName} />
        </Form.Item>
        <Form.Item<UpdateProfileBody>
          label='Фамилия'
          name='lastName'
          style={{ margin: 5 }}
        >
          <Input defaultValue={user.lastName} />
        </Form.Item>
        <Form.Item<UpdateProfileBody>
          label='Номер телефона'
          name='phone'
          style={{ margin: 5 }}
        >
          <Input />
        </Form.Item>
        <Form.Item<UpdateProfileBody>
          label='Дата рождения'
          name='birthday'
          style={{ margin: 5 }}
        >
          <DatePicker placeholder='' onChange={dateChange} />
        </Form.Item>
        <Form.Item<UpdateProfileBody>
          label='Email'
          name='email'
          style={{ margin: 5 }}
        >
          <Input defaultValue={user.email} />
        </Form.Item>
        <Form.Item<UpdateProfileBody>
          label='Описание профиля'
          name='description'
          style={{ margin: 5, width: '85%' }}
        >
          <TextArea
            style={{ width: '100%', height: '90px', resize: 'none' }}
            defaultValue={user.description ?? ''}
          />
        </Form.Item>

        <Space>
          <Button loading={isLoading} htmlType='submit' type='primary'>
            Сохранить
          </Button>
        </Space>
        {isError && (
          <Space>
            <Typography.Text type='danger'>Error update info</Typography.Text>
          </Space>
        )}
      </Form>
    </div>
  );
};

export default EditSettingsProfile;
