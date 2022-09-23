import { createContext, useContext, useState } from 'react';
import { Comment } from './Comment';
import { ChildrenProps } from '../common/ChildrenProps';
import { useUser } from '../user/UserContext';
import { api } from '../common/api';
import { Music } from '../music/Music';

interface CommentContext {
  reset:()=>void
  sendComments:Comment[]
  addComment:(text:string, music:Music)=>void
}

const commentContext = createContext({} as CommentContext);

export function CommentContextProvider({ children }:ChildrenProps) {
  const [sendComments, setSendComments] = useState<Comment[]>([]);
  const { user } = useUser();

  async function addComment(text:string, music:Music) {
    const comment:Comment = {
      text,
      owner: user,
      liked: false,
      sending: true,
      likesCount: 0,
      repliesCount: 0,
      id: Math.random(),
      createdAt: Date.now().toString(),
    };
    setSendComments((old) => [...old, comment]);
    const url = `/musics/${music.id}/comments`;
    try {
      const res = await api.post(url, text);
      comment.sending = false;
    } catch {
      comment.error = true;
    }
    setSendComments((old) => [...old]);
  }

  function reset() {
    setSendComments([]);
  }

  return (
    <commentContext.Provider value={{
      reset,
      addComment,
      sendComments,
    }}
    >
      {children}
    </commentContext.Provider>
  );
}

export function useComment() {
  return useContext(commentContext);
}
