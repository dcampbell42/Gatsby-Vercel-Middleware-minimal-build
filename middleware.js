import { next } from "@vercel/edge";

export default function middleware() {
  console.log("Hello from middleware");
  return next();
}
