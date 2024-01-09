import { PostHome } from '@/src/query/post.query'
import React from 'react'
import { PostLayout } from './PostLayout';
import Link from 'next/link';
import { Heart, MessageCircle } from 'lucide-react';

type PostProps = {
    post: PostHome
};

export const Post = ({post}: PostProps) => {
  return (
    <PostLayout user={post.user} postId={post.id} createdAt={post.createdAt}>
        <Link href={`/posts/${post.id}`} className='text-sm text-foreground'>
            {post.content}
        </Link>
        <div className='flex gap-2 items-center'>
            <button>
                <Heart size={20} className='hover:stroke-red-400'/>
            </button>
            <button>
                <MessageCircle size={20} className='hover:stroke-gray-400'/>
            </button>
        </div>
        <div>
            <Link className="text-muted-foreground text-sm" href={`/posts/${post.id}`}>{post._count.likes} likes</Link>
            {' · '}
            <Link className="text-muted-foreground text-sm" href={`/posts/${post.id}`}>{post._count.replies} comments</Link>
        </div>
    </PostLayout>
  )
}