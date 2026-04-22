import { createBrowserRouter, Outlet } from "react-router-dom";
import IntroPage from "../pages/templates2/IntroPage";
import MainPage from "../pages/templates2/MainPage";
import MyTestContextContainer from "../pages/templates/mytestcontext/MyTestContextContainer";
import MyTestDocs from "../pages/templates/mytestdocs/MyTestDocs";
import MyTestQueryStringContainer from "../pages/templates/mytestquerystring/MyTestQueryStringContainer";
import MyTestQueryStringRead from "../pages/templates/mytestquerystring/MyTestQueryStringRead";
import MyTestParameterContainer from "../pages/templates/mytesturlparameter/MyTestParameterContainer";
import MyTestParameterRead from "../pages/templates/mytesturlparameter/MyTestParameterRead";
import ChatbotPage from "../pages/templates2/chat/ChatbotPage";
import CaseDetailPage from "../pages/templates2/case/CaseDetailPage";
import NotFoundPage from "../pages/templates2/common/NotFoundPage";
import LoginPage from "../pages/templates2/auth/LoginPage";
import SignupPage from "../pages/templates2/auth/SignupPage";
import GrowthPage from "../pages/templates2/growth/GrowthPage";
import CommunityPage from "../pages/templates2/components/community/community";
import LogListContainer from "../pages/templates2/log/logList/LogListContainer";
import LogWriteContainer from "../pages/templates2/log/logWrite/LogWriteContainer";
import LogStep1Component from "../pages/templates2/log/logWrite/LogStep1Component";
import LogStep2Component from "../pages/templates2/log/logWrite/LogStep2Component";
import LogResultContainer from "../pages/templates2/log/logResult/LogResultContainer";
import PlanWriteContainer from "../pages/templates2/plan/planWrite/PlanWriteContainer";
import ProjectDashboardContainer from "../pages/templates2/plan/projectDashboard/ProjectDashboardContainer";
import DailyCheckListContainer from "../pages/templates2/growth/dailyCheckList/DailyCheckListContainer";
import MyPage from "../pages/templates2/user/MyPage";
import ProfileEdit from "../pages/templates2/components/mypage/profileEdit/ProfileEdit";
import Profile from "../pages/templates2/components/mypage/profile/Profile";
import MyLogs from "../pages/templates2/components/mypage/my-logs/MyLogs";
import LikedLogs from "../pages/templates2/components/mypage/liked-logs/LikedLogs";
import Projects from "../pages/templates2/components/mypage/projects/Projects";
import Trash from "../pages/templates2/components/mypage/trash/Trash";
import Posts from "../pages/templates2/components/mypage/posts/Posts";
import CommunityWrite from "../pages/templates2/components/community/communityWrite/CommunityWrite";
import CommunityMain from "../pages/templates2/components/community/communityMain/CommunityMain";
import CategoryPosts from "../pages/templates2/components/community/categoryPosts/CategoryPosts";
import SearchResults from "../pages/templates2/components/community/searchResults/SearchResults";
import PostRead from "../pages/templates2/components/community/postRead/PostRead";

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
        element: <LogListContainer />
      },
      {
        path: "write",
        element: <LogWriteContainer />,
        children: [
          {
            path: "",
            element: <LogStep1Component />
          },
          {
            path: "step2",
            element: <LogStep2Component />
          },
          {
            path: "result",
            element: <LogResultContainer />
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
    path: "/plan/write",
    element: <PlanWriteContainer />
  },
  {
    path: "/plan/dashboard",
    element: <ProjectDashboardContainer />
  },
  {
    path: "/growth/daily-checklist",
    element: <DailyCheckListContainer />
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
