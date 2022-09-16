import { FaThumbsUp } from 'react-icons/fa';
import { Comment } from './Comment';

interface CommentLikeButtonProps{
    comment:Comment
}

export function CommentLikeButton({ comment }:CommentLikeButtonProps) {
  return (
    <button className="text-sm p-1 opacity-50">
      <FaThumbsUp />
      {!!comment.likesCount && comment.likesCount}
    </button>
  );
}
