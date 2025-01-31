import { GitBranch } from 'lucide-react';
import { createHashRouter } from 'react-router-dom';
import ErrorPage from '@/layout/errorPage';
import Layout from '@/layout/layout';
import JiraBranchCreator from '@/pages/jira-branch-creator';

export const browserRouter = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <JiraBranchCreator />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/jira-branch-creator',
        element: <JiraBranchCreator />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export const routes = [
  {
    path: '/jira-branch-creator',
    name: 'Jira Branch Creator',
    icon: <GitBranch className="h-5 w-5" />,
  },
];
