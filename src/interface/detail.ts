interface Details {
  title: string;
  description: string;
  uploadDate: string;
  uploader: string;
  uploaderUrl: string;
  uploaderAvatar: string;
  thumbnailUrl: string;
  hls: string;
  dash: null;
  lbryId: string;
  category: string;
  license: string;
  visibility: string;
  tags: string[];
  metaInfo: [];
  uploaderVerified: boolean;
  duration: string;
  views: number;
  likes: string;
  dislikes: string;
  uploaderSubscriberCount: number;
  uploaded: string;
  audioStreams: [
    {
      url: string;
      format: string;
      quality: string;
      mimeType: string;
      codec: null;
      audioTrackId: null;
      audioTrackName: null;
      audioTrackType: null;
      audioTrackLocale: null;
      videoOnly: boolean;
      itag: number;
      bitrate: number;
      initStart: number;
      initEnd: number;
      indexStart: number;
      indexEnd: number;
      width: number;
      height: number;
      fps: number;
      contentLength: number;
    }
  ];
  videoStreams: [
    {
      url: string;
      format: string;
      quality: string;
      mimeType: string;
      codec: null;
      audioTrackId: null;
      audioTrackName: null;
      audioTrackType: null;
      audioTrackLocale: null;
      videoOnly: boolean;
      itag: number;
      bitrate: number;
      initStart: number;
      initEnd: number;
      indexStart: number;
      indexEnd: number;
      width: number;
      height: number;
      fps: number;
      contentLength: number;
    }
  ];
  relatedStreams: [
    {
      url: string;
      type: string;
      title: string;
      thumbnail: string;
      uploaderName: string;
      uploaderUrl: string;
      uploaderAvatar: string;
      uploadedDate: string;
      shortDescription: null;
      duration: number;
      views: number;
      uploaded: number;
      uploaderVerified: boolean;
      isShort: boolean;
    }
  ];
  subtitles: [
    {
      url: string;
      mimeType: string;
      name: string;
      code: string;
      autoGenerated: boolean;
    }
  ];
  livestream: boolean;
  proxyUrl: string;
  chapters: [];
  previewFrames: [
    {
      urls: string[];
      frameWidth: number;
      frameHeight: number;
      totalCount: number;
      durationPerFrame: number;
      framesPerPageX: number;
      framesPerPageY: number;
    }
  ];
}

export default Details;