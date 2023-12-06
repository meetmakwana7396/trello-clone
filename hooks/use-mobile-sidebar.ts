import { create } from "zustand";

interface IMobileSidebarStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useMobileSidebar = create<IMobileSidebarStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
