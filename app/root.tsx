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
  useLocation,
} from "@remix-run/react";

import {
  Layout as AntDLayout,
  Menu,
  theme,
  type MenuProps,
  ConfigProvider,
} from "antd";
import { useEffect, useState } from "react";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

const { Content } = AntDLayout;

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
  useEffect(() => {
    // console.log("I re-rendered");
  }, []);

  const location = useLocation();
  const [current, setCurrent] = useState("oneRepMax");

  useEffect(() => {
    if (location.pathname.includes("workouts")) {
      setCurrent("workouts");
    } else {
      setCurrent("oneRepMax");
    }
  }, [location]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      key: "oneRepMax",
      label: "One Rep Max",
      path: "/",
    },
    {
      key: "workouts",
      label: "Workouts",
      path: "/workouts",
    },
  ];

  const handleNavClick: MenuProps["onClick"] = (e) => {
    const newSelected = items.find((item) => item.key === e.key);
    navigate(newSelected?.path || "/");
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
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "Roboto, sans-serif",
            },
          }}
        >
          <AntDLayout style={{ minHeight: "100vh" }}>
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={[current]}
              items={items}
              onClick={handleNavClick}
              disabledOverflow={true}
            />

            <AntDLayout>
              <div style={{ margin: "0 16px" }}>
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
              </div>
            </AntDLayout>
          </AntDLayout>
        </ConfigProvider>
      </body>
    </html>
  );
}
