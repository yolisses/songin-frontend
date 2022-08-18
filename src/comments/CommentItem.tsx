import { FaChevronRight, FaThumbsUp } from 'react-icons/fa';
import { format } from 'timeago.js';
import { Comment } from './Comment';

interface CommentItemProps{
    comment:Comment
}

export function CommentItem({ comment }:CommentItemProps) {
  return (
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
      <button className="text-sm p-1 opacity-50">
        <FaThumbsUp />
        {!!comment.likesCount && comment.likesCount}
      </button>
    </div>
  );
}
