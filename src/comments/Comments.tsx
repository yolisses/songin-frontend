import { useEffect, useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { api } from '../api/api';
import { Music } from '../music/Music';
import { Comment } from './Comment';
import { CommentItem } from './CommentItem';

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
      <div className="w-full flex flex-row gap-2 p-2 items-center">
        <input
          type="text"
          placeholder="E aí, o que achou?"
          className="p-2 bg-transparent flex-1 rounded-full border-2 border-opacity-50"
        />
        <button className="p-2 text-lg group">
          <FaPaperPlane className="group-active:scale-50 transition-transform" />
        </button>
      </div>
    </>
  );
}
