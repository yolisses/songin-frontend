import { format } from 'timeago.js';
import { Comment } from './Comment';

interface Props{
    comment:Comment
}

export function CommentTimeIndicator({ comment }:Props) {
  return (
    <span className="text-xs pl-4">
      {comment.sending
        ? 'sending'
        : format(comment.createdAt)}
    </span>
  );
}
