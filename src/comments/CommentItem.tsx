import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
import { Comment } from './Comment';
import { CommentLikeButton } from './CommentLikeButton';
import { CommentRepliesButton } from './CommentRepliesButton';

interface CommentItemProps{
    comment?:Comment
}

export function CommentItem({ comment }:CommentItemProps) {
  const loading = comment === undefined;

  return (
    <div className="flex flex-row items-start gap-2 w-full">
      {loading
        ? <div className="aspect-square h-9 rounded-full loading" />
        : (
          <img
            alt={comment.user?.nick}
            src={comment.user?.image}
            className="aspect-square h-9 rounded-full"
          />
        )}
      <div className="flex-1">
        <div className="text-sm opacity-50">
          {loading
            ? <div className="loading w-20 mb-1">&nbsp;</div>
            : (
              <>
                <Link
                  to={`/@${comment.user?.nick}`}
                  className="hover:underline"
                >
                  {comment.user?.nick}
                </Link>
                <span className="text-xs pl-4">
                  {format(comment.createdAt)}
                </span>
              </>
            )}
        </div>
        <div>
          {loading
            ? (
              <>
                <div className="loading mb-1">&nbsp;</div>
                <div className="loading w-1/2 mb-1">&nbsp;</div>
              </>
            )
            : comment.text}
        </div>
        {!!comment?.repliesCount && (
        <CommentRepliesButton comment={comment} />
        )}
      </div>
      {comment && <CommentLikeButton comment={comment} />}
    </div>
  );
}
