import * as yup from 'yup';

// Auth
export const loginSchema = yup.object().shape({
    email: yup.string().email("Enter a valid Email").required("Email required"),
    password: yup.string().required("Password required")
});

export const registerSchema = yup.object().shape({  
    fullName: yup.string().required('Full Name required'),
    email: yup.string().email("Enter valid Email").required("Email required"),
    password: yup.string().required("Password is required").min(8, 'Password length must be at least 8 characters long'),
    isChecked: yup.boolean().oneOf([true], 'Conditions must be checked to sign up')
});
    // phone: yup.string().length(10, 'Enter a valid phone number').required('phone number required'),
    // isChecked: yup.boolean().oneOf([true], 'Conditions must be checked to sign up')

export const forgotPasswordSchema = yup.object().shape({
    email: yup.string().email("Enter valid Email").required("Email required")
});

// /* Profile */
export const resetPasswordSchema = yup.object().shape({
    new_password: yup.string()
                    .required('New Password required')
                    .min(8, 'New Password length must be at least 8 characters long'),                    
    password: yup.string()
                    .required('Password required')                  
});

export const editProfileSchema = yup.object().shape({
    // avatar: yup.string().required('Avatar is required'),
    phone: yup.string(),                
    email: yup.string().email("Enter valid Email").required("Email required"),
    fullName: yup.string().required("Full Name required"),
    address: yup.string(),    
    username: yup.string(),    
});

/* Task */
// export const taskSchema = yup.object().shape({
//     phone: yup.string().length(10, 'Enter a valid phone number').required('phone number required'),                
//     email: yup.string().email("Enter valid Email").required("Email required"),
//     full_name: yup.string().required("Full Name required"),
// });