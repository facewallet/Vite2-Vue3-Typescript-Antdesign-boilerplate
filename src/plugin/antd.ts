import { Button, Divider } from "ant-design-vue";

export default (app) => {
  app
  .use(Button)
  .use(Divider)
  
  return app
}