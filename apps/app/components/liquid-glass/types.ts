import { ChartDataPoint, ChartType } from "@expo/ui/swift-ui";

// Types
export interface Task {
  id: number;
  title: string;
  description: string;
  emoji: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  dueDate: Date;
  createdAt: Date;
}

export interface UserProfile {
  name: string;
  username: string;
  avatar: string;
  theme: string;
  profileImageSize: "small" | "medium" | "large";
}

export interface AppSettings {
  notifications: boolean;
  autoSave: boolean;
  theme: "light" | "dark" | "auto";
  language: string;
}

export interface AppState {
  // User Profile
  profile: UserProfile;
  updateProfile: (updates: Partial<UserProfile>) => void;

  // Tasks
  tasks: Task[];
  addTask: (task: Omit<Task, "id" | "createdAt">) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;

  // Settings
  settings: AppSettings;
  updateSettings: (updates: Partial<AppSettings>) => void;

  // UI State
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  taskFilter: "all" | "pending" | "completed";
  setTaskFilter: (filter: "all" | "pending" | "completed") => void;

  // Dashboard metrics
  productivityScore: number;
  setProductivityScore: (score: number) => void;
  focusLevel: number;
  setFocusLevel: (level: number) => void;

  // Chart data and settings
  chartType: ChartType;
  setChartType: (type: ChartType) => void;
  chartData: ChartDataPoint[];
  setChartData: (data: ChartDataPoint[]) => void;
  showGrid: boolean;
  setShowGrid: (show: boolean) => void;
  showLegend: boolean;
  setShowLegend: (show: boolean) => void;

  // Context menu states
  contextMenuStates: Record<string, boolean>;
  updateContextMenuState: (key: string, value: boolean) => void;
}
