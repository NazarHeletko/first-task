import _ from "lodash";

export const checkPermissions = (userPermissions, neededPermissions, requireAll = true)=> {
    if (!neededPermissions.length) {
        // there are no permission to be needed
        // only auth is required
        return true;
    }

    let hit = false;

    for (let i = 0; i < neededPermissions.length; i++) {
        const p = neededPermissions[i];
        if (!_.includes(userPermissions, p)) {
            if (requireAll) {
                return false;
            }
        } else {
            hit = true;
        }
    }

    if (!hit) {
        return false;
    }

    return true;
}
