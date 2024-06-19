export interface Channel {
  id: string;
  name: string;
  avatarUrl: string;
  bannerUrl: string;
  description: string;
  nextpage: string;
  subscriberCount: number;
  verified: boolean;
  relatedStreams: [
    {
      url: string;
      type: string;
      title: string;
      thumbnail: string;
      uploaderName: string;
      uploaderUrl: string;
      uploaderAvatar: null;
      uploadedDate: string;
      shortDescription: string;
      duration: number;
      views: number;
      uploaded: number;
      uploaderVerified: boolean;
      isShort: boolean;
    }
  ];
}

export default Channel;
