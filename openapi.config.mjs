import { generateService } from "@umijs/openapi";

await generateService({
  schemaPath: "http://127.0.0.1:8123/v3/api-docs/default", // 替换为你的 Swagger 文档地址
  serversPath: "./src/services", // 生成的服务文件存放位置
  requestLibPath: "import request from '@/utils/request'", // 使用自定义的请求工具
  projectName: "api", // 生成的文件夹名称
  apiPrefix: "",
  namespace: "API",
  hook: {
    customTypesTemplate: (types) => {
      return `
declare namespace API {
${types}
}

export { API };
`.trim();
    },
  },
});
