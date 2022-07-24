export interface PostData {
  author: string;
  bio: string;
  title: string;
  content: string;
  upvotes: { count: number; users: string[] };
  downvotes: { count: number; users: string[] };
  replies: { id: string; name: string; text: string }[];
  image?: string;
}
