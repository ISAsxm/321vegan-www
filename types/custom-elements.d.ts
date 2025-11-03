import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "altcha-widget": {
        appId: string;
        vendorId: string;
        theme: string;
      };
    }
  }
}
