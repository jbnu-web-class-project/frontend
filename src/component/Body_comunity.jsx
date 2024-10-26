import React, { useState } from 'react';
import { ChevronUp, ChevronDown, ThumbsUp, Eye, Calendar, Search } from 'lucide-react';

const Community = () => {
  const [activeBoard, setActiveBoard] = useState('free');
  
  const boards = [
    { id: 'hot', name: 'HOT 게시판' },
    { id: 'schedule', name: '일정표' },
    { id: 'free', name: '자유게시판' },
    { id: 'visit', name: '직관게시판' },
    { id: 'photo', name: '사진게시판' }
  ];

  const posts = [
    {
      id: 1,
      title: "울산 홈경기 직관 후기",
      author: "축구팬1",
      date: "2024.10.27",
      views: 128,
      likes: 45
    },
    // Add more posts as needed
  ];

  const recentActivities = [
    { id: 1, title: "내가 쓴 글", count: 5 },
    { id: 2, title: "댓글 단 글", count: 12 },
    { id: 3, title: "좋아요 한 글", count: 8 }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
        {/* 검색 섹션 */}
        <section className="mb-8">
              {/* 검색창 */}
              <div className="relative mb-4">
                  <div className="flex items-center bg-gray-200 rounded-full p-4">
                      <Search className="w-6 h-6 text-gray-500 mr-2" />
                      <input 
                          type="text"
                          className="w-full bg-transparent outline-none"
                          placeholder="검색어를 입력하세요"
                      />
                  </div>
              </div>
        </section>
      {/* 게시판 네비게이션 */}
      <nav className="mb-8">
        <ul className="flex flex-wrap gap-4 border-b-2 pb-4">
          {boards.map(board => (
            <li key={board.id}>
              <button
                className={`px-6 py-3 text-lg font-bold rounded-lg transition-colors
                  ${activeBoard === board.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                onClick={() => setActiveBoard(board.id)}
              >
                {board.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* 사이드바 */}
        <aside className="lg:w-80 space-y-8">
          {/* 나의 활동 */}
          <section className="bg-white rounded-lg shadow-lg">
            <div className="p-4 border-b">
              <h2 className="text-xl font-bold">나의 활동</h2>
            </div>
            <div className="p-4 space-y-4">
              {recentActivities.map(activity => (
                <div key={activity.id} className="flex justify-between items-center">
                  <span>{activity.title}</span>
                  <span className="font-bold">{activity.count}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 베스트 게시글 */}
          <section className="bg-white rounded-lg shadow-lg">
            <div className="p-4 border-b">
              <h2 className="text-xl font-bold">베스트 게시글</h2>
            </div>
            <div className="p-4">
              {/* 베스트 게시글 목록 */}
            </div>
          </section>

          {/* 최근 게시글 */}
          <section className="bg-white rounded-lg shadow-lg">
            <div className="p-4 border-b">
              <h2 className="text-xl font-bold">최근 게시글</h2>
            </div>
            <div className="p-4">
              {/* 최근 게시글 목록 */}
            </div>
          </section>
        </aside>

        {/* 메인 게시판 */}
        <section className="flex-1 bg-white rounded-lg shadow-lg">
          <div className="p-4 border-b">
            <h2 className="text-2xl font-bold">{boards.find(b => b.id === activeBoard)?.name}</h2>
          </div>
          
          {/* 게시글 목록 */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-4 px-6 text-left">번호</th>
                  <th className="py-4 px-6 text-left">제목</th>
                  <th className="py-4 px-6 text-left">글쓴이</th>
                  <th className="py-4 px-6 text-left">날짜</th>
                  <th className="py-4 px-6 text-center">
                    <Eye className="inline w-5 h-5" />
                  </th>
                  <th className="py-4 px-6 text-center">
                    <ThumbsUp className="inline w-5 h-5" />
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {posts.map(post => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">{post.id}</td>
                    <td className="py-4 px-6 font-medium">{post.title}</td>
                    <td className="py-4 px-6">{post.author}</td>
                    <td className="py-4 px-6">{post.date}</td>
                    <td className="py-4 px-6 text-center">{post.views}</td>
                    <td className="py-4 px-6 text-center">{post.likes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Community;