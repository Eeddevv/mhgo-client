import { Button, Space, Typography } from 'antd';
import ProfileInfo from 'widgets/ProfileInfo/ui/ProfileInfo.tsx';
import ProfileTabs from 'widgets/ProfileInfo/ui/ProfileTabs.tsx';
import { UserSchema } from 'entities/User/model/types/types.ts';
import { FC, useEffect, useState } from 'react';
import { formatDateDMY } from 'shared/lib/helpers/date/dateFormatDMY.ts';
import { Link } from 'react-router-dom';
import { getRouteSettings } from 'shared/consts/router.ts';
import {
  useSubscribeUser,
  useUnsubscribeUser,
} from 'features/Following/api/following.api.ts';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch.ts';

interface ProfileWidgetProps {
  profile: UserSchema;
}

const ProfileWidget: FC<ProfileWidgetProps> = ({ profile }) => {
  const [subscribeUser, { data, isLoading }] = useSubscribeUser();
  const [
    unsubscribeUser,
    { data: unsubscribeData, isLoading: unsubscribeLoading },
  ] = useUnsubscribeUser();
  const dispatch = useAppDispatch();
  const [countFollowers, setCountFollowers] = useState<null | number>(null);
  const [localIsFollowing, setLocalIsFollowing] = useState(profile.isFollowing);

  const toggleSubscribe = () => {
    if (localIsFollowing) {
      unsubscribeUser({ userId: profile.userId });
    } else {
      subscribeUser({ userId: profile.userId });
    }
  };

  useEffect(() => {
    if (data) {
      setCountFollowers(data);
      setLocalIsFollowing(true);
    }
  }, [data, profile, dispatch]);

  useEffect(() => {
    if (unsubscribeData) {
      setCountFollowers(unsubscribeData);
      setLocalIsFollowing(false);
    }
  }, [unsubscribeData, profile, dispatch]);

  return (
    <>
      <Space
        direction='vertical'
        style={{
          width: '50%',
          background: '#fff',
          border: '1px solid #DCE1E6',
          borderRadius: 10,
          padding: '14px 18px',
        }}
      >
        <Space
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography.Text>
            На MasterhubGO с {formatDateDMY(profile.createdAt)}
          </Typography.Text>
          <Space>
            <Space>
              <Typography.Text>
                Подписки: {profile.followingCount}
              </Typography.Text>
            </Space>
            <Space>
              <Typography.Text>
                Подписчики: {countFollowers ?? profile.followersCount}
              </Typography.Text>
            </Space>
          </Space>
        </Space>
        <Space
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <ProfileInfo profile={profile} />
          {profile.isCurrentUserProfile ? (
            <Space>
              <Button type='primary'>
                <Link to={getRouteSettings()}>Редактировать профиль</Link>
              </Button>
            </Space>
          ) : (
            <Space>
              <Button>Написать</Button>
              <Button
                onClick={toggleSubscribe}
                loading={isLoading || unsubscribeLoading}
                type='primary'
              >
                {localIsFollowing ? 'Отписаться' : 'Подписаться'}
              </Button>
            </Space>
          )}
        </Space>
        <Space>
          <ProfileTabs profile={profile} />
        </Space>
      </Space>
    </>
  );
};

export default ProfileWidget;
