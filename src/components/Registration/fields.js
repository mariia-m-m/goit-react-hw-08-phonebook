const fields = {
    name: {
        type: "text",
        name: "name",
        required: true,
        label: "User name",
        placeholder:"Enter your name"
        
    },
    email: {
        type: "email",
        name: "email",
        required: true,
        label: "Email",
        placeholder:"Email"
        
    },
    password: {
        type: "password",
        name: "password",
        required: true,
        label: "Password",
        placeholder:"Password"
        
    }
}

export default fields;