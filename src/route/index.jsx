import React, { lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import App from '../App';
import Test from '../pages/test';

const routeConfig = [
  {
    description: 'Layout',
    path: '/',
    component: Layout,
    children: [
      {
        description: 'Test',
        path: '/test',
        component: lazy(() => import('../pages/test/index')),
      },
    ],
  },
];

function router() {
  const getRouteConfig = (config) => {};

  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path='/home' component={Test} />
        <Route
          path='/'
          render={() => {
            return (
              <Layout>
                <Route exact path='/test' component={Test} />
              </Layout>
            );
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default router;
