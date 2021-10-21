import { request } from "./http";
// import { saveState } from "@lib/localStorage";

export async function getToken() {
    // return loadState("user-access-token")
};

// auth
export async function login(userData) {
    try {
        const response = await request('post', `/auth/login`, {}, userData);
        
        if (response.success) {
            const { data, success } = response;
            saveState('user-data', data.user);
            saveState("user-access-token", data.token.access_token);

            return {
                user: data.user,
                token_access: data.token.access_token,
                success
            }
        }
    } catch (err) {
        return err.response.data
    }
};

export async function register(userData) {
    try {
        const response = await request('post', `/auth/register`, {}, userData);
        if (response.success) return response     
        
    } catch (err) {
        return err.response.data
    }
};

export async function logout() {
    try {
        const response = await request('get', `/auth/logout`, {}, userData);
        
        if (response.success) {
            const { data, success } = response;
            saveState('user-data', data.user);
            saveState("user-access-token", data.token.access_token);

            return {
                user: data.user,
                token_access: data.token.access_token,
                success
            }
        }
    } catch (err) {
        return err.response.data
    }
};

// task
export async function load_tasks() {
    try {
        const response = await request('get', "/task/getTasks", {});
        if (response.success) return response  
        
    } catch (err) {
        console.log('Operation failed', err);
        return false;
    }
};

export async function load_single_task(task_id) {
    try {
        const response = await request('get', `/task/getTask/${task_id}`, {});
        if (response.success) return response  
        
    } catch (err) {
        console.log('Operation failed', err);
        return false;
    }
};

export async function add_task(data) {
    try {
        const response = await request('post', `/task/addTask`, {}, data);
        if (response.success) return response  
        
    } catch (err) {
        console.log('Operation failed', err);
        return false;
    }
};

export async function edit_task(task_id, data) {
    try {
        const response = await request('put', `/task/editTask/${task_id}`, {}, data);
        if (response.success) return response  
        
    } catch (err) {
        console.log('Operation failed', err);
        return false;
    }
};

export async function delete_task(task_id) {
    try {
        const response = await request('delete', `/task/deleteTask/${task_id}`, {});
        if (response.success) return response  
        
    } catch (err) {
        console.log('Operation failed', err);
        return false;
    }
};

// profile
export async function load_profile() {
    try {
        const response = await request('get', "/profile/getData", {});
        if (response.success) return response  
        
    } catch (err) {
        console.log('Operation failed', err);
        return false;
    }
};

export async function edit_profile(user_id, data) {
    try {
        const response = await request('put', `/profile/editProfile/${user_id}`, {}, data);
        if (response.success) return response  
        
    } catch (err) {
        console.log('Operation failed', err);
        return false;
    }
};

// push notifications
export async function enable_push_notifs(user_id, data) {
    try {
        const response = await request('put', `/notification/enablePushNotif/${user_id}`, {}, data);
        if (response.success) return response  
        
    } catch (err) {
        console.log('Operation failed', err);
        return false;
    }
};

export async function disable_push_notifs(user_id, data) {
    try {
        const response = await request('put', `/notification/disablePushNotif/${user_id}`, {}, data);
        if (response.success) return response  
        
    } catch (err) {
        console.log('Operation failed', err);
        return false;
    }
};

// filter
export async function filter(filter) {
    try {
        const response = await request('get', `/task/filter/${filter}`, {});
        if (response.success) return response  
        
    } catch (err) {
        console.log('Operation failed', err);
        return false;
    }
};
