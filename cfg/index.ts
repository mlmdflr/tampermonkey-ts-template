import { UserScript } from "UserScript";
import { name, author, description, version, repository } from "../package.json";
//tampermonkey header
export default {
    name,
    author,
    namespace: repository.url,
    description,
    version,
    noframes: true,
    matches: '*://*/*',
    runAt: 'document-idle'
} as UserScript