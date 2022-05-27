import { createElement, FC, Suspense, useCallback, useLayoutEffect, useRef, useState } from "react";

import { useRoutes } from './Routes'
import { ErrorBoundary } from 'react-error-boundary'
import { useNotices } from '../../utils/hooks/useNotices'
import { UILoader } from '../components/atoms/UILoader/UILoader'
import { ErrorFallback } from '../pages/ErrorFallback'

import { Router } from "react-router-dom";
import { BrowserHistory } from "history";
import { browserHistory } from "../../configs/navigation/history";

export const MainRouter: FC = () => {
  const routes = useRoutes()

  const [state, setState] = useState(false);
  const forceUpdate = useCallback(() => setState((x) => !x), []);

  useNotices()

  return (
    <BrowserRouter>
      <ErrorBoundary
        fallbackRender={ErrorFallback}
        resetKeys={[state]}
        onReset={forceUpdate}
      >
        <Suspense fallback={UILoader}>
          {routes}
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

function BrowserRouter(_ref: any) {
  let { basename, children } = _ref;
  let historyRef = useRef<BrowserHistory>();

  if (historyRef.current == null) {
    historyRef.current = browserHistory;
  }

  let history = historyRef.current;
  let [state, setState] = useState({
    action: history!.action,
    location: history!.location,
  });
  useLayoutEffect(() => history.listen(setState), [history]);
  return createElement(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history,
  });
}