import { LoginComponent } from "~/app/login/login.component";
import { ListComponent } from "~/app/list/list.component";

export const routes = [
    { path: "", component: LoginComponent },
    { path: "list", component: ListComponent }
];

export const navigatableComponents = [
    LoginComponent,
    ListComponent
];