import { useState } from "react";

import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate,
} from "@remix-run/react";

import { Breadcrumb, Layout as AntDLayout, Menu, theme } from "antd";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

const { Content, Footer, Sider } = AntDLayout;

// example here
// https://codesandbox.io/s/ygtdm6?file=/demo.tsx:1436-2007

export default function App() {
  return (
    <Layout>
      <>{/* Header */}</>

      <Outlet />
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </Layout>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  let navigate = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      key: 0,
      label: "One Rep Max",
      path: "/",
    },
    {
      key: 1,
      label: "Exercises",
      path: "/exercises",
    },
    {
      key: 2,
      label: "Dashboard",
      path: "/dashboard",
    },
  ];

  const handleNavClick: MenuProps["onClick"] = (e) => {
    const index = parseInt(e.key);
    navigate(items[index].path);
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{ margin: 0 }}>
        <AntDLayout style={{ minHeight: "100vh", margin: 0 }}>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <div className="demo-logo-vertical" />
            <Menu
              theme="dark"
              defaultSelectedKeys={["1"]}
              mode="inline"
              items={items}
              onClick={handleNavClick}
            />
          </Sider>
          <AntDLayout>
            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Guest</Breadcrumb.Item>
              </Breadcrumb>
              <div
                style={{
                  paddingTop: 16,
                  minHeight: 360,
                  background: colorBgContainer,
                }}
              >
                {children}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>MedxMan Empire</Footer>
          </AntDLayout>
        </AntDLayout>
      </body>
    </html>
  );
}
