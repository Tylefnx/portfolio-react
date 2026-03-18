import { create } from 'zustand';

interface AppState {
  activeSection: number;
  setActiveSection: (index: number) => void;
  isDrawerOpen: boolean;
  setDrawerOpen: (isOpen: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  activeSection: 0,
  setActiveSection: (index) => set({ activeSection: index }),
  isDrawerOpen: false,
  setDrawerOpen: (isOpen) => set({ isDrawerOpen: isOpen }),
}));
