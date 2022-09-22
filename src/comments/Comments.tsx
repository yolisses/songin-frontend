import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { Comment } from './Comment';
import { Music } from '../music/Music';
import { CommentItem } from './CommentItem';
import { CommentInput } from './CommentInput';
import { repeat } from '../common/repeat';
import { useComment } from './CommentContext';

interface CommentsProps{
  music:Music
}

export function Comments({ music }:CommentsProps) {
  const [comments, setComments] = useState<Comment[]>();
  const loading = comments === undefined;
  const { sendComments, reset } = useComment();

  async function getComments() {
    const res = await api.get(`/musics/${music.id}/comments`);
    setComments(res.data);
  }

  useEffect(() => {
    getComments();
    return reset;
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4 flex-1 overflow-auto p-2">
        {loading
          ? repeat(<CommentItem />, 10)
          : [...comments,
            ...sendComments].map((comment) => (
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
