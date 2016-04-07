import {SocialMediaAccount} from './social-media-account';
export interface Speaker {
  name: string;
  slug: string;
  company: string;
  companyUrl: string;
  bio: string;
  talks: string[];
  social: SocialMediaAccount[];
}
