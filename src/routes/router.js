import { createBrowserRouter, Outlet } from "react-router-dom";
import IntroPage from "../pages/IntroPage";
import MainPage from "../pages/MainPage";
import MyTestContextContainer from "../pages/templates/mytestcontext/MyTestContextContainer";
import MyTestDocs from "../pages/templates/mytestdocs/MyTestDocs";
import MyTestLayout from "../pages/templates/mytestlayout/MyTestLayout";
import MyTestMainContainer from "../pages/templates/mytestmain/MyTestMainContainer";
import MyTestQueryStringContainer from "../pages/templates/mytestquerystring/MyTestQueryStringContainer";
import MyTestQueryStringRead from "../pages/templates/mytestquerystring/MyTestQueryStringRead";
import MyTestParameterContainer from "../pages/templates/mytesturlparameter/MyTestParameterContainer";
import MyTestParameterRead from "../pages/templates/mytesturlparameter/MyTestParameterRead";
import ChatbotPage from "../pages/chat/ChatbotPage";
import CaseDetailPage from "../pages/case/CaseDetailPage";
import NotFoundPage from "../pages/common/NotFoundPage";
import LoginPage from "../pages/auth/LoginPage";
import SignupPage from "../pages/auth/SignupPage";
import GrowthPage from "../pages/growth/GrowthPage";
import CommunityPage from "../components/community/community";
import LogListPage from "../pages/log/LogListPage";
import LogWritePage from "../pages/log/LogWritePage";
import LogStep1 from "../components/log/LogStep1";
import LogStep2 from "../components/log/LogStep2";
import MyPage from "../pages/user/MyPage";
import ProfileEdit from "../components/mypage/profileEdit/ProfileEdit";
import Profile from "../components/mypage/profile/Profile";
import MyLogs from "../components/mypage/my-logs/MyLogs";
import LikedLogs from "../components/mypage/liked-logs/LikedLogs";
import Projects from "../components/mypage/projects/Projects";
import Trash from "../components/mypage/trash/Trash";
import Posts from "../components/mypage/posts/Posts";
import CommunityWrite from "../components/community/communityWrite/CommunityWrite";
import CommunityMain from "../components/community/communityMain/CommunityMain";
import CategoryPosts from "../components/community/categoryPosts/CategoryPosts";
import SearchResults from "../components/community/searchResults/SearchResults";
import PostRead from "../components/community/postRead/PostRead";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IntroPage />,
    children: [
      {
        path: "section1",
        element: <div><h2>인트로 섹션 1</h2><p>인트로의 첫 번째 하위 섹션입니다.</p></div>
      },
      {
        path: "section2",
        element: <div><h2>인트로 섹션 2</h2><p>인트로의 두 번째 하위 섹션입니다.</p></div>
      }
    ]
  },
  {
    path: "/intro",
    element: <IntroPage />
  },
  {
    path: "/main",
    element: <MainPage />,
    children: [
      {
        path: "menu1",
        element: <div><h2>메인 메뉴 1</h2><p>메인의 첫 번째 하위 메뉴입니다.</p></div>
      },
      {
        path: "menu2",
        element: <div><h2>메인 메뉴 2</h2><p>메인의 두 번째 하위 메뉴입니다.</p></div>
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/signup",
    element: <SignupPage />
  },
  {
    path: "/growth",
    element: <GrowthPage />
  },
  {
    path: "/community",
    element: <CommunityPage />,
    children: [
      {
        path: "",
        element: <CommunityMain />
      },
      {
        path: "write",
        element: <CommunityWrite />
      },
      {
        path: "category",
        element: <CategoryPosts />
      },
      {
        path: "search",
        element: <SearchResults />
      },
      {
        path: "post/:id",
        element: <PostRead />
      }
    ]
  },
  {
    path: "/log",
    element: (
      <div>
        <h1>로그 페이지</h1>
        <p>로그 관련 기능을 제공하는 페이지입니다.</p>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "list",
        element: <LogListPage />
      },
      {
        path: "write",
        element: <LogWritePage />,
        children: [
          {
            path: "",
            element: <LogStep1 />
          },
          {
            path: "step2",
            element: <LogStep2 />
          }
        ]
      }
    ]
  },
  {
    path: "/mypage",
    element: <MyPage />,
    children: [
      {
        path: "profileEdit",
        element: <ProfileEdit />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "my-logs",
        element: <MyLogs />
      },
      {
        path: "liked-logs",
        element: <LikedLogs />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "trash",
        element: <Trash />
      },
      {
        path: "posts",
        element: <Posts />
      }
    ]
  },
  {
    path: "/chatbot",
    element: <ChatbotPage />
  },
  {
    path: "/case/:id",
    element: <CaseDetailPage />
  },
  {
    path: "*",
    element: <NotFoundPage />
  },
  {
    path: "/docs",
    element: <MyTestDocs />,
    children: [
      {
        path: "context", // == index: true
        element: <MyTestContextContainer />
      },
      {
        path: "url-parameter",
        element: <MyTestParameterContainer />
      },
      {
        path: "url-parameter/:id",
        element: <MyTestParameterRead />
      },
      {
        path: "query-string",
        element: <MyTestQueryStringContainer />
      },
      {
        path: "query-string/read",
        element: <MyTestQueryStringRead />
      }
    ]
  },

])

export default router;
