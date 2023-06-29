const Login = {
	type: "object",
	properties: {
		email: {
			type: "string",
			example: "carlosfelipe@outlook.com"
		},
		password: {
			type: "string",
			example: "12345678Asdf"
		}
	}
};

export default Login