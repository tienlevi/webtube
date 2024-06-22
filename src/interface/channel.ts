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
  tabs: [{ name: string; data: string }];
}

export interface Shorts {
  nextpage: null;
  content: [
    {
      duration: number;
      isShort: boolean;
      shortDescription: null;
      thumbnail: string;
      title: string;
      type: string;
      uploaded: number;
      uploadedDate: string;
      uploaderAvatar: string;
      uploaderName: string;
      uploaderUrl: string;
      uploaderVerified: boolean;
      url: string;
      views: number;
    }
  ];
}
