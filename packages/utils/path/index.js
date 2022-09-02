/**
 * @param {string} current The current file (usually import.meta.url)
 * @param {string} target A relative path from `current` to reach
 * @returns {string} A resolved absolute path to the target
 */
export const resolve = (current, target) => new URL(target, current).pathname;
