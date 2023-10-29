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

import { Layout as AntDLayout, Menu, theme, type MenuProps } from "antd";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

const { Content, Header } = AntDLayout;

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
        <AntDLayout style={{ minHeight: "100vh" }}>
          <Header
            style={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["0"]}
              items={items}
              onClick={handleNavClick}
              disabledOverflow={true}
            />
          </Header>
          <AntDLayout>
            <Content style={{ margin: "0 16px" }}>
              {/* <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Guest</Breadcrumb.Item>
              </Breadcrumb> */}
              <div
                style={{
                  paddingTop: 16,
                  background: colorBgContainer,
                }}
              >
                {children}
              </div>
            </Content>
          </AntDLayout>
        </AntDLayout>
      </body>
    </html>
  );
}
