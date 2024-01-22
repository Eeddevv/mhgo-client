export interface PublicationCreateBody {
  description: string;
  images: string[] | null;
}

export interface PublicationSchema {
  id: number;
  description: string;
  images: string[] | null;
  creatorId: string;
  updatedAt: string;
  createdAt: string;
}
