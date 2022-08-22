import { UserScript } from "UserScript";
import { name, author, description, version, repository } from "../package.json";

export default {
    name,
    author,
    namespace: repository.url,
    description,
    version,
    matches: '*://*/*',
    runAt: 'document-idle'
} as UserScript