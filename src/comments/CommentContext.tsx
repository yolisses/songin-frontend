import { createContext, useContext, useState } from 'react';
import { Comment } from './Comment';
import { ChildrenProps } from '../common/ChildrenProps';

interface CommentContext {
    reset:()=>void
    sendComments:Comment[]
    addComment:(comment:Comment)=>void
}

const commentContext = createContext({} as CommentContext);

export function CommentContextProvider({ children }:ChildrenProps) {
  const [sendComments, setSendComments] = useState<Comment[]>([]);

  function addComment(comment:Comment) {
    setSendComments((old) => [...old, comment]);
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
