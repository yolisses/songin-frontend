import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
import { Comment } from './Comment';
import { CommentLikeButton } from './CommentLikeButton';

interface CommentItemProps{
    comment:Comment
}

export function CommentItem({ comment }:CommentItemProps) {
  return (
    <div className="flex flex-row items-start gap-2 w-full">
      <img
        src={comment.user?.image}
        alt={comment.user?.nick}
        className="aspect-square h-9 rounded-full"
      />
      <div className="flex-1">
        <div className="text-sm opacity-50">
          <Link
            to={`/@${comment.user?.nick}`}
            className="hover:underline"
          >
            {comment.user?.nick}
          </Link>
          <span className="text-xs opacity-50 pl-4">
            {format(comment.createdAt)}
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
        {comment.repliesCount === 1 ? 'reply' : 'replies'}
        <FaChevronRight size={10} />
      </button>
      )}
      </div>
      <CommentLikeButton comment={comment} />
    </div>
  );
}
