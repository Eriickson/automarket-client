export interface Benefits {
  posts: number;
  branches: number;
  imageCoverProfile: number;
  images: number;
}

export interface Plan {
  id: string;
  name: string;
  pricing: number;
  description: string;
  benefits: Benefits;
}
