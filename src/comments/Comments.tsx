import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { Comment } from './Comment';
import { CommentItem } from './CommentItem';

export function Comments() {
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
    <div className="flex flex-col gap-2 flex-1">
      {comments.map((comment) => (
        <CommentItem comment={comment} />
      ))}
    </div>
  );
}
