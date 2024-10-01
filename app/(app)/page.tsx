import { AppCountdown } from "./app-countdown";
import { AppProjectForm } from "./app-project-form";

export default function AppPage() {
  return (
    <div className="flex flex-col items-center">
      <AppProjectForm>
        <AppCountdown />
      </AppProjectForm>
    </div>
  );
}
