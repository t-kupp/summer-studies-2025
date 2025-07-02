interface SocialUser {
  id: string;
  username: string;
  email: string;
  joinDate: Date;
  profile: { bio?: string; avatarUrl?: string; followerCount: number; followingCount: number };
  isVerified?: boolean;
}

interface SocialComment {
  id: string;
  author: SocialUser;
  content: string;
  createdAt: Date;
  likes: number;
  parentPost: string;
}

interface SocialPost {
  id: string;
  author: SocialUser;
  content: string;
  createdAt: Date;
  likes: number;
  comments: SocialComment[];
  tags?: string[];
}

interface ActivitySummary {
  totalPosts: number;
  totalComments: number;
  totalLikesReceived: number;
  mostUsedTags: string[];
}

const socialUsers: SocialUser[] = [
  {
    id: 'user-001',
    username: 'techguru_sarah',
    email: 'sarah@techstartup.com',
    joinDate: new Date('2023-01-15'),
    profile: {
      bio: 'Senior Frontend Developer | TypeScript enthusiast | Building the future',
      avatarUrl: 'https://example.com/avatars/sarah.jpg',
      followerCount: 15000,
      followingCount: 850,
    },
    isVerified: true,
  },
  {
    id: 'user-002',
    username: 'mike_codes',
    email: 'mike@example.com',
    joinDate: new Date('2023-03-22'),
    profile: {
      bio: 'Full-stack developer learning in public',
      followerCount: 2300,
      followingCount: 450,
    },
  },
  {
    id: 'user-003',
    username: 'designqueen',
    email: 'lisa@design.co',
    joinDate: new Date('2022-11-08'),
    profile: {
      bio: 'UI/UX Designer | Creating beautiful digital experiences',
      avatarUrl: 'https://example.com/avatars/lisa.jpg',
      followerCount: 8500,
      followingCount: 320,
    },
    isVerified: true,
  },
  {
    id: 'user-004',
    username: 'startup_dave',
    email: 'dave@startup.io',
    joinDate: new Date('2023-06-10'),
    profile: {
      followerCount: 580,
      followingCount: 1200,
    },
  },
];

const socialComments: SocialComment[] = [
  {
    id: 'comment-001',
    author: socialUsers[1],
    content:
      'This is exactly what I needed to hear! TypeScript has been a game changer for me too.',
    createdAt: new Date('2024-01-20T10:30:00'),
    likes: 23,
    parentPost: 'post-001',
  },
  {
    id: 'comment-002',
    author: socialUsers[2],
    content: 'Love seeing more developers embrace type safety! 💪',
    createdAt: new Date('2024-01-20T11:15:00'),
    likes: 15,
    parentPost: 'post-001',
  },
  {
    id: 'comment-003',
    author: socialUsers[3],
    content: 'Still learning TypeScript myself. Any resources you recommend?',
    createdAt: new Date('2024-01-20T14:20:00'),
    likes: 8,
    parentPost: 'post-001',
  },
  {
    id: 'comment-004',
    author: socialUsers[0],
    content: 'Keep going! The concepts click around day 45-60. You got this!',
    createdAt: new Date('2024-01-21T09:00:00'),
    likes: 31,
    parentPost: 'post-002',
  },
  {
    id: 'comment-005',
    author: socialUsers[3],
    content: 'The accessibility focus is amazing. More teams should prioritize this.',
    createdAt: new Date('2024-01-19T16:45:00'),
    likes: 12,
    parentPost: 'post-003',
  },
  {
    id: 'comment-006',
    author: socialUsers[1],
    content:
      'Been there! Building my side project solo too. Happy to connect and share experiences.',
    createdAt: new Date('2024-01-22T12:30:00'),
    likes: 5,
    parentPost: 'post-004',
  },
  {
    id: 'comment-007',
    author: socialUsers[2],
    content: 'Strict mode saved me so many debugging hours. Great tip!',
    createdAt: new Date('2024-01-18T20:15:00'),
    likes: 18,
    parentPost: 'post-005',
  },
];

const socialPosts: SocialPost[] = [
  {
    id: 'post-001',
    author: socialUsers[0],
    content:
      'Just shipped a new TypeScript feature! The type safety is incredible. No more runtime errors! 🚀',
    createdAt: new Date('2024-01-20'),
    likes: 245,
    comments: [],
    tags: ['typescript', 'webdev', 'programming'],
  },
  {
    id: 'post-002',
    author: socialUsers[1],
    content:
      'Day 30 of learning TypeScript. Finally understanding interfaces vs types. The learning curve is steep but worth it!',
    createdAt: new Date('2024-01-21'),
    likes: 89,
    comments: [],
  },
  {
    id: 'post-003',
    author: socialUsers[2],
    content:
      'New design system launched! Clean, modern, and fully accessible. Proud of the team effort on this one.',
    createdAt: new Date('2024-01-19'),
    likes: 156,
    comments: [],
    tags: ['design', 'ux', 'accessibility'],
  },
  {
    id: 'post-004',
    author: socialUsers[3],
    content: 'Bootstrapping is hard. Anyone else building solo right now?',
    createdAt: new Date('2024-01-22'),
    likes: 12,
    comments: [],
  },
  {
    id: 'post-005',
    author: socialUsers[0],
    content: 'Pro tip: Use strict mode in TypeScript. Your future self will thank you.',
    createdAt: new Date('2024-01-18'),
    likes: 312,
    comments: [],
    tags: ['typescript', 'tips'],
  },
];

const ActivitySummaries: ActivitySummary[] = [];

// Add comments to posts
socialPosts[0].comments = [socialComments[0], socialComments[1], socialComments[2]]; // post-001 gets 3 comments
socialPosts[1].comments = [socialComments[3]]; // post-002 gets 1 comment
socialPosts[2].comments = [socialComments[4]]; // post-003 gets 1 comment
socialPosts[3].comments = [socialComments[5]]; // post-004 gets 1 comment
socialPosts[4].comments = [socialComments[6]]; // post-005 gets 1 comment

function createPost(author: SocialUser, content: string, tags?: string[]): SocialPost {
  const newPost: SocialPost = {
    id: Date.now().toString(),
    author,
    content,
    createdAt: new Date(),
    likes: 0,
    comments: [],
    tags,
  };
  socialPosts.push(newPost);
  return newPost;
}

function addComment(post: SocialPost, author: SocialUser, content: string): SocialComment {
  const newComment: SocialComment = {
    id: Date.now().toString(),
    author,
    content,
    createdAt: new Date(),
    likes: 0,
    parentPost: post.id,
  };
  socialComments.push(newComment);
  post.comments.push(newComment);
  return newComment;
}

function getMostLikedPosts(posts: SocialPost[], count: number): SocialPost[] {
  const sortedPosts = posts.sort((a, b) => b.likes - a.likes);
  return sortedPosts.slice(0, count);
}

function getUserActivitySummary(user: SocialUser, posts: SocialPost[]): ActivitySummary {
  // Calculate user's activity stats
  // - Count posts by this user
  // - Count comments by this user (across all posts)
  // - Sum likes on user's posts + likes on user's comments
  // - Find most frequently used tags by this user
  const newActivitySummary = {
    totalPosts: posts.filter((post) => post.author === user).length,
    totalComments: posts
      .flatMap((post) => post.comments)
      .filter((comment) => comment.author === user).length,
    totalLikesReceived: posts
      .filter((post) => post.author === user)
      .reduce((total, post) => total + post.likes, 0),
    mostUsedTags: [],
  };

  return newActivitySummary;
}

// Testing functions;
console.log(
  'createPost(socialUsers[3], "I just made a new post!", ["#new", "#cool"]):',
  createPost(socialUsers[3], 'I just made a new post!', ['#new', '#cool'])
);

console.log(
  'addComment(socialPosts[0], socialUsers[1], "Hey, nice post!"):',
  addComment(socialPosts[0], socialUsers[1], 'Hey, nice post!')
);

console.log('getMostLikedPosts(socialPosts, 3):', getMostLikedPosts(socialPosts, 3));

console.log(
  'getUserActivitySummary(socialUsers[0], socialPosts):',
  getUserActivitySummary(socialUsers[0], socialPosts)
);
