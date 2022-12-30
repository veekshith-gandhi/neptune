export const apiErrorParser = (err: any) => {
	const errData = err?.response?.data?.error;

	try {
		if (errData?.detail) {
			return errData?.detail;
		}

		if (errData) {
			return errData[Object.keys(errData)[0]]?.[0] || "Something went wrong";
		} else {
			return "Something went wrong";
		}
	} catch (error) {
		return "Something went wrong";
	}
};
