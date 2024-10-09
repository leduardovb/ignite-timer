import { AppCountdown } from "./app-countdown";
import { AppProject } from "./app-project";
import { AppProjectForm } from "./app-project-form";

export default function AppPage() {
  return (
    <div className="flex flex-col items-center">
      <AppProject>
        <AppProjectForm>
          <AppCountdown />
        </AppProjectForm>
      </AppProject>
    </div>
  );
}
