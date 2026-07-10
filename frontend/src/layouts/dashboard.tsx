import { useTasks } from "../features/tasks/hooks/useTasks";

import ChatWindow from "../features/chat/components/ChatWindow";
import { TasksPage } from "../pages/taskPage";

export default function DashboardLayout() {
  const taskState = useTasks();

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-7xl">

        <div className="mb-6">
          <h1 className="text-3xl font-bold">
            Tofo AI Task Manager
          </h1>

          <p className="text-gray-500">
            Manage your tasks manually or let AI do it for you.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* Left */}

          <section className="xl:col-span-2">

            <TasksPage
              {...taskState}
            />

          </section>

          {/* Right */}

          <aside>

            <div className="rounded-2xl bg-white shadow-md border border-gray-200 h-[82vh] flex flex-col">

              <div className="flex items-center justify-between border-b px-5 py-4">

                <div>

                  <h2 className="font-semibold text-lg">
                    🤖 Tofo AI
                  </h2>

                  <p className="text-sm text-gray-500">
                    AI Task Assistant
                  </p>

                </div>

                <div className="flex items-center gap-2">

                  <span className="h-2 w-2 rounded-full bg-green-500" />

                  <span className="text-sm text-gray-500">
                    Connected
                  </span>

                </div>

              </div>

              <ChatWindow
                refreshTasks={
                  taskState.refreshTasks
                }
              />

            </div>

          </aside>

        </div>

      </div>
    </main>
  );
}