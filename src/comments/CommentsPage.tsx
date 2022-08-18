import { useEffect, useState } from 'react';
import { FaChevronRight, FaThumbsUp } from 'react-icons/fa';
import { format } from 'timeago.js';
import { api } from '../api/api';
import { Comment } from './Comment';

export function CommentsPage() {
  const [comments, setComments] = useState<Comment[]>();

  async function getComments() {
    const res = await api.get('comments', {
      params: {
        _expand: 'user',
      },
    });
    setComments(res.data);
  }

  useEffect(() => {
    getComments();
  }, []);

  if (!comments) return null;

  return (
    <div className="flex flex-col gap-4 p-2 w-full">
      {comments.map((comment) => (
        <div className="flex flex-row items-start gap-2 w-full">
          <img
            alt={comment.user?.nickname}
            src={comment.user?.image}
            className="aspect-square h-9 rounded-full bg-gray-200"
          />
          <div className="flex-1">
            <div className="text-sm opacity-50">
              {comment.user?.nickname}
              <span className="text-xs opacity-50 pl-4">
                {format(comment.createdAt, 'pt')}
              </span>
            </div>
            <div>
              {comment.text}
            </div>
            {!!comment.repliesCount
            && (
            <button className="text-sm opacity-50 flex flex-row gap-1 items-center pt-1">
              {comment.repliesCount}
              {' '}
              resposta
              {comment.repliesCount === 1 ? '' : 's'}
              <FaChevronRight size={10} />
            </button>
            )}
          </div>
          <button className="text-sm opacity-50">
            <FaThumbsUp />
            {!!comment.likesCount && comment.likesCount}
          </button>
        </div>
      ))}

    </div>
  );
}
