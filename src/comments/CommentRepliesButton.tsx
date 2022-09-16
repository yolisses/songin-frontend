import { FaChevronRight } from 'react-icons/fa';
import { Comment } from './Comment';

interface Props{
    comment:Comment
}

export function CommentRepliesButton({ comment }:Props) {
  return (
    <button className="text-sm opacity-50 flex flex-row gap-1 items-center pt-1">
      {comment.repliesCount}
      {' '}
      {comment.repliesCount === 1 ? 'reply' : 'replies'}
      <FaChevronRight size={10} />
    </button>
  );
}
