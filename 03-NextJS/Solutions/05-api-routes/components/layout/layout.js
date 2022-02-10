import { Fragment } from "react";

import MainHeader from "./main-header";

function Layout({ authedUser = null }) {
  return authedUser ? (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  ) : (
    <div>You need to log in</div>
  );
}

export default Layout;
