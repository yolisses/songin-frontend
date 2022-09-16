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
        ? <div className="aspect-square h-9 rounded-full gradined-loading" />
        : (
          <img
            src={comment.user?.image}
            alt={comment.user?.nick}
            className="aspect-square h-9 rounded-full"
          />
        )}
      <div className="flex-1">
        <div className="text-sm opacity-50">
          {loading
            ? <div className="loading">&nbsp;</div>
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
            ? <div className="loading">&nbsp;</div>
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
