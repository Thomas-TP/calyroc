// WebMCP declarative API (Chrome 149+ origin trial) lets a <form> describe
// itself as a callable tool for AI agents via plain HTML attributes -- not
// yet in React's built-in DOM typings since it's still origin-trial-only.
// https://developer.chrome.com/docs/ai/webmcp/declarative-api
import "react";

declare module "react" {
  interface FormHTMLAttributes<T> {
    toolname?: string;
    tooldescription?: string;
    toolautosubmit?: boolean;
  }

  interface SelectHTMLAttributes<T> {
    toolparamdescription?: string;
  }

  interface InputHTMLAttributes<T> {
    toolparamdescription?: string;
  }

  interface TextareaHTMLAttributes<T> {
    toolparamdescription?: string;
  }
}
