export interface TalkItem {
    content: {
      text: string;
      images: string[];
      video?: {
        type: 'bilibili' | 'youtube' | 'online';
        url: string;
        id?: string;
      };
      doubanMovie?: {
        url: string;
        title: string;
        image: string;
        director: string;
        rating: string;
        runtime: string;
      };
      doubanBook?: {
        url: string;
        title: string;
        image: string;
        author: string;
        pubDate: string;
        rating: string;
      };
      externalLink?: {
        url: string;
        title: string;
        favicon: string;
      };
    };
    user: {
      username: string;
      nickname: string;
      avatarUrl: string;
    };
    date: string;
    location: string;
    tags: string[];
  }