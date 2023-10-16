export const updateSearchParams = (type: string, value: string) => {
	const searchParams = new URLSearchParams(window.location.search);

	if (value === "") {
		searchParams.delete(type);
	}
	{
		searchParams.set(type, value);
	}

	return `${window.location.pathname}?${searchParams.toString()}`;
};
