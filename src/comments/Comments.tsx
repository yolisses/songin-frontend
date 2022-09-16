import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { Comment } from './Comment';
import { Music } from '../music/Music';
import { CommentItem } from './CommentItem';
import { CommentInput } from './CommentInput';

interface CommentsProps{
  music:Music
}

export function Comments({ music }:CommentsProps) {
  const [comments, setComments] = useState<Comment[]>();

  async function getComments() {
    const res = await api.get(`/musics/${music.id}/comments`);
    setComments(res.data);
  }

  useEffect(() => {
    getComments();
  }, []);

  if (!comments) return null;

  return (
    <>
      <div className="flex flex-col gap-2 flex-1 overflow-auto p-2">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
          />
        ))}
      </div>
      <CommentInput />
    </>
  );
}
