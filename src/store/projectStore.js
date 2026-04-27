import { create } from 'zustand';
import { combine, persist } from 'zustand/middleware';

const useProjectStore = create(
  persist(
    combine({
      projects: [
        {
          id: 1,
          name: '매일 아침 20분 루틴 만들기',
          startDate: '2026-03-01',
          endDate: '2027-03-14',
          description: '목표를 위해 달린지',
          isActive: true,
          checklists: [
            { id: 1, title: '운동복과 물을 자기 전에 미리 준비하기', desc: '아침 실행 전 생각할 요소를 줄여 시작 허들을 낮춥니다.', priority: '우선순위 높음' },
            { id: 2, title: '갈등 상황에서 24시간 후 결정하기', desc: '즉각 반응 대신 하루 뒤 다시 생각하는 규칙을 만들고 지킵니다.', priority: '우선순위 중간' },
            { id: 3, title: '일을 3개 단위로 나눠서 시간 배분하기', desc: '즉각 반응 대신 하루 뒤 다시 생각하는 규칙을 만들고 지킵니다.', priority: '우선순위 낮음' },
          ]
        }
      ],
    }, (set) => ({
      addProject: (data) => set((state) => ({
        projects: [...state.projects, { ...data, id: Date.now(), checklists: [] }]
      })),
      updateProject: (id, data) => set((state) => ({
        projects: state.projects.map((p) => p.id === id ? { ...p, ...data } : p)
      })),
    })),
    { name: 'project-storage' }
  )
);

export default useProjectStore;
