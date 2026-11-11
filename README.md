# OptimaX Suites

## Tawk.to chat

The chat widget is loaded by the Angular `TawkService` on public routes. Set the public `tawk-property-id` and `tawk-widget-id` meta tag contents in `src/index.html` using the IDs from the Tawk.to dashboard. The values currently configured there are the widget IDs for this site. Leave either value blank to disable chat. Do not put webhook signing secrets or other credentials in frontend code.
