import { Link } from 'react-router-dom';
import { LoadingLine } from '../common/LoadingLine';
import { Comment } from './Comment';
import { CommentLikeButton } from './CommentLikeButton';
import { CommentRepliesButton } from './CommentRepliesButton';
import { CommentTimeIndicator } from './CommentTimeIndicator';

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
            alt={comment.owner?.nick}
            src={comment.owner?.image}
            className="aspect-square h-9 rounded-full"
          />
        )}
      <div className="flex-1">
        <div className="text-sm opacity-50">
          {loading
            ? <LoadingLine w={20} />
            : (
              <>
                <Link
                  to={`/@${comment.owner?.nick}`}
                  className="hover:underline"
                >
                  {comment.owner?.nick}
                </Link>
                <CommentTimeIndicator
                  comment={comment}
                />
              </>
            )}
        </div>
        <div>
          {loading
            ? (
              <>
                <LoadingLine />
                <LoadingLine className="w-1/2" />
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
