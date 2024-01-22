import { ProfileWidget } from 'widgets/ProfileInfo';
import { useLocation } from 'react-router-dom';
import { useGetUser } from 'entities/User/api/user.api.ts';
import { useEffect, useState } from 'react';
import { UserSchema } from 'entities/User/model/types/types.ts';
import { Space } from 'antd';
import CreatePublication from 'features/CreatePublication/ui/CreatePublication.tsx';
import ProfileNavigation from 'widgets/ProfileNavigation/ui/ProfileNavigation.tsx';
import { useGetAllPublications } from 'entities/Publications/api/publication.api.ts';
import { PublicationSchema } from 'entities/Publications/model/types/types.ts';

const ProfilePage = () => {
  const { pathname } = useLocation();
  const segments = pathname.split('/');
  const userId = segments[2];

  const [profile, setProfile] = useState<null | UserSchema>(null);
  const { data } = useGetUser({ userId: userId });
  const [getAllPublications, { data: publicationsData }] =
    useGetAllPublications();
  const [publications, setPublications] = useState<null | PublicationSchema[]>(
    null
  );
  const [init, setInit] = useState<boolean>(false);

  const fetchPublications = (userId: string) => {
    getAllPublications({ creatorId: userId });
  };

  useEffect(() => {
    if (publicationsData) {
      setPublications(publicationsData);
      setInit(true);
    }
  }, [publicationsData]);

  useEffect(() => {
    if (data) {
      setProfile(data);
      fetchPublications(data.userId);
    }
  }, [data]);

  return (
    <>
      {!init && <div>Loading...</div>}
      {init && profile && (
        <Space direction='vertical' style={{ width: '100%' }}>
          <ProfileWidget profile={profile} />
          <ProfileNavigation
            publications={publications as PublicationSchema[]}
          />
          <CreatePublication />
        </Space>
      )}
    </>
  );
};

export default ProfilePage;
