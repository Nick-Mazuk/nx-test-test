import "#lib/a"
import type { ExecutorContext } from "@nrwl/devkit"
import type { TestExecutorSchema } from "./schema"

export default async function runExecutor(
    _: TestExecutorSchema,
    __: ExecutorContext
) {

    return { success: true }
}
