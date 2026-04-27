import { create } from 'zustand';
import { combine, persist } from 'zustand/middleware';

const mockPosts = [
  {
    id: 1,
    category: '공부/자격증',
    title: '기출만 파다가 실전에서 뒤지 된 썰. 공부 환경부터 바꾸고 나서니 변화가 생긴 썰',
    content: `익숙한 내 방에서만 공부하던 게 독이었습니다. 실전에서는 낯선 환경과 작은 소음에도 쉽게 흔들렸고, 읽고 있던 것도 제대로 까내지 못했습니다. 그래서 공부방을 더 늘리는 대신 환경부터 바꾸기로 했습니다.

집이 아닌 도서관, 카페, 스터디카페를 번갈아 다녔고 처음엔 불편했지만 점점 낯선 공간에서도 집중을 유지하는 시간이 길어졌습니다. 이전에는 긴장하면 손이 굳고 머리가 멈췄는데, 이제는 다시 흐름을 잡는 연습이 되기 시작했습니다.

공부 루틴도 바꿨습니다. 예전에는 모래 많이 있는 것 자체에 의미를 찾지만, 지금은 30분 후 짧게 쉬는 방식으로 구조를 바꿨습니다. 틀린 문제는 그냥 넘기지 않고 왜 틀렸는지를 적으면서 실수의 패턴을 추적했습니다.

결국 실전은 알아 놓는 것보다 다시 쓸 수 있는 것이 더 중요하다는 걸 느꼈습니다. 환경을 바꾸고, 루틴을 바꾸고, 실수의 원인을 찾기 시작한 뒤부터 실전에서의 안정감이 달라졌습니다.`,
    author: '취준마스터',
    authorAvatar: '',
    authorPostCount: 24,
    authorLogCount: 18,
    authorCommentCount: 136,
    thumbnail: '',
    attachments: ['', '', ''],
    views: 457,
    likes: 24,
    date: '2026-03-05',
    readTime: 10,
    liked: false,
    comments: [
      {
        id: 1,
        author: '패밀이',
        authorAvatar: '',
        content: '진짜 공감입니다. 저도 집에서는 잘 늘어나 시험장만 가면 아는 것도 막막하더라고요. 그리고 댓글에는 글쓰기가 막막하게 커집니다. 어그래야 커지는지 막연박행 결과 좋을 찾았는데나 넓은 범위까지 갑니다. 다음 음에서 넣어볼게나 한다.',
        time: '5일 전',
        likes: 5,
        replies: [
          {
            id: 11,
            author: '취준마스터',
            authorAvatar: '',
            content: '저도 반이나 싸았어요. 환경 적응이 생각보다 많은 공부하더라구요.',
            time: '5일 전',
            likes: 0,
          }
        ]
      },
      {
        id: 2,
        author: '패밀이',
        authorAvatar: '',
        content: '진짜 공감입니다. 저도 집에서는 잘 늘어나 시험장만 가면 아는 것도 막막하더라고요.',
        time: '5일 전',
        likes: 3,
        replies: [
          {
            id: 21,
            author: '패밀이',
            authorAvatar: '',
            content: '진짜 공감입니다. 저도 집에서는 잘 늘어나 시험장만 가면 아는 것도 막막하더라고요.',
            time: '5일 전',
            likes: 1,
          }
        ]
      },
      {
        id: 3,
        author: '패밀이',
        authorAvatar: '',
        content: '진짜 공감합니다. 저도 집에서는 잘 늘어나 시험장만 가면 아는 것도 막막하더라고요.',
        time: '5일 전',
        likes: 1,
        replies: []
      },
    ],
    prevPost: { id: null, title: null },
    nextPost: { id: 2, title: '시험 직전 불안이 심해질 때 내가 썼던 막판 루틴 3가지' },
    recommendations: [
      { id: 10, category: '공부/자격증', title: '시험 직전 불안이 심해질 때 내가 썼던 막판 루틴 3가지', author: '필아이씨', likes: 45, comments: 72, bookmarks: 8, date: '2026년03월07일', thumbnail: '' },
      { id: 11, category: '공부/자격증', title: '시험 직전 불안이 심해질 때 내가 썼던 막판 루틴 3가지', author: '필아이씨', likes: 46, comments: 72, bookmarks: 8, date: '2026년03월07일', thumbnail: '' },
      { id: 12, category: '공부/자격증', title: '시험 직전 불안이 심해질 때 내가 썼던 막판 루틴 3가지', author: '필아이씨', likes: 45, comments: 71, bookmarks: 8, date: '2026년03월07일', thumbnail: '' },
      { id: 13, category: '공부/자격증', title: '시험 직전 불안이 심해질 때 내가 썼던 막판 루틴 3가지', author: '필아이씨', likes: 45, comments: 72, bookmarks: 9, date: '2026년03월07일', thumbnail: '' },
    ],
  },
];

const useCommunityStore = create(
  persist(
    combine(
      { posts: mockPosts },
      (set, get) => ({
        getPost: (id) => get().posts.find((p) => p.id === Number(id)),

        addPost: (data) => set((state) => ({
          posts: [...state.posts, { ...data, id: Date.now(), likes: 0, liked: false, views: 0, comments: [], recommendations: [] }]
        })),

        toggleLike: (postId) => set((state) => ({
          posts: state.posts.map((p) =>
            p.id === Number(postId)
              ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 }
              : p
          )
        })),

        addComment: (postId, content, author) => set((state) => ({
          posts: state.posts.map((p) =>
            p.id === Number(postId)
              ? {
                  ...p,
                  comments: [...p.comments, {
                    id: Date.now(),
                    author,
                    authorAvatar: '',
                    content,
                    time: '방금',
                    likes: 0,
                    replies: [],
                  }]
                }
              : p
          )
        })),

        addReply: (postId, commentId, content, author) => set((state) => ({
          posts: state.posts.map((p) =>
            p.id === Number(postId)
              ? {
                  ...p,
                  comments: p.comments.map((c) =>
                    c.id === commentId
                      ? {
                          ...c,
                          replies: [...c.replies, {
                            id: Date.now(),
                            author,
                            authorAvatar: '',
                            content,
                            time: '방금',
                            likes: 0,
                          }]
                        }
                      : c
                  )
                }
              : p
          )
        })),
      })
    ),
    { name: 'community-storage' }
  )
);

export default useCommunityStore;
