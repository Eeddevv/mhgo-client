import { FC } from 'react';
import { PublicationSchema } from 'entities/Publications/model/types/types.ts';
import Meta from 'antd/lib/card/Meta';
import Card from 'antd/lib/card/Card';
import { Space } from 'antd';

interface PublicationListProps {
  publications: PublicationSchema[];
}
const PublicationList: FC<PublicationListProps> = ({ publications }) => {
  return (
    <>
      {publications && (
        <Space>
          {publications.map((publication) => (
            <Card key={publication.id} hoverable style={{ width: 240 }}>
              <Meta
                title='Europe Street beat'
                description={publication.description}
              />
            </Card>
          ))}
        </Space>
      )}
    </>
  );
};

export default PublicationList;
