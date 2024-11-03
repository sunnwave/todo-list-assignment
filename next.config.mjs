/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repository = "https://sunnwave.github.io/todo-list-assignment/";

const nextConfig = {
  reactStrictMode: true,
  // basePath: "/todo-list-assignment",
  assetPrefix: !debug ? `${repository}/` : "",
  trailingSlash: true,
};

export const prefix =
  process.env.NODE_ENV === "production"
    ? "https://sunnwave.github.io/todo-list-assignment/"
    : "";

export default nextConfig;
