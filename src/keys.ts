import { GetEnvVar } from "./utils/index.js";

export const Keys = {
    clientToken: GetEnvVar('CLIENT_TOKEN')
} as const;

export default Keys;