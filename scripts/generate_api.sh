rm -rf src/services/api
mkdir -p src/services/api

pnpm run openapi

fd -t f . src/services/api -E "typings.d.ts" -x sed -i '1i\import type { API } from "./typings";' {}
fd -t f . src/services/api -E "typings.d.ts" -x sed -i '/\/\/ @ts-ignore/d' {}
echo "export type { API };" >> src/services/api/typings.d.ts