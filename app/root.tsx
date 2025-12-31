
import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import { Provider } from "react-redux";
import { store } from "~/store";

export default function App() {
  return (
    <html>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Provider store={store}>
          <Outlet />
        </Provider>
        <Scripts />
      </body>
    </html>
  );
}
