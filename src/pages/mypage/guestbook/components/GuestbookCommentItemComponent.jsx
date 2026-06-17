import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommentItemComponent from '../../commons/comment/CommentItemComponent';
import CommentInputComponent from '../../commons/comment/CommentInputComponent';
import likeIcon from '../../../../components/resources/like.svg';
import likeFillIcon from '../../../../components/resources/like-fill2.svg';
import defaultProfile from '../../../../components/resources/default-profile.svg';
import { formatRelativeTime } from '../../../../utils/relativeTime';
import { goToMemberProfile } from '../../../../utils/profileNavigation';

const GuestbookCommentItemComponent = ({
  comment,
  currentUser,
  currentUserId,
  isPageOwner,
  onLike,
  onReplyToggle,
  replyOpen,
  replyText,
  onReplyChange,
  onReplySubmit,
  activeMenuId,
  onMenuToggle,
  onCloseMenu,
  onEdit,
  onDelete,
  onEditReply,
  onDeleteReply,
  onRereplySubmit,
  onEditRereply,
  onDeleteRereply,
  onReport,
}) => {
  const navigate = useNavigate();
  const isMyComment = comment.author === currentUser;
  const navigateToProfile = (authorId) => goToMemberProfile(navigate, authorId);

  const [editMode, setEditMode] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);
  const [editingItemId, setEditingItemId] = useState(null);
  const [editItemContent, setEditItemContent] = useState('');
  const [inlineReplyOpenId, setInlineReplyOpenId] = useState(null);
  const [inlineReplyText, setInlineReplyText] = useState('');

  const handleStartEdit = () => { setEditContent(comment.content); setEditMode(true); onCloseMenu(); };
  const handleSaveEdit = () => { if (editContent.trim()) onEdit(comment.id, editContent.trim()); setEditMode(false); };

  const handleStartItemEdit = (item) => { setEditingItemId(item.id); setEditItemContent(item.content); onCloseMenu(); };
  const handleSaveItemEdit = (item) => {
    if (editItemContent.trim()) {
      if (item._type === 'reply') onEditReply(comment.id, item.id, editItemContent.trim());
      else onEditRereply(comment.id, item._parentReplyId, item.id, editItemContent.trim());
    }
    setEditingItemId(null);
  };

  const buildMenuItems = (type, { isMine, reportArgs, onDeleteClick, onEditClick }) => {
    if (isMine) return [{ label: '수정하기', onClick: onEditClick }, { label: '삭제하기', onClick: onDeleteClick }];
    if (isPageOwner) return [{ label: '신고하기', onClick: () => { onReport(...reportArgs); onCloseMenu(); } }, { label: '삭제하기', onClick: onDeleteClick }];
    return [{ label: '신고하기', onClick: () => { onReport(...reportArgs); onCloseMenu(); } }];
  };

  const flatReplies = comment.replies.flatMap((reply) => [
    { ...reply, _type: 'reply', _parentReplyId: null, _replyTo: comment.author, _depth: 1 },
    ...(reply.rereplies || []).map((rr) => ({
      ...rr, _type: 'rereply', _parentReplyId: reply.id, _replyTo: reply.author, _depth: 2,
    })),
  ]);

  const totalReplyCount = flatReplies.length;

  const handleInlineReplyToggle = (itemKey) => {
    if (inlineReplyOpenId === itemKey) {
      setInlineReplyOpenId(null);
      setInlineReplyText('');
    } else {
      setInlineReplyOpenId(itemKey);
      setInlineReplyText('');
    }
  };

  const handleInlineReplySubmit = (item) => {
    const text = inlineReplyText.trim();
    if (!text) return;
    if (item._type === 'reply') {
      onRereplySubmit(comment.id, item.id, text);
    } else {
      onRereplySubmit(comment.id, item._parentReplyId, text);
    }
    setInlineReplyOpenId(null);
    setInlineReplyText('');
  };

  return (
    <CommentItemComponent
      profileImg={comment.profileImg}
      defaultProfileImg={defaultProfile}
      author={comment.author}
      createdAt={formatRelativeTime(comment.createdAt)}
      content={comment.content}
      liked={comment.liked}
      likeCount={comment.likes}
      likeIcon={likeIcon}
      likeFillIcon={likeFillIcon}
      onLike={() => onLike(comment.id)}
      onProfileClick={() => navigateToProfile(comment.authorId)}
      editMode={editMode}
      editContent={editContent}
      onEditChange={setEditContent}
      onEditSave={handleSaveEdit}
      onEditCancel={() => setEditMode(false)}
      menuOpen={activeMenuId === comment.id}
      onMenuToggle={(e) => onMenuToggle(comment.id, e)}
      menuItems={buildMenuItems('comment', {
        isMine: isMyComment,
        reportArgs: ['방명록', comment.id, comment.profileImg, comment.author, comment.content],
        onDeleteClick: () => { onDelete(comment.id); onCloseMenu(); },
        onEditClick: handleStartEdit,
      })}
      showReplyButton
      replyLabel="답글"
      replyCount={totalReplyCount}
      onReplyToggle={() => onReplyToggle(comment.id)}
      deleted={comment.deleted}
    >
      {(flatReplies.length > 0 || replyOpen) && (
        <>
          {flatReplies.map((item) => {
            const isMyItem = item.author === currentUser;
            const isEditing = editingItemId === item.id;
            const menuKey = item._type === 'reply' ? `reply-${item.id}` : `rereply-${item.id}`;
            const itemKey = `${item._type}-${item.id}`;
            const reportType = item._type === 'reply' ? '방명록 답글' : '방명록 대댓글';

            const handleDelete = () => {
              if (item._type === 'reply') onDeleteReply(comment.id, item.id);
              else onDeleteRereply(comment.id, item._parentReplyId, item.id);
              onCloseMenu();
            };

            const handleLike = () => {
              if (item._type === 'reply') onLike(comment.id, item.id);
              else onLike(comment.id, item._parentReplyId, item.id);
            };

            return (
              <React.Fragment key={itemKey}>
                <CommentItemComponent
                  indent
                  depth={item._depth}
                  profileImg={item.profileImg}
                  defaultProfileImg={defaultProfile}
                  author={item.author}
                  createdAt={formatRelativeTime(item.createdAt)}
                  content={item.content}
                  liked={item.liked}
                  likeCount={item.likes}
                  likeIcon={likeIcon}
                  likeFillIcon={likeFillIcon}
                  onLike={handleLike}
                  onProfileClick={() => navigateToProfile(item.authorId)}
                  editMode={isEditing}
                  editContent={editItemContent}
                  onEditChange={setEditItemContent}
                  onEditSave={() => handleSaveItemEdit(item)}
                  onEditCancel={() => setEditingItemId(null)}
                  menuOpen={activeMenuId === menuKey}
                  onMenuToggle={(e) => onMenuToggle(menuKey, e)}
                  menuItems={buildMenuItems(item._type, {
                    isMine: isMyItem,
                    reportArgs: [reportType, item.id, item.profileImg, item.author, item.content],
                    onDeleteClick: handleDelete,
                    onEditClick: () => handleStartItemEdit(item),
                  })}
                  deleted={item.deleted}
                  replyTo={item._replyTo}
                  showReplyButton
                  replyLabel="답글"
                  replyCount={0}
                  onReplyToggle={() => handleInlineReplyToggle(itemKey)}
                />
                {inlineReplyOpenId === itemKey && (
                  <div style={{ marginLeft: `${item._depth * 24}px` }}>
                    <CommentInputComponent
                      value={inlineReplyText}
                      onChange={setInlineReplyText}
                      onSubmit={() => handleInlineReplySubmit(item)}
                      subject="답글"
                      placeholder={`${item.author}님에게 답글 남기기`}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}

          {replyOpen && (
            <CommentInputComponent
              value={replyText}
              onChange={(val) => onReplyChange(comment.id, val)}
              onSubmit={() => onReplySubmit(comment.id)}
              subject="답글"
              placeholder="답글을 남겨볼까요?"
            />
          )}
        </>
      )}
    </CommentItemComponent>
  );
};

export default GuestbookCommentItemComponent;
