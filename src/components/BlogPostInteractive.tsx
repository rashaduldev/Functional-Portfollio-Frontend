"use client";

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface Comment {
  name: string;
  comment: string;
}

type Props = {
  postId: number;
  postTitle: string;
  postDescription: string;
};

const inputClass =
  "w-full px-4 py-2 rounded-md bg-surface-card text-text-primary border border-overlay-white-10 focus:outline-none focus:ring-2 focus:ring-brand-from transition";

export default function BlogPostInteractive({
  postId,
  postTitle,
  postDescription,
}: Props) {
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    const likesLS = localStorage.getItem(`blog-like-${postId}`);
    const commentsLS = localStorage.getItem(`blog-comments-${postId}`);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate UI state from localStorage on mount
    setLiked(likesLS === "true");
    if (commentsLS) {
      setComments(JSON.parse(commentsLS));
    }
  }, [postId]);

  const toggleLike = () => {
    const newLikeState = !liked;
    setLiked(newLikeState);
    localStorage.setItem(`blog-like-${postId}`, String(newLikeState));
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) {
      toast.error("Please fill in both name and comment.");
      return;
    }

    const newComment = { name: name.trim(), comment: comment.trim() };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem(
      `blog-comments-${postId}`,
      JSON.stringify(updatedComments)
    );

    setName("");
    setComment("");
    toast.success("Comment added!");
  };

  return (
    <>
      <Toaster position="top-right" />

      <div className="flex items-center space-x-6 mb-10">
        <button
          onClick={toggleLike}
          className={`px-4 py-2 rounded-pill font-semibold transition-colors ${
            liked
              ? "bg-brand-gradient text-text-primary"
              : "bg-surface-elevated text-text-primary hover:bg-brand-to"
          }`}
        >
          {liked ? "Liked ❤️" : "Like 🤍"}
        </button>

        <button
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: postTitle,
                text: postDescription,
                url: window.location.href,
              });
            }
          }}
          className="px-4 py-2 rounded-pill bg-surface-elevated text-text-primary hover:bg-brand-from transition-colors font-semibold"
        >
          Share 📤
        </button>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>

        <form onSubmit={handleCommentSubmit} className="mb-6 space-y-4">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
          <textarea
            placeholder="Your comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className={inputClass}
            rows={4}
          />
          <button
            type="submit"
            className="bg-brand-gradient text-text-primary px-6 py-2 rounded-pill font-semibold hover:opacity-90 transition"
          >
            Add Comment
          </button>
        </form>

        <div className="space-y-4 max-h-96 overflow-y-auto">
          {comments.length === 0 && (
            <p className="text-text-muted-3 italic">
              No comments yet. Be the first!
            </p>
          )}
          {comments.map((c, i) => (
            <div
              key={i}
              className="border border-divider rounded-md p-4 bg-surface-card"
            >
              <p className="font-semibold text-text-primary">{c.name}</p>
              <p className="whitespace-pre-wrap text-text-muted">{c.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
