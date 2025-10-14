import { ChartDataPoint, ChartType } from "@expo/ui/swift-ui";
import React, { createContext, ReactNode, useState } from "react";
import { AppSettings, AppState, Task, UserProfile } from "./types";

// Context
export const AppContext = createContext<AppState | null>(null);

// Initial data
export const initialTasks: Task[] = [
  {
    id: 1,
    title: "Complete project proposal",
    description: "Finish the Q1 project proposal for the design system",
    emoji: "📋",
    completed: false,
    priority: "high",
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
  },
  {
    id: 2,
    title: "Review UI components",
    description: "Review and test all new UI components in the library",
    emoji: "🎨",
    completed: true,
    priority: "medium",
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48),
  },
  {
    id: 3,
    title: "Update documentation",
    description: "Update the component documentation with new examples",
    emoji: "📚",
    completed: false,
    priority: "low",
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12),
  },
  {
    id: 4,
    title: "Team standup meeting",
    description: "Weekly team standup and planning session",
    emoji: "👥",
    completed: false,
    priority: "medium",
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 8),
    createdAt: new Date(),
  },
];

export const initialProfile: UserProfile = {
  name: "Beto",
  username: "@betomoedano",
  avatar: "person.fill",
  theme: "#4A90E2",
  profileImageSize: "medium",
};

export const initialSettings: AppSettings = {
  notifications: true,
  autoSave: true,
  theme: "auto",
  language: "en",
};

// Chart data sets
export const productivityChartData: ChartDataPoint[] = [
  { x: "Mon", y: 75, color: "#4A90E2" },
  { x: "Tue", y: 85, color: "#50C8D8" },
  { x: "Wed", y: 65, color: "#5AD67D" },
  { x: "Thu", y: 92, color: "#F5D76E" },
  { x: "Fri", y: 88, color: "#FF8C42" },
  { x: "Sat", y: 70, color: "#FF6B6B" },
  { x: "Sun", y: 60, color: "#D63384" },
];

export const taskCompletionData: ChartDataPoint[] = [
  { x: "Week 1", y: 12 },
  { x: "Week 2", y: 18 },
  { x: "Week 3", y: 15 },
  { x: "Week 4", y: 24 },
];

export const priorityDistribution: ChartDataPoint[] = [
  { x: "High", y: 35, color: "#FF6B6B" },
  { x: "Medium", y: 45, color: "#FFD93D" },
  { x: "Low", y: 20, color: "#6BCF7F" },
];

export const initialContextMenuStates = {
  "Show Completed Tasks": true,
  "Auto Refresh": false,
  Notifications: true,
  "Dark Mode": false,
};

// Provider component
export function AppProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>(initialProfile);
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [settings, setSettings] = useState<AppSettings>(initialSettings);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [taskFilter, setTaskFilter] = useState<"all" | "pending" | "completed">(
    "all"
  );
  const [productivityScore, setProductivityScore] = useState(0.75);
  const [focusLevel, setFocusLevel] = useState(0.6);
  const [chartType, setChartType] = useState<ChartType>("line");
  const [chartData, setChartData] = useState<ChartDataPoint[]>(
    productivityChartData
  );
  const [showGrid, setShowGrid] = useState(true);
  const [showLegend, setShowLegend] = useState(false);
  const [contextMenuStates, setContextMenuStates] = useState(
    initialContextMenuStates
  );

  const updateProfile = (updates: Partial<UserProfile>) => {
    setProfile((prev) => ({ ...prev, ...updates }));
  };

  const addTask = (taskData: Omit<Task, "id" | "createdAt">) => {
    const newTask: Task = {
      ...taskData,
      id: Math.max(...tasks.map((t) => t.id), 0) + 1,
      createdAt: new Date(),
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const updateSettings = (updates: Partial<AppSettings>) => {
    setSettings((prev) => ({ ...prev, ...updates }));
  };

  const updateContextMenuState = (key: string, value: boolean) => {
    setContextMenuStates((prev) => ({ ...prev, [key]: value }));
  };

  const value: AppState = {
    profile,
    updateProfile,
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    settings,
    updateSettings,
    selectedDate,
    setSelectedDate,
    taskFilter,
    setTaskFilter,
    productivityScore,
    setProductivityScore,
    focusLevel,
    setFocusLevel,
    chartType,
    setChartType,
    chartData,
    setChartData,
    showGrid,
    setShowGrid,
    showLegend,
    setShowLegend,
    contextMenuStates,
    updateContextMenuState,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
